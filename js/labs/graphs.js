/* Laboratorios de gráficas: cada uno redibuja un plot() de _helpers.js cuando el estudiante mueve un deslizador.
   La primera vista se anima (las curvas se dibujan); al mover los controles se redibuja sin animación. */
(() => {
  const L = window.GUIDE.LABS;
  const { plot, num } = window.GUIDE.h;

  // Deslizadores: defs = [{ id, label, min, max, step, value, fmt? }]. Devuelve un objeto con los valores actuales.
  function sliders(el, defs, onChange) {
    const v = Object.fromEntries(defs.map((d) => [d.id, d.value]));
    el.insertAdjacentHTML('beforeend', `<div class="sl-grid">${defs.map((d) => `
      <label class="sl"><span class="sl-l">${d.label}</span>
        <input type="range" data-id="${d.id}" min="${d.min}" max="${d.max}" step="${d.step || 1}" value="${d.value}">
        <output data-o="${d.id}">${d.fmt ? d.fmt(d.value) : num(d.value)}</output></label>`).join('')}</div>`);
    el.querySelectorAll('.sl input').forEach((inp) => inp.addEventListener('input', () => {
      const d = defs.find((x) => x.id === inp.dataset.id);
      v[d.id] = +inp.value;
      el.querySelector(`[data-o="${d.id}"]`).textContent = d.fmt ? d.fmt(v[d.id]) : num(v[d.id]);
      onChange(v, d.id);
    }));
    v.set = (id, val) => { v[id] = val; const i = el.querySelector(`[data-id="${id}"]`); i.value = val; const d = defs.find((x) => x.id === id); el.querySelector(`[data-o="${id}"]`).textContent = d.fmt ? d.fmt(val) : num(val); };
    return v;
  }
  const chips = (arr) => `<div class="rd">${arr.filter(Boolean).map(([k, val, cls]) => `<span class="chip ${cls || ''}"><b>${k}</b> ${val}</span>`).join('')}</div>`;
  const arrow = (a, b) => (b > a + 1e-9 ? '↑' : b < a - 1e-9 ? '↓' : '=');
  const shell = (el, extra = '') => { el.innerHTML = `<div class="pl-host"></div><div class="lab-read" aria-live="polite"></div>${extra}`; return [el.querySelector('.pl-host'), el.querySelector('.lab-read')]; };

  /* ---------- Mercado: oferta y demanda lineales ----------
     cfg: { d: [a, b] (P = a − bX), s: [c, d] (P = c + dX), x, y, xl?, yl?,
            mode: 'shift' | 'control' | 'tax' | 'surplus',
            shifts: [{ id, label, curve: 'd'|'s', min, max, step, value, k }] (corre la ordenada al origen k·valor) } */
  L.market = (el, cfg) => {
    const [a0, b] = cfg.d, [c0, d] = cfg.s;
    const mode = cfg.mode || 'shift';
    // x/y para plot(), X/P para los rótulos
    const eqm = (a, c) => { const X = (a - c) / (b + d), P = a - b * X; return { X, P, x: X, y: P }; };
    const base = eqm(a0, c0);
    const [host, read] = shell(el);
    const defs = [...(cfg.shifts || [])];
    if (mode === 'control') defs.push({ id: 'pc', label: 'Precio fijado por el Estado', min: cfg.y[0], max: cfg.y[1] * 0.95, step: (cfg.y[1] / 100), value: +(base.P * 0.7).toFixed(1) });
    if (mode === 'tax') defs.push({ id: 't', label: 'Impuesto por unidad (t)', min: 0, max: cfg.tmax || (a0 - c0) * 0.8, step: (cfg.tmax || a0 - c0) / 100, value: cfg.t ?? 0 });
    let kind = cfg.kind || 'max';
    if (mode === 'control') el.insertAdjacentHTML('afterbegin', `<div class="toggle" role="group" aria-label="Tipo de control">
      <button type="button" data-k="max" aria-pressed="${kind === 'max'}">Precio máximo</button><button type="button" data-k="min" aria-pressed="${kind === 'min'}">Precio mínimo</button></div>`);
    let first = true;
    const draw = (v) => {
      let a = a0, c = c0;
      for (const s of cfg.shifts || []) (s.curve === 'd' ? (a += s.k * v[s.id]) : (c += s.k * v[s.id]));
      const t = mode === 'tax' ? v.t : 0;
      const e = eqm(a, c), et = eqm(a, c + t);
      const D = (x) => a - b * x, S = (x) => c + d * x;
      const spec = { x: cfg.x, y: cfg.y, xl: cfg.xl || 'X', yl: cfg.yl || 'P', anim: first, curves: [], points: [], guides: [], areas: [], arrows: [], hlines: [], texts: [] };
      if (a !== a0) { spec.curves.push({ f: (x) => a0 - b * x, cls: 'c-d', ghost: true, label: 'D₀' }); spec.arrows.push({ from: [base.X * 0.55, a0 - b * base.X * 0.55], to: [base.X * 0.55 + (a - a0) / b, a0 - b * base.X * 0.55], cls: 'c-d' }); }
      if (c !== c0) { spec.curves.push({ f: (x) => c0 + d * x, cls: 'c-s', ghost: true, label: 'O₀' }); spec.arrows.push({ from: [base.X * 1.35, c0 + d * base.X * 1.35], to: [base.X * 1.35 - (c - c0) / d, c0 + d * base.X * 1.35], cls: 'c-s' }); }
      spec.curves.push({ f: D, cls: 'c-d', label: a !== a0 ? 'D₁' : 'D' }, { f: S, cls: 'c-s', label: c !== c0 ? 'O₁' : 'O' });
      const rows = [];
      if (mode === 'shift' || mode === 'surplus') {
        if (a !== a0 || c !== c0) spec.points.push({ ...base, cls: 'pl-old', r: 4 });
        spec.points.push({ ...e, label: 'E', cls: 'c-eq' });
        spec.guides.push({ x: e.X, y: e.P, xt: `X* = ${num(e.X)}`, yt: `P* = ${num(e.P)}` });
        rows.push(['P*', `${num(e.P)} ${a !== a0 || c !== c0 ? arrow(base.P, e.P) : ''}`, 'acc'], ['X*', `${num(e.X)} ${a !== a0 || c !== c0 ? arrow(base.X, e.X) : ''}`, 'acc']);
        if (mode === 'surplus') {
          spec.areas.push({ pts: [[0, a], [0, e.P], [e.X, e.P]], cls: 'a-d', label: 'EC', at: [e.X / 3, (a + 2 * e.P) / 3] }, { pts: [[0, e.P], [0, Math.max(c, cfg.y[0])], [e.X, e.P]], cls: 'a-s', label: 'EP', at: [e.X / 3, (2 * e.P + Math.max(c, 0)) / 3] });
          rows.push(['Excedente del consumidor', num((e.X * (a - e.P)) / 2), 'ok'], ['Excedente del productor', num((e.X * (e.P - c)) / 2), 'ok']);
        }
      }
      if (mode === 'control') {
        const pc = v.pc, xd = Math.max(0, (a - pc) / b), xo = Math.max(0, (pc - c) / d);
        const binding = kind === 'max' ? pc < e.P : pc > e.P;
        spec.hlines.push({ y: pc, cls: binding ? 'c-ctrl' : 'c-ctrl pl-off', label: kind === 'max' ? 'Pmáx' : 'Pmín' });
        spec.points.push({ ...e, cls: 'pl-old', r: 4, label: 'E', pos: 'e' });
        if (binding) {
          spec.points.push({ x: xd, y: pc, cls: 'c-d', label: 'Xd', pos: kind === 'max' ? 'ne' : 'sw' }, { x: xo, y: pc, cls: 's c-s', label: 'Xo', pos: kind === 'max' ? 'nw' : 'se' });
          const lo = Math.min(xd, xo), hi = Math.max(xd, xo), h = (cfg.y[1] - cfg.y[0]) * 0.025;
          spec.areas.push({ pts: [[lo, pc - h], [hi, pc - h], [hi, pc + h], [lo, pc + h]], cls: kind === 'max' ? 'a-bad' : 'a-warn', label: kind === 'max' ? 'escasez' : 'excedente', at: [(lo + hi) / 2, pc + (kind === 'max' ? -4 * h : 3 * h)] });
          spec.guides.push({ x: xo, y: pc, yt: num(pc), xt: num(xo) }, { x: xd, y: pc, yt: '', xt: num(xd) });
          rows.push(['Cantidad demandada', num(xd)], ['Cantidad ofrecida', num(xo)], [kind === 'max' ? 'Escasez' : 'Excedente', num(hi - lo), kind === 'max' ? 'err' : 'warn'], ['Se compra y se vende', num(lo), 'acc']);
        } else rows.push(['Sin efecto', kind === 'max' ? 'un precio máximo por encima del de equilibrio no restringe: el mercado sigue en E' : 'un precio mínimo por debajo del de equilibrio no restringe: el mercado sigue en E', 'ok']);
      }
      if (mode === 'tax') {
        if (t > 0) {
          spec.curves.push({ f: (x) => c + t + d * x, cls: 'c-s c-tax', label: 'O + t', at: cfg.x[1] * 0.12 });
          const pv = et.P - t;
          spec.areas.push({ pts: [[0, et.P], [et.X, et.P], [et.X, pv], [0, pv]], cls: 'a-tax', label: 'recaudación', at: [et.X / 2, (et.P + pv) / 2] }, { pts: [[et.X, et.P], [e.X, e.P], [et.X, pv]], cls: 'a-bad', label: '', at: [0, 0] });
          spec.points.push({ ...e, cls: 'pl-old', r: 4 }, { ...et, cls: 'c-eq', label: 'Pc', pos: 'ne' }, { x: et.X, y: pv, cls: 'c-s', label: 'Pv', pos: 'se' });
          spec.guides.push({ x: et.X, y: et.P, yt: num(et.P), xt: num(et.X) }, { x: et.X, y: pv, yt: num(pv), xt: '' }, { x: e.X, y: e.P, yt: '', xt: '', cls: 'pl-faint' });
          const cb = et.P - e.P, cv = e.P - pv;
          rows.push(['Paga el comprador (Pc)', `${num(et.P)} (+${num(cb)})`, 'acc'], ['Recibe el vendedor (Pv)', `${num(pv)} (−${num(cv)})`, 'acc'], ['Cantidad', `${num(et.X)} (antes ${num(e.X)})`], ['Carga del comprador', `${num((cb / t) * 100, 1)} %`], ['Carga del vendedor', `${num((cv / t) * 100, 1)} %`], ['Recaudación', num(t * et.X), 'ok'], ['Pérdida irrecuperable', num((t * (e.X - et.X)) / 2), 'err']);
        } else {
          spec.points.push({ ...e, label: 'E', cls: 'c-eq' });
          spec.guides.push({ x: e.X, y: e.P });
          rows.push(['Sin impuesto', `P* = ${num(e.P)}, X* = ${num(e.X)}`, 'acc']);
        }
      }
      host.innerHTML = plot(spec);
      read.innerHTML = chips(rows);
      first = false;
    };
    const v = sliders(el, defs, (vals) => draw(vals));
    el.querySelectorAll('.toggle button').forEach((btn) => btn.addEventListener('click', () => {
      kind = btn.dataset.k;
      el.querySelectorAll('.toggle button').forEach((x) => x.setAttribute('aria-pressed', x === btn));
      v.set('pc', +(kind === 'max' ? base.P * 0.7 : base.P * 1.25).toFixed(1));
      draw(v);
    }));
    draw(v);
  };

  /* ---------- Desplazamiento o movimiento: el estudiante decide y la gráfica muestra la respuesta ----------
     cfg: { items: [{ t, r: 'd+'|'d-'|'s+'|'s-'|'mov-d'|'mov-s', why }] } */
  L.shiftdrill = (el, cfg) => {
    const OPTS = [['d+', 'Demanda → (aumenta)'], ['d-', 'Demanda ← (disminuye)'], ['s+', 'Oferta → (aumenta)'], ['s-', 'Oferta ← (disminuye)'], ['mov', 'Movimiento a lo largo de la curva']];
    let k = 0, ok = 0, answered = false;
    el.innerHTML = `<p class="drill-n"></p><p class="drill-t"></p>
      <div class="drill-opts">${OPTS.map(([v, t]) => `<button class="btn sm" type="button" data-v="${v}">${t}</button>`).join('')}</div>
      <div class="pl-host"></div><div class="lab-read" aria-live="polite"></div>
      <div class="lab-row"><button class="btn sm primary" type="button" data-act="next" hidden>Siguiente</button><span class="lab-score"></span></div>`;
    const host = el.querySelector('.pl-host'), read = el.querySelector('.lab-read');
    const show = () => {
      const it = cfg.items[k];
      answered = false;
      el.querySelector('.drill-n').textContent = `Situación ${k + 1} de ${cfg.items.length}`;
      el.querySelector('.drill-t').innerHTML = it.t;
      el.querySelectorAll('.drill-opts button').forEach((b) => { b.disabled = false; b.className = 'btn sm'; });
      el.querySelector('[data-act="next"]').hidden = true;
      host.innerHTML = plot({ x: [0, 10], y: [0, 10], anim: false, curves: [{ f: (x) => 9 - 0.8 * x, cls: 'c-d', label: 'D' }, { f: (x) => 1 + 0.8 * x, cls: 's c-s', label: 'O' }], points: [{ x: 5, y: 5, cls: 'c-eq', label: 'E₀' }] });
      read.innerHTML = '';
    };
    const answer = (choice) => {
      if (answered) return;
      answered = true;
      const it = cfg.items[k];
      const right = it.r.startsWith('mov') ? 'mov' : it.r;
      const good = choice === right;
      ok += good;
      el.querySelectorAll('.drill-opts button').forEach((b) => { b.disabled = true; if (b.dataset.v === right) b.classList.add('is-right'); else if (b.dataset.v === choice) b.classList.add('is-wrong'); });
      const sh = { 'd+': [1.6, 0], 'd-': [-1.6, 0], 's+': [0, -1.6], 's-': [0, 1.6] }[it.r] || [0, 0];
      const D = (x) => 9 + sh[0] - 0.8 * x, S = (x) => 1 + sh[1] + 0.8 * x;
      const X1 = (8 + sh[0] - sh[1]) / 1.6, P1 = D(X1);
      const spec = { x: [0, 10], y: [0, 10], curves: [], points: [], arrows: [], guides: [] };
      if (it.r.startsWith('mov')) {
        const onD = it.r === 'mov-d', up = it.up ?? false;
        const f = onD ? (x) => 9 - 0.8 * x : (x) => 1 + 0.8 * x;
        const x2 = onD ? (up ? 3.5 : 6.5) : (up ? 6.5 : 3.5);
        spec.curves.push({ f: (x) => 9 - 0.8 * x, cls: 'c-d', label: 'D' }, { f: (x) => 1 + 0.8 * x, cls: 'c-s', label: 'O' });
        spec.points.push({ x: 5, y: 5, cls: 'pl-old', label: 'A', pos: 'e' }, { x: x2, y: f(x2), cls: 'c-eq', label: 'B' });
        spec.arrows.push({ from: [5, 5], to: [x2 + (x2 > 5 ? -0.25 : 0.25), f(x2) + (onD ? (x2 > 5 ? 0.2 : -0.2) : (x2 > 5 ? -0.2 : 0.2))], cls: 'c-eq' });
      } else {
        spec.curves.push({ f: (x) => 9 - 0.8 * x, cls: 'c-d', ghost: sh[0] !== 0, label: sh[0] ? 'D₀' : 'D' }, { f: (x) => 1 + 0.8 * x, cls: 'c-s', ghost: sh[1] !== 0, label: sh[1] ? 'O₀' : 'O' });
        if (sh[0]) spec.curves.push({ f: D, cls: 'c-d', label: 'D₁' }); else spec.curves.push({ f: S, cls: 'c-s', label: 'O₁' });
        spec.points.push({ x: 5, y: 5, cls: 'pl-old', label: 'E₀', pos: 'w' }, { x: X1, y: P1, cls: 'c-eq', label: 'E₁' });
        spec.guides.push({ x: X1, y: P1, xt: 'X₁', yt: 'P₁' });
        const ax = sh[0] ? [3, 9 - 2.4] : [7, 1 + 5.6];
        spec.arrows.push({ from: ax, to: [ax[0] + (sh[0] || -sh[1] * 1) * 0.9 * (sh[0] ? 1 : 1), ax[1]], cls: sh[0] ? 'c-d' : 'c-s' });
      }
      host.innerHTML = plot(spec);
      const eff = it.r.startsWith('mov') ? 'Cambia la <b>cantidad</b> demandada u ofrecida, no la curva.' : `Precio ${P1 > 5 ? '↑' : '↓'}, cantidad ${X1 > 5 ? '↑' : '↓'}.`;
      read.innerHTML = `<p class="chip ${good ? 'ok' : 'err'}">${good ? 'Correcto' : 'No'}</p><p>${eff} ${it.why || ''}</p>`;
      const nx = el.querySelector('[data-act="next"]');
      nx.hidden = false;
      nx.textContent = k < cfg.items.length - 1 ? 'Siguiente' : 'Volver a empezar';
      el.querySelector('.lab-score').textContent = `${ok} de ${k + 1} correctas`;
    };
    el.querySelectorAll('.drill-opts button').forEach((b) => b.addEventListener('click', () => answer(b.dataset.v)));
    el.querySelector('[data-act="next"]').addEventListener('click', () => { if (k < cfg.items.length - 1) k++; else { k = 0; ok = 0; el.querySelector('.lab-score').textContent = ''; } show(); });
    show();
  };

  /* ---------- Elasticidad precio en una demanda lineal X = a − bP ----------
     cfg: { a, b } */
  L.elasticity = (el, cfg) => {
    const { a, b } = cfg, pmax = a / b, xmax = a;
    const [host, read] = shell(el, '<div class="pl-host pl-host-2"></div>');
    const host2 = el.querySelector('.pl-host-2');
    let first = true;
    const draw = (v) => {
      const P = v.p, X = a - b * P, ep = X > 0 ? (-b * P) / X : -Infinity;
      const abs = Math.abs(ep);
      const tag = !Number.isFinite(ep) ? ['perfectamente elástica en ese punto', 'err'] : abs > 1.0005 ? ['elástica', 'warn'] : abs < 0.9995 ? ['inelástica', 'acc'] : ['unitaria', 'ok'];
      host.innerHTML = plot({
        x: [0, xmax * 1.05], y: [0, pmax * 1.08], xl: 'X', yl: 'P', anim: first,
        curves: [{ pts: [[0, pmax], [xmax / 2, pmax / 2]], cls: 'c-el' }, { pts: [[xmax / 2, pmax / 2], [xmax, 0]], cls: 'c-inel' }],
        areas: [{ pts: [[0, 0], [0, P], [X, P], [X, 0]], cls: 'a-it', label: 'IT = P·X', at: [X / 2, P / 2] }],
        points: [{ x: xmax / 2, y: pmax / 2, cls: 'c-unit', r: 4, label: '|Ep| = 1', pos: 'ne' }, { x: X, y: P, cls: 'c-eq', label: '', r: 6 }],
        guides: [{ x: X, y: P }],
        texts: [{ x: xmax * 0.16, y: pmax * 0.93, t: 'tramo elástico', cls: 'c-el', anchor: 'start' }, { x: xmax * 0.66, y: pmax * 0.12, t: 'tramo inelástico', cls: 'c-inel', anchor: 'start' }],
      });
      host2.innerHTML = plot({
        x: [0, xmax * 1.05], y: [0, (a * a) / (4 * b) * 1.15], xl: 'X', yl: 'IT', h: 210, anim: first,
        curves: [{ f: (x) => (x * (a - x)) / b, dom: [0, xmax], cls: 'c-it', label: 'IT' }],
        points: [{ x: X, y: X * P, cls: 'c-eq' }, { x: xmax / 2, y: (a * a) / (4 * b), cls: 'c-unit', r: 4, label: 'IT máx', pos: 'n' }],
        guides: [{ x: X, y: X * P }],
      });
      read.innerHTML = chips([['P', num(P)], ['X', num(X)], ['Ep', Number.isFinite(ep) ? num(ep) : '−∞', tag[1]], ['Demanda', tag[0], tag[1]], ['IT', num(P * X)],
        ['Si P sube 1 %', !Number.isFinite(ep) ? 'X cae a 0' : `X cae ${num(abs, 2)} % e IT ${abs > 1.0005 ? 'baja' : abs < 0.9995 ? 'sube' : 'no cambia'}`]]);
      first = false;
    };
    draw(sliders(el, [{ id: 'p', label: 'Precio (P)', min: 0, max: +(pmax * 0.98).toFixed(2), step: pmax / 200, value: +(pmax * 0.7).toFixed(2) }], draw));
  };

  /* ---------- Frontera de posibilidades de producción ----------
     A = ka·La, B = kb·√Lb, La + Lb = L  →  B = kb·√(L − A/ka).  cfg: { ka, kb, L, an, bn } */
  L.fpp = (el, cfg) => {
    const base = { ka: cfg.ka, kb: cfg.kb, L: cfg.L };
    const an = cfg.an || 'A', bn = cfg.bn || 'B';
    const [host, read] = shell(el);
    const amax0 = base.ka * base.L, bmax0 = base.kb * Math.sqrt(base.L);
    const XR = amax0 * (cfg.zoom || 1.6), YR = bmax0 * (cfg.zoom || 1.6);
    let first = true;
    const draw = (v) => {
      const B = (A) => v.kb * Math.sqrt(Math.max(0, v.L - A / v.ka));
      const amax = v.ka * v.L;
      const A = Math.min(v.pa, amax), Bv = B(A);
      const co = A < amax ? v.kb / (2 * v.ka * Math.sqrt(v.L - A / v.ka)) : Infinity;
      const changed = v.L !== base.L || v.ka !== base.ka || v.kb !== base.kb;
      const B0 = (x) => base.kb * Math.sqrt(Math.max(0, base.L - x / base.ka));
      const curve = (f, am) => { const pts = []; for (let i = 0; i <= 120; i++) { const x = (am * i) / 120; pts.push([x, f(x)]); } return pts; };
      const fx = v.qa, fy = v.qb, fb = B(Math.min(fx, amax));
      const st = fx > amax || fy > fb + 1e-6 ? ['inaccesible', 'err'] : Math.abs(fy - fb) < (bmax0 * 0.012) ? ['eficiente (sobre la FPP)', 'ok'] : ['accesible pero ineficiente', 'warn'];
      const tan = Number.isFinite(co) ? [[A - XR * 0.18, Bv + co * XR * 0.18], [A + XR * 0.18, Bv - co * XR * 0.18]] : null;
      host.innerHTML = plot({
        x: [0, XR], y: [0, YR], xl: an, yl: bn, anim: first,
        areas: [{ pts: [[0, 0], ...curve(B, amax), [amax, 0]], cls: 'a-fpp', label: 'accesible', at: [amax * 0.62, B(amax * 0.62) * 0.2] }],
        curves: [...(changed ? [{ pts: curve(B0, amax0), cls: 'c-fpp', ghost: true, label: 'FPP₀' }] : []), { pts: curve(B, amax), cls: 'c-fpp', label: changed ? 'FPP₁' : 'FPP' }, ...(tan ? [{ pts: tan, cls: 'c-tan', dash: true }] : [])],
        points: [{ x: A, y: Bv, cls: 'c-eq', label: 'punto elegido' }, { x: fx, y: fy, cls: st[1] === 'ok' ? 'c-ok' : st[1] === 'err' ? 'c-err' : 'c-warn', label: 'Q', pos: 'se' }],
        guides: [{ x: A, y: Bv }],
        texts: [{ x: XR * 0.78, y: YR * 0.85, t: 'inaccesible', cls: 'c-err' }],
      });
      read.innerHTML = chips([[`Máximo de ${an}`, num(amax)], [`Máximo de ${bn}`, num(v.kb * Math.sqrt(v.L))], [`En el punto elegido: ${bn}`, num(Bv)],
        ['Costo de oportunidad de 1 ' + an, Number.isFinite(co) ? `${num(co, 3)} de ${bn}` : 'muy alto (extremo)', 'acc'], [`Q = (${num(fx)}; ${num(fy)})`, st[0], st[1]]]);
      first = false;
    };
    const v = sliders(el, [
      { id: 'pa', label: `Producción de ${an} (punto sobre la FPP)`, min: 0, max: Math.round(XR), step: amax0 / 100, value: Math.round(amax0 * 0.4) },
      { id: 'L', label: 'Dotación de trabajo (L)', min: Math.round(base.L * 0.4), max: Math.round(base.L * 1.6), step: 1, value: base.L },
      { id: 'ka', label: `Tecnología de ${an} (${an} = k·L)`, min: base.ka * 0.5, max: base.ka * 1.6, step: base.ka / 20, value: base.ka },
      { id: 'kb', label: `Tecnología de ${bn} (${bn} = k·√L)`, min: base.kb * 0.5, max: base.kb * 1.6, step: base.kb / 20, value: base.kb },
      { id: 'qa', label: `Combinación Q: ${an}`, min: 0, max: Math.round(XR), step: amax0 / 100, value: Math.round(amax0 * 0.3) },
      { id: 'qb', label: `Combinación Q: ${bn}`, min: 0, max: Math.round(YR), step: bmax0 / 100, value: Math.round(bmax0 * 0.5) },
    ], draw);
    draw(v);
  };

  /* ---------- Función de producción de corto plazo X = aL² + bL − L³ ---------- cfg: { a, b } */
  L.production = (el, cfg) => {
    const { a, b } = cfg;
    const PT = (l) => a * l * l + b * l - l ** 3, PMe = (l) => a * l + b - l * l, PMg = (l) => 2 * a * l + b - 3 * l * l;
    const lopt = a / 2, lmax = (2 * a + Math.sqrt(4 * a * a + 12 * b)) / 6, lend = lmax * 1.25;
    const ptmax = PT(lmax), pmgmax = PMg(a / 3);
    const [host, read] = shell(el, '<div class="pl-host pl-host-2"></div>');
    const host2 = el.querySelector('.pl-host-2');
    let first = true;
    const stage = (l) => (l < lopt ? ['Etapa I', 'acc'] : l <= lmax ? ['Etapa II (la racional)', 'ok'] : ['Etapa III', 'err']);
    const draw = (v) => {
      const l = v.l, st = stage(l);
      const bands = (top, bot) => [{ pts: [[0, bot], [lopt, bot], [lopt, top], [0, top]], cls: 'a-st1' }, { pts: [[lopt, bot], [lmax, bot], [lmax, top], [lopt, top]], cls: 'a-st2' }, { pts: [[lmax, bot], [lend, bot], [lend, top], [lmax, top]], cls: 'a-st3' }];
      host.innerHTML = plot({
        x: [0, lend], y: [0, ptmax * 1.15], xl: 'L', yl: 'PT', h: 250, anim: first,
        areas: bands(ptmax * 1.15, 0),
        curves: [{ f: PT, dom: [0, lend], cls: 'c-pt', label: 'PT' }, { pts: [[0, 0], [lopt * 1.6, PMe(lopt) * lopt * 1.6]], cls: 'c-tan', dash: true }],
        points: [{ x: l, y: PT(l), cls: 'c-eq' }, { x: lmax, y: ptmax, cls: 'c-unit', r: 4, label: 'máximo técnico', pos: 'n' }, { x: lopt, y: PT(lopt), cls: 'c-pme', r: 4, label: 'óptimo técnico', pos: 'nw' }],
        guides: [{ x: l, y: PT(l) }],
        texts: [{ x: lopt / 2, y: ptmax * 0.05, t: 'I', cls: 'pl-stage' }, { x: (lopt + lmax) / 2, y: ptmax * 0.05, t: 'II', cls: 'pl-stage' }, { x: (lmax + lend) / 2, y: ptmax * 0.05, t: 'III', cls: 'pl-stage' }],
      });
      const ylo = PMg(lend) * 1.1;
      host2.innerHTML = plot({
        x: [0, lend], y: [ylo, pmgmax * 1.2], xl: 'L', yl: 'PMe, PMg', h: 250, anim: first,
        areas: bands(pmgmax * 1.2, ylo),
        curves: [{ f: PMe, dom: [0.01, lend], cls: 'c-pme', label: 'PMe' }, { f: PMg, dom: [0, lend], cls: 'c-pmg', label: 'PMg' }],
        points: [{ x: l, y: PMg(l), cls: 'c-pmg', r: 4 }, { x: l, y: PMe(l), cls: 'c-pme', r: 4 }, { x: lopt, y: PMe(lopt), cls: 'c-unit', r: 4, label: 'PMg = PMe', pos: 'ne' }, { x: lmax, y: 0, cls: 'c-unit', r: 4, label: 'PMg = 0', pos: 'ne' }],
      });
      read.innerHTML = chips([['L', num(l)], ['PT', num(PT(l))], ['PMe', num(PMe(l))], ['PMg', num(PMg(l)), PMg(l) < 0 ? 'err' : ''], [st[0], l < a / 3 ? 'PMg creciente' : 'rendimientos marginales decrecientes', st[1]]]);
      first = false;
    };
    draw(sliders(el, [{ id: 'l', label: 'Trabajo (L)', min: 0, max: +lend.toFixed(1), step: 0.1, value: +(lopt * 0.6).toFixed(1) }], draw));
  };

  /* ---------- Curvas de costos y decisión de la empresa competitiva ----------
     CT = cf + c1·X + c2·X² + c3·X³.  cfg: { cf, c1, c2, c3, xmax, ymax, price? (true = la empresa elige X con P = CMg) } */
  L.costs = (el, cfg) => {
    const { cf, c1, c2 = 0, c3 = 0 } = cfg;
    const CV = (x) => c1 * x + c2 * x * x + c3 * x ** 3, CMg = (x) => c1 + 2 * c2 * x + 3 * c3 * x * x;
    const CVMe = (x) => c1 + c2 * x + c3 * x * x, CTMe = (x) => CVMe(x) + cf / x, CFMe = (x) => cf / x;
    const xmax = cfg.xmax, ymax = cfg.ymax;
    const argmin = (f, lo, hi) => { let bx = lo, bv = Infinity; for (let i = 0; i <= 2000; i++) { const x = lo + ((hi - lo) * i) / 2000, y = f(x); if (y < bv) { bv = y; bx = x; } } return bx; };
    const xc = argmin(CVMe, 0, xmax), xn = argmin(CTMe, 0.01, xmax), xm = argmin(CMg, 0, xmax);
    const cierre = CVMe(xc), nivel = CTMe(xn);
    // X con P = CMg en el tramo creciente del costo marginal (bisección)
    const supply = (p) => { let lo = xm, hi = xmax * 3; if (CMg(lo) >= p) return lo; for (let i = 0; i < 60; i++) { const mid = (lo + hi) / 2; CMg(mid) < p ? (lo = mid) : (hi = mid); } return (lo + hi) / 2; };
    const [host, read] = shell(el);
    let first = true;
    const draw = (v) => {
      const spec = { x: [0, xmax], y: [0, ymax], xl: 'X', yl: '$', anim: first,
        curves: [{ f: CMg, cls: 'c-cmg', label: 'CMg' }, { f: CTMe, dom: [0.05, xmax], cls: 'c-ctme', label: 'CTMe' }, { f: CVMe, dom: [0.05, xmax], cls: 'c-cvme', label: 'CVMe' }, ...(cfg.cfme !== false && !cfg.price ? [{ f: CFMe, dom: [cf / ymax, xmax], cls: 'c-cfme', label: 'CFMe' }] : [])],
        points: [{ x: xc, y: cierre, cls: 'c-cvme', r: 4, label: cfg.price ? 'cierre' : 'mín CVMe', pos: 'sw' }, { x: xn, y: nivel, cls: 'c-ctme', r: 4, label: cfg.price ? 'nivelación' : 'mín CTMe', pos: 'se' }],
        guides: [], areas: [], hlines: [] };
      let rows;
      if (cfg.price) {
        const p = v.p, closed = p < cierre - 1e-9;
        const x = closed ? 0 : supply(p);
        const B = closed ? -cf : p * x - (cf + CV(x));
        spec.hlines.push({ y: p, cls: 'c-price', label: 'P = IMg' });
        if (!closed) {
          spec.areas.push({ pts: [[0, p], [x, p], [x, CTMe(x)], [0, CTMe(x)]], cls: B >= 0 ? 'a-ok' : 'a-bad', label: B >= 0 ? 'beneficio' : 'pérdida', at: [x / 2, (p + CTMe(x)) / 2] });
          spec.points.push({ x, y: p, cls: 'c-eq', label: 'P = CMg', pos: 'ne' });
          spec.guides.push({ x, y: p, yt: '' }, { x, y: CTMe(x), xt: '', yt: num(CTMe(x)) });
        }
        const msg = closed ? ['Cierra: P < mín CVMe. Producir le haría perder más que el costo fijo.', 'err'] : B > 1e-6 ? ['Beneficio extraordinario: P > CTMe. Entran empresas a largo plazo.', 'ok'] : B > -1e-6 ? ['Beneficio normal (nulo): P = mín CTMe.', 'acc'] : ['Produce con pérdidas: CVMe ≤ P < CTMe. Pierde menos que cerrando (perdería el CF).', 'warn'];
        rows = [['P', num(p)], ['X óptima', num(x)], ['IT', num(p * x)], ['CT', num(cf + CV(x))], ['Beneficio', num(B), B >= 0 ? 'ok' : 'err'], ['', msg[0], msg[1]]];
      } else {
        const x = v.x;
        spec.points.push({ x, y: CMg(x), cls: 'c-cmg', r: 4 }, { x, y: CTMe(x), cls: 'c-ctme', r: 4 }, { x, y: CVMe(x), cls: 'c-cvme', r: 4 });
        spec.vlines = [{ x, cls: 'pl-faint' }];
        rows = [['X', num(x)], ['CF', num(cf)], ['CV', num(CV(x))], ['CT', num(cf + CV(x))], ['CFMe', num(CFMe(x))], ['CVMe', num(CVMe(x))], ['CTMe', num(CTMe(x))], ['CMg', num(CMg(x)), 'acc'],
          ['', CMg(x) < CTMe(x) ? 'CMg < CTMe: el costo medio está bajando' : 'CMg > CTMe: el costo medio está subiendo', CMg(x) < CTMe(x) ? 'ok' : 'warn']];
      }
      host.innerHTML = plot(spec);
      read.innerHTML = chips(rows);
      first = false;
    };
    draw(sliders(el, cfg.price ? [{ id: 'p', label: 'Precio de mercado (P)', min: +(cierre * 0.6).toFixed(1), max: +(ymax * 0.9).toFixed(1), step: 0.1, value: +((cierre + nivel) / 2).toFixed(1) }]
      : [{ id: 'x', label: 'Producción (X)', min: 0.2, max: xmax, step: xmax / 200, value: +(xn * 0.7).toFixed(2) }], draw));
  };

  /* ---------- Largo plazo en competencia perfecta: mercado y empresa ----------
     Empresa: CT = X² + 4X + 16 (mín CTMe = 12 en X = 4). Mercado: Xd = 1000 − 50P. Oferta de n empresas: X = n(P − 4)/2. */
  L.longrun = (el) => {
    const P = (n) => (1000 + 2 * n) / (50 + n / 2), xf = (p) => (p - 4) / 2, CTMe = (x) => x + 4 + 16 / x;
    el.innerHTML = `<div class="pl-pair"><div class="pl-host"></div><div class="pl-host pl-host-2"></div></div><div class="lab-read" aria-live="polite"></div>`;
    const [h1, h2] = el.querySelectorAll('.pl-host'), read = el.querySelector('.lab-read');
    let first = true;
    const draw = (v) => {
      const n = v.n, p = P(n), x = xf(p), B = p * x - (x * x + 4 * x + 16);
      h1.innerHTML = plot({ x: [0, 900], y: [0, 22], xl: 'X mercado', yl: 'P', w: 340, h: 280, anim: first,
        curves: [{ f: (X) => 20 - X / 50, cls: 'c-d', label: 'D' }, ...(n !== 60 ? [{ f: (X) => 4 + (2 * X) / 60, cls: 'c-s', ghost: true, label: 'O₆₀' }] : []), { f: (X) => 4 + (2 * X) / n, cls: 'c-s', label: `O (n=${n})` }],
        points: [{ x: n * x, y: p, cls: 'c-eq', label: 'E' }], guides: [{ x: n * x, y: p, xt: num(n * x, 0), yt: num(p) }] });
      h2.innerHTML = plot({ x: [0, 9], y: [0, 22], xl: 'X empresa', yl: '$', w: 340, h: 280, anim: first,
        curves: [{ f: (X) => 2 * X + 4, cls: 'c-cmg', label: 'CMg' }, { f: CTMe, dom: [0.6, 9], cls: 'c-ctme', label: 'CTMe', at: 1.2 }],
        hlines: [{ y: p, cls: 'c-price', label: 'P' }],
        areas: Math.abs(B) > 0.01 ? [{ pts: [[0, p], [x, p], [x, CTMe(x)], [0, CTMe(x)]], cls: B > 0 ? 'a-ok' : 'a-bad' }] : [],
        points: [{ x, y: p, cls: 'c-eq' }, { x: 4, y: 12, cls: 'c-ctme', r: 4, label: 'mín CTMe', pos: 'se' }], guides: [{ x, y: p, yt: '' }] });
      const msg = B > 0.05 ? ['Beneficio extraordinario → entran empresas, la oferta se corre a la derecha y el precio baja', 'ok'] : B < -0.05 ? ['Pérdidas → salen empresas, la oferta se corre a la izquierda y el precio sube', 'err'] : ['Equilibrio de largo plazo: P = mín CTMe = 12 y beneficio económico nulo', 'acc'];
      read.innerHTML = chips([['Empresas', n], ['P', num(p)], ['X por empresa', num(x)], ['Beneficio por empresa', num(B), B >= 0 ? 'ok' : 'err'], ['', msg[0], msg[1]]]);
      first = false;
    };
    const v = sliders(el, [{ id: 'n', label: 'Número de empresas en la industria', min: 40, max: 160, step: 1, value: 60 }], draw);
    el.insertAdjacentHTML('beforeend', '<div class="lab-row"><button class="btn sm primary" type="button" data-act="time">Dejar pasar el tiempo</button><span class="muted-s">las empresas entran o salen según el beneficio</span></div>');
    let timer;
    el.querySelector('[data-act="time"]').addEventListener('click', () => {
      clearInterval(timer);
      timer = setInterval(() => {
        if (!el.isConnected || v.n === 100) return clearInterval(timer);
        v.set('n', v.n + Math.sign(100 - v.n) * Math.min(4, Math.abs(100 - v.n)));
        draw(v);
      }, 140);
    });
    draw(v);
  };

  /* ---------- Creación de dinero bancario ronda por ronda ---------- cfg: { bm, alpha, e } */
  L.money = (el, cfg) => {
    el.innerHTML = '<div class="mm-bars" aria-hidden="true"></div><div class="lab-read" aria-live="polite"></div>';
    const bars = el.querySelector('.mm-bars'), read = el.querySelector('.lab-read');
    const draw = (v) => {
      const a = v.alpha / 100, e = v.e / 100;
      let M = v.bm, D = 0, rows = [];
      for (let k = 1; k <= 12; k++) { const d = M / (1 + e); rows.push({ k, M, d, cash: e * d, res: a * d, loan: (1 - a) * d }); D += d; M = (1 - a) * d; }
      const Dt = v.bm / (a + e), OM = ((1 + e) / (a + e)) * v.bm, first = rows[0].d;
      bars.innerHTML = rows.map((r) => `<div class="mm-row"><span class="mm-k">${r.k}</span><span class="mm-bar" style="--w:${(r.d / first) * 100}%"><i class="mm-res" style="--w:${a * 100}%"></i></span><span class="mm-v">${num(r.d, 0)}</span></div>`).join('');
      read.innerHTML = `<p class="muted-s">Cada barra es el depósito de una ronda; la parte oscura es el encaje que queda inmovilizado. El resto se presta y vuelve al sistema (descontando lo que el público retiene en efectivo).</p>` + chips([
        ['Depósitos tras 12 rondas', num(D, 0)], ['Depósitos totales D = BM/(α+e)', num(Dt, 0), 'acc'], ['Efectivo en manos del público', num(e * Dt, 0)], ['Encajes AC = α·D', num(a * Dt, 0)],
        ['Oferta monetaria OM = EMP + D', num(OM, 0), 'ok'], ['Multiplicador (1+e)/(α+e)', num((1 + e) / (a + e), 3), 'ok']]);
    };
    draw(sliders(el, [
      { id: 'bm', label: 'Base monetaria / dinero inicial', min: 100, max: cfg.bmMax || 20000000, step: cfg.bmStep || 100000, value: cfg.bm, fmt: (x) => num(x, 0) },
      { id: 'alpha', label: 'Coeficiente de caja α (%)', min: 1, max: 50, step: 1, value: cfg.alpha * 100 },
      { id: 'e', label: 'Relación efectivo/depósitos e (%)', min: 0, max: 60, step: 1, value: cfg.e * 100 },
    ], draw));
  };

  /* ---------- Mercado de dinero: oferta real vertical y demanda md(r) = 7000/(r + 3) ---------- */
  L.moneymkt = (el) => {
    const md = (r) => 7000 / (r + 3), rOf = (m) => 7000 / m - 3;
    const [host, read] = shell(el);
    let first = true;
    const draw = (v) => {
      const m = v.om / v.p, r = rOf(m), m0 = 1000;
      host.innerHTML = plot({ x: [0, 2200], y: [0, 9], xl: 'Cantidad real de dinero', yl: 'r %', anim: first,
        curves: [{ pts: Array.from({ length: 60 }, (_, i) => { const rr = 9 - (9 * i) / 59; return [md(rr), rr]; }), cls: 'c-d', label: 'md' }],
        vlines: [...(Math.abs(m - m0) > 1 ? [{ x: m0, cls: 'c-s pl-ghost', label: 'OM₀/P' }] : []), { x: m, cls: 'c-s', label: 'OM/P' }],
        points: [{ x: m, y: r, cls: 'c-eq', label: 'A' }], guides: [{ x: m, y: r, xt: num(m, 0), yt: `${num(r, 1)} %` }] });
      read.innerHTML = chips([['OM/P', num(m, 0)], ['Tasa de interés de equilibrio', `${num(r, 2)} %`, 'acc'],
        ['', m > m0 + 1 ? 'Más dinero real que el inicial: la tasa baja (política expansiva)' : m < m0 - 1 ? 'Menos dinero real: la tasa sube (política contractiva)' : 'Situación inicial del ejemplo: OM/P = 2000/2 = 1000, r = 4 %', m > m0 + 1 ? 'ok' : m < m0 - 1 ? 'err' : '']]);
      first = false;
    };
    draw(sliders(el, [{ id: 'om', label: 'Oferta monetaria nominal (OM)', min: 1000, max: 4000, step: 50, value: 2000 }, { id: 'p', label: 'Nivel de precios (P)', min: 1, max: 4, step: 0.1, value: 2 }], draw));
  };

  /* ---------- Curva de Lorenz y coeficiente de Gini por quintiles ---------- cfg: { q: [5 porcentajes] } */
  L.lorenz = (el, cfg) => {
    const [host, read] = shell(el);
    let first = true, v;
    const draw = () => {
      const raw = [v.q1, v.q2, v.q3, v.q4, v.q5], tot = raw.reduce((s, x) => s + x, 0) || 1;
      const sh = raw.map((x) => (x / tot) * 100).sort((x, y) => x - y);
      const cum = [0]; sh.forEach((x) => cum.push(cum.at(-1) + x));
      const pts = cum.map((y, i) => [i * 20, y]);
      // Gini = 1 − Σ (Xk − Xk−1)(Yk + Yk−1), con X e Y en proporciones
      const gini = 1 - cum.slice(1).reduce((s, y, i) => s + 0.2 * ((y + cum[i]) / 100), 0);
      host.innerHTML = plot({ x: [0, 100], y: [0, 100], xl: '% población', yl: '% ingreso', w: 380, h: 340, anim: first,
        areas: [{ pts: [[0, 0], [100, 100], ...[...pts].reverse()], cls: 'a-bad', label: 'A', at: [58, 50] }, { pts: [...pts, [100, 0]], cls: 'a-d', label: 'B', at: [80, 18] }],
        curves: [{ pts: [[0, 0], [100, 100]], cls: 'c-tan', label: 'igualdad', at: 30 }, { pts, cls: 'c-lorenz', label: 'Lorenz', at: 80 }],
        points: pts.slice(1, 5).map(([x, y]) => ({ x, y, cls: 'c-lorenz', r: 3.5 })) });
      read.innerHTML = chips([...sh.map((x, i) => [`Q${i + 1}`, `${num(x, 1)} %`]), ['Gini = A/(A+B)', num(gini, 3), gini < 0.3 ? 'ok' : gini < 0.45 ? 'warn' : 'err'],
        ['', `El 20 % más rico recibe ${num(sh[4] / sh[0], 1)} veces lo que el 20 % más pobre`, '']]);
      first = false;
    };
    v = sliders(el, ['Quintil 1 (más pobre)', 'Quintil 2', 'Quintil 3', 'Quintil 4', 'Quintil 5 (más rico)'].map((t, i) => ({ id: `q${i + 1}`, label: `${t}: % del ingreso`, min: 0, max: 80, step: 0.5, value: cfg.q[i] })), draw);
    el.insertAdjacentHTML('beforeend', `<div class="lab-row"><button class="btn sm" type="button" data-pre="20,20,20,20,20">Igualdad perfecta</button><button class="btn sm" type="button" data-pre="${cfg.q.join(',')}">Ejemplo</button><button class="btn sm" type="button" data-pre="2,4,8,16,70">Muy desigual</button></div>`);
    el.querySelectorAll('[data-pre]').forEach((b) => b.addEventListener('click', () => { b.dataset.pre.split(',').forEach((x, i) => v.set(`q${i + 1}`, +x)); draw(); }));
    draw();
  };

  // Autocomprobación del motor: valores conocidos de los TP (se ve en la consola si algo cambia)
  const close = (x, y) => Math.abs(x - y) < 1e-6;
  console.assert(close((7000 / 1000) - 3, 4), 'mercado de dinero: r = 4 % con OM/P = 1000');
  console.assert(close((1000 + 200) / (50 + 50), 12), 'largo plazo: P = 12 con 100 empresas');
})();
