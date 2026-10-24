/* Tema VI: Elasticidad. Diapositivas "TEMA VI ELASTICIDAD 2026", Blanco cap. 3, Mankiw cap. 5. TP 4. */
(() => {
  const { LESSONS, h } = window.GUIDE;
  const { note, def, table, chart, eq, frac, num, lab, plot, flow } = h;

  LESSONS.push(
    {
      id: 'elasticidad-precio',
      module: 't6',
      title: 'Elasticidad precio de la demanda',
      keywords: 'elasticidad precio demanda ep porcentual arco punto pendiente elástica inelástica unitaria perfectamente determinantes sustitutos lujo necesidad horizonte adicción',
      tldr: 'La elasticidad precio mide <mark>cuánto cambia en % la cantidad demandada cuando el precio cambia 1 %</mark>. Si |Ep| > 1 la demanda es elástica; si |Ep| < 1, inelástica; si |Ep| = 1, unitaria. Se calcula entre dos puntos (arco) o en un punto con la pendiente.',
      goals: ['Explicar por qué se usan variaciones porcentuales.', 'Calcular la elasticidad arco y la elasticidad en un punto.', 'Clasificar la demanda y nombrar sus casos extremos.', 'Explicar los determinantes de la elasticidad.'],
      body: `
        <h2>Qué mide</h2>
        <p>En física, elasticidad es la capacidad de un objeto de recuperar su forma. En economía es la <strong>sensibilidad</strong> de una variable ante el cambio de otra que la determina. La elasticidad precio de la demanda (E<sub>p</sub>) mide cuánto varía la cantidad demandada de un bien ante una variación de su precio, ceteris paribus.</p>
        <p>Las diapositivas parten de tres demandas que pasan por el mismo punto (P = 2, X = 10) y bajan el precio un 50 %:</p>
        ${table(['Demanda', 'X pasa de 10 a…', 'ΔX %', 'Tipo'], [['1', '20', '+100 %', 'Elástica (reacciona más que el precio)'], ['2', '15', '+50 %', 'Unitaria'], ['3', '12,5', '+25 %', 'Inelástica']])}
        <h2>Por qué en porcentajes</h2>
        <p>El cociente ΔX/ΔP mezcla unidades (kilos contra pesos) y cambia si medimos en gramos o en dólares. Usando variaciones relativas el resultado no tiene unidades y se puede comparar entre bienes:</p>
        ${eq(`E<sub>p</sub> = ${frac('variación % de X<sub>d</sub>', 'variación % de P<sub>x</sub>')} = ${frac('ΔX / X', 'ΔP / P')} = ${frac('ΔX', 'ΔP')} · ${frac('P', 'X')}`, 'Elasticidad precio')}
        <p>Ejemplo de la diapositiva con X = 250 − 2P: el precio pasa de 100 a 102 (+2 %) y la cantidad de 50 a 46 (−8 %). E<sub>p</sub> = −8 % / 2 % = <strong>−4</strong>. Con la fórmula: (−4/2)·(100/50) = −4.</p>
        <h2>Elasticidad arco: el problema del punto de partida</h2>
        <p>Si calculamos de A a B usamos P<sub>0</sub>/X<sub>0</sub>; de B a A, P<sub>1</sub>/X<sub>1</sub>: dan resultados distintos. La <strong>elasticidad arco</strong> lo resuelve usando los promedios:</p>
        ${eq(`E<sub>arco</sub> = ${frac('ΔX', 'ΔP')} · ${frac('(P<sub>0</sub> + P<sub>1</sub>) / 2', '(X<sub>0</sub> + X<sub>1</sub>) / 2')} = ${frac('ΔX', 'ΔP')} · ${frac('P<sub>0</sub> + P<sub>1</sub>', 'X<sub>0</sub> + X<sub>1</sub>')}`, 'Arco (punto medio)')}
        <h2>Elasticidad en un punto</h2>
        <p>Si el cambio es infinitesimal, ΔX/ΔP se vuelve la derivada dX/dP, la pendiente de la demanda escrita como X = f(P):</p>
        ${eq(`E<sub>p</sub> = ${frac('dX', 'dP')} · ${frac('P<sub>0</sub>', 'X<sub>0</sub>')}`, 'Punto')}
        <p>El signo es negativo porque la demanda tiene pendiente negativa. Se interpreta en valor absoluto: E<sub>p</sub> = −3 significa que si el precio cae 1 %, la cantidad demandada sube 3 % (reacciona tres veces más rápido que el precio).</p>
        ${table(['Valor de |E<sub>p</sub>|', 'Demanda', 'Significa'], [['|E<sub>p</sub>| > 1', '<strong>Elástica</strong>', 'X cambia proporcionalmente más que P'], ['|E<sub>p</sub>| = 1', '<strong>Unitaria</strong>', 'Cambian en la misma proporción'], ['|E<sub>p</sub>| < 1', '<strong>Inelástica</strong>', 'X cambia proporcionalmente menos que P'], ['E<sub>p</sub> = 0', 'Perfectamente inelástica (vertical)', 'Se compra lo mismo a cualquier precio: insulina para un diabético'], ['E<sub>p</sub> = ∞', 'Perfectamente elástica (horizontal)', 'A un precio apenas mayor la cantidad cae a cero']])}
        <div class="figs-2">
          ${plot({ x: [0, 10], y: [0, 10], h: 230, curves: [{ pts: [[5, 0.3], [5, 9.5]], cls: 'c-d', label: 'Ep = 0' }], alt: 'Demanda perfectamente inelástica' })}
          ${plot({ x: [0, 10], y: [0, 10], h: 230, curves: [{ pts: [[0, 5], [9.5, 5]], cls: 'c-d', label: 'Ep = ∞' }], alt: 'Demanda perfectamente elástica' })}
        </div>
        <h2>Pendiente no es elasticidad</h2>
        <p>En una demanda lineal la pendiente es la misma en todos los puntos, pero P/X cambia: arriba (P alto, X bajo) la demanda es elástica; abajo, inelástica; en el <strong>punto medio</strong>, unitaria. Probalo:</p>
        ${lab(0)}
        <p>Si la demanda es una <strong>hipérbola equilátera</strong> (X = k/P), la elasticidad es unitaria en todos sus puntos y el gasto P·X es siempre el mismo.</p>
        <h2>¿De qué depende la elasticidad?</h2>
        ${table(['Determinante', 'Más elástica cuando…'], [['Tipo de producto', 'Es un bien de lujo y no de primera necesidad'], ['Sustitutos', 'Tiene muchos sustitutos cercanos'], ['Proporción de la renta', 'Representa una parte grande del presupuesto'], ['Horizonte temporal', 'Se considera un período largo (hay tiempo para adaptarse)'], ['Adicción', 'No genera adicción']])}
        ${note('TP 4, ejercicio 4: la demanda es <strong>más inelástica</strong> cuanto más imprescindible es el bien, cuantos <strong>menos</strong> sustitutos tiene (el enunciado dice “más”: es una trampa, con más sustitutos sería más elástica), cuanto más corto es el período, cuanto menos pesa en el presupuesto y cuanta más adicción genera.', 'exam')}`,
      labs: [{ type: 'elasticity', title: 'Elasticidad a lo largo de una demanda lineal', intro: 'Demanda X = 200 − 2P (la del TP 4, ejercicio 3b). Mové el precio: arriba del punto medio el tramo es elástico, abajo inelástico. El rectángulo es el ingreso total.', a: 200, b: 2 }],
      exercises: [
        {
          official: '4.1', level: 2, title: 'Elasticidad arco e ingresos',
          prompt: '<p>Al bajar el precio de 5 a 4,5 euros, la cantidad demandada sube de 200.000 a 230.000 unidades. a) Calcule la elasticidad arco. b) ¿En qué porcentaje se reduciría la cantidad si el precio subiera un 2 %? c) ¿Aumentan o disminuyen los ingresos de los vendedores al subir el precio?</p>',
          solution: { explain: `
            ${eq(`E = ${frac('30.000', '−0,5')} · ${frac('5 + 4,5', '200.000 + 230.000')} = −60.000 · ${frac('9,5', '430.000')} = <strong>−1,33</strong>`)}
            <p><strong>a)</strong> |E| = 1,33 > 1: demanda <strong>elástica</strong>.</p>
            <p><strong>b)</strong> ΔX % = E · ΔP % = −1,33 × 2 % ≈ <strong>−2,65 %</strong>. Porque la cantidad reacciona 1,33 veces más que el precio.</p>
            <p><strong>c)</strong> <strong>Disminuyen</strong>: con demanda elástica, la caída porcentual de la cantidad supera la suba del precio. (Verificación: 5 × 200.000 = 1.000.000 < 4,5 × 230.000 = 1.035.000: al bajar el precio el ingreso subió; al subirlo, baja.)</p>` },
        },
        {
          official: '4.3', level: 1, title: 'Elasticidad en un punto',
          prompt: '<p>Calcule la elasticidad precio en P<sub>x</sub> = 50 para: a) X<sub>d</sub> = 150 − 2P<sub>x</sub>; b) X<sub>d</sub> = 200 − 2P<sub>x</sub>; c) X<sub>d</sub> = 150 − P<sub>x</sub>.</p>',
          solution: { explain: table(['Curva', 'X en P = 50', 'dX/dP', 'E = (dX/dP)·(P/X)', 'Tipo'], [['a) 150 − 2P', '50', '−2', '−2 · 50/50 = <strong>−2</strong>', 'Elástica'], ['b) 200 − 2P', '100', '−2', '−2 · 50/100 = <strong>−1</strong>', 'Unitaria'], ['c) 150 − P', '100', '−1', '−1 · 50/100 = <strong>−0,5</strong>', 'Inelástica']]) + '<p>Fijate a) y b): misma pendiente, distinta elasticidad.</p>' },
        },
        {
          official: '4.4', level: 1, title: 'Determinantes de la inelasticidad',
          prompt: '<p>Explique por qué la demanda será más inelástica: a) cuanto más imprescindible sea el bien; b) cuantos más sustitutivos tenga; c) cuanto más corto sea el período; d) cuanto menos represente en el presupuesto; e) cuanta más adicción genere.</p>',
          solution: { explain: `<ul>
            <li><strong>a)</strong> Si es imprescindible (agua, insulina), aunque suba el precio no se puede dejar de comprar.</li>
            <li><strong>b)</strong> <strong>Ojo: es al revés.</strong> Con más sustitutos la demanda es más <em>elástica</em>, porque ante una suba los consumidores se cambian. Será más inelástica cuantos <em>menos</em> sustitutos tenga.</li>
            <li><strong>c)</strong> En el corto plazo no hay tiempo para cambiar hábitos ni buscar alternativas (no se cambia el auto a gas de un día para otro).</li>
            <li><strong>d)</strong> Si el gasto es pequeño (sal, fósforos), una suba de precio casi no afecta el presupuesto y no se reduce el consumo.</li>
            <li><strong>e)</strong> La adicción hace que el consumo sea casi independiente del precio (tabaco, drogas).</li></ul>` },
        },
      ],
      quiz: [
        { q: 'Si el precio sube 10 % y la cantidad demandada baja 5 %, la demanda es…', o: ['elástica', 'inelástica', 'unitaria', 'perfectamente elástica'], a: 1, e: '|Ep| = 0,5 < 1.' },
        { q: 'Una demanda perfectamente inelástica se grafica…', o: ['horizontal', 'vertical', 'con pendiente positiva', 'como hipérbola'], a: 1, e: 'Se compra la misma cantidad a cualquier precio.' },
        { q: 'En una demanda lineal, la elasticidad unitaria está…', o: ['en el corte con el eje de precios', 'en el punto medio', 'en el corte con el eje de cantidades', 'en todos los puntos'], a: 1, e: 'Arriba es elástica y abajo inelástica.' },
        { q: '¿Para qué sirve la elasticidad arco?', o: ['Para calcular la pendiente', 'Para que el resultado no dependa del punto de partida', 'Para curvas verticales', 'Para la oferta solamente'], a: 1, e: 'Usa precios y cantidades promedio.' },
        { q: 'X = 250 − 2P. ¿Cuánto vale Ep en P = 100?', o: ['−2', '−4', '−0,25', '−1'], a: 1, e: 'X = 50; Ep = −2 · 100/50 = −4.' },
        { q: '¿Qué bien tendrá una demanda más elástica?', o: ['La sal', 'Una marca específica de gaseosa', 'La insulina', 'El agua potable'], a: 1, e: 'Tiene muchísimos sustitutos cercanos.' },
        { q: 'La demanda de nafta, ¿es más elástica a corto o a largo plazo?', o: ['A corto plazo', 'A largo plazo', 'Es igual', 'Nunca es elástica'], a: 1, e: 'Con tiempo se cambia de auto, de transporte o de domicilio.' },
      ],
      sources: [{ title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 3', points: ['Elasticidad precio, arco y punto; determinantes.'] }, { title: 'Principios de Economía', ref: 'Mankiw, cap. 5', points: ['Clasificación de las curvas de demanda según su elasticidad.'] }],
    },

    {
      id: 'elasticidad-ingreso-total',
      module: 't6',
      title: 'Elasticidad e ingreso total',
      keywords: 'ingreso total gasto elasticidad máximo ingreso derivada unitaria afa entradas sequía agricultores drogas transporte',
      tldr: 'El ingreso total es P·X. Si la demanda es <mark>elástica</mark>, subir el precio <mark>baja</mark> el ingreso; si es <mark>inelástica</mark>, lo <mark>sube</mark>. El ingreso es máximo donde la elasticidad es unitaria. Ojo: máximo ingreso no es máximo beneficio.',
      goals: ['Predecir qué pasa con el ingreso total ante un cambio de precio.', 'Calcular el precio que maximiza el ingreso.', 'Resolver los casos de la AFA y de la sequía.'],
      body: `
        <h2>La regla</h2>
        ${table(['Demanda', 'Si el precio sube…', 'Si el precio baja…'], [['Elástica (|E| > 1)', 'IT ↓', 'IT ↑'], ['Unitaria (|E| = 1)', 'IT no cambia', 'IT no cambia'], ['Inelástica (|E| < 1)', 'IT ↑', 'IT ↓']])}
        <p>La razón: el ingreso es P·X, y el precio y la cantidad se mueven en direcciones opuestas. Gana el efecto que es proporcionalmente más grande.</p>
        <h2>El ingreso máximo</h2>
        <p>Ejemplo de la diapositiva con X<sub>d</sub> = 8 − 2P, es decir P = 4 − X/2:</p>
        ${eq(`IT = P · X = (4 − ½X) · X = 4X − ½X² &nbsp;⇒&nbsp; ${frac('dIT', 'dX')} = 4 − X = 0 &nbsp;⇒&nbsp; X = 4, P = 2, IT<sub>máx</sub> = 8`)}
        <p>En ese punto E = −2 · 2/4 = −1: <strong>el ingreso es máximo donde la elasticidad es unitaria</strong>.</p>
        ${chart({ x: [0, 9], y: [0, 9], xl: 'X', yl: 'P, IT', curves: [{ f: (x) => 4 - x / 2, dom: [0, 8], cls: 'c-d', label: 'D' }, { f: (x) => 4 * x - x * x / 2, dom: [0, 8], cls: 'c-it', label: 'IT' }], points: [{ x: 4, y: 8, cls: 'c-unit', label: 'IT máx = 8' }, { x: 4, y: 2, cls: 'c-unit', label: '|E| = 1' }], vlines: [{ x: 4, cls: 'pl-faint' }] }, 'A la izquierda de X = 4 la demanda es elástica y bajar el precio aumenta el ingreso; a la derecha, inelástica.')}
        ${note('<strong>Máximo ingreso ≠ máximo beneficio.</strong> El ingreso máximo no considera costos. El beneficio máximo se busca con IMg = CMg (Tema VIII).', 'warn')}
        <h2>Aplicaciones</h2>
        <h3>Drogas y sustancias adictivas</h3>
        <p>Su demanda es muy inelástica. Si el Estado combate la oferta (decomisos), el precio sube mucho, la cantidad baja poco y el gasto total de los adictos <strong>aumenta</strong>, lo que puede aumentar los delitos para financiarlo. Políticas sobre la demanda (prevención, tratamiento) bajan precio y cantidad.</p>
        <h3>Transporte público</h3>
        <p>A corto plazo la demanda es inelástica: subir el boleto aumenta la recaudación. A largo plazo, con más alternativas (moto, auto, bicicleta), se vuelve más elástica.</p>
        <h3>La sequía y los agricultores (TP 4, ejercicio 12)</h3>
        ${chart({ x: [0, 10], y: [0, 10], curves: [{ f: (x) => 9.5 - 1.8 * x, dom: [0, 5.2], cls: 'c-d', label: 'D inelástica' }, { f: (x) => 1 + 0.5 * x, cls: 'c-s', ghost: true, label: 'O₀' }, { f: (x) => 3 + 0.5 * x, cls: 'c-s', label: 'O₁ (sequía)' }],
          areas: [{ pts: [[0, 0], [0, 4.41], [2.83, 4.41], [2.83, 0]], cls: 'a-it' }], points: [{ x: 3.70, y: 2.85, cls: 'pl-old', label: 'E₀' }, { x: 2.83, y: 4.41, cls: 'c-eq', label: 'E₁' }], guides: [{ x: 3.70, y: 2.85, xt: 'X₀', yt: 'P₀' }, { x: 2.83, y: 4.41, xt: 'X₁', yt: 'P₁' }] }, 'Con demanda inelástica, la caída de la oferta sube mucho el precio y reduce poco la cantidad: el ingreso P₁·X₁ supera a P₀·X₀.')}
        <p>Sí es posible. Una sequía mundial reduce la oferta de granos. Como los alimentos tienen demanda inelástica, el precio sube proporcionalmente más de lo que cae la cantidad, y el ingreso total de los agricultores <strong>aumenta</strong>. Ojo: es en conjunto; el productor cuya cosecha se perdió entera no gana nada.</p>`,
      exercises: [
        {
          official: '4.8', level: 1, title: 'Precio de máximo ingreso',
          prompt: '<p>¿A qué precio debería venderse un bien cuya demanda es X<sub>d</sub> = 200 − 4P para que los ingresos sean máximos?</p>',
          solution: { explain: `<p>IT = P·(200 − 4P) = 200P − 4P². dIT/dP = 200 − 8P = 0 → <strong>P = 25</strong>, X = 100, IT = <strong>2.500</strong>. Verificación: E = −4 · 25/100 = −1 ✔.</p>` },
        },
        {
          official: '4.9', level: 2, title: 'Dos rentas, dos demandas',
          prompt: '<p>Con renta de $10 millones la demanda es X<sub>d</sub> = 40 − 2P; con $12 millones, X<sub>d</sub>′ = 60 − 2P. a) Grafique. b) Elasticidad precio (arco) cuando el precio sube de 8 a 10 con renta de 10 millones. c) Ídem con renta de 12 millones. d) Precio de máximo ingreso para cada renta.</p>',
          solution: { explain: `
            ${chart({ x: [0, 65], y: [0, 32], curves: [{ f: (x) => (40 - x) / 2, dom: [0, 40], cls: 'c-d', label: 'R = 10' }, { f: (x) => (60 - x) / 2, dom: [0, 60], cls: 'c-d', dash: true, label: 'R = 12' }], points: [{ x: 20, y: 10, cls: 'c-unit', label: 'IT máx', pos: 'sw' }, { x: 30, y: 15, cls: 'c-unit', label: 'IT máx' }] }, 'Con más renta la demanda se desplaza a la derecha: el bien es normal.')}
            <p><strong>b)</strong> R = 10: X pasa de 24 a 20. E = (−4/2) · (18/44) = <strong>−0,82</strong> (inelástica).</p>
            <p><strong>c)</strong> R = 12: X pasa de 44 a 40. E = (−4/2) · (18/84) = <strong>−0,43</strong> (más inelástica: al mismo precio se compra más, así que el precio pesa menos).</p>
            <p><strong>d)</strong> IT = P(40 − 2P) → máximo en <strong>P = 10</strong> (X = 20, IT = 200). IT = P(60 − 2P) → <strong>P = 15</strong> (X = 30, IT = 450).</p>` },
        },
        {
          official: '4.11', level: 2, title: '¿Bajar las entradas para llenar los estadios?',
          prompt: '<p>¿Es razonable que la AFA rebaje los precios de las entradas para llenar los estadios? Justifique y grafique.</p>',
          solution: { explain: '<p>Depende de la elasticidad en el tramo actual. Si la demanda es <strong>elástica</strong> (hay sustitutos: verlo por TV o streaming, otros entretenimientos; y la entrada pesa en el presupuesto), bajar el precio aumenta la cantidad más que proporcionalmente: se llenan las tribunas <em>y</em> sube la recaudación. Si fuera <strong>inelástica</strong> (fanáticos que van igual, partidos importantes), bajar el precio llenaría algo más el estadio pero <em>reduciría</em> el ingreso. Hay además un límite físico: la capacidad del estadio hace que la oferta sea vertical; si con el precio actual ya se agotan las entradas, bajarlo solo genera escasez (colas, reventa). Gráfico: ubicá el punto actual en la parte superior (elástica) de la demanda lineal del laboratorio y bajá el precio.</p>' },
        },
        {
          official: '4.12', level: 2, title: 'Sequía mundial y agricultores',
          prompt: '<p>¿Es posible que una sequía en todo el mundo incremente los ingresos totales de los agricultores que producen granos? ¿En qué casos? Explique analítica y gráficamente.</p>',
          solution: { explain: '<p>Sí, si la demanda de granos es <strong>inelástica</strong> (|E| < 1), lo cual es típico de los alimentos básicos. La sequía desplaza la oferta a la izquierda: el precio sube y la cantidad baja. Con demanda inelástica, ΔP % > |ΔX %| y el ingreso total P·X aumenta (gráfico de la lección). Si la demanda fuera elástica, el ingreso caería. Además, debe ser una sequía <em>mundial</em>: si fuera solo local, el precio internacional casi no cambiaría (la demanda que enfrenta un país pequeño es casi perfectamente elástica) y los productores afectados solo perderían.</p>' },
        },
      ],
      quiz: [
        { q: 'Si la demanda es inelástica y el precio sube, el ingreso total…', o: ['sube', 'baja', 'no cambia', 'se vuelve cero'], a: 0, e: 'La cantidad baja proporcionalmente menos de lo que sube el precio.' },
        { q: 'El ingreso total es máximo cuando…', o: ['el precio es máximo', '|E| = 1', '|E| > 1', 'la cantidad es máxima'], a: 1, e: 'En una demanda lineal, en el punto medio.' },
        { q: 'X = 200 − 4P. El precio de máximo ingreso es…', o: ['50', '25', '100', '20'], a: 1, e: 'IT = 200P − 4P² → P = 25.' },
        { q: 'Una empresa con demanda elástica quiere aumentar su ingreso. Debería…', o: ['subir el precio', 'bajar el precio', 'mantener el precio', 'cerrar'], a: 1, e: 'Con demanda elástica, bajar el precio aumenta el ingreso.' },
        { q: 'Si el Estado reduce la oferta de drogas, el gasto total de los consumidores adictos…', o: ['baja mucho', 'aumenta', 'no cambia', 'se vuelve cero'], a: 1, e: 'La demanda es muy inelástica.' },
      ],
      sources: [{ title: 'Diapositivas del Tema VI', ref: 'Cátedra de Economía', points: ['Elasticidad e ingresos totales; ingreso máximo sin considerar costos.', 'Aplicaciones: drogas y transporte público.'] }],
    },

    {
      id: 'elasticidad-parcial',
      module: 't6',
      title: 'Elasticidad en el parcial: porcentajes, gasto y casos típicos',
      keywords: 'elasticidad parcial porcentaje cantidad demandada ingresos totales gasto 30 15 gerente baja precios 25 20 ventas demanda rectilínea máximo ingreso punto medio precio elasticidad dada 150 elasticidad renta pronóstico 1000 unidades cualquier precio buenas cosechas paradoja abundancia agricultores aumento demanda ingresos disminución oferta',
      tldr: 'Casi todas las preguntas de elasticidad del parcial se resuelven con tres herramientas: <mark>E = %ΔX / %ΔP</mark>, la <mark>regla del ingreso total</mark> (si precio y gasto se mueven en el mismo sentido, la demanda es inelástica) y la <mark>multiplicación de factores</mark> para combinar porcentajes: (1 + %ΔP)(1 + %ΔX) = 1 + %ΔIT. Acá están resueltos todos los casos que tomó la cátedra.',
      goals: ['Combinar variaciones porcentuales de precio, cantidad e ingreso sin errores.', 'Decidir si una baja de precios conviene para los ingresos.', 'Encontrar el precio que da una elasticidad determinada en una demanda lineal.', 'Pronosticar ventas con la elasticidad renta.', 'Explicar cuándo una buena cosecha perjudica a los agricultores y cuándo un cambio de demanda u oferta sube el ingreso.'],
      body: `
        <h2>La convención de signo</h2>
        <p>Blanco define la elasticidad precio con un signo menos delante, para que dé un número <strong>positivo</strong>:</p>
        ${eq(`ε<sub>p</sub> = − ${frac('dX', 'dP')} · ${frac('P', 'X')} &nbsp;&nbsp; (positiva)`, 'Blanco y las diapositivas')}
        <p>Mankiw y otros textos la dejan negativa y la leen en valor absoluto. Da lo mismo, siempre que se interprete bien: <strong>elástica si es mayor que 1</strong> en valor absoluto. Con esta convención, “si la elasticidad precio es 0,9 la demanda es elástica” es <strong>falso</strong> (Blanco 3.5.14): es inelástica.</p>

        <h2>Combinar porcentajes: la cuenta que más se equivoca</h2>
        <p>El ingreso total (gasto de los consumidores) es IT = P · X. Si el precio cambia un p % y la cantidad un q %, el ingreso nuevo es:</p>
        ${eq(`IT<sub>1</sub> = P<sub>0</sub>(1 + p) · X<sub>0</sub>(1 + q) &nbsp;⇒&nbsp; <strong>1 + %ΔIT = (1 + %ΔP) · (1 + %ΔX)</strong>`, 'Exacta')}
        <p>Para cambios chicos vale la aproximación %ΔIT ≈ %ΔP + %ΔX. Lo que <strong>nunca</strong> vale es multiplicar los porcentajes entre sí (%ΔIT = %ΔP · %ΔX): con 15 % y −30 % daría −4,5 %, un número sin sentido.</p>
        ${note('En una resolución que circula del parcial se escribió “%ΔIT = %ΔP · %ΔX” y se obtuvo %ΔP = −50 %. Es un error: si la cantidad cae 30 % y el ingreso sube 15 %, el precio tuvo que <strong>subir</strong>, no bajar. La conclusión (inelástica) era correcta, pero por casualidad: corregí la cuenta como se muestra abajo.', 'warn')}

        <h2>Caso 1: la cantidad cae 30 % y el ingreso sube 15 %</h2>
        <p><em>1er parcial 2023 y recuperatorio 2024: “Un cambio en el precio causa que la cantidad demandada de un bien disminuya 30 %, mientras que los ingresos totales del bien aumentan 15 %. ¿La curva de demanda es elástica o inelástica? Explique.”</em></p>
        ${flow('1,15 = (1 + p) · 0,70', '1 + p = 1,15 / 0,70 = 1,643', 'El precio subió 64,3 %', 'ε = 30 % / 64,3 % = 0,47 < 1', 'Inelástica')}
        <p>Con el método arco (más preciso para un cambio tan grande): si P pasa de 100 a 164,3 y X de 100 a 70, ε = (30 / 85) / (64,3 / 132,1) = 0,353 / 0,486 = <strong>0,73</strong>. También menor que 1.</p>
        ${note('<strong>El atajo que vale el punto entero</strong>: subió el precio (porque cayó la cantidad, y la demanda tiene pendiente negativa) y subió el ingreso. Precio e ingreso en el <strong>mismo sentido</strong> ⇒ demanda <strong>inelástica</strong>. Si fueran en sentido contrario, elástica. Explicalo así y después hacé la cuenta.', 'exam')}

        <h2>Caso 2: el gerente baja los precios (1er parcial 2025)</h2>
        <p><em>“Si el gerente de una empresa propone una baja de los precios para aumentar las ventas, cuando la cantidad vendida aumenta un 20 % luego que bajaron los precios un 25 %, ¿es la decisión correcta?”</em></p>
        ${table(['Variante del enunciado', 'Ingreso nuevo / ingreso viejo', 'ε (arco)', 'Demanda', '¿Correcta para el ingreso?'], [
          ['Baja 25 %, cantidad +20 % (tema 3)', '0,75 · 1,20 = <strong>0,90</strong> (−10 %)', '18,2 % / 28,6 % = 0,64', 'Inelástica', '<strong>No</strong>: vende más unidades pero ingresa 10 % menos'],
          ['Propone <em>subir</em> precios con los mismos datos (otro tema)', 'Con demanda inelástica, subir el precio aumenta el ingreso', '0,64', 'Inelástica', '<strong>Sí</strong>'],
          ['Baja 15 %, cantidad +20 % (otro tema 2025)', '0,85 · 1,20 = <strong>1,02</strong> (+2 %)', '18,2 % / 16,2 % = 1,12', 'Elástica', '<strong>Sí</strong>, si el objetivo es el ingreso'],
        ])}
        <p>Matices que conviene escribir: “ventas” puede significar unidades (que siempre suben al bajar el precio) o pesos facturados (que dependen de la elasticidad). Y aun con ingreso mayor, producir más cuesta más: la decisión correcta para el <strong>beneficio</strong> depende también de los costos (Tema VIII). La pregunta apunta al ingreso.</p>

        <h2>Caso 3: la demanda rectilínea y el máximo ingreso</h2>
        <p><em>Recuperatorio de diciembre 2024: “Dada una curva de demanda rectilínea, ¿en qué punto los vendedores tendrán mayores ingresos? Grafique y justifique.”</em></p>
        ${chart({ x: [0, 160], y: [0, 160], curves: [{ f: (x) => 150 - x, dom: [0, 150], cls: 'c-d', label: 'X = 150 − P' }],
          points: [{ x: 50, y: 100, cls: 'c-el', label: 'ε = 2 (elástica)' }, { x: 75, y: 75, cls: 'c-unit', label: 'ε = 1: IT máximo' }, { x: 100, y: 50, cls: 'c-inel', label: 'ε = 0,5 (inelástica)' }],
          guides: [{ x: 75, y: 75, xt: '75', yt: '75' }] },
          'Arriba del punto medio la demanda es elástica: bajar el precio sube el ingreso. Abajo es inelástica: bajarlo lo reduce. El máximo está en el punto medio.')}
        <ul>
          <li>Con X = a − bP: IT = P(a − bP) = aP − bP². El máximo está donde dIT/dP = a − 2bP = 0 ⇒ <strong>P = a / 2b</strong>, la mitad del precio máximo, y X = a/2, la mitad de la cantidad máxima: el <strong>punto medio</strong>.</li>
          <li>Ahí la elasticidad vale exactamente 1. A la izquierda (precios altos) es elástica; a la derecha, inelástica. La elasticidad <strong>crece al aumentar el precio</strong> (Blanco 3.6.5).</li>
          <li>Justificación económica (Blanco 3.8.3 c): cuanto más alto el precio, más sustitutos encuentran los consumidores.</li>
        </ul>

        <h2>Caso 4: ¿a qué precio la elasticidad vale tanto?</h2>
        <p><em>Blanco 3.8.3, en la recopilación de parciales: “La curva de demanda de un bien es Xd = 150 − P. a) Calcule el precio para el que la elasticidad es 0,5. b) Es 1. c) Es 2.”</em></p>
        ${eq(`ε = − ${frac('dX', 'dP')} · ${frac('P', 'X')} = 1 · ${frac('P', '150 − P')} &nbsp;⇒&nbsp; P = ${frac('150 ε', '1 + ε')}`)}
        ${table(['ε buscada', 'Ecuación', 'Precio', 'Cantidad'], [['0,5', 'P / (150 − P) = 0,5', '<strong>50</strong>', '100'], ['1', 'P / (150 − P) = 1', '<strong>75</strong>', '75'], ['2', 'P / (150 − P) = 2', '<strong>100</strong>', '50']])}
        <p>En general, con X = a − bP: ε = bP / (a − bP), y despejando, <strong>P = ε · a / [b (1 + ε)]</strong>.</p>

        <h2>Caso 5: pronosticar con la elasticidad renta</h2>
        <p><em>1er parcial Civil 2022: “Un empresario que fabrica un producto cuya elasticidad ingreso es +2 vende 1.000 unidades mensuales. Si se espera que los ingresos de la comunidad aumenten un 3 %…”</em></p>
        <p>%ΔX = E<sub>R</sub> · %ΔR = 2 · 3 % = 6 % ⇒ 1.000 · 1,06 = <strong>1.060 unidades</strong> (opción d). Es un bien de lujo: las ventas crecen el doble que la renta.</p>

        <h2>Caso 6: el gasto aumenta cuando baja el precio</h2>
        <p>Si al bajar el precio el gasto de los consumidores (= ingreso de los vendedores) <strong>aumenta</strong>, precio y gasto se movieron en sentido contrario: la demanda es <strong>elástica</strong> (opción b del parcial de Civil 2022). Decir “bien inferior” o “bien normal” no corresponde: eso se decide con la elasticidad renta, no con la precio (Blanco 3.8.1 d).</p>

        <h2>Caso 7: ¿cuándo un cambio de demanda o de oferta sube el ingreso?</h2>
        <p><em>1er parcial 2025: “¿En qué casos un aumento de la demanda producirá un aumento en los ingresos?”</em> y su espejo, <em>“¿En qué caso una disminución de la oferta producirá un aumento en los ingresos?”</em></p>
        <div class="figs-2">
          ${h.plot({ x: [0, 10], y: [0, 10], h: 250, curves: [{ f: (x) => 9 - 0.8 * x, cls: 'c-d', ghost: true, label: 'D₀' }, { f: (x) => 11 - 0.8 * x, cls: 'c-d', label: 'D₁' }, { f: (x) => 1 + 0.8 * x, cls: 'c-s', label: 'O' }], areas: [{ pts: [[0, 0], [6.25, 0], [6.25, 6], [0, 6]], cls: 'a-it' }], points: [{ x: 5, y: 5, cls: 'pl-old', label: 'E₀', pos: 'w' }, { x: 6.25, y: 6, cls: 'c-eq', label: 'E₁' }], alt: 'Aumento de la demanda: suben precio y cantidad' })}
          ${h.plot({ x: [0, 10], y: [0, 10], h: 250, curves: [{ f: (x) => 9.5 - 1.8 * x, dom: [0, 5.2], cls: 'c-d', label: 'D inelástica' }, { f: (x) => 1 + 0.5 * x, cls: 'c-s', ghost: true, label: 'O₀' }, { f: (x) => 3 + 0.5 * x, cls: 'c-s', label: 'O₁' }], areas: [{ pts: [[0, 0], [2.83, 0], [2.83, 4.41], [0, 4.41]], cls: 'a-it' }], points: [{ x: 3.7, y: 2.85, cls: 'pl-old', label: 'E₀', pos: 'e' }, { x: 2.83, y: 4.41, cls: 'c-eq', label: 'E₁' }], alt: 'Caída de la oferta con demanda inelástica' })}
        </div>
        <ul>
          <li><strong>Aumento de la demanda</strong>: con una oferta de pendiente positiva, suben el precio <em>y</em> la cantidad, así que el ingreso P·X <strong>siempre aumenta</strong>. Lo que cambia es cómo: si la oferta es inelástica, sobre todo por precio; si es elástica, sobre todo por cantidad. En los casos extremos también aumenta: con oferta vertical solo sube P; con oferta horizontal solo sube X.</li>
          <li><strong>Disminución de la oferta</strong>: sube el precio y cae la cantidad. El ingreso aumenta <strong>solo si la demanda es inelástica</strong> (el precio sube proporcionalmente más de lo que cae la cantidad). Es el caso de la sequía del TP 4.</li>
        </ul>

        <h2>Caso 8: ¿pueden ser malas las buenas cosechas?</h2>
        <p><em>Blanco 3.9.21, tomado en el 1er parcial 3K2 2022 y en el de 2024: “¿Es posible que los años de buenas cosechas sean perjudiciales para los agricultores? ¿Qué condiciones deben darse para ello? ¿Se dan generalmente? Razone y dibuje el gráfico.”</em></p>
        ${chart({ x: [0, 10], y: [0, 10], curves: [{ f: (x) => 9.5 - 1.8 * x, dom: [0, 5.2], cls: 'c-d', label: 'D inelástica' }, { f: (x) => 3 + 0.5 * x, cls: 'c-s', ghost: true, label: 'O₀' }, { f: (x) => 1 + 0.5 * x, cls: 'c-s', label: 'O₁ (buena cosecha)' }],
          areas: [{ pts: [[0, 0], [2.83, 0], [2.83, 4.41], [0, 4.41]], cls: 'a-warn' }, { pts: [[0, 0], [3.7, 0], [3.7, 2.85], [0, 2.85]], cls: 'a-it' }],
          points: [{ x: 2.83, y: 4.41, cls: 'pl-old', label: 'E₀ (IT = 12,5)', pos: 'e' }, { x: 3.7, y: 2.85, cls: 'c-eq', label: 'E₁ (IT = 10,5)', pos: 'e' }], guides: [{ x: 2.83, y: 4.41, xt: 'X₀', yt: 'P₀' }, { x: 3.7, y: 2.85, xt: 'X₁', yt: 'P₁' }] },
          'La buena cosecha desplaza la oferta a la derecha. Con demanda inelástica el precio cae mucho y la cantidad sube poco: el rectángulo del ingreso se achica (de 12,5 a 10,5).')}
        <ol>
          <li><strong>Sí, es posible</strong>: es la “paradoja de la abundancia”.</li>
          <li><strong>Condiciones</strong>: a) la buena cosecha debe ser general (de muchos productores), de modo que <strong>la oferta del mercado se desplace a la derecha</strong> y el precio baje; b) la <strong>demanda debe ser inelástica</strong>: la caída porcentual del precio supera al aumento porcentual de la cantidad vendida, y el ingreso total P·X de los agricultores, en conjunto, disminuye.</li>
          <li><strong>¿Se dan?</strong> Generalmente sí para los alimentos básicos: son de primera necesidad, tienen pocos sustitutos y la gente consume una cantidad bastante fija (aunque el pan esté a mitad de precio, no se come el doble). Por eso la demanda de granos es típicamente inelástica.</li>
        </ol>
        ${note('Detalles que suman: la condición es sobre la elasticidad de la <strong>demanda</strong>, no de la oferta (lo que se desplaza es la oferta). Y es un resultado <strong>colectivo</strong>: un productor que tiene una buena cosecha cuando los demás no, gana. Si el país es pequeño y vende al mundo, la demanda que enfrenta es casi perfectamente elástica y una buena cosecha local sí lo beneficia.', 'tip')}`,
      quiz: [
        { q: 'La cantidad demandada cae 30 % y el ingreso total sube 15 %. ¿Cuánto cambió el precio?', o: ['−50 %', '+45 %', '+64,3 %', '+15 %'], a: 2, e: '1,15 / 0,70 = 1,643.' },
        { q: 'En el caso anterior, la demanda es…', o: ['elástica', 'inelástica', 'unitaria', 'perfectamente elástica'], a: 1, e: 'Precio e ingreso suben juntos.', exam: ['1p-2023#6', 'rec-2024#4'] },
        { q: 'Una empresa baja sus precios 25 % y vende 20 % más. Su ingreso…', o: ['sube 5 %', 'baja 10 %', 'baja 5 %', 'no cambia'], a: 1, e: '0,75 · 1,20 = 0,90.' },
        { q: 'Si la elasticidad precio de la demanda es 2 y el precio sube 2 %, los ingresos de los productores…', o: ['aumentan', 'disminuyen', 'no cambian', 'son máximos'], a: 1, e: 'Demanda elástica: la cantidad cae 4 %.', src: 'Blanco 3.6.4' },
        { q: 'Xd = 150 − P. ¿A qué precio la elasticidad es 2?', o: ['50', '75', '100', '125'], a: 2, e: 'P/(150 − P) = 2 ⇒ P = 100.', src: 'Blanco 3.8.3' },
        { q: 'Elasticidad ingreso +2, ventas de 1.000 unidades, los ingresos de la comunidad suben 3 %. Las ventas serán…', o: ['menores', 'iguales', '964', '1.060'], a: 3, e: '2 · 3 % = 6 %.', exam: ['1p-2022-civ#7'] },
        { q: 'Si el gasto en un bien aumenta cuando baja su precio…', o: ['la demanda es inelástica', 'la demanda es elástica', 'es un bien inferior', 'es un bien normal'], a: 1, e: 'Precio y gasto en sentido contrario.', exam: ['1p-2022-civ#8'] },
        { q: 'Una buena cosecha general perjudica a los agricultores si…', o: ['la oferta es inelástica', 'la demanda es inelástica', 'la demanda es elástica', 'el bien es de lujo'], a: 1, e: 'El precio cae proporcionalmente más de lo que sube la cantidad.' },
        { q: 'En una curva de demanda rectilínea…', o: ['la elasticidad es máxima en el punto central', 'la elasticidad decrece al aumentar el precio', 'la elasticidad crece al aumentar el precio', 'la elasticidad es la misma en todos los puntos'], a: 2, e: 'P/X crece al subir por la recta.', src: 'Blanco 3.6.5' },
      ],
      sources: [
        { title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 3 (3.3.6, 3.3.7 y ejercicios 3.6, 3.8.3 y 3.9.21)', points: ['Elasticidad precio con signo positivo; relación con los ingresos de los vendedores.', 'La elasticidad cambia a lo largo de una demanda rectilínea y es unitaria en su punto medio.', '¿Es posible que los años de buenas cosechas sean perjudiciales para los agricultores?'] },
        { title: 'Principios de Economía', ref: 'Mankiw, cap. 5', points: ['Ingreso total y elasticidad; “¿Pueden ser malas las buenas noticias para la agricultura?”.'] },
      ],
    },

    {
      id: 'elasticidad-cruzada-renta',
      module: 't6',
      title: 'Elasticidad cruzada y elasticidad renta',
      keywords: 'elasticidad cruzada sustitutos complementarios independientes renta ingreso bien normal inferior lujo primera necesidad fernet coca café té españa uruguay libros',
      tldr: 'La <mark>elasticidad cruzada</mark> mide cómo cambia la demanda de X cuando cambia el precio de Y: positiva para sustitutos, negativa para complementarios, cero para independientes. La <mark>elasticidad renta</mark> mide la reacción ante el ingreso: negativa para bienes inferiores, entre 0 y 1 para bienes de primera necesidad, mayor que 1 para bienes de lujo.',
      goals: ['Calcular e interpretar la elasticidad cruzada.', 'Calcular e interpretar la elasticidad renta.', 'Resolver los ejercicios 5, 7 y 10 del TP 4.'],
      body: `
        <h2>Elasticidad cruzada</h2>
        ${eq(`E<sub>xy</sub> = ${frac('variación % de X<sub>d</sub>', 'variación % de P<sub>y</sub>')} = ${frac('ΔX / X', 'ΔP<sub>y</sub> / P<sub>y</sub>')}`, 'Cruzada')}
        ${table(['Signo', 'Por qué', 'Los bienes son'], [['E<sub>xy</sub> > 0', 'Numerador y denominador van en el mismo sentido: si Y se encarece, se compra más X', '<strong>Sustitutos</strong> (café y té)'], ['E<sub>xy</sub> < 0', 'Van en sentido contrario: si Y se encarece, se compra menos X', '<strong>Complementarios</strong> (fernet y cola)'], ['E<sub>xy</sub> = 0', 'El precio de Y no afecta a X', '<strong>Independientes</strong>']])}
        <p>Los dos casos de la diapositiva:</p>
        <ol>
          <li>El fernet baja 10 % y la demanda de cola sube 15 %: E = 15 / (−10) = <strong>−1,5</strong> → complementarios.</li>
          <li>El café sube 15 % y la demanda de té sube 10 %: E = 10 / 15 = <strong>+0,67</strong> → sustitutos.</li>
        </ol>
        <h2>Elasticidad renta</h2>
        ${eq(`E<sub>R</sub> = ${frac('variación % de X<sub>d</sub>', 'variación % de R')}`, 'Renta')}
        ${table(['Valor', 'Tipo de bien'], [['E<sub>R</sub> < 0', '<strong>Inferior</strong>: con más ingreso se compra menos'], ['0 < E<sub>R</sub> ≤ 1', '<strong>Normal de primera necesidad</strong>: se compra más, pero menos que proporcionalmente'], ['E<sub>R</sub> > 1', '<strong>Normal de lujo</strong>: la demanda crece más que el ingreso']])}
        ${note('Toda la familia de elasticidades es “variación % de la cantidad dividida por variación % de la causa”. Lo único que cambia es la causa: el propio precio, el precio de otro bien, la renta.', 'tip')}`,
      labs: [{
        type: 'classify', title: 'Clasificá por elasticidad', buckets: ['Sustitutos', 'Complementarios', 'Bien inferior', 'Primera necesidad', 'Lujo'],
        items: [
          { t: 'E<sub>xy</sub> = +0,8', b: 0 }, { t: 'E<sub>xy</sub> = −1,5', b: 1 }, { t: 'E<sub>R</sub> = −0,3', b: 2 }, { t: 'E<sub>R</sub> = 0,6', b: 3 }, { t: 'E<sub>R</sub> = 1,6', b: 4 },
          { t: 'Al subir 20 % el ingreso, los viajes al exterior suben 40 %', b: 4, why: 'E<sub>R</sub> = 2.' }, { t: 'Al subir el ingreso, se compran menos pasajes de colectivo', b: 2 },
          { t: 'Sube la yerba y se vende más té', b: 0 }, { t: 'Sube la nafta y se venden menos autos', b: 1 },
        ],
      }],
      exercises: [
        {
          official: '4.5', level: 2, title: 'España y Uruguay',
          prompt: '<p>Elasticidades renta: Alimentos 0,85 / 0,61; Vestido y calzado 1,37 / 0,92; Vivienda 0,4 / 1,06; Muebles 1 / 1,33; Transporte y comunicaciones 1,6 / 1,24; Gastos médicos 1 / 1,04; Ocio, cultura y enseñanza 1,16 / 1,2; Otros 1,28 / 1,2 (España / Uruguay). ¿Qué bienes son de lujo en cada país? Comente.</p>',
          solution: { explain: `
            ${table(['Bien', 'España', 'Uruguay'], [['Alimentos', '0,85 necesidad', '0,61 necesidad'], ['Vestido y calzado', '<strong>1,37 lujo</strong>', '0,92 necesidad'], ['Vivienda', '0,4 necesidad', '<strong>1,06 lujo</strong>'], ['Muebles', '1 (unitaria, límite)', '<strong>1,33 lujo</strong>'], ['Transporte y comunicaciones', '<strong>1,6 lujo</strong>', '<strong>1,24 lujo</strong>'], ['Gastos médicos', '1 (límite)', '<strong>1,04 lujo</strong>'], ['Ocio, cultura y enseñanza', '<strong>1,16 lujo</strong>', '<strong>1,2 lujo</strong>'], ['Otros', '<strong>1,28 lujo</strong>', '<strong>1,2 lujo</strong>']])}
            <p>Ninguno es inferior (todas positivas). Los alimentos son de primera necesidad en ambos. Las diferencias reflejan el nivel de ingreso y las necesidades cubiertas: en España, con mayor ingreso, la vivienda ya está resuelta y su demanda crece poco (0,4); en Uruguay, la vivienda y los muebles todavía crecen más que el ingreso. El vestido es “lujo” en España (moda, marcas) y necesidad en Uruguay. Que un bien sea de lujo depende del país y del momento.</p>` },
        },
        {
          official: '4.7', level: 1, title: '¿Cruzada positiva implica complementarios?',
          prompt: '<p>Si la elasticidad de la demanda de X respecto del precio de Y es positiva, ¿ambos bienes son complementarios? Justifique.</p>',
          solution: { explain: '<p><strong>No.</strong> Positiva significa que si sube el precio de Y aumenta la demanda de X: los consumidores reemplazan Y por X. Son <strong>sustitutos</strong>. Los complementarios tienen elasticidad cruzada negativa.</p>' },
        },
        {
          official: '4.10', level: 2, title: 'El mercado de libros',
          prompt: '<p>El mercado de libros está en equilibrio. ¿Qué pasa con el precio y la cantidad si: a) baja el precio de un bien cuya elasticidad cruzada con los libros es negativa; b) baja el precio de un bien con elasticidad cruzada positiva; c) aumenta el ingreso y la elasticidad renta de los libros es positiva; d) aumenta el ingreso y la elasticidad renta es negativa?</p>',
          solution: { explain: table(['Caso', 'Relación', 'Demanda de libros', 'P', 'X'], [['a', 'Complementario (ej. lámparas de lectura)', 'Derecha', '↑', '↑'], ['b', 'Sustituto (ej. e-books)', 'Izquierda', '↓', '↓'], ['c', 'Bien normal', 'Derecha', '↑', '↑'], ['d', 'Bien inferior', 'Izquierda', '↓', '↓']]) },
        },
      ],
      quiz: [
        { q: 'E<sub>xy</sub> = −2 indica que X e Y son…', o: ['sustitutos', 'complementarios', 'independientes', 'inferiores'], a: 1, e: 'Si Y se encarece, se demanda menos X.' },
        { q: 'Sube el precio del café 15 % y la demanda de té sube 10 %. E<sub>xy</sub> =', o: ['−0,67', '+0,67', '+1,5', '−1,5'], a: 1, e: '10/15: sustitutos.' },
        { q: 'Un bien con E<sub>R</sub> = 2 es…', o: ['inferior', 'de primera necesidad', 'de lujo', 'independiente'], a: 2, e: 'La demanda crece el doble que el ingreso.' },
        { q: 'Un bien con E<sub>R</sub> = −0,5 es…', o: ['inferior', 'normal', 'de lujo', 'sustituto'], a: 0, e: 'Con más ingreso se compra menos.' },
        { q: 'Un bien de primera necesidad tiene una elasticidad renta…', o: ['negativa', 'entre 0 y 1', 'mayor que 1', 'infinita'], a: 1, e: 'Se compra más con más ingreso, pero menos que proporcionalmente.' },
      ],
      sources: [{ title: 'Diapositivas del Tema VI', ref: 'Cátedra de Economía', points: ['Elasticidad cruzada: sustitutivos, complementarios e independientes.', 'Elasticidad renta: inferiores, primera necesidad, lujo.'] }],
    },

    {
      id: 'elasticidad-oferta',
      module: 't6',
      title: 'Elasticidad de la oferta y efectos sobre el equilibrio',
      keywords: 'elasticidad oferta elástica inelástica unitaria terrenos playa corto largo plazo efecto equilibrio trabajadores poco calificados política',
      tldr: 'La <mark>elasticidad de la oferta</mark> mide cuánto cambia la cantidad ofrecida ante un cambio de precio y depende de la flexibilidad de los vendedores para producir más. Las elasticidades deciden si un desplazamiento se traduce más en precio o más en cantidad.',
      goals: ['Calcular e interpretar la elasticidad de la oferta.', 'Predecir si un desplazamiento afecta más al precio o a la cantidad.', 'Resolver los ejercicios 2 y 6 del TP 4.'],
      body: `
        ${eq(`E<sub>o</sub> = ${frac('variación % de X<sub>o</sub>', 'variación % de P<sub>x</sub>')} &nbsp; (positiva)`, 'Elasticidad de la oferta')}
        <p>Depende de la flexibilidad para cambiar la producción. Los terrenos frente a la playa tienen oferta <strong>inelástica</strong>: es casi imposible producir más. Los bienes manufacturados (libros, autos, televisores) tienen oferta <strong>elástica</strong>: las fábricas pueden trabajar más horas. Y casi siempre la oferta es más elástica a <strong>largo plazo</strong>, cuando se pueden construir plantas o entrar nuevas empresas.</p>
        <div class="figs-2">
          ${plot({ x: [0, 10], y: [0, 10], h: 220, curves: [{ f: (x) => 4 + 0.25 * x, cls: 'c-s', label: 'elástica' }, { f: (x) => -6 + 3 * x, dom: [2, 6], cls: 'c-s', dash: true, label: 'inelástica' }], alt: 'Oferta elástica e inelástica' })}
          ${plot({ x: [0, 10], y: [0, 10], h: 220, curves: [{ pts: [[5, 0.3], [5, 9.5]], cls: 'c-s', label: 'Eo = 0' }, { pts: [[0, 5], [9.5, 5]], cls: 'c-s', dash: true, label: 'Eo = ∞' }], alt: 'Oferta perfectamente inelástica y perfectamente elástica' })}
        </div>
        ${note('Una oferta lineal que parte del <strong>origen</strong> tiene elasticidad unitaria en todos sus puntos. Si corta el eje de precios es elástica; si corta el eje de cantidades, inelástica.', 'tip')}
        <h2>¿Precio o cantidad? (TP 4, ejercicio 2)</h2>
        <p>Cuando se desplaza una curva, el ajuste se reparte entre precio y cantidad según la elasticidad de la <strong>otra</strong> curva:</p>
        ${table(['Situación', 'Un cambio en la… afecta más a…'], [['Demanda elástica', 'oferta → la <strong>cantidad</strong>'], ['Demanda inelástica', 'oferta → el <strong>precio</strong>'], ['Oferta elástica', 'demanda → la <strong>cantidad</strong>'], ['Oferta inelástica', 'demanda → el <strong>precio</strong>']])}
        <div class="figs-2">
          ${plot({ x: [0, 10], y: [0, 10], h: 240, curves: [{ f: (x) => 9 - 0.8 * x, cls: 'c-d', label: 'D' }, { f: (x) => 4 + 0.15 * x, cls: 'c-s', label: 'O elástica' }], points: [{ x: 5.26, y: 4.79, cls: 'c-eq' }], alt: 'Oferta elástica' })}
          ${plot({ x: [0, 10], y: [0, 10], h: 240, curves: [{ f: (x) => 9 - 0.8 * x, cls: 'c-d', label: 'D' }, { f: (x) => -16 + 4 * x, dom: [4, 6.5], cls: 'c-s', label: 'O inelástica' }], points: [{ x: 5.21, y: 4.83, cls: 'c-eq' }], alt: 'Oferta inelástica' })}
        </div>
        <p class="muted-s">Imaginá que la demanda se corre a la derecha en ambos gráficos: con la oferta plana casi todo el ajuste es en cantidad; con la oferta empinada, en precio.</p>
        <p>Probalo en el laboratorio de equilibrio del Tema IV: allí la demanda es más plana que la oferta.</p>`,
      exercises: [
        {
          official: '4.2', level: 2, title: 'Elasticidades y desplazamientos',
          prompt: '<p>Explique analítica y gráficamente: si la demanda es elástica, ¿los cambios en la oferta afectan más a la cantidad o al precio? ¿Y si es inelástica? Si la oferta es elástica, ¿los cambios en la demanda afectan más a la cantidad o al precio? ¿Y si es inelástica? ¿Las elasticidades son mayores a corto o a largo plazo?</p>',
          solution: { explain: '<p>Ver la tabla de la lección. Analíticamente, con D: P = a − bX y O: P = c + dX, ΔX* = −Δc/(b + d) y ΔP* = bΔc/(b + d) cuando cambia la oferta: si la demanda es elástica (b chico, curva plana), ΔP* es pequeño y ΔX* grande; si es inelástica (b grande), al revés. Lo mismo vale para la oferta cuando cambia la demanda. Tanto la oferta como la demanda son más elásticas a <strong>largo plazo</strong>: los consumidores encuentran sustitutos y cambian hábitos, y los productores amplían plantas o entran al mercado.</p>' },
        },
        {
          official: '4.6', level: 3, title: 'Empleo y salarios de trabajadores poco calificados',
          prompt: '<p>La oferta de trabajadores poco calificados es bastante elástica y la demanda de las empresas, bastante inelástica. Si el objetivo es ampliar el empleo de estos trabajadores, ¿conviene actuar sobre la oferta o sobre la demanda de trabajo? ¿Y si el objetivo es elevar sus salarios? Explique con diagramas.</p>',
          solution: { explain: `<p>En el mercado de trabajo P = salario y X = empleo.</p>
            <ul><li><strong>Para aumentar el empleo</strong>: actuar sobre la <strong>demanda</strong> (subsidios a la contratación, menos cargas sociales). Desplazarla a la derecha contra una oferta elástica (plana) aumenta mucho la cantidad y poco el salario. Desplazar la oferta (capacitación, más gente buscando) contra una demanda inelástica (empinada) bajaría mucho el salario y aumentaría poco el empleo.</li>
            <li><strong>Para subir los salarios</strong>: también sobre la <strong>demanda</strong>, pero sabiendo que con oferta elástica el salario sube poco. Reducir la oferta (por ejemplo, más años de estudio que retiran gente de ese segmento) contra una demanda inelástica subiría mucho el salario con poca pérdida de empleo.</li></ul>
            <p>Regla: el lado que se desplaza “empuja” sobre la elasticidad del otro lado. Usá los dos gráficos de la lección como diagramas.</p>` },
        },
      ],
      quiz: [
        { q: 'La oferta de terrenos frente a la playa es…', o: ['perfectamente elástica', 'muy inelástica', 'unitaria', 'negativa'], a: 1, e: 'No se pueden producir más.' },
        { q: 'Si la oferta es inelástica y aumenta la demanda, el efecto principal es sobre…', o: ['la cantidad', 'el precio', 'ninguno', 'la elasticidad'], a: 1, e: 'Los productores no pueden responder con más cantidad.' },
        { q: 'Si la demanda es elástica y cae la oferta, el efecto principal es sobre…', o: ['el precio', 'la cantidad', 'la renta', 'ninguno'], a: 1, e: 'Los consumidores dejan de comprar ante una pequeña suba.' },
        { q: 'En general, las elasticidades son mayores…', o: ['a corto plazo', 'a largo plazo', 'en el mismo instante', 'nunca cambian'], a: 1, e: 'Con tiempo hay más margen para adaptarse.' },
        { q: 'Una oferta lineal que pasa por el origen tiene elasticidad…', o: ['cero', 'unitaria en todos sus puntos', 'infinita', 'negativa'], a: 1, e: 'ΔX/X = ΔP/P a lo largo de toda la recta.' },
      ],
      sources: [{ title: 'Principios de Economía', ref: 'Mankiw, cap. 5', points: ['Elasticidad precio de la oferta y sus determinantes.'] }],
    },
  );
})();
