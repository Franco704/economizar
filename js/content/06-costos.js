/* Tema VII: Función de producción y costos. Diapositivas "TEMA VII FUNCION PRODUCCION Y COSTOS 26", Blanco cap. 5, Mankiw cap. 13. TP 5 (ejercicios 1 a 10). */
(() => {
  const { LESSONS, h } = window.GUIDE;
  const { note, def, table, chart, eq, frac, num, lab, plot, flow } = h;

  // TP 5, ejercicio 4
  const L4 = [0, 1, 2, 3, 4, 5, 6, 7], PT4 = [0, 5, 12, 17, 20, 21, 21, 20];
  // Ejemplo de costos de la lección: CF = 20, CV = 10X − 2X² + 0,2X³
  const cost = { cf: 20, c1: 10, c2: -2, c3: 0.2 };

  LESSONS.push(
    {
      id: 'funcion-produccion',
      module: 't7',
      title: 'Función de producción, eficiencia y plazos',
      keywords: 'función producción eficiencia técnica económica corto largo plazo factor fijo variable tecnología empresa racionalidad',
      tldr: 'La <mark>función de producción</mark> indica la cantidad máxima de producto que se obtiene con cada combinación de factores. Una técnica es técnicamente eficiente si no desperdicia recursos; es económicamente eficiente si además es la más barata. En el corto plazo hay factores fijos; en el largo, todos son variables.',
      goals: ['Definir función de producción.', 'Distinguir eficiencia técnica y económica (TP 5, ejercicio 1).', 'Distinguir corto y largo plazo.'],
      body: `
        <p>Las empresas buscan maximizar beneficios. Para eso tienen que decidir <strong>cuánto producir</strong> y <strong>cómo combinar los factores</strong>. Todo empieza por la tecnología disponible.</p>
        ${def('Función de producción', 'Es una relación matemática que indica la cantidad máxima de producto que es posible obtener mediante diferentes combinaciones de factores. La función de producción implica eficiencia técnica.', 'Diapositivas del Tema VII.')}
        ${eq('X = f(L, K)', 'Producción con trabajo (L) y capital (K)')}
        <p>Es la “receta” de la empresa: con estos ingredientes (trabajo, máquinas, insumos) se obtiene esta cantidad máxima de producto. A la economía no le interesa el proceso químico por el que la uva se vuelve vino, sino cuánto vino máximo sale de tantas toneladas de uva, tantas horas de trabajo y tantas horas de máquina.</p>
        <h2>Eficiencia técnica y eficiencia económica</h2>
        ${table(['', 'Eficiencia técnica', 'Eficiencia económica'], [
          ['Pregunta', '¿Se desperdician recursos?', '¿Es la forma más barata de producir?'],
          ['Criterio', 'Producir más con los mismos recursos, o lo mismo con menos', 'Elegir, entre las técnicas eficientes, la de menor costo'],
          ['Qué hace falta saber', 'Solo cantidades físicas', 'Además, los <strong>precios de los factores</strong>'],
        ])}
        <p>Ejemplo: para producir 100 sillas hay tres técnicas. A usa 10 trabajadores y 4 máquinas; B, 6 y 8; C, 10 y 6. C es técnicamente <strong>ineficiente</strong>: usa lo mismo que A en trabajo y más máquinas para producir lo mismo. Entre A y B, ambas técnicamente eficientes, la económicamente eficiente depende de los precios: si el salario es alto, conviene B (más máquinas); si es bajo, A.</p>
        ${note('La eficiencia económica <strong>presupone</strong> la técnica: una técnica que desperdicia recursos nunca puede ser la más barata. Es el ejercicio 1 del TP 5.', 'exam')}
        <h2>Corto y largo plazo</h2>
        ${table(['', 'Corto plazo', 'Largo plazo'], [['Factores', 'Al menos uno es <strong>fijo</strong> (planta, maquinaria)', 'Todos son <strong>variables</strong>'], ['Cómo se aumenta la producción', 'Agregando factor variable (más trabajadores) a la planta existente', 'Ampliando la planta o construyendo otra'], ['Ley clave', 'Rendimientos decrecientes del factor variable', 'Rendimientos a escala']])}
        <p>El corto y el largo plazo no son una cantidad de meses: dependen de cuánto tarda cada industria en cambiar sus factores fijos. Para un kiosco puede ser semanas; para una siderúrgica, años.</p>`,
      quiz: [
        { q: 'La función de producción indica…', o: ['el costo mínimo de producir', 'la cantidad máxima de producto para cada combinación de factores', 'el precio de los factores', 'el beneficio de la empresa'], a: 1, e: 'Por eso implica eficiencia técnica.' },
        { q: 'Para saber si una técnica es económicamente eficiente hay que conocer…', o: ['solo las cantidades de factores', 'también los precios de los factores', 'el precio del producto', 'la demanda'], a: 1, e: 'Se multiplica cada factor por su precio y se compara el costo.' },
        { q: 'Una técnica económicamente eficiente…', o: ['puede ser técnicamente ineficiente', 'siempre es técnicamente eficiente', 'usa siempre más capital', 'usa siempre más trabajo'], a: 1, e: 'La eficiencia económica presupone la técnica.' },
        { q: 'En el corto plazo…', o: ['todos los factores son variables', 'hay al menos un factor fijo', 'no hay costos fijos', 'la empresa puede cambiar de planta'], a: 1, e: 'Por eso aparecen los rendimientos decrecientes.' },
      ],
      sources: [{ title: 'Diapositivas del Tema VII', ref: 'Cátedra de Economía', points: ['Función de producción y eficiencia técnica y económica.', 'Productividad en el corto y largo plazo.'] }],
    },

    {
      id: 'productividades',
      module: 't7',
      title: 'Producto total, medio y marginal',
      keywords: 'producto total medio marginal productividad ley rendimientos decrecientes etapas producción óptimo técnico máximo técnico derivada',
      tldr: 'Con un factor fijo, cada trabajador adicional aporta primero cada vez más y después cada vez menos: es la <mark>ley de rendimientos decrecientes</mark>. El <strong>óptimo técnico</strong> es el máximo del producto medio (donde PMg = PMe) y el <strong>máximo técnico</strong>, el máximo del producto total (donde PMg = 0). La empresa racional produce entre ambos: la etapa II.',
      goals: ['Calcular PMe y PMg con tablas y con derivadas.', 'Enunciar la ley de rendimientos decrecientes.', 'Graficar PT, PMe y PMg y marcar las tres etapas.', 'Resolver los ejercicios 2 a 6 del TP 5.'],
      body: `
        <h2>Las tres medidas</h2>
        ${eq(`PMe = ${frac('PT', 'L')} = ${frac('X', 'L')}`, 'Producto medio')}
        ${eq(`PMg = ${frac('ΔPT', 'ΔL')} &nbsp; o, con la función, &nbsp; PMg = ${frac('dX', 'dL')}`, 'Producto marginal')}
        <p>El <strong>producto medio</strong> es lo que produce en promedio cada trabajador. El <strong>marginal</strong>, lo que aporta el último trabajador contratado.</p>
        ${table(['Si el PMg es…', 'Cada trabajador aporta…', 'Para producir unidades sucesivas hay que agregar…'], [['Creciente', 'más que el anterior', 'cada vez menos trabajo'], ['Constante', 'lo mismo que el anterior', 'siempre la misma cantidad de trabajo'], ['Decreciente', 'menos que el anterior', 'cada vez más trabajo']])}
        ${def('Ley de rendimientos decrecientes', 'Si se produce con un factor fijo y se van añadiendo unidades sucesivas del factor variable, llegará un momento a partir del cual los incrementos de la producción serán cada vez menores.', 'Diapositivas del Tema VII.')}
        <p>¿Por qué? Porque cada trabajador nuevo tiene menos máquinas y espacio con qué trabajar. En una cocina, el segundo cocinero ayuda muchísimo; el décimo se choca con los demás.</p>
        <h2>Las tres curvas y sus relaciones</h2>
        ${lab(0)}
        <ul>
          <li>Mientras el PMg crece, el PT crece a ritmo creciente (convexo). Cuando el PMg empieza a bajar (rendimientos marginales decrecientes), el PT sigue creciendo pero cada vez más lento: es su punto de inflexión.</li>
          <li>Si PMg > PMe, el promedio sube (un trabajador que aporta más que el promedio lo levanta). Si PMg < PMe, baja. Por eso <strong>el PMg corta al PMe en su máximo</strong>.</li>
          <li>Cuando PMg = 0, el PT es máximo. Si PMg < 0, el PT cae.</li>
        </ul>
        ${table(['Punto', 'Dónde', 'Condición'], [['<strong>Óptimo técnico</strong>', 'Máximo del producto medio', 'PMg = PMe'], ['<strong>Máximo técnico</strong>', 'Máximo del producto total', 'PMg = 0']])}
        <h2>Las tres etapas</h2>
        ${table(['Etapa', 'Desde – hasta', 'Qué pasa', '¿Produce ahí la empresa?'], [
          ['I', 'Desde L = 0 hasta el óptimo técnico', 'El PMe crece: cada trabajador más mejora el promedio', 'No: le conviene seguir contratando'],
          ['II', 'Del óptimo técnico al máximo técnico', 'PMe y PMg decrecen, pero PMg ≥ 0', '<strong>Sí: es la etapa racional</strong>'],
          ['III', 'Después del máximo técnico', 'PMg < 0: el PT cae', 'Nunca: pagaría trabajadores que reducen la producción'],
        ])}
        ${note('Confusión clásica: los rendimientos <strong>marginales</strong> decrecientes empiezan donde el PMg es máximo (antes del óptimo técnico, todavía en la etapa I). La etapa II empieza en el máximo del PMe.', 'exam')}`,
      labs: [{ type: 'production', title: 'PT, PMe y PMg del TP 5, ejercicio 6', intro: 'X = 10L² + 100L − L³. Mové L y mirá en qué etapa estás. Fijate que el PMg cruza al PMe justo en su máximo.', a: 10, b: 100 }],
      exercises: [
        {
          official: '5.4', level: 1, title: 'Completar la tabla de producción',
          prompt: '<p>Con L = 0 a 7 y PT = 0, 5, 12, 17, 20, 21, 21, 20: a) calcule PMg y PMe; b) grafique; c) marque las tres etapas y desde dónde hay rendimientos marginales decrecientes.</p>',
          solution: { explain: `
            ${table(['L', 'PT', 'PMg = ΔPT', 'PMe = PT/L'], L4.map((l, i) => [l, PT4[i], i ? PT4[i] - PT4[i - 1] : '—', i ? num(PT4[i] / l) : '—']))}
            ${chart({ x: [0, 7.5], y: [-2, 23], xl: 'L', yl: 'X', curves: [{ pts: L4.map((l, i) => [l, PT4[i]]), cls: 'c-pt', label: 'PT' }, { pts: L4.slice(1).map((l) => [l - 0.5, PT4[l] - PT4[l - 1]]), cls: 'c-pmg', label: 'PMg' }, { pts: L4.slice(1).map((l) => [l, PT4[l] / l]), cls: 'c-pme', label: 'PMe' }],
              vlines: [{ x: 2.5, cls: 'pl-faint', label: 'II' }, { x: 5.5, cls: 'pl-faint', label: 'III' }] }, 'El PMg se grafica en el punto medio de cada intervalo. PMe máximo en L = 2 (6), cuando PMg (7) pasa a quedar debajo; PMg = 0 entre L = 5 y 6.')}
            <p><strong>c)</strong> El PMg es máximo (7) al pasar de 1 a 2 trabajadores: desde el <strong>tercer trabajador</strong> hay rendimientos marginales decrecientes. Etapa I: hasta L ≈ 2–3 (máximo del PMe = 6 en L = 2, donde el PMg de 5 del tercero cae por debajo). Etapa II: hasta L ≈ 5–6 (PT máximo = 21, PMg = 0). Etapa III: desde L = 6 (con el séptimo el PT cae a 20).</p>` },
        },
        {
          official: '5.5', level: 2, title: 'La fábrica de camisas',
          prompt: '<p>Con K = 8 fijo, complete la tabla: L = 1, PMe = 20; L = 2, PMg = 25; L = 3, PT = 75; L = 4, PT = 100; L = 5, PMe = 24; L = 6, PMg = 15; L = 7, PMg = 10; L = 8, PMg = 0.</p>',
          hints: ['PT = PMe × L y PT = PT anterior + PMg.'],
          solution: { explain: table(['L', 'PT', 'PMg', 'PMe'], [[0, 0, '—', '—'], [1, '<strong>20</strong>', '20', '20'], [2, '45', '<strong>25</strong>', '22,5'], [3, '<strong>75</strong>', '30', '25'], [4, '<strong>100</strong>', '25', '25'], [5, '120', '20', '<strong>24</strong>'], [6, '135', '<strong>15</strong>', '22,5'], [7, '145', '<strong>10</strong>', '20,71'], [8, '145', '<strong>0</strong>', '18,13']]) + '<p>En negrita, los datos. Fijate que en L = 4 PMg = PMe = 25: es el óptimo técnico. En L = 8 el PMg es 0: máximo técnico.</p>' },
        },
        {
          official: '5.6', level: 2, title: 'X = 10L² + 100L − L³',
          prompt: '<p>Calcule la productividad media y marginal, el óptimo técnico, el máximo técnico y grafique.</p>',
          solution: { explain: `
            <p>PMe = X/L = <strong>10L + 100 − L²</strong>. PMg = dX/dL = <strong>20L + 100 − 3L²</strong>.</p>
            <p><strong>Óptimo técnico</strong> (máximo del PMe): dPMe/dL = 10 − 2L = 0 → <strong>L = 5</strong>, PMe = 125. Verificación: PMg(5) = 100 + 100 − 75 = 125 = PMe ✔. X = 625.</p>
            <p><strong>Máximo técnico</strong> (PMg = 0): 3L² − 20L − 100 = 0 → L = (20 + √(400 + 1.200)) / 6 = (20 + 40)/6 = <strong>10</strong>. X = 1.000 + 1.000 − 1.000 = <strong>1.000</strong>.</p>
            <p>El PMg es máximo en L = 10/3 ≈ 3,33 (ahí empiezan los rendimientos marginales decrecientes). El gráfico es el del laboratorio de esta lección.</p>` },
        },
        {
          official: '5.2', level: 1, title: 'Etapas y relación PT–PMg',
          prompt: '<p>Dibuje las curvas de producto total, medio y marginal y explique: a) las etapas de producción; b) a partir de qué punto se presentan; c) qué relación hay entre la gráfica del PT y la del PMg.</p>',
          solution: { explain: '<p>a) y b): ver la tabla de etapas (I hasta el máximo del PMe, II hasta el máximo del PT, III después). c) El PMg es la <strong>pendiente</strong> del PT: cuando el PMg crece el PT es convexo; en el máximo del PMg el PT tiene su punto de inflexión; cuando el PMg es cero el PT llega a su máximo; con PMg negativo el PT decrece.</p>' },
        },
      ],
      quiz: [
        { q: 'L pasa de 3 a 4 y el PT de 17 a 20. El PMg del cuarto trabajador es…', o: ['20', '5', '3', '4'], a: 2, e: 'ΔPT/ΔL = 3/1.' },
        { q: 'El PMg corta al PMe…', o: ['en el máximo del PMg', 'en el máximo del PMe', 'cuando el PT es máximo', 'en el origen'], a: 1, e: 'Es el óptimo técnico.' },
        { q: 'El máximo técnico ocurre cuando…', o: ['PMe es máximo', 'PMg = 0', 'PMg = PMe', 'PT = 0'], a: 1, e: 'El PT deja de crecer.' },
        { q: 'La empresa racional produce en…', o: ['la etapa I', 'la etapa II', 'la etapa III', 'cualquier etapa'], a: 1, e: 'En la I conviene seguir contratando; en la III el PMg es negativo.' },
        { q: 'La ley de rendimientos decrecientes se cumple…', o: ['solo a largo plazo', 'cuando hay al menos un factor fijo', 'cuando todos los factores crecen igual', 'solo en la agricultura'], a: 1, e: 'Es una ley de corto plazo.' },
        { q: 'Si el PMg es mayor que el PMe, el PMe…', o: ['sube', 'baja', 'no cambia', 'es cero'], a: 0, e: 'Un aporte mayor que el promedio sube el promedio.' },
      ],
      sources: [{ title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 5', points: ['Productividad media y marginal, óptimo técnico y máximo técnico.'] }],
    },

    {
      id: 'costos-corto-plazo',
      module: 't7',
      title: 'Los costos de producción en el corto plazo',
      keywords: 'costo fijo variable total medio marginal cf cv ct cfme cvme ctme cmg curva u mínimo explícitos implícitos tipos',
      tldr: 'CT = CF + CV. Divididos por X dan los costos medios (CFMe, CVMe, CTMe). El <mark>costo marginal</mark> es lo que suma al costo total la última unidad. El CVMe y el CTMe tienen forma de U, y <strong>el CMg los corta en sus mínimos</strong>.',
      goals: ['Definir y calcular todos los costos de corto plazo.', 'Graficar las curvas de costos y explicar su forma.', 'Resolver los verdadero/falso del TP 5 (ejercicios 7, 9 y 10).'],
      body: `
        <h2>Las definiciones</h2>
        ${table(['Costo', 'Fórmula', 'Qué es'], [
          ['Costo fijo (CF)', '—', 'No varía con la producción: alquiler de la planta, seguros, amortización. Se paga aunque X = 0'],
          ['Costo variable (CV)', '—', 'Varía con la producción: materias primas, energía, salarios por hora'],
          ['Costo total (CT)', 'CF + CV', ''],
          ['Costo fijo medio (CFMe)', 'CF / X', 'Siempre decrece: el fijo se reparte entre más unidades'],
          ['Costo variable medio (CVMe)', 'CV / X', 'Forma de U'],
          ['Costo total medio (CTMe)', 'CT / X = CFMe + CVMe', 'Forma de U: el costo de una unidad típica'],
          ['Costo marginal (CMg)', 'ΔCT / ΔX = ΔCV / ΔX = dCT/dX', 'El costo de la última unidad producida'],
        ])}
        ${note('El CMg se puede calcular con el CT o con el CV y da lo mismo, porque el CF no cambia al producir una unidad más. Por eso el CF no influye en la decisión de cuánto producir a corto plazo.', 'tip')}
        <h2>Las curvas</h2>
        ${lab(0)}
        <ul>
          <li>El <strong>CMg</strong> primero baja (etapa de rendimientos crecientes) y después sube (rendimientos decrecientes).</li>
          <li>El <strong>CMg corta al CVMe y al CTMe en sus mínimos</strong>: si la última unidad cuesta menos que el promedio, lo baja; si cuesta más, lo sube.</li>
          <li>La distancia vertical entre CTMe y CVMe es el CFMe, que se achica al crecer X: las curvas se acercan pero nunca se tocan.</li>
          <li>El mínimo del CTMe está a la <strong>derecha</strong> del mínimo del CVMe.</li>
        </ul>
        <h2>Tipos de costos (TP 5, ejercicio 7)</h2>
        ${table(['Clasificación', 'Tipos', 'Ejemplo'], [
          ['Según varíen con la producción', 'Fijos y variables', 'Alquiler del galpón / materia prima'],
          ['Según impliquen pago', 'Explícitos e implícitos (Tema III)', 'Sueldos pagados / sueldo renunciado del dueño'],
          ['Según la unidad de análisis', 'Totales, medios y marginales', 'CT, CTMe, CMg'],
          ['Según el plazo', 'De corto plazo y de largo plazo', 'En el largo plazo no hay costos fijos'],
        ])}`,
      labs: [{ type: 'costs', title: 'Las curvas de costos de corto plazo', intro: 'CF = 20 y CV = 10X − 2X² + 0,2X³. Mové la producción y compará el CMg con los costos medios.', ...cost, xmax: 12, ymax: 30 }],
      exercises: [
        {
          official: '5.9', level: 2, title: '¿Mínimo del CTMe = mínimo del CVMe?',
          prompt: '<p>¿El mínimo del costo medio se puede dar al mismo nivel de producción que el mínimo del costo variable medio? Verdadero o falso; explique y demuestre gráficamente.</p>',
          solution: { explain: '<p><strong>Falso</strong> (si hay costos fijos). CTMe = CVMe + CFMe, y el CFMe siempre decrece. En el mínimo del CVMe el CMg = CVMe < CTMe, así que el CTMe todavía está bajando: su mínimo está más a la derecha, donde el CMg ya creció hasta alcanzarlo. Solo coincidirían si CF = 0. En el laboratorio: mín CVMe en X = 5 y mín CTMe en X ≈ 6,3.</p>' },
        },
        {
          official: '5.10', level: 2, title: 'CVMe = CTMe cuando el costo total es máximo',
          prompt: '<p>Cuando el costo total llega a su máximo, el costo variable promedio y el costo promedio son iguales. ¿Verdadero o falso?</p>',
          solution: { explain: '<p><strong>Falso</strong>, por dos razones. 1) El costo total no tiene máximo: siempre crece con la producción (producir más nunca cuesta menos). 2) CTMe − CVMe = CF/X, que es positivo para todo X: con costos fijos las curvas nunca se igualan, solo se acercan.</p>' },
        },
      ],
      quiz: [
        { q: 'CF = 100, CV = 5X. Con X = 20, el CTMe es…', o: ['5', '10', '200', '105'], a: 1, e: 'CT = 200; 200/20 = 10.' },
        { q: '¿Qué curva siempre decrece?', o: ['CMg', 'CVMe', 'CFMe', 'CTMe'], a: 2, e: 'CF/X baja al aumentar X.' },
        { q: 'El CMg corta al CTMe…', o: ['en su máximo', 'en su mínimo', 'en el origen', 'nunca'], a: 1, e: 'Y también al CVMe en su mínimo.' },
        { q: 'Si el CMg está por debajo del CTMe, el CTMe…', o: ['sube', 'baja', 'es mínimo', 'es cero'], a: 1, e: 'La última unidad cuesta menos que el promedio.' },
        { q: 'CT = 2X² + 6X + 8. El CMg es…', o: ['2X + 6', '4X + 6', '2X + 6 + 8/X', '8'], a: 1, e: 'Derivada del CT.' },
        { q: 'El costo fijo influye en la decisión de cuánto producir a corto plazo…', o: ['siempre', 'nunca, porque no cambia con X', 'solo si es muy grande', 'solo en competencia perfecta'], a: 1, e: 'El CMg no depende del CF.' },
      ],
      sources: [{ title: 'Diapositivas del Tema VII', ref: 'Cátedra de Economía', points: ['Costos fijos, variables, totales, promedio y marginal.', 'El CMg corta al CVMe y CTMe en sus mínimos.'] }, { title: 'Principios de Economía', ref: 'Mankiw, cap. 13', points: ['Curvas de costos y sus formas.'] }],
    },

    {
      id: 'productividad-y-costos',
      module: 't7',
      title: 'Relación entre productividades y costos',
      keywords: 'cvme w pme cmg w pmg relación inversa espejo cambio tecnológico oferta desplazamiento rendimientos decrecientes costo variable medio',
      tldr: 'Las curvas de costos son el <mark>espejo</mark> de las de productividad: CVMe = w / PMe y CMg = w / PMg. Cuando el producto medio es máximo, el CVMe es mínimo; cuando el PMg es máximo, el CMg es mínimo. Un cambio tecnológico sube el PMg, baja el CMg y desplaza la oferta a la derecha.',
      goals: ['Deducir CVMe = w/PMe y CMg = w/PMg.', 'Explicar cómo los rendimientos decrecientes hacen subir los costos.', 'Resolver los ejercicios 3 y 8 del TP 5.'],
      body: `
        <h2>La relación matemática</h2>
        <p>Si el único factor variable es el trabajo y cada unidad cuesta w (salario), el costo variable es CV = w·L. Entonces:</p>
        ${eq(`CVMe = ${frac('CV', 'X')} = ${frac('w·L', 'X')} = ${frac('w', 'X / L')} = ${frac('w', 'PMe')}`, 'Costo variable medio')}
        ${eq(`CMg = ${frac('ΔCV', 'ΔX')} = ${frac('w·ΔL', 'ΔX')} = ${frac('w', 'ΔX / ΔL')} = ${frac('w', 'PMg')}`, 'Costo marginal')}
        <div class="figs-2">
          ${plot({ x: [0, 12], y: [-20, 140], h: 240, xl: 'L', yl: 'PMe, PMg', curves: [{ f: (l) => 10 * l + 100 - l * l, dom: [0.01, 12], cls: 'c-pme', label: 'PMe' }, { f: (l) => 20 * l + 100 - 3 * l * l, dom: [0, 11], cls: 'c-pmg', label: 'PMg' }], points: [{ x: 5, y: 125, cls: 'c-unit', label: 'máx PMe' }], alt: 'Productividades' })}
          ${plot({ x: [0, 12], y: [0, 30], h: 240, xl: 'X', yl: '$', curves: [{ f: (x) => 10 - 4 * x + 0.6 * x * x, cls: 'c-cmg', label: 'CMg' }, { f: (x) => 10 - 2 * x + 0.2 * x * x, dom: [0, 12], cls: 'c-cvme', label: 'CVMe' }], points: [{ x: 5, y: 5, cls: 'c-unit', label: 'mín CVMe', pos: 'se' }], alt: 'Costos' })}
        </div>
        <p class="muted-s">Izquierda: productividades. Derecha: costos. Donde una curva sube, su espejo baja.</p>
        ${note('Lo que hay que poder explicar (TP 5, ejercicio 3b): a medida que aumenta la producción, los rendimientos decrecientes hacen caer el PMe y el PMg; como w es constante, el CVMe y el CMg <strong>suben</strong>. Cada unidad adicional requiere cada vez más trabajo, y ese trabajo se paga.', 'exam')}
        <h2>Cambio tecnológico y oferta</h2>
        <p>Una mejora tecnológica sube la curva de PMg; con el mismo salario, el CMg baja. Como la curva de oferta de la empresa competitiva es el tramo creciente de su CMg (Tema VIII), la <strong>oferta se desplaza a la derecha</strong>. Esto conecta el Tema VII con el desplazamiento de la oferta del Tema IV.</p>
        ${flow('Cambio tecnológico', 'PMg ↑', 'CMg ↓', 'Oferta → (aumenta)')}`,
      exercises: [
        {
          official: '5.3', level: 1, title: 'Rendimientos decrecientes y costo variable medio',
          prompt: '<p>a) Explique qué se entiende por “ley de rendimientos decrecientes”. b) ¿Cómo afectan los rendimientos decrecientes al costo variable medio a medida que aumenta la producción?</p>',
          solution: { explain: '<p>a) Con un factor fijo, al agregar unidades sucesivas de un factor variable, llega un momento a partir del cual los incrementos de producción son cada vez menores. b) Como CVMe = w/PMe, cuando los rendimientos decrecientes hacen caer el PMe, el CVMe sube. Antes del óptimo técnico el PMe crece y el CVMe baja; en el óptimo técnico el CVMe es mínimo; después crece. De ahí su forma de U.</p>' },
        },
        {
          official: '5.8', level: 2, title: 'PT máximo y costos',
          prompt: '<p>Cuando el producto total llega a su máximo, ¿el costo variable promedio es igual al costo marginal? Verdadero o falso; demuestre gráficamente.</p>',
          solution: { explain: '<p><strong>Falso.</strong> En el máximo del PT el PMg = 0, así que CMg = w/PMg tiende a infinito: producir una unidad más es imposible con más trabajo. El CVMe = w/PMe, en cambio, es un número finito (el PMe es positivo). CMg y CVMe son iguales en otro punto: el mínimo del CVMe, que corresponde al óptimo técnico (PMg = PMe).</p>' },
        },
      ],
      quiz: [
        { q: 'CVMe = w/PMe implica que cuando el PMe es máximo…', o: ['el CVMe es máximo', 'el CVMe es mínimo', 'el CMg es cero', 'el CT es mínimo'], a: 1, e: 'Están en relación inversa.' },
        { q: 'Si el salario es 100 y el PMg del último trabajador es 20, el CMg es…', o: ['2.000', '5', '120', '0,2'], a: 1, e: 'CMg = w/PMg = 100/20.' },
        { q: 'Un cambio tecnológico que sube el PMg…', o: ['sube el CMg y reduce la oferta', 'baja el CMg y aumenta la oferta', 'no afecta los costos', 'sube el CF'], a: 1, e: 'Cadena: PMg ↑ → CMg ↓ → oferta →.' },
        { q: 'El mínimo del CMg corresponde al…', o: ['máximo del PMg', 'máximo del PT', 'máximo del PMe', 'mínimo del PMe'], a: 0, e: 'CMg = w/PMg.' },
      ],
      sources: [{ title: 'Diapositivas del Tema VII', ref: 'Cátedra de Economía', points: ['Relación matemática entre productividades y costos.', 'Relación entre función de producción, costos y curva de oferta.'] }],
    },

    {
      id: 'empresa-escala-beneficio',
      module: 't7',
      title: 'Etapas, costos y escala: la empresa a corto y a largo plazo',
      keywords: 'empresa objetivo maximizar beneficio rendimientos a escala crecientes constantes decrecientes largo plazo economías de escala deseconomías óptimo técnico óptimo de explotación mínimo costo total medio etapas productividad costo marginal desplazamiento curvas de costos precio factores tecnología beneficio contable económico normal extraordinario',
      tldr: 'A corto plazo manda la <mark>productividad del factor variable</mark>: sus etapas se ven al revés en los costos (cuando el PMe es máximo, el CVMe es mínimo). A largo plazo todos los factores varían y lo que importa son los <mark>rendimientos a escala</mark>. Las curvas de costos se desplazan si cambian la tecnología o los precios de los factores, y el resultado final se mide con el <strong>beneficio económico</strong>.',
      goals: ['Relacionar cada etapa de la producción con el comportamiento de los costos (pregunta del 1er parcial 2025).', 'Distinguir óptimo técnico (mín CVMe) de mínimo del CTMe.', 'Clasificar rendimientos a escala con tablas y funciones.', 'Distinguir rendimientos a escala de rendimientos decrecientes del factor variable.', 'Predecir cómo se desplazan las curvas de costos.'],
      body: `
        <h2>La empresa y su objetivo</h2>
        <p>Para Blanco, la empresa es la unidad que combina factores para producir bienes y servicios que vende en el mercado. La economía supone que su objetivo es <strong>maximizar el beneficio</strong> (Blanco 5.5.13: verdadero). Es una simplificación: en la realidad los directivos pueden buscar crecer, sobrevivir o tener prestigio, y no siempre conocen sus costos con precisión. Pero el supuesto predice bien cómo reaccionan las empresas ante cambios de precios y costos.</p>
        <h2>Etapas de la producción y costos: la misma historia contada dos veces</h2>
        <p><em>1er parcial 2025: “Explique analítica y gráficamente la relación entre productividad y costos marginales y detalle las distintas etapas de la productividad.”</em></p>
        ${eq(`CMg = ${frac('w', 'PMg')} &nbsp;&nbsp;&nbsp; CVMe = ${frac('w', 'PMe')}`, 'Con w = salario constante')}
        ${table(['Tramo', 'Productividades', 'Costos (espejo)'], [
          ['Rendimientos marginales crecientes (comienzo de la etapa I)', 'PMg sube', 'CMg baja'],
          ['Máximo del PMg', 'Empiezan los rendimientos marginales decrecientes', '<strong>Mínimo del CMg</strong>'],
          ['Resto de la etapa I', 'PMg baja pero PMg > PMe: el PMe sube', 'CMg sube pero CMg < CVMe: el CVMe baja'],
          ['<strong>Óptimo técnico</strong> (fin de la etapa I)', 'PMe máximo, PMg = PMe', '<strong>CVMe mínimo</strong>, CMg = CVMe'],
          ['Etapa II (la racional)', 'PMe y PMg bajan, PMg ≥ 0', 'CVMe y CMg suben'],
          ['<strong>Máximo técnico</strong> (fin de la etapa II)', 'PT máximo, PMg = 0', 'CMg → infinito: con más trabajo ya no se produce más'],
          ['Etapa III', 'PMg < 0', 'No tiene sentido producir ahí: la curva de costos no existe'],
        ])}
        <div class="figs-2">
          ${plot({ x: [0, 12], y: [-20, 140], h: 240, xl: 'L', yl: 'PMe, PMg', curves: [{ f: (l) => 10 * l + 100 - l * l, dom: [0.01, 12], cls: 'c-pme', label: 'PMe' }, { f: (l) => 20 * l + 100 - 3 * l * l, dom: [0, 11], cls: 'c-pmg', label: 'PMg' }], vlines: [{ x: 5, cls: 'pl-faint', label: 'II' }, { x: 10, cls: 'pl-faint', label: 'III' }], points: [{ x: 3.33, y: 133.3, cls: 'c-pmg', label: 'máx PMg', pos: 'nw' }, { x: 5, y: 125, cls: 'c-unit', label: 'óptimo técnico' }], alt: 'Etapas de la producción' })}
          ${plot({ x: [0, 12], y: [0, 30], h: 240, xl: 'X', yl: '$', curves: [{ f: (x) => 10 - 4 * x + 0.6 * x * x, cls: 'c-cmg', label: 'CMg' }, { f: (x) => 10 - 2 * x + 0.2 * x * x, dom: [0, 12], cls: 'c-cvme', label: 'CVMe' }, { f: (x) => 10 - 2 * x + 0.2 * x * x + 20 / x, dom: [0.9, 12], cls: 'c-ctme', label: 'CTMe' }], points: [{ x: 3.33, y: 3.33, cls: 'c-cmg', label: 'mín CMg', pos: 'sw' }, { x: 5, y: 5, cls: 'c-unit', label: 'mín CVMe', pos: 'se' }, { x: 6.3, y: 8.51, cls: 'c-ctme', label: 'mín CTMe', pos: 'n' }], alt: 'Costos de corto plazo' })}
        </div>
        <p class="muted-s">Izquierda: productividades (X = 10L² + 100L − L³). Derecha: costos de la lección de costos. Cada máximo de una productividad es un mínimo de su costo espejo.</p>
        <h2>Óptimo técnico y mínimo del costo total medio no son lo mismo</h2>
        <p><em>Otra versión del 1er parcial 2025: “Explique analítica y gráficamente la relación entre productividad media y costo total medio. ¿Qué es el óptimo técnico?”</em></p>
        ${eq(`CTMe = CFMe + CVMe = ${frac('CF', 'X')} + ${frac('w', 'PMe')}`)}
        <ul>
          <li>El <strong>óptimo técnico</strong> es el nivel de trabajo que hace <strong>máxima la productividad media</strong> (donde PMg = PMe). Como CVMe = w/PMe, ahí el <strong>costo variable medio es mínimo</strong>.</li>
          <li>El <strong>costo total medio</strong> no es mínimo ahí: le suma el CFMe, que sigue bajando al producir más. Su mínimo está <strong>más a la derecha</strong>, donde el CMg ya creció hasta alcanzarlo. A ese punto se lo llama <strong>óptimo de explotación</strong>, y en competencia perfecta es el <strong>punto de nivelación</strong> (Tema VIII).</li>
          <li>Por eso es falso que “el mínimo del costo medio se da al mismo nivel de producción que el mínimo del costo variable medio” (TP 5, ejercicio 9, y el parcial de 2025): solo coincidirían sin costos fijos.</li>
        </ul>
        ${note('Si la productividad media es decreciente, el costo variable medio es creciente (Blanco 5.5.14 dice “el coste medio es decreciente”: falso). Y si el costo medio crece, es porque el marginal está por encima del medio (Blanco 5.5.3: verdadero).', 'exam')}

        <h2>Largo plazo: los rendimientos a escala</h2>
        <p>A largo plazo la empresa puede cambiar <strong>todos</strong> los factores. La pregunta ya no es qué aporta un trabajador más, sino qué pasa con la producción si se multiplican <strong>todos</strong> los factores por un mismo número λ (la escala):</p>
        ${table(['Si los factores se multiplican por λ y la producción…', 'Rendimientos a escala', 'Ejemplo'], [
          ['se multiplica por más que λ', '<strong>Crecientes</strong>', 'Una planta el doble de grande produce más del doble (especialización, aprovechamiento de equipos grandes)'],
          ['se multiplica exactamente por λ', '<strong>Constantes</strong>', 'Duplicar la planta duplica la producción'],
          ['se multiplica por menos que λ', '<strong>Decrecientes</strong>', 'Una empresa demasiado grande se vuelve difícil de coordinar'],
        ])}
        <p>Las dos funciones del ejercicio 5.8.5 de Blanco, con K y L multiplicados por 1, 2, 3…:</p>
        ${table(['Escala (λ)', '1', '2', '3', '4', '5', '6'], [['X₁', '2,3', '4,6', '6,9', '9,2', '11,5', '13,8'], ['X₂', '3,5', '9,8', '18,1', '27,8', '38,9', '51,2']])}
        ${chart({ x: [0, 6.5], y: [0, 55], xl: 'Escala λ', yl: 'Producción', curves: [{ pts: [1, 2, 3, 4, 5, 6].map((k) => [k, 2.3 * k]), cls: 'c-s', label: 'X₁: constantes' }, { pts: [[1, 3.5], [2, 9.8], [3, 18.1], [4, 27.8], [5, 38.9], [6, 51.2]], cls: 'c-d', label: 'X₂: crecientes' }] }, 'X₁ crece en la misma proporción que la escala (una recta desde el origen); X₂ crece más que proporcionalmente.')}
        <p>Con funciones del tipo X = A · L<sup>a</sup> · K<sup>b</sup> alcanza con sumar los exponentes: <strong>a + b = 1</strong> constantes, <strong>&gt; 1</strong> crecientes, <strong>&lt; 1</strong> decrecientes. Blanco 5.8.2: 20L<sup>0,75</sup>K<sup>0,25</sup> (suma 1) constantes; 20L<sup>0,5</sup>K<sup>0,35</sup> (0,85) decrecientes; 20L<sup>0,75</sup>K<sup>0,75</sup> (1,5) crecientes.</p>
        ${note('<strong>No confundir</strong>: los rendimientos a escala son de <strong>largo plazo</strong> (varían todos los factores). La ley de rendimientos decrecientes es de <strong>corto plazo</strong> (hay un factor fijo). Una misma función puede tener rendimientos constantes a escala y, a la vez, productividad marginal decreciente del trabajo: X = K<sup>0,25</sup>L<sup>0,75</sup> con K = 81 fijo da X = 3L<sup>0,75</sup>, cuyo PMg = 2,25/L<sup>0,25</sup> baja con L (Blanco 5.8.3).', 'warn')}
        <h3>Escala y costos a largo plazo</h3>
        <p>Los rendimientos a escala se ven en el costo medio de largo plazo: con rendimientos crecientes, producir en mayor escala abarata cada unidad (<strong>economías de escala</strong>); con constantes, el costo medio no cambia; con decrecientes, sube (<strong>deseconomías de escala</strong>). Por eso la curva de costo medio de largo plazo suele tener forma de U: economías de escala al principio y deseconomías cuando la empresa crece demasiado (Mankiw, cap. 13).</p>
        <h2>¿Cuándo se desplazan las curvas de costos?</h2>
        ${table(['Cambio', 'Curvas de costos', 'Consecuencia'], [
          ['Mejora tecnológica', 'Se desplazan <strong>hacia abajo</strong>', 'Con PMg más alto, el CMg baja: la oferta de la empresa aumenta'],
          ['Suben los precios de los factores', 'Se desplazan <strong>hacia arriba</strong>', 'La oferta se reduce'],
          ['Todos los factores suben un 10 %', 'El CMg se multiplica por 1,1 (Blanco 5.7.4)', 'CMg₁ = 1,1w / PMg = 1,1 · CMg₀'],
          ['Cambia el precio del producto', 'Las curvas de costos no se mueven', 'La empresa se mueve <em>a lo largo</em> de su CMg (Tema VIII)'],
        ])}
        <p>Ante un incremento del precio de los factores, la que se desplaza hacia arriba es la curva de <strong>costo marginal</strong>, no la de productividad (Blanco 5.6.10: la productividad depende de la tecnología, no de los precios).</p>
        <h2>Ingresos y beneficio</h2>
        ${eq('IT = P · X &nbsp;&nbsp;&nbsp; Beneficio = IT − CT', 'Blanco 5.3.14')}
        ${table(['', 'Beneficio contable', 'Beneficio económico'], [['Resta', 'Solo los costos que figuran en la contabilidad (explícitos)', 'Los costos económicos: explícitos más implícitos (costo de oportunidad)'], ['Si es cero…', 'La empresa “no gana nada” en los libros', 'Gana <strong>lo mismo</strong> que en su mejor alternativa: <strong>beneficio normal</strong>'], ['Si es positivo…', '', '<strong>Extraordinario</strong>: gana más que en cualquier alternativa'], ['Si es negativo…', '', '<strong>Pérdida</strong>: le iría mejor en otra actividad']])}
        <p>Un beneficio económico nulo <strong>no</strong> significa que la empresa gane menos que en otras actividades: gana exactamente lo mismo (Blanco 5.5.11 es falso). Es la idea que el Tema VIII usa para explicar la entrada y salida de empresas.</p>`,
      quiz: [
        { q: 'En el óptimo técnico…', o: ['la productividad marginal es máxima', 'el producto medio es máximo', 'el producto total es máximo', 'el costo total medio es mínimo'], a: 1, e: 'Y por eso el CVMe es mínimo (no el CTMe).', src: 'Blanco 5.6.9' },
        { q: 'El mínimo del costo marginal corresponde al…', o: ['máximo del producto marginal', 'máximo del producto medio', 'máximo del producto total', 'mínimo del CTMe'], a: 0, e: 'CMg = w/PMg.' },
        { q: 'Una función tiene rendimientos crecientes a escala cuando…', o: ['los factores crecen en mayor proporción que la producción', 'los factores crecen en menor proporción que la producción', 'la producción crece al aumentar la empresa', 'la productividad del factor variable es creciente'], a: 1, e: 'La producción crece más que la escala.', src: 'Blanco 5.6.5' },
        { q: 'X = 20 L<sup>0,5</sup> K<sup>0,35</sup> tiene rendimientos a escala…', o: ['crecientes', 'constantes', 'decrecientes', 'negativos'], a: 2, e: '0,5 + 0,35 = 0,85 < 1.', src: 'Blanco 5.8.2' },
        { q: 'Al largo plazo corresponde el estudio de…', o: ['los rendimientos a escala', 'la productividad marginal de un factor variable', 'el costo fijo', 'el costo fijo medio'], a: 0, e: 'A largo plazo todos los factores varían.', src: 'Blanco 5.6.4' },
        { q: 'Ante un incremento del precio de los factores…', o: ['la productividad marginal sube', 'la productividad marginal baja', 'la curva de costo marginal se desplaza hacia arriba', 'la curva de costo marginal se desplaza hacia abajo'], a: 2, e: 'La productividad depende de la tecnología, no de los precios.', src: 'Blanco 5.6.10' },
        { q: 'Cuando el costo total medio es decreciente…', o: ['el costo marginal es inferior al costo total medio', 'el costo marginal es siempre decreciente', 'el costo marginal es superior al CTMe', 'el CMg es igual al CTMe'], a: 0, e: 'La última unidad cuesta menos que el promedio y lo baja.', src: 'Blanco 5.6.11' },
        { q: 'Un beneficio económico nulo significa que la empresa…', o: ['gana menos que en cualquier otra actividad', 'gana lo mismo que en su mejor alternativa', 'no cubre sus costos variables', 'debe cerrar'], a: 1, e: 'Es el beneficio normal.' },
      ],
      sources: [
        { title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 5 (5.3.2, 5.3.5, 5.3.12 a 5.3.14 y ejercicios)', points: ['Naturaleza y objetivo de la empresa.', 'Rendimientos a escala: crecientes, constantes y decrecientes (5.8.2 y 5.8.5).', 'Relación entre productividades y costos; desplazamiento de las curvas de costos.', 'Beneficio contable y económico; normal, extraordinario y pérdida.'] },
        { title: 'Principios de Economía', ref: 'Mankiw, cap. 13', points: ['Costos a largo plazo, economías y deseconomías de escala.'] },
      ],
    },
  );
})();
