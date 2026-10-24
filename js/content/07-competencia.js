/* Tema VIII: Las empresas en el mercado de competencia perfecta. Diapositivas "TEMA VIII ...", Blanco cap. 6, Mankiw cap. 14. TP 5 (ejercicios 11 a 14). */
(() => {
  const { LESSONS, h } = window.GUIDE;
  const { note, def, table, chart, eq, frac, num, lab, plot, flow } = h;
  // TP 5, ejercicio 14: CT = 2X² + 6X + 8
  const CMg = (x) => 4 * x + 6, CVMe = (x) => 2 * x + 6, CTMe = (x) => 2 * x + 6 + 8 / x;

  LESSONS.push(
    {
      id: 'maximo-beneficio',
      module: 't8',
      title: 'La empresa precio-aceptante y el máximo beneficio',
      keywords: 'competencia perfecta precio aceptante demanda horizontal perfectamente elástica ingreso marginal img cmg máximo beneficio condición primer segundo orden curva oferta',
      tldr: 'En competencia perfecta la empresa toma el precio del mercado: su demanda es horizontal y <mark>IMg = P</mark>. Maximiza el beneficio produciendo donde <mark>IMg = CMg</mark>, en el tramo creciente del CMg. Por eso el tramo creciente del CMg (por encima del mínimo CVMe) es su curva de oferta.',
      goals: ['Explicar por qué la demanda que enfrenta la empresa es horizontal.', 'Deducir la condición IMg = CMg y la de segundo orden.', 'Explicar por qué el CMg es la curva de oferta de la empresa.'],
      body: `
        <h2>Una demanda horizontal</h2>
        <p>Por los supuestos de competencia perfecta (Tema IV), la empresa enfrenta una demanda <strong>perfectamente elástica</strong> al precio de mercado P*: si cobra más, no vende nada; si cobra menos, pierde ingresos sin necesidad, porque a P* puede vender todo lo que quiera. Es <strong>precio-aceptante</strong>.</p>
        <div class="figs-2">
          ${plot({ x: [0, 10], y: [0, 10], h: 240, xl: 'X mercado', curves: [{ f: (x) => 9 - 0.8 * x, cls: 'c-d', label: 'D' }, { f: (x) => 1 + 0.8 * x, cls: 'c-s', label: 'O' }], points: [{ x: 5, y: 5, cls: 'c-eq', label: 'E' }], guides: [{ x: 5, y: 5, xt: '', yt: 'P*' }], alt: 'Mercado' })}
          ${plot({ x: [0, 10], y: [0, 10], h: 240, xl: 'X empresa', hlines: [{ y: 5, cls: 'c-price', label: 'd = P* = IMg' }], alt: 'Empresa' })}
        </div>
        <p class="muted-s">El mercado fija el precio (izquierda); cada empresa lo toma como dado (derecha).</p>
        <h2>La regla IMg = CMg</h2>
        <p>El <strong>ingreso marginal</strong> (IMg) es lo que aumenta el ingreso total al vender una unidad más. Como el precio no cambia, <strong>IMg = P</strong>.</p>
        ${table(['Si…', 'Producir una unidad más…', 'La empresa…'], [['CMg < IMg', 'suma más ingreso que costo', 'aumenta la producción'], ['CMg > IMg', 'suma más costo que ingreso', 'reduce la producción'], ['<strong>CMg = IMg</strong>', 'no agrega nada', '<strong>maximiza el beneficio</strong>']])}
        ${eq(`B = IT − CT &nbsp;⇒&nbsp; ${frac('dB', 'dX')} = IMg − CMg = 0 &nbsp;⇒&nbsp; <strong>IMg = CMg</strong> &nbsp;(y en competencia perfecta: P = CMg)`, 'Condición de primer orden')}
        ${eq(`${frac('d²B', 'dX²')} &lt; 0 &nbsp;⇒&nbsp; ${frac('dIMg', 'dX')} &lt; ${frac('dCMg', 'dX')} &nbsp;⇒&nbsp; el CMg debe ser <strong>creciente</strong>`, 'Condición de segundo orden')}
        ${note('El CMg corta dos veces a una recta horizontal: una cuando baja y otra cuando sube. Solo el corte en el tramo <strong>creciente</strong> es un máximo; el otro es un mínimo de beneficio. Es lo que dice la condición de segundo orden.', 'exam')}
        <h2>El CMg es la curva de oferta de la empresa</h2>
        <p>Para cada precio, la empresa elige la cantidad donde P = CMg. Si el precio sube, se mueve hacia arriba por su CMg y produce más: el tramo creciente del CMg dice cuánto ofrece a cada precio. Pero solo por encima del mínimo del CVMe; debajo de ese precio cierra (próxima lección).</p>
        ${chart({ x: [0, 12], y: [0, 30], xl: 'X', yl: 'P', curves: [{ f: (x) => 10 - 4 * x + 0.6 * x * x, dom: [0, 5], cls: 'c-cmg', dash: true }, { f: (x) => 10 - 4 * x + 0.6 * x * x, dom: [5, 12], cls: 'c-cmg', label: 'Oferta = CMg (tramo creciente)' }, { f: (x) => 10 - 2 * x + 0.2 * x * x, dom: [0.3, 12], cls: 'c-cvme', label: 'CVMe' }],
          hlines: [{ y: 10, cls: 'c-price pl-faint', label: 'P₁' }, { y: 20, cls: 'c-price pl-faint', label: 'P₂' }], points: [{ x: 5, y: 5, cls: 'c-cvme', label: 'mín CVMe', pos: 'se' }, { x: 6.67, y: 10, cls: 'c-eq' }, { x: 8.6, y: 20, cls: 'c-eq' }] }, 'A P₁ produce 6,7; a P₂, 8,6. Debajo del mínimo del CVMe la oferta es cero.')}`,
      exercises: [
        {
          official: '5.11', level: 1, title: 'IMg = CMg en empresas competitivas',
          prompt: '<p>Las empresas competitivas que intentan maximizar sus beneficios producen la cantidad en que se iguala el costo marginal con el ingreso marginal. ¿Verdadero o falso? Analice y demuestre gráficamente.</p>',
          solution: { explain: '<p><strong>Verdadero</strong> (con la aclaración de que el CMg debe ser creciente). Si CMg < IMg, producir una unidad más aumenta el beneficio; si CMg > IMg, lo reduce; el máximo está donde son iguales. Como en competencia perfecta IMg = P, la regla es P = CMg. Gráfico: recta horizontal en P y curva de CMg; el punto de corte en el tramo creciente da la cantidad óptima (laboratorio de la próxima lección).</p>' },
        },
      ],
      quiz: [
        { q: 'En competencia perfecta, la demanda que enfrenta cada empresa es…', o: ['vertical', 'horizontal al precio de mercado', 'igual a la del mercado', 'con pendiente negativa'], a: 1, e: 'Es precio-aceptante.' },
        { q: 'En competencia perfecta, el ingreso marginal es igual…', o: ['al costo medio', 'al precio', 'a cero', 'al beneficio'], a: 1, e: 'Cada unidad se vende al mismo precio.' },
        { q: 'La empresa maximiza el beneficio donde…', o: ['IT es máximo', 'CTMe es mínimo', 'IMg = CMg con CMg creciente', 'P = CVMe'], a: 2, e: 'Condiciones de primer y segundo orden.' },
        { q: 'La curva de oferta de la empresa competitiva es…', o: ['su CTMe', 'el tramo creciente del CMg por encima del mínimo CVMe', 'su CFMe', 'la demanda del mercado'], a: 1, e: 'Para cada precio produce donde P = CMg.' },
        { q: 'P = 20 y CMg = 4X + 6. La empresa produce…', o: ['5', '3,5', '14', '20'], a: 1, e: '4X + 6 = 20 → X = 3,5.' },
      ],
      sources: [{ title: 'Diapositivas del Tema VIII', ref: 'Cátedra de Economía', points: ['Demanda perfectamente elástica de la empresa.', 'Im = Cm; condiciones de primer y segundo orden.', 'El costo marginal como curva de oferta.'] }],
    },

    {
      id: 'beneficios-y-cierre',
      module: 't8',
      title: 'Beneficios, pérdidas y punto de cierre',
      keywords: 'beneficio extraordinario normal pérdidas punto cierre nivelación cvme ctme costo fijo producir con pérdidas utilidad económica contable',
      tldr: 'Con P > CTMe hay <mark>beneficio extraordinario</mark>; con P = mín CTMe, beneficio normal (punto de <strong>nivelación</strong>); con CVMe ≤ P < CTMe, la empresa <strong>produce con pérdidas</strong> porque pierde menos que cerrando; con P < mín CVMe, <mark>cierra</mark> (punto de cierre).',
      goals: ['Medir el beneficio como un rectángulo en el gráfico.', 'Distinguir punto de nivelación y punto de cierre.', 'Explicar por qué una empresa puede producir con pérdidas.', 'Resolver el ejercicio 14 del TP 5.'],
      body: `
        <h2>El beneficio en el gráfico</h2>
        ${eq(`B = IT − CT = P·X − CTMe·X = (P − CTMe) · X`, 'Beneficio')}
        <p>Es un rectángulo de base X y altura P − CTMe. Recordá que el CT incluye los costos implícitos: es <strong>beneficio económico</strong>, no contable (Tema III).</p>
        ${lab(0)}
        <h2>Los cuatro casos</h2>
        ${table(['Precio', 'Resultado', 'Qué hace la empresa'], [
          ['P > CTMe', '<strong>Beneficio extraordinario</strong> (económico positivo)', 'Produce. A largo plazo atrae competidores'],
          ['P = mín CTMe', '<strong>Beneficio normal</strong> (económico nulo): <strong>punto de nivelación</strong>', 'Produce. Gana lo mismo que en su mejor alternativa'],
          ['mín CVMe ≤ P < CTMe', '<strong>Pérdidas</strong>', '<strong>Produce igual</strong>: cubre los costos variables y parte de los fijos'],
          ['P < mín CVMe', 'Pérdidas mayores que el CF', '<strong>Cierra</strong>: <strong>punto de cierre</strong> en el mínimo del CVMe'],
        ])}
        <h2>¿Por qué producir perdiendo plata?</h2>
        <p>A corto plazo el costo fijo se paga igual, produzca o no. Si cierra, pierde todo el CF. Si produce y el precio cubre el CVMe, cada unidad paga su costo variable y deja un resto para cubrir parte del fijo: pierde <strong>menos</strong> que cerrando.</p>
        ${eq(`Produce si &nbsp; P ≥ mín CVMe &nbsp;&nbsp;(es decir, IT ≥ CV)`, 'Condición de cierre')}
        ${note('TP 5, ejercicio 13: “La empresa competitiva cierra cuando los ingresos son inferiores a los costos variables”. <strong>Verdadero</strong>: si IT < CV, producir hace perder más que el CF; cerrando, la pérdida se limita al CF.', 'exam')}`,
      labs: [
        { type: 'costs', title: 'La decisión de la empresa: mové el precio', intro: 'Mismos costos que en el Tema VII (CF = 20). Bajá el precio desde arriba y mirá cuándo el beneficio se vuelve pérdida y cuándo conviene cerrar.', cf: 20, c1: 10, c2: -2, c3: 0.2, xmax: 12, ymax: 30, price: true },
        { type: 'costs', title: 'La empresa del TP 5, ejercicio 14', intro: 'CT = 2X² + 6X + 8. Poné P = 10 (el precio de mercado del ejercicio) y después P = 14.', cf: 8, c1: 6, c2: 2, xmax: 4.5, ymax: 26, price: true },
      ],
      exercises: [
        {
          official: '5.14', level: 3, title: 'Mercado competitivo con CT = 2X² + 6X + 8',
          prompt: `<p>Una empresa en competencia perfecta tiene CT = 2X² + 6X + 8 (X en toneladas). a) Costo fijo y variable. b) CTMe, CVMe y CMg. c) Curva de oferta y condición de cierre. d) Punto de nivelación. e) El mercado tiene 10.000 empresas iguales y 500.000 consumidores con demanda individual X = −0,01P + 0,12: precio y cantidad de equilibrio. f) Cantidad de cada empresa. g) Gráficos del mercado y de la empresa. h) Beneficio de cada empresa. i) ¿Cómo puede ser negativo si es máximo? j) ¿Cierra o sigue? k) ¿Es equilibrio de largo plazo? l) ¿Hacia dónde tiende el mercado?</p>${lab(1)}`,
          hints: ['El CF es lo que no depende de X.', 'Oferta de la empresa: P = CMg. Oferta del mercado: sumá horizontalmente 10.000 empresas.', 'Demanda del mercado: 500.000 × (−0,01P + 0,12).'],
          solution: { explain: `
            <p><strong>a)</strong> CF = <strong>8</strong>; CV = <strong>2X² + 6X</strong>.</p>
            <p><strong>b)</strong> CTMe = 2X + 6 + 8/X; CVMe = 2X + 6; CMg = 4X + 6.</p>
            <p><strong>c)</strong> P = 4X + 6 → <strong>X = (P − 6)/4</strong>. El mínimo del CVMe es 6 (en X = 0): <strong>cierra si P < 6</strong>.</p>
            <p><strong>d)</strong> Mínimo del CTMe: 2 − 8/X² = 0 → X = 2, CTMe = 4 + 6 + 4 = <strong>14</strong>. Con P = 14 el beneficio es cero.</p>
            <p><strong>e)</strong> Oferta del mercado: 10.000 · (P − 6)/4 = 2.500P − 15.000. Demanda: 500.000 · (−0,01P + 0,12) = −5.000P + 60.000. Igualando: 7.500P = 75.000 → <strong>P = 10</strong>, X = <strong>10.000</strong> toneladas.</p>
            <p><strong>f)</strong> Cada empresa: (10 − 6)/4 = <strong>1</strong> tonelada.</p>
            <p><strong>h)</strong> IT = 10; CT = 2 + 6 + 8 = 16 → <strong>B = −6</strong>.</p>
            <p><strong>i)</strong> “Máximo” significa el mejor resultado posible a ese precio: −6 es la <em>menor pérdida</em>. Cualquier otra cantidad perdería más (con X = 0 perdería 8).</p>
            <p><strong>j)</strong> <strong>Sigue produciendo</strong>: P = 10 > CVMe(1) = 8. Pierde 6, menos que el CF de 8 que perdería cerrando.</p>
            <p><strong>k)</strong> <strong>No</strong>: hay pérdidas económicas, así que a largo plazo salen empresas.</p>
            <p><strong>l)</strong> Al salir empresas la oferta se desplaza a la izquierda y el precio sube, buscando P = mín CTMe = 14. Pero la demanda corta el eje de precios en P = 12 (−5.000P + 60.000 = 0): <strong>ningún consumidor paga 14</strong>. Con esta tecnología la industria no es viable a largo plazo y tiende a desaparecer (o a que alguien encuentre una tecnología con costos menores).</p>
            <div class="figs-2">
              ${plot({ x: [0, 22000], y: [0, 16], h: 260, xl: 'X mercado', curves: [{ f: (x) => (60000 - x) / 5000, dom: [0, 60000], cls: 'c-d', label: 'D' }, { f: (x) => (x + 15000) / 2500, cls: 'c-s', label: 'O' }], points: [{ x: 10000, y: 10, cls: 'c-eq', label: 'E' }], guides: [{ x: 10000, y: 10, xt: '10.000', yt: '10' }], hlines: [{ y: 14, cls: 'c-ctme pl-faint', label: 'mín CTMe = 14' }], alt: 'Mercado del ejercicio 14' })}
              ${plot({ x: [0, 4], y: [0, 24], h: 260, xl: 'X empresa', curves: [{ f: CMg, cls: 'c-cmg', label: 'CMg' }, { f: CTMe, dom: [0.4, 4], cls: 'c-ctme', label: 'CTMe' }, { f: CVMe, cls: 'c-cvme', label: 'CVMe' }], hlines: [{ y: 10, cls: 'c-price', label: 'P = 10' }], areas: [{ pts: [[0, 10], [1, 10], [1, 16], [0, 16]], cls: 'a-bad', label: '−6', at: [0.5, 13] }], points: [{ x: 1, y: 10, cls: 'c-eq' }, { x: 2, y: 14, cls: 'c-ctme', label: 'nivelación', pos: 'se' }], alt: 'Empresa del ejercicio 14' })}
            </div>` },
        },
      ],
      quiz: [
        { q: 'P = 12, X = 100, CTMe = 10. El beneficio es…', o: ['1.200', '200', '−200', '1.000'], a: 1, e: '(12 − 10) × 100.' },
        { q: 'El punto de cierre está en…', o: ['el mínimo del CTMe', 'el mínimo del CVMe', 'el máximo del CMg', 'P = 0'], a: 1, e: 'Debajo de ese precio ni siquiera se cubren los costos variables.' },
        { q: 'El punto de nivelación es donde…', o: ['P = mín CVMe', 'P = mín CTMe y el beneficio económico es cero', 'P = CFMe', 'IT = CF'], a: 1, e: 'Beneficio normal.' },
        { q: 'Con CVMe < P < CTMe, la empresa a corto plazo…', o: ['cierra', 'produce con pérdidas porque pierde menos que cerrando', 'tiene beneficio extraordinario', 'sube el precio'], a: 1, e: 'Cubre los variables y parte del fijo.' },
        { q: 'Si una empresa cierra a corto plazo, su pérdida es…', o: ['cero', 'el costo fijo', 'el costo variable', 'el costo total'], a: 1, e: 'El costo fijo se paga igual.' },
        { q: 'En el TP 5 (ej. 14), ¿por qué a largo plazo la industria tiende a desaparecer?', o: ['Porque el CF es muy alto', 'Porque la demanda no paga nunca el mín CTMe de 14 (su precio máximo es 12)', 'Porque hay demasiados consumidores', 'Porque el CMg es decreciente'], a: 1, e: 'No existe un precio que dé beneficio normal con esa demanda.' },
      ],
      sources: [{ title: 'Diapositivas del Tema VIII', ref: 'Cátedra de Economía', points: ['Ganancias totales, análisis de pérdidas y punto de cierre (P > CVMe).'] }],
    },

    {
      id: 'largo-plazo',
      module: 't8',
      title: 'El largo plazo: entrada y salida de empresas',
      keywords: 'largo plazo entrada salida empresas beneficio extraordinario normal oferta mercado desplazamiento equilibrio mínimo ctme cambio demanda',
      tldr: 'A largo plazo no hay barreras: si hay <mark>beneficios extraordinarios entran empresas</mark>, la oferta del mercado crece y el precio baja; si hay pérdidas, salen. El proceso termina cuando <mark>P = mín CTMe</mark> y el beneficio económico es cero.',
      goals: ['Explicar el ajuste de largo plazo con dos gráficos (mercado y empresa).', 'Analizar un aumento de la demanda a corto y a largo plazo.'],
      body: `
        <h2>El mecanismo</h2>
        ${flow('Beneficio extraordinario', 'Entran empresas', 'Oferta del mercado →', 'P baja', 'Beneficio → 0')}
        ${flow('Pérdidas', 'Salen empresas', 'Oferta del mercado ←', 'P sube', 'Pérdida → 0')}
        <p>Se analiza siempre con <strong>dos gráficos lado a lado</strong>: el mercado (donde se forma el precio) y la empresa representativa (que lo toma). Mové la cantidad de empresas o tocá “Dejar pasar el tiempo”:</p>
        ${lab(0)}
        ${note('En el equilibrio de largo plazo se cumple a la vez: P = IMg = CMg (máximo beneficio) y P = mín CTMe (beneficio cero). La empresa produce en la escala más barata posible.', 'exam')}
        <h2>Si aumenta la demanda</h2>
        <ol>
          <li><strong>Corto plazo</strong>: la demanda del mercado se desplaza a la derecha, el precio sube y cada empresa, sobre su CMg, produce más y obtiene beneficio extraordinario.</li>
          <li><strong>Largo plazo</strong>: el beneficio atrae empresas, la oferta del mercado se desplaza a la derecha y el precio vuelve al mínimo del CTMe. La cantidad total del mercado es mayor, pero ahora la producen más empresas.</li>
        </ol>
        ${chart({ x: [0, 12], y: [0, 12], xl: 'X mercado', curves: [{ f: (x) => 10 - 0.8 * x, cls: 'c-d', ghost: true, label: 'D₁' }, { f: (x) => 12.4 - 0.8 * x, cls: 'c-d', label: 'D₂' }, { f: (x) => 2 + 0.8 * x, cls: 'c-s', ghost: true, label: 'O₁' }, { f: (x) => -0.4 + 0.8 * x, dom: [0.5, 12], cls: 'c-s', label: 'O₂' }], hlines: [{ y: 6, cls: 'c-ctme pl-faint', label: 'mín CTMe' }],
          points: [{ x: 5, y: 6, cls: 'pl-old', label: 'A', pos: 'w' }, { x: 6.5, y: 7.2, cls: 'c-eq', label: 'B (corto)' }, { x: 8, y: 6, cls: 'c-eq', label: 'C (largo)' }] }, 'De A a B: sube la demanda y el precio. De B a C: entran empresas hasta que el precio vuelve al mínimo del CTMe.')}`,
      labs: [{ type: 'longrun', title: 'Entrada y salida de empresas', intro: 'Empresa: CT = X² + 4X + 16 (mín CTMe = 12 en X = 4). Mercado: X<sub>d</sub> = 1.000 − 50P. Arranca con 60 empresas.' }],
      quiz: [
        { q: 'Si las empresas de una industria competitiva tienen beneficios extraordinarios, a largo plazo…', o: ['salen empresas', 'entran empresas y el precio baja', 'el precio sube', 'nada cambia'], a: 1, e: 'Libre entrada.' },
        { q: 'En el equilibrio de largo plazo de competencia perfecta…', o: ['P > CTMe', 'P = mín CTMe y el beneficio económico es nulo', 'P < CVMe', 'P = CFMe'], a: 1, e: 'Beneficio normal.' },
        { q: 'Si hay pérdidas en la industria, a largo plazo la oferta del mercado…', o: ['se desplaza a la derecha', 'se desplaza a la izquierda', 'no cambia', 'se vuelve vertical'], a: 1, e: 'Salen empresas.' },
        { q: 'Aumenta la demanda de un mercado competitivo. A corto plazo las empresas…', o: ['tienen pérdidas', 'tienen beneficio extraordinario', 'cierran', 'bajan el precio'], a: 1, e: 'El precio sube por encima del CTMe.' },
        { q: '¿Por qué el ajuste de largo plazo no ocurre a corto plazo?', o: ['Porque los consumidores no se enteran', 'Porque entrar o salir de una industria lleva tiempo', 'Porque el Estado lo impide', 'Porque los costos son fijos para siempre'], a: 1, e: 'El supuesto de libre entrada se efectiviza a largo plazo.' },
      ],
      sources: [{ title: 'Diapositivas del Tema VIII', ref: 'Cátedra de Economía', points: ['Entrada de empresas por beneficio extraordinario y efecto del cambio de demanda.', 'El largo plazo: entrada y salida de empresas.'] }],
    },

    {
      id: 'nivelacion-parcial',
      module: 't8',
      title: 'Nivelación, cierre y largo plazo: las preguntas que siempre toman',
      keywords: 'punto de nivelación precio inferior superior largo plazo saldrán entrarán empresas precio aumentará disminuirá corto plazo pérdidas cierre costos fijos irrecuperables vuelo avería vino agregación oferta de mercado helados caída de la demanda oferta a largo plazo horizontal clasificación de mercados máximo beneficio',
      tldr: 'La pregunta más repetida de los parciales: <em>“En un mercado competitivo, el precio es inferior al punto de nivelación. A largo plazo…”</em>. Respuesta: <mark>saldrán empresas y el precio aumentará</mark> hasta el mínimo del CTMe. A corto plazo, en cambio, las empresas tienen pérdidas pero <strong>siguen produciendo mientras el precio cubra el CVMe</strong>, porque los costos fijos ya están perdidos.',
      goals: ['Responder con gráficos (mercado y empresa) qué pasa a corto y a largo plazo si el precio está por debajo o por encima del punto de nivelación.', 'Explicar por qué los costos fijos no afectan las decisiones de corto plazo.', 'Agregar ofertas individuales en una oferta de mercado.', 'Analizar una caída de la demanda a corto y largo plazo y dibujar la oferta de largo plazo.'],
      body: `
        ${note('<p>Tomada en el 1er parcial 2024, en el 2do parcial 2024 (6R1), en el recuperatorio integral 2024 y en el recuperatorio de diciembre 2024, y con variantes en los parciales 2025. Es la 6.6.4 de Blanco:</p><p><em>En un mercado competitivo, el precio es inferior al punto de nivelación. A largo plazo: a) saldrán empresas del mercado y el precio disminuirá; b) entrarán empresas y el precio disminuirá; <strong>c) saldrán empresas del mercado y el precio aumentará</strong>; d) entrarán empresas y el precio aumentará. Explique y grafique.</em></p>', 'exam')}
        <h2>Primero, los dos puntos</h2>
        ${table(['Punto', 'Dónde está', 'Qué significa'], [['<strong>Nivelación</strong>', 'Mínimo del <strong>CTMe</strong> (donde lo corta el CMg)', 'Con ese precio el beneficio económico es cero: beneficio normal'], ['<strong>Cierre</strong>', 'Mínimo del <strong>CVMe</strong>', 'Con ese precio la pérdida es igual al costo fijo: da lo mismo producir que cerrar']])}
        <h2>La respuesta completa, en cuatro pasos</h2>
        <div class="figs-2">
          ${plot({ x: [0, 700], y: [0, 20], h: 270, xl: 'X mercado', alt: 'Mercado: salen empresas y la oferta se desplaza a la izquierda',
            curves: [{ f: (x) => 20 - x / 50, dom: [0, 700], cls: 'c-d', label: 'D' }, { f: (x) => 4 + x / 110, cls: 'c-s', ghost: true, label: 'O₁' }, { f: (x) => 4 + x / 50, cls: 'c-s', label: 'O₂' }],
            points: [{ x: 550, y: 9, cls: 'pl-old', label: 'A', pos: 'se' }, { x: 400, y: 12, cls: 'c-eq', label: 'B', pos: 'ne' }], guides: [{ x: 550, y: 9, xt: 'X₁', yt: 'P₁' }, { x: 400, y: 12, xt: 'X₂', yt: 'P₂' }],
            arrows: [{ from: [660, 10.2], to: [470, 13.6], cls: 'c-s' }] })}
          ${plot({ x: [0, 8], y: [0, 20], h: 270, xl: 'X empresa', alt: 'Empresa: pierde con P1 y llega a beneficio cero con P2',
            curves: [{ f: (x) => 2 * x + 4, cls: 'c-cmg', label: 'CMg' }, { f: (x) => x + 4 + 16 / x, dom: [1.2, 8], cls: 'c-ctme', label: 'CTMe' }, { f: (x) => x + 4, cls: 'c-cvme', label: 'CVMe' }],
            hlines: [{ y: 9, cls: 'c-price', label: 'P₁' }, { y: 12, cls: 'c-price pl-faint', label: 'P₂ = mín CTMe' }],
            areas: [{ pts: [[0, 9], [2.5, 9], [2.5, 12.9], [0, 12.9]], cls: 'a-bad', label: 'pérdida', at: [1.25, 15.5] }],
            points: [{ x: 2.5, y: 9, cls: 'pl-old', label: 'a', pos: 'se' }, { x: 4, y: 12, cls: 'c-eq', label: 'b (nivelación)', pos: 'se' }] })}
        </div>
        <p class="muted-s">Datos: cada empresa tiene CT = X² + 4X + 16 (nivelación en X = 4 con P = 12) y la demanda del mercado es X = 1.000 − 50P. Con 220 empresas el precio es 9; a largo plazo quedan 100.</p>
        <ol>
          <li><strong>Diagnóstico</strong>: el precio P₁ = 9 está por debajo del mínimo del CTMe (12). Cada empresa produce donde P = CMg (punto a, X = 2,5) y su CTMe es 12,9: tiene <strong>pérdidas económicas</strong> de (9 − 12,9) · 2,5 = −9,75. Gana menos que en su mejor alternativa.</li>
          <li><strong>Corto plazo</strong>: no cierra todavía. P₁ = 9 es mayor que el CVMe (6,5 en X = 2,5): cubre todo el costo variable y parte del fijo. Si cerrara perdería el costo fijo entero, 16, más que 9,75.</li>
          <li><strong>Largo plazo</strong>: como no hay barreras, las empresas con pérdidas <strong>salen</strong> del sector para usar sus recursos donde rindan más. La <strong>oferta del mercado se desplaza a la izquierda</strong> (de O₁ a O₂) y el <strong>precio sube</strong>.</li>
          <li><strong>Final</strong>: la salida se detiene cuando el precio llega al mínimo del CTMe (P₂ = 12, punto b). Las que quedan obtienen beneficio normal (cero) y no hay incentivo a entrar ni a salir: equilibrio de largo plazo. Respuesta: <strong>c)</strong>.</li>
        </ol>
        ${table(['Si el precio es…', 'Beneficios', 'A largo plazo', 'Oferta del mercado', 'El precio'], [['Superior al punto de nivelación', 'Extraordinarios', 'Entran empresas', 'Se desplaza a la derecha', 'Baja hasta el mín CTMe'], ['Igual', 'Normales', 'Nadie entra ni sale', 'No se mueve', 'Se mantiene'], ['Inferior', 'Pérdidas', 'Salen empresas', 'Se desplaza a la izquierda', 'Sube hasta el mín CTMe']])}
        ${note('<p>Las variantes de 2025: “<em>En un mercado competitivo, en donde el precio es inferior al punto de nivelación, ¿a corto plazo las empresas tendrán beneficios o pérdidas? ¿Entonces las empresas cerrarán?</em>”. Respuesta: <strong>pérdidas</strong>; cierran <strong>solo si el precio es menor que el mínimo del CVMe</strong>. Si está entre el CVMe y el CTMe siguen produciendo a corto plazo y salen a largo plazo. Y “<em>el precio es superior al punto de nivelación, ¿cuál es el comportamiento de las empresas a largo plazo?</em>”: entran empresas y el precio baja hasta el mínimo del CTMe.</p>', 'exam')}
        <h2>Por qué los costos fijos no cuentan: costos irrecuperables</h2>
        <p>Para decidir cuánto producir, la empresa mira el CMg; para decidir si cierra, compara el ingreso con el costo variable. Ninguno de los dos depende del costo fijo: ya se comprometió a pagarlo y no puede echarse atrás. Esos costos que pertenecen al pasado y no se recuperan se llaman <strong>costos irrecuperables</strong>. “Agua pasada no mueve molino”.</p>
        ${table(['Ejemplo de Blanco', 'La decisión correcta'], [
          ['Un avión de 150 asientos despega con 15 pasajeros', 'Si lo que pagan los 15 cubre el combustible y la comida, debe despegar: sueldos y avión se pagan igual'],
          ['Reparaste el auto por 1.000 € hace dos meses y ahora tiene otra avería que no conviene arreglar', 'No repararlo: los 1.000 € ya se perdieron y no deben influir'],
          ['“Mi empresa no cubre ni las materias primas, pero no la cierro porque gasté mucho en maquinaria”', 'Error: si el ingreso no cubre el costo variable, conviene cerrar; la maquinaria es irrecuperable'],
          ['Una botella de vino carísima se echó a perder: “como la pagué cara, debo tomarla”', 'Lo que pagaste ya no vuelve: decidí como si fuera un vino cualquiera'],
        ])}
        <p>En la tabla 6.3 de Blanco (costo fijo 40, precio 7), la mejor producción es 11 toneladas con una pérdida de 5 mil euros: ingresa 77 y sus costos variables son 42. Produce, porque cerrando perdería 40.</p>
        <h2>De la empresa al mercado: la agregación</h2>
        <p>La oferta del mercado a corto plazo es la <strong>suma horizontal</strong> de las ofertas de las empresas: a cada precio, se suma lo que ofrece cada una. Con 2.000 heladerías iguales que ofrecen 20 t a 3 mil euros: el mercado ofrece 40.000 t a ese precio. Por debajo del punto de cierre de cada empresa (2 mil euros), la oferta del mercado es cero.</p>
        <h2>Si cae la demanda: corto y largo plazo</h2>
        <ol>
          <li>Partimos de un equilibrio de largo plazo: P en el mínimo del CTMe y beneficio cero.</li>
          <li><strong>Corto plazo</strong>: la demanda se desplaza a la izquierda; aparece exceso de oferta, bajan el precio y la cantidad. Cada empresa reduce su producción a lo largo de su CMg y tiene pérdidas.</li>
          <li><strong>Largo plazo</strong>: salen empresas, la oferta del mercado se desplaza a la izquierda y el precio <strong>vuelve</strong> a su nivel inicial. La cantidad del mercado es menor porque hay menos empresas; cada una que queda produce lo mismo que al principio.</li>
        </ol>
        ${note('Por eso la <strong>oferta de largo plazo</strong> de un mercado competitivo es una <strong>recta horizontal</strong> al nivel del mínimo del CTMe: a largo plazo el sector ofrece cualquier cantidad a ese precio, entrando o saliendo empresas. Y es falso que ante una caída de la demanda “a largo plazo solo se reduzca el precio” (Blanco 6.5.13): lo que se reduce es la cantidad.', 'tip')}
        <h2>Otros resultados que se toman</h2>
        <ul>
          <li>Si suben en la misma proporción el precio del producto y el de todos los factores, la empresa competitiva <strong>no cambia</strong> la cantidad que produce: su CMg sube en la misma proporción que el precio (Blanco 6.3.10).</li>
          <li>El máximo beneficio puede ser negativo: “máximo” significa la menor pérdida posible a ese precio (Blanco 6.5.15 y TP 5, ejercicio 14).</li>
          <li>Una empresa con beneficio económico nulo <strong>no</strong> cierra a largo plazo: gana lo mismo que en cualquier otra actividad (Blanco 6.5.7).</li>
          <li>Para que entren empresas alcanza con que el beneficio económico sea positivo, aunque sea pequeño (Blanco 6.5.12).</li>
        </ul>
        <h2>¿Qué tipo de mercado es?</h2>
        <p>Blanco clasifica los mercados por tres elementos: el <strong>número de empresas</strong>, si el producto es <strong>homogéneo o diferenciado</strong> y si hay <strong>barreras de entrada</strong>. Competencia perfecta: muchísimas empresas, producto idéntico y libre entrada. En el otro extremo, el monopolio: una sola empresa y barreras. Entre ambos, la competencia monopolística (muchas empresas, producto diferenciado) y el oligopolio (pocas empresas). La cátedra estudia solo la competencia perfecta, que es el modelo de referencia.</p>`,
      quiz: [
        { q: 'En un mercado competitivo el precio es inferior al punto de nivelación. A largo plazo…', o: ['saldrán empresas y el precio disminuirá', 'entrarán empresas y el precio disminuirá', 'saldrán empresas y el precio aumentará', 'entrarán empresas y el precio aumentará'], a: 2, e: 'Con pérdidas salen empresas, la oferta cae y el precio sube hasta el mín CTMe.', src: 'Blanco 6.6.4', exam: ['1p-2024#5', 'rec-2024#3', '2p-2024-6r1#5'] },
        { q: 'Una empresa competitiva continúa produciendo, en el corto plazo, siempre que el precio sea superior al…', o: ['costo marginal', 'costo total medio', 'costo variable medio', 'costo fijo'], a: 2, e: 'Mínimo del CVMe: punto de cierre.', src: 'Blanco 6.6.1' },
        { q: 'La desaparición, a largo plazo, de los beneficios extraordinarios en un mercado competitivo se debe a…', o: ['que el CMg es creciente', 'la igualdad entre precio y costo marginal', 'que las empresas no pueden afectar el precio', 'la inexistencia de barreras de entrada'], a: 3, e: 'Entran empresas atraídas por el beneficio.', src: 'Blanco 6.6.3' },
        { q: 'El punto de nivelación corresponde al mínimo de la curva de…', o: ['costo variable medio', 'costo fijo medio', 'costo total medio', 'costo marginal'], a: 2, e: 'Allí el beneficio económico es cero.', src: 'Blanco 6.6.11' },
        { q: 'El punto de cierre corresponde al mínimo de la curva de…', o: ['costo variable medio', 'costo fijo medio', 'costo total medio', 'costo marginal'], a: 0, e: 'Allí la pérdida iguala al costo fijo.', src: 'Blanco 6.6.12' },
        { q: '¿Por qué los costos fijos no afectan las decisiones de corto plazo?', o: ['Porque son pequeños', 'Porque son irrecuperables: se pagan igual produzca o no', 'Porque los paga el Estado', 'Porque son iguales al CMg'], a: 1, e: 'Ni el CMg ni la condición de cierre dependen del CF.' },
        { q: 'Un mercado competitivo está en equilibrio de largo plazo y cae la demanda. A largo plazo…', o: ['solo baja el precio y la cantidad se mantiene', 'baja la cantidad y el precio vuelve al nivel inicial', 'suben precio y cantidad', 'no cambia nada'], a: 1, e: 'Salen empresas; la oferta de largo plazo es horizontal.' },
        { q: 'Una empresa competitiva tiene CMg creciente. Si sube el precio del producto, la empresa…', o: ['aumentará su producción y tendrá más beneficios', 'reducirá su producción y tendrá menos beneficios', 'aumentará su producción y tendrá menos beneficios', 'reducirá su producción y tendrá más beneficios'], a: 0, e: 'Sube por su CMg.', src: 'Blanco 6.6.5' },
      ],
      sources: [
        { title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 6 (6.3.2 y 6.3.9 a 6.3.14, ejercicios 6.5 a 6.7)', points: ['Los costes fijos no afectan las decisiones: costes irrecuperables (vuelo, avería).', 'Agregación de las curvas de oferta (Tabla 6.4).', 'Entrada y salida de empresas; hacia dónde tienden la empresa y el mercado.', 'Efecto de un cambio en la demanda a corto y largo plazo; oferta de largo plazo horizontal.'] },
        { title: 'Principios de Economía', ref: 'Mankiw, cap. 14', points: ['Decisión de cierre a corto plazo y de salida a largo plazo; costos irrecuperables.'] },
      ],
    },
  );
})();
