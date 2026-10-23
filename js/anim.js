/* Animaciones: pantalla de entrada al cambiar de tema y glifo animado en la cabecera de cada lección.
   Adaptadas del "Laboratorio Frontend DSW" de Mateo Rusconi. Expone window.ANIM; app.js lo usa en route() y renderLesson(). */
(() => {
  const { LESSONS, MODULES, UNITS } = window.GUIDE;
  const RM = matchMedia('(prefers-reduced-motion: reduce)');

  // Cadena causal que se enciende etapa por etapa en la pantalla de entrada
  const PIPES = {
    t2: ['Necesidades', 'Recursos escasos', 'Elección', 'Costo de oportunidad'],
    t3: ['Escasez', 'Elección', 'Renuncia', 'FPP', 'Crecimiento'],
    t4: ['Precio', 'Cantidad demandada', 'Cantidad ofrecida', 'Equilibrio'],
    t5: ['Precio fijado', 'Xd ≠ Xo', 'Escasez o excedente'],
    t6: ['ΔP %', 'ΔX %', 'Ep', 'Ingreso total'],
    t7: ['Factor variable', 'PMg', 'Rendimientos decrecientes', 'CMg'],
    t8: ['P = IMg', 'IMg = CMg', 'Beneficio', 'Entrada / salida'],
    t10: ['Producción', 'Gasto', 'Renta', 'PIB'],
    t12: ['Base monetaria', 'Depósitos', 'Préstamos', 'Oferta monetaria'],
    t13: ['BCRA', 'Encaje / OMA', 'Oferta monetaria', 'Tasa de interés'],
    t14: ['Dinero', 'Precios', 'IPC', 'Salario real'],
    t15: ['Ingreso', 'CBA / CBT', 'Pobreza', 'Gini'],
  };

  // trap = la confusión típica del tema, tomada de las notas de cada módulo
  const TRAPS = {
    t2: 'Positiva describe (“si sube el salario, sube el consumo”); normativa opina (“el Estado debe…”). Si aparece un “debe” o un “conviene”, es normativa.',
    t3: 'El costo de oportunidad no es lo que pagás: es la <b>mejor</b> alternativa a la que renunciás, aunque no implique sacar plata del bolsillo.',
    t4: 'Si cambia el precio del propio bien, <b>no se desplaza</b> la curva: hay un movimiento a lo largo de ella. La curva se corre solo por factores ceteris paribus.',
    t5: 'El precio máximo se fija <b>por debajo</b> del de equilibrio (genera escasez); el mínimo, <b>por encima</b> (genera excedente). Fuera de eso no tienen efecto.',
    t6: 'Pendiente y elasticidad no son lo mismo: en una demanda lineal la pendiente es constante, pero la elasticidad cambia en cada punto.',
    t7: 'El óptimo técnico es donde la PMe es máxima (PMg = PMe); el máximo técnico, donde el PT es máximo (PMg = 0). No los confundas.',
    t8: 'Con pérdidas, la empresa sigue produciendo mientras P ≥ CVMe mínimo: cierra recién cuando el precio no cubre ni el costo variable.',
    t10: 'El PIB suma solo bienes <b>finales</b> (o el valor agregado): si sumás también los intermedios, contás dos veces lo mismo.',
    t12: 'Dinero no es riqueza ni renta: la demanda de dinero es cuánto de tu riqueza querés tener en forma líquida.',
    t13: 'Subir el encaje no cambia la base monetaria; reduce el multiplicador y, con él, la oferta monetaria.',
    t14: 'Precios altos no es inflación: la inflación es una <b>suba sostenida y generalizada</b> del nivel general de precios.',
    t15: 'Pobre es el hogar cuyo ingreso no cubre la canasta básica <b>total</b>; indigente, el que no cubre ni la <b>alimentaria</b>.',
  };

  // Un SVG de 150×120 por tema. Sin animación (reduced-motion) cada uno queda en un estado final legible.
  const d = (s) => `style="animation-delay:${s}s"`;
  const GLYPHS = {
    t2: ['¿Qué?', '¿Cómo?', '¿Para quién?'].map((t, i) => `<g class="gx-pop" ${d(i * 0.45)}><rect x="${8 + i * 10}" y="${8 + i * 36}" width="${118 - i * 10}" height="28" rx="14" class="${i === 2 ? 'gx-soft' : 'gx-box'}"/><text x="${67 + i * 5}" y="${27 + i * 36}" class="gx-t gx-ink">${t}</text></g>`).join(''),
    t3: `<path d="M12 8V108H142" class="gx-strong"/><path d="M14 22C70 24 112 50 126 106" class="gx-acc-s gx-draw" pathLength="1"/>
      <circle cx="80" cy="46" r="6" class="gx-dotc gx-move"/><circle cx="58" cy="78" r="5" class="gx-warnf gx-pop" ${d(1.2)}/><circle cx="118" cy="30" r="5" class="gx-errf gx-pop" ${d(1.6)}/>`,
    t4: `<path d="M12 8V108H142" class="gx-strong"/><path d="M20 14L130 100" class="gx-dem gx-draw" pathLength="1"/><path d="M20 100L130 14" class="gx-sup gx-draw" ${d(0.3)} pathLength="1"/>
      <circle cx="75" cy="57" r="7" class="gx-eqf gx-pop" ${d(1)}/><text x="90" y="62" class="gx-t gx-ink">E</text>`,
    t5: `<path d="M12 8V108H142" class="gx-strong"/><path d="M20 14L130 100" class="gx-dem"/><path d="M20 100L130 14" class="gx-sup"/>
      <path d="M14 82H140" class="gx-ctrl gx-draw" pathLength="1"/><rect x="43" y="78" width="64" height="8" rx="3" class="gx-errf gx-grow"/><text x="75" y="102" class="gx-t gx-ink">escasez</text>`,
    t6: `<path d="M12 8V108H142" class="gx-strong"/><path d="M20 30L135 70" class="gx-dem gx-swapA"/><path d="M60 10L90 105" class="gx-dem gx-swapB"/>
      <text x="112" y="24" class="gx-t gx-ink gx-swapA">elástica</text><text x="112" y="24" class="gx-t gx-ink gx-swapB">inelástica</text>`,
    t7: `<path d="M12 8V108H142" class="gx-strong"/><path d="M14 106C40 104 52 60 76 34S118 14 138 22" class="gx-pt-s gx-draw" pathLength="1"/>
      <path d="M14 96C40 40 60 40 80 70S110 104 130 110" class="gx-pmg-s gx-draw" ${d(0.5)} pathLength="1"/><text x="122" y="16" class="gx-t gx-ink">PT</text><text x="40" y="44" class="gx-t gx-ink">PMg</text>`,
    t8: `<path d="M12 8V108H142" class="gx-strong"/><path d="M22 30C50 90 100 90 132 30" class="gx-ctme-s gx-draw" pathLength="1"/><path d="M40 100C70 90 100 50 122 12" class="gx-pmg-s gx-draw" ${d(0.4)} pathLength="1"/>
      <path d="M14 46H140" class="gx-price gx-draw" ${d(0.9)} pathLength="1"/><circle cx="112" cy="46" r="6" class="gx-eqf gx-pop" ${d(1.3)}/>`,
    t10: ['C', 'I', 'G', 'XN'].map((t, i) => `<g class="gx-stack" ${d(i * 0.35)}><rect x="${18 + i * 30}" y="${108 - [70, 34, 46, 14][i]}" width="22" height="${[70, 34, 46, 14][i]}" rx="3" class="${['gx-dem-f', 'gx-sup-f', 'gx-eqf', 'gx-acc'][i]}"/><text x="${29 + i * 30}" y="118" class="gx-t gx-ink">${t}</text></g>`).join('') + '<text x="130" y="22" class="gx-t gx-tc">PIB</text>',
    t12: [100, 75, 56, 42, 32, 24, 18].map((w, i) => `<rect x="14" y="${8 + i * 15}" width="${w * 1.2}" height="10" rx="3" class="gx-acc gx-bar" ${d(i * 0.22)}/>`).join(''),
    t13: `<path d="M20 44L75 14L130 44Z" class="gx-soft"/>${[30, 55, 80, 105].map((x) => `<rect x="${x}" y="50" width="12" height="42" rx="2" class="gx-box"/>`).join('')}<rect x="16" y="94" width="118" height="10" rx="2" class="gx-soft"/>
      <text x="75" y="38" class="gx-t gx-tc">BCRA</text><circle cx="140" cy="70" r="6" class="gx-eqf gx-coin"/>`,
    t14: `<path d="M12 8V108H142" class="gx-strong"/><path d="M14 100L40 92L60 80L80 70L100 50L120 34L140 12" class="gx-sup gx-draw" pathLength="1"/>
      <text x="40" y="24" class="gx-t gx-ink gx-kw">IPC ↑</text><text x="40" y="24" class="gx-t gx-ink gx-kw" ${d(1.2)}>$ ↓</text><text x="40" y="24" class="gx-t gx-ink gx-kw" ${d(2.4)}>P·Y = M·V</text>`,
    t15: `<path d="M12 8V108H132V8Z" class="gx-box"/><path d="M12 108L132 8" class="gx-strong gx-dash"/><path d="M12 108C60 104 100 80 132 8" class="gx-lor gx-draw" pathLength="1"/>
      <text x="96" y="100" class="gx-t gx-ink">Gini</text>`,
  };
  const glyph = (modId) => (GLYPHS[modId] ? `<svg viewBox="0 0 150 120" focusable="false">${GLYPHS[modId]}</svg>` : '');

  // Pantalla de entrada: se cierra sola, con un clic o con cualquier tecla
  function interstitial(n, title, mod) {
    return new Promise((res) => {
      const unit = UNITS.find((u) => u.id === mod.unit);
      const tag = `Tema ${mod.tema} · ${unit.title} · ${unit.name}`;
      const stages = PIPES[mod.id];
      const el = document.createElement('div');
      el.className = 'inter';
      el.dataset.u = mod.unit;
      el.tabIndex = -1;
      el.setAttribute('role', 'dialog');
      el.setAttribute('aria-modal', 'true');
      el.setAttribute('aria-label', `Lección ${n}: ${title.replace(/<[^>]*>/g, '')}`);
      el.innerHTML = `<div class="inter-box">
        <p class="inter-typed" style="--steps:${tag.length}" aria-hidden="true">${tag}</p>
        <h2>${mod.title}</h2>
        <p class="inter-pipe" aria-hidden="true">${stages.map((s, i) => `${i ? '<span class="ar">→</span>' : ''}<span class="s" ${d((0.35 + i * 0.16).toFixed(2))}>${s}</span>`).join('')}</p>
        <p class="inter-trap"><span class="lbl">Trampa típica del parcial</span>${TRAPS[mod.id]}</p>
        <p class="inter-hint">Tocá o presioná una tecla para entrar</p>
      </div>`;
      let closed = false;
      const end = (e) => {
        if (closed) return;
        closed = true;
        // La tecla que cierra no llega a los atajos de la guía (flechas, /, Escape)
        if (e?.type === 'keydown') { e.preventDefault(); e.stopPropagation(); }
        window.removeEventListener('keydown', end, true);
        el.classList.add('out');
        setTimeout(() => el.remove(), 330);
        res();
      };
      el.addEventListener('click', end);
      window.addEventListener('keydown', end, true);
      document.body.append(el);
      el.focus();
      setTimeout(end, 3200);
    });
  }

  // Al entrar a una lección de otro tema. skip = true solo registra el tema (primera carga).
  let lastModule = null;
  function intro(lessonId, skip) {
    const i = LESSONS.findIndex((l) => l.id === lessonId);
    const mod = MODULES.find((m) => m.id === LESSONS[i]?.module);
    if (!mod || mod.id === lastModule) return Promise.resolve();
    lastModule = mod.id;
    if (skip || RM.matches || !PIPES[mod.id]) return Promise.resolve();
    return interstitial(i + 1, LESSONS[i].title, mod);
  }

  window.ANIM = { intro, glyph };
})();
