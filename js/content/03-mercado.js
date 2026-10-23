/* Tema IV: Demanda y oferta. Diapositivas "TEMA IV DEMANDA Y OFERTA 2026", Blanco cap. 2, Mankiw caps. 4. TP 3 (ejercicios 1 a 9, 11 y 13). */
(() => {
  const { LESSONS, h } = window.GUIDE;
  const { note, def, table, chart, eq, frac, num, lab } = h;

  const shifters = [
    { id: 'r', label: 'Renta de los consumidores (bien normal)', curve: 'd', min: -3, max: 3, step: 1, value: 0, k: 6 },
    { id: 'ps', label: 'Precio de un bien sustituto', curve: 'd', min: -3, max: 3, step: 1, value: 0, k: 5 },
    { id: 'pc', label: 'Precio de un bien complementario', curve: 'd', min: -3, max: 3, step: 1, value: 0, k: -5 },
    { id: 'w', label: 'Precio de los factores (insumos, salarios)', curve: 's', min: -3, max: 3, step: 1, value: 0, k: 6 },
    { id: 'tec', label: 'Mejora tecnológica', curve: 's', min: 0, max: 3, step: 1, value: 0, k: -6 },
  ];

  LESSONS.push(
    {
      id: 'mercado-competencia',
      module: 't4',
      title: 'El mercado y la competencia perfecta',
      keywords: 'mercado compradores vendedores competencia perfecta atomización homogeneidad libre acceso transparencia movilidad precio relativo absoluto agua diamantes utilidad marginal marshall tijeras',
      tldr: 'Un mercado es el conjunto de compradores y vendedores de un bien. El modelo de <mark>competencia perfecta</mark> supone muchos agentes sin poder sobre el precio, producto homogéneo, libre entrada, información transparente y factores móviles. Ahí el precio es la señal que coordina todo.',
      goals: ['Definir mercado.', 'Enumerar los cinco supuestos de la competencia perfecta.', 'Distinguir precio absoluto de relativo y explicar la paradoja del agua y los diamantes.'],
      body: `
        <p>“Discutir si el valor está determinado por la demanda o la oferta es tan razonable como discutir si es la hoja superior o inferior de las tijeras la que corta un trozo de papel.” <em>Alfred Marshall</em>. En este tema se arman las dos hojas de la tijera.</p>
        <h2>Qué es un mercado</h2>
        ${def('Mercado', 'Es la organización que permite el contacto entre compradores y vendedores, en un lugar físico o no, con el fin de comprar o vender un bien claramente definido.', 'Diapositivas del Tema IV.')}
        <p>Los compradores son los que están dispuestos a intercambiar dinero por el bien; los vendedores, los dispuestos a intercambiar el bien por dinero. Algunos mercados tienen un lugar físico (el Mercado Central, una feria); otros no (el mercado de cambios, las ventas por internet, operaciones a través de agentes o comisionistas).</p>
        <h2>Competencia perfecta: los cinco supuestos</h2>
        ${table(['Supuesto', 'Qué significa', 'Consecuencia'], [
          ['1. Atomización', 'Muchísimos compradores y vendedores, cada uno muy pequeño', 'Nadie puede influir en el precio: todos son <strong>precio-aceptantes</strong>'],
          ['2. Homogeneidad del producto', 'Todos venden exactamente el mismo bien', 'Al comprador le da igual a quién comprarle'],
          ['3. Libre acceso', 'No hay barreras para entrar o salir del mercado', 'A largo plazo los beneficios extraordinarios atraen competidores'],
          ['4. Transparencia', 'Información perfecta sobre precios y calidades', 'Nadie paga más que el precio de mercado; la publicidad no engaña'],
          ['5. Movilidad de los factores', 'Los recursos pueden pasar libremente de una actividad a otra', 'Se reasignan hacia donde más rinden'],
        ])}
        ${note('El mercado de granos (trigo, soja) es lo más parecido a la competencia perfecta en la vida real. Es un modelo de referencia: ningún mercado lo cumple a la perfección, pero sirve para entender cómo funcionan los precios.', 'tip')}
        <h2>El precio</h2>
        <p>El <strong>precio</strong> es la relación a la que se intercambian dos cosas. El <strong>absoluto</strong> está expresado en dinero ($2.000 un kilo de pan); el <strong>relativo</strong>, en términos de otro bien (un kilo de asado vale 6 kilos de pan). Las decisiones dependen de los precios relativos.</p>
        <p>El precio ofrece señales a productores y consumidores: un precio en alza incentiva producir y desincentiva consumir; uno en baja, lo contrario. Así el mercado llega al equilibrio.</p>
        <h3>La paradoja del agua y los diamantes</h3>
        <p>¿Por qué el agua, imprescindible, es barata, y los diamantes, prescindibles, son carísimos? Porque el precio no depende de la utilidad total sino de la <strong>utilidad marginal</strong>: el valor que una persona le da a una unidad <em>adicional</em>. Cuantas más unidades hay, menor es la utilidad de la última. El agua es abundante y su utilidad marginal es baja; los diamantes son escasísimos y su utilidad marginal es altísima.</p>`,
      quiz: [
        { q: 'En competencia perfecta, las empresas son precio-aceptantes porque…', o: ['el Estado fija el precio', 'son tantas y tan pequeñas que ninguna influye en el precio', 'venden productos distintos', 'hay barreras de entrada'], a: 1, e: 'Es la consecuencia de la atomización.' },
        { q: '¿Cuál NO es un supuesto de la competencia perfecta?', o: ['Producto homogéneo', 'Libre acceso', 'Publicidad para diferenciar marcas', 'Transparencia'], a: 2, e: 'Con producto homogéneo e información perfecta la publicidad no sirve.' },
        { q: 'Un kilo de asado cuesta lo mismo que 6 kilos de pan. Eso es un precio…', o: ['absoluto', 'relativo', 'máximo', 'de equilibrio'], a: 1, e: 'Está expresado en términos de otro bien.' },
        { q: 'La paradoja del agua y los diamantes se explica con…', o: ['la utilidad total', 'la utilidad marginal', 'el costo fijo', 'la elasticidad cruzada'], a: 1, e: 'El precio refleja el valor de la última unidad, no el de todas.' },
        { q: 'Para Marshall, oferta y demanda son como…', o: ['dos hojas de una tijera', 'el agua y el aceite', 'causa y efecto', 'el día y la noche'], a: 0, e: 'Las dos determinan el precio juntas.' },
      ],
      sources: [{ title: 'Diapositivas del Tema IV', ref: 'Cátedra de Economía', points: ['Definición de mercado.', 'Supuestos de la competencia perfecta.', 'Precio, señales y paradoja del agua y los diamantes.'] }],
    },

    {
      id: 'la-demanda',
      module: 't4',
      title: 'La demanda',
      keywords: 'demanda ley tabla curva función cantidad demandada efecto sustitución renta bien normal inferior sustituto complementario ceteris paribus tamaño mercado gustos expectativas',
      tldr: 'La <mark>ley de la demanda</mark>: ceteris paribus, si sube el precio de un bien, baja la cantidad demandada. La curva tiene pendiente negativa por el efecto sustitución y el efecto renta. La función de demanda depende además de la renta, los precios de otros bienes, el tamaño del mercado, los gustos y las expectativas.',
      goals: ['Enunciar la ley de la demanda y explicar su pendiente negativa.', 'Distinguir función de demanda y curva de demanda.', 'Clasificar bienes en normales o inferiores, y en sustitutos o complementarios, a partir de una función.', 'Obtener y graficar una curva de demanda (TP 3, ejercicio 1).'],
      body: `
        <h2>Demandar no es comprar</h2>
        <p><strong>Demandar</strong> es estar dispuesto a adquirir un bien a cambio de un precio; <strong>comprar</strong> es hacerlo realmente. La <strong>cantidad demandada</strong> es la cantidad que los compradores optarían por comprar en un período, dado un precio y dadas sus restricciones (deseos, costo de oportunidad, poder de compra).</p>
        <h2>La ley de la demanda</h2>
        <p><em>Ceteris paribus</em> (permaneciendo todo lo demás constante), la cantidad demandada de un bien aumenta cuando su precio baja y disminuye cuando su precio sube: precio y cantidad demandada están <strong>inversamente relacionados</strong>. La variable independiente es el precio; la dependiente, la cantidad.</p>
        ${chart({ x: [0, 12], y: [0, 12], xl: 'X (cantidad)', yl: 'P (precio)', curves: [{ f: (x) => 10 - 0.8 * x, cls: 'c-d', label: 'D' }], points: [{ x: 2.5, y: 8, label: 'A', cls: 'c-d' }, { x: 5, y: 6, label: 'B', cls: 'c-d' }, { x: 7.5, y: 4, label: 'C', cls: 'c-d' }], guides: [{ x: 2.5, y: 8, xt: 'X₁', yt: 'P₁' }, { x: 5, y: 6, xt: 'X₂', yt: 'P₂' }, { x: 7.5, y: 4, xt: 'X₃', yt: 'P₃' }] }, 'Cada punto de la curva es una fila de la tabla de demanda: a precios más bajos, mayores cantidades.')}
        <p>La <strong>demanda de mercado</strong> es la suma (horizontal) de las demandas individuales: a cada precio, se suman las cantidades que pide cada consumidor.</p>
        <h3>¿Por qué la pendiente es negativa?</h3>
        <ul>
          <li><strong>Efecto sustitución</strong>: si sube el precio de X, X se vuelve relativamente más caro y los consumidores lo reemplazan por otros bienes.</li>
          <li><strong>Efecto renta</strong>: si sube el precio de X con la misma renta, el poder adquisitivo cae y se compra menos X. Si baja el precio, la renta real sube.</li>
        </ul>
        <h2>La función de demanda</h2>
        ${eq(`X<sub>d</sub> = f( P<sub>x</sub>, R, P<sub>y</sub>, Z, G, E, otros )`, 'Función de demanda')}
        ${table(['Variable', 'Qué es', 'Efecto sobre la demanda de X'], [
          ['P<sub>x</sub>', 'Precio del propio bien', 'Inverso (ley de la demanda). Es la variable <strong>endógena</strong> de la curva'],
          ['R', 'Renta o ingreso de los consumidores', '<strong>Bien normal</strong>: sube con la renta. <strong>Bien inferior</strong>: baja con la renta'],
          ['P<sub>y</sub>', 'Precio de bienes relacionados', '<strong>Sustitutos</strong> (satisfacen la misma necesidad por separado): si sube P<sub>y</sub>, sube la demanda de X. <strong>Complementarios</strong> (se usan juntos): si sube P<sub>y</sub>, baja la demanda de X'],
          ['Z', 'Tamaño del mercado (número de consumidores)', 'Directo'],
          ['G', 'Gustos y preferencias', 'Una moda a favor la aumenta'],
          ['E', 'Expectativas sobre la evolución de precios', 'Si se espera que suba, se compra más hoy'],
        ])}
        ${note('<p><strong>Función</strong> de demanda ≠ <strong>curva</strong> de demanda. La función tiene muchas variables y no puede graficarse en el plano. La curva es la relación entre X<sub>d</sub> y P<sub>x</sub> cuando todas las demás variables están fijas (ceteris paribus). Es la pregunta a) del TP 3, ejercicio 1.</p>', 'exam')}
        <h3>Leer los signos de una función lineal</h3>
        <p>En X<sub>d</sub> = −3P<sub>x</sub> − 7R − 0,5P<sub>y</sub> + 0,5P<sub>z</sub> + 45 alcanza con mirar el signo de cada coeficiente:</p>
        ${table(['Coeficiente', 'Signo', 'Conclusión'], [['de R', '−7 (negativo)', 'Si sube la renta, baja la demanda: <strong>bien inferior</strong>'], ['de P<sub>y</sub>', '−0,5 (negativo)', 'Si sube el precio de Y, baja la demanda de X: <strong>complementarios</strong>'], ['de P<sub>z</sub>', '+0,5 (positivo)', 'Si sube el precio de Z, sube la demanda de X: <strong>sustitutos</strong>']])}`,
      exercises: [
        {
          official: '3.1', level: 2, title: 'De la función a la curva de demanda',
          prompt: '<p>X<sub>d</sub> = −3P<sub>X</sub> − 7R − 0,5P<sub>Y</sub> + 0,5P<sub>Z</sub> + 45. a) ¿Por qué no es una curva de demanda? b) ¿X es normal o inferior? c) ¿Cómo es X respecto de Y y de Z? d) Obtenga y represente la curva con R = 2, P<sub>Z</sub> = 4 y P<sub>Y</sub> = 3. e) Ídem con R = 1, P<sub>Z</sub> = 3 y P<sub>Y</sub> = 1.</p>',
          hints: ['Para obtener la curva, reemplazá todas las variables excepto P<sub>X</sub>.', 'Para graficar, buscá las intersecciones con los ejes: P = 0 y X = 0.'],
          solution: { explain: `
            <p><strong>a)</strong> Porque depende de cuatro variables. La curva de demanda relaciona solo X<sub>d</sub> con P<sub>X</sub>, con todo lo demás constante.</p>
            <p><strong>b)</strong> Inferior: el coeficiente de R es negativo. <strong>c)</strong> Y es complementario (coeficiente −0,5); Z es sustituto (+0,5).</p>
            <p><strong>d)</strong> X<sub>d</sub> = −3P − 14 − 1,5 + 2 + 45 = <strong>31,5 − 3P</strong>. Cortes: P = 0 → X = 31,5; X = 0 → P = 10,5.</p>
            <p><strong>e)</strong> X<sub>d</sub> = −3P − 7 − 0,5 + 1,5 + 45 = <strong>39 − 3P</strong>. Cortes: X = 39; P = 13.</p>
            ${chart({ x: [0, 45], y: [0, 15], xl: 'X', yl: 'P', curves: [{ f: (x) => (31.5 - x) / 3, dom: [0, 31.5], cls: 'c-d', label: 'D (d)' }, { f: (x) => (39 - x) / 3, dom: [0, 39], cls: 'c-d', dash: true, label: 'D (e)' }], points: [{ x: 31.5, y: 0, label: '31,5', cls: 'c-d', pos: 'n' }, { x: 0, y: 10.5, label: '10,5', cls: 'c-d', pos: 'e' }, { x: 39, y: 0, label: '39', cls: 'c-d', pos: 'n' }, { x: 0, y: 13, label: '13', cls: 'c-d', pos: 'e' }] }, 'En e) la demanda está más a la derecha: bajó la renta (y X es inferior) y bajó el precio del complementario Y.')}` },
        },
      ],
      quiz: [
        { q: 'La ley de la demanda dice que, ceteris paribus…', o: ['si sube el precio sube la cantidad demandada', 'si sube el precio baja la cantidad demandada', 'el precio no afecta la demanda', 'la demanda siempre crece'], a: 1, e: 'Relación inversa entre precio y cantidad demandada.' },
        { q: 'Un bien inferior es aquel cuya demanda…', o: ['baja cuando sube la renta', 'sube cuando sube la renta', 'no depende de la renta', 'es de mala calidad por definición'], a: 0, e: 'Ejemplo típico: el transporte público o segundas marcas cuando el ingreso crece.' },
        { q: 'Café y azúcar son bienes…', o: ['sustitutos', 'complementarios', 'inferiores', 'independientes'], a: 1, e: 'Se usan juntos.' },
        { q: 'En X<sub>d</sub> = 50 − 2P<sub>x</sub> + 3P<sub>y</sub>, los bienes X e Y son…', o: ['complementarios', 'sustitutos', 'independientes', 'inferiores'], a: 1, e: 'El coeficiente de P<sub>y</sub> es positivo.' },
        { q: 'El efecto renta de una suba de precio consiste en que…', o: ['el consumidor cambia a otro bien relativamente más barato', 'el poder adquisitivo del consumidor cae', 'la renta nominal baja', 'el Estado cobra más impuestos'], a: 1, e: 'Con la misma renta alcanza para menos.' },
        { q: '¿Por qué una función de demanda con varias variables no puede graficarse como curva?', o: ['Porque es lineal', 'Porque el plano solo admite dos variables: hay que fijar las demás', 'Porque no tiene pendiente', 'Porque depende del Estado'], a: 1, e: 'Ceteris paribus.' },
      ],
      sources: [{ title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 2', points: ['Función de demanda y curva de demanda.', 'Bienes normales e inferiores, sustitutivos y complementarios.'] }],
    },

    {
      id: 'la-oferta',
      module: 't4',
      title: 'La oferta',
      keywords: 'oferta ley curva función cantidad ofrecida costos tecnología impuestos subvenciones expectativas número empresas',
      tldr: 'La <mark>ley de la oferta</mark>: a mayor precio, mayor cantidad ofrecida; la curva tiene pendiente positiva. La oferta depende además de los costos de producción, la tecnología, los impuestos y subsidios, el número de empresas y las expectativas.',
      goals: ['Enunciar la ley de la oferta.', 'Listar los determinantes de la oferta.', 'Obtener y graficar curvas de oferta (TP 3, ejercicio 2).'],
      body: `
        <h2>Ofrecer no es vender</h2>
        <p><strong>Ofrecer</strong> es estar dispuesto a vender un bien a cambio de un precio; <strong>vender</strong> es hacerlo realmente. La <strong>tabla de oferta</strong> relaciona el precio con la cantidad que los productores están dispuestos a ofrecer.</p>
        <h2>La ley de la oferta</h2>
        <p>Cuanto mayor es el precio de un bien, mayor es la cantidad que los productores están dispuestos a ofrecer: relación <strong>directa</strong>. Un precio más alto hace rentable producir unidades que antes no lo eran (a medida que se produce más, cada unidad adicional cuesta más, como vas a ver en el Tema VII).</p>
        ${chart({ x: [0, 12], y: [0, 12], xl: 'X', yl: 'P', curves: [{ f: (x) => 1 + 0.9 * x, cls: 'c-s', label: 'O' }], points: [{ x: 3, y: 3.7, label: 'A', cls: 'c-s' }, { x: 7, y: 7.3, label: 'B', cls: 'c-s' }], guides: [{ x: 3, y: 3.7, xt: 'X₁', yt: 'P₁' }, { x: 7, y: 7.3, xt: 'X₂', yt: 'P₂' }] }, 'Curva de oferta: a mayor precio, mayor cantidad ofrecida.')}
        <h2>La función de oferta</h2>
        ${eq(`X<sub>o</sub> = f( P<sub>x</sub>, C, M, E, O )`, 'Función de oferta')}
        ${table(['Determinante', 'Si aumenta…'], [
          ['P<sub>x</sub>: precio del bien (endógena)', 'Movimiento a lo largo de la curva: más cantidad ofrecida'],
          ['C: costos de producción (precios de factores: recursos naturales, capital, salarios)', 'La oferta <strong>disminuye</strong> (curva a la izquierda)'],
          ['Tecnología más eficiente', 'La oferta <strong>aumenta</strong> (a la derecha)'],
          ['Impuestos sobre las ventas', 'La oferta disminuye'],
          ['Subvenciones', 'La oferta aumenta'],
          ['M: tamaño del mercado (número de empresas)', 'La oferta aumenta'],
          ['E: expectativas de suba de precios', 'Los productores retienen stock hoy: la oferta actual disminuye'],
        ])}
        ${note('Un aumento de costos o de impuestos desplaza la oferta hacia la <strong>izquierda</strong> (o hacia arriba: hace falta un precio más alto para ofrecer la misma cantidad). Es fácil confundirse porque “arriba” parece “más”: pensalo siempre en horizontal, a un mismo precio se ofrece menos.', 'warn')}`,
      exercises: [
        {
          official: '3.2', level: 1, title: 'Curvas de oferta',
          prompt: '<p>X<sub>o</sub> = P<sub>X</sub> − W − 2P<sub>M</sub> (W = salario, P<sub>M</sub> = precio de las materias primas). a) Obtenga y represente la curva con W = 1 y P<sub>M</sub> = 2. b) Ídem con W = 2 y P<sub>M</sub> = 2.</p>',
          solution: { explain: `
            <p><strong>a)</strong> X<sub>o</sub> = P − 1 − 4 = <strong>P − 5</strong> (empieza a ofrecer con P > 5).</p>
            <p><strong>b)</strong> X<sub>o</sub> = P − 2 − 4 = <strong>P − 6</strong>.</p>
            ${chart({ x: [0, 10], y: [0, 14], xl: 'X', yl: 'P', curves: [{ f: (x) => x + 5, cls: 'c-s', label: 'O (W=1)' }, { f: (x) => x + 6, cls: 'c-s', dash: true, label: 'O (W=2)' }], points: [{ x: 0, y: 5, label: '5', cls: 'c-s', pos: 'e' }, { x: 0, y: 6, label: '6', cls: 'c-s', pos: 'w' }] }, 'Al subir el salario la oferta se desplaza hacia la izquierda (hacia arriba): a cada precio se ofrece una unidad menos.')}` },
        },
      ],
      quiz: [
        { q: 'La ley de la oferta establece una relación … entre precio y cantidad ofrecida.', o: ['inversa', 'directa', 'nula', 'aleatoria'], a: 1, e: 'Más precio, más cantidad ofrecida.' },
        { q: 'Una mejora tecnológica…', o: ['desplaza la oferta a la izquierda', 'desplaza la oferta a la derecha', 'mueve el punto a lo largo de la curva', 'desplaza la demanda'], a: 1, e: 'Produce más con los mismos recursos: más oferta a cada precio.' },
        { q: 'Un aumento de los salarios en una industria…', o: ['aumenta la oferta', 'disminuye la oferta', 'aumenta la demanda', 'no afecta'], a: 1, e: 'Sube el costo de producción.' },
        { q: 'Si los productores esperan que el precio suba el mes próximo, la oferta actual…', o: ['aumenta', 'disminuye', 'no cambia', 'se vuelve vertical'], a: 1, e: 'Retienen producción para venderla más cara después.' },
        { q: 'Ofrecer significa…', o: ['vender efectivamente', 'estar dispuesto a vender a cambio de un precio', 'producir', 'fijar el precio'], a: 1, e: 'Vender es hacerlo realmente.' },
      ],
      sources: [{ title: 'Diapositivas del Tema IV', ref: 'Cátedra de Economía', points: ['Función de oferta X° = f(Px, C, M, E, O).', 'Variables que afectan a la oferta: precios de factores, tecnología, impuestos y subvenciones, tamaño del mercado, expectativas.'] }],
    },

    {
      id: 'equilibrio',
      module: 't4',
      title: 'El equilibrio del mercado',
      keywords: 'equilibrio precio cantidad intersección exceso oferta demanda escasez excedente cálculo analítico subasta vaciar mercado',
      tldr: 'El equilibrio es el punto donde <mark>la cantidad demandada iguala a la ofrecida</mark>: el mercado “se vacía”. Por encima del precio de equilibrio hay excedente y el precio baja; por debajo hay escasez y el precio sube. Se calcula igualando las funciones de oferta y demanda.',
      goals: ['Encontrar el equilibrio gráfica y analíticamente.', 'Explicar cómo el mercado vuelve al equilibrio.', 'Resolver los ejercicios de equilibrio del TP 3.'],
      body: `
        <h2>El punto de equilibrio</h2>
        <p>La intersección de las curvas es el <strong>punto de equilibrio</strong>: la situación en la que el mercado se vacía, porque lo que los consumidores quieren comprar coincide con lo que los productores quieren vender. Ocurre solo a un precio: el <strong>precio de equilibrio</strong>.</p>
        ${chart({ x: [0, 10], y: [0, 10], curves: [{ f: (x) => 9 - 0.8 * x, cls: 'c-d', label: 'D' }, { f: (x) => 1 + 0.8 * x, cls: 'c-s', label: 'O' }],
          hlines: [{ y: 7.4, cls: 'c-s pl-faint', label: 'excedente' }, { y: 2.6, cls: 'c-d pl-faint', label: 'escasez' }],
          areas: [{ pts: [[2, 7.25], [8, 7.25], [8, 7.55], [2, 7.55]], cls: 'a-warn' }, { pts: [[2, 2.45], [8, 2.45], [8, 2.75], [2, 2.75]], cls: 'a-bad' }],
          points: [{ x: 5, y: 5, cls: 'c-eq', label: 'E' }], guides: [{ x: 5, y: 5, xt: 'X*', yt: 'P*' }],
          arrows: [{ from: [0.8, 7.1], to: [0.8, 5.6] }, { from: [0.8, 2.9], to: [0.8, 4.4] }] }, 'A un precio alto los productores ofrecen más de lo que se demanda (excedente) y el precio baja. A un precio bajo se demanda más de lo que se ofrece (escasez) y el precio sube.')}
        <h2>Cálculo analítico</h2>
        <p>Igualá cantidad demandada y ofrecida, despejá P y reemplazá para obtener X. Con las curvas del TP 3, ejercicio 7:</p>
        ${eq(`100 − ${frac('X', '3')} = ${frac('X', '2')} + 50 &nbsp;⇒&nbsp; 50 = ${frac('5X', '6')} &nbsp;⇒&nbsp; X* = 60, &nbsp;P* = 80`)}
        ${note('Verificá siempre: reemplazá X* en las dos curvas y tiene que darte el mismo P*. Si el precio o la cantidad te dan negativos, revisá los signos.', 'tip')}
        <h2>Cambios del equilibrio</h2>
        <p>Desde un equilibrio, los cambios ocurren solo cuando varía un factor <strong>exógeno</strong> (ceteris paribus) que desplaza alguna curva. Probá en el laboratorio: cada control mueve una curva y el equilibrio se recalcula.</p>
        ${lab(0)}
        ${table(['Caso de la diapositiva', 'Qué pasa', 'P*', 'X*'], [
          ['1. La oferta se mantiene y aumenta la demanda (más población, moda, más ingreso, sube un sustituto)', 'D a la derecha', '↑', '↑'],
          ['2. La oferta cae y la demanda se mantiene (menos empresas, tecnología obsoleta, insumos más caros)', 'O a la izquierda', '↑', '↓'],
          ['3. La oferta cae y la demanda aumenta (expectativas de inflación, suba de la energía)', 'O a la izq. y D a la der.', '↑', '¿?'],
        ])}`,
      labs: [{ type: 'market', title: 'Mercado del TP 3, ejercicio 7: mové los determinantes', intro: 'Demanda P = 100 − X/3 y oferta P = 50 + X/2 (equilibrio en X = 60, P = 80). Cada control desplaza una curva; la punteada es la original.', d: [100, 1 / 3], s: [50, 0.5], x: [0, 160], y: [0, 120], shifts: shifters }],
      exercises: [
        {
          official: '3.4', level: 2, title: 'Equilibrio con funciones generales',
          prompt: '<p>Con X<sub>d</sub> = −3P<sub>X</sub> − 7R − 0,5P<sub>Y</sub> + 0,5P<sub>Z</sub> + 45 y X<sub>o</sub> = P<sub>X</sub> − W − 2P<sub>M</sub>, calcule y represente el equilibrio cuando R = 2, P<sub>Z</sub> = 3, P<sub>Y</sub> = 6, W = 2 y P<sub>M</sub> = 1.</p>',
          hints: ['Primero obtené las dos curvas reemplazando los datos.'],
          solution: { explain: `
            <p>Demanda: X<sub>d</sub> = −3P − 14 − 3 + 1,5 + 45 = <strong>29,5 − 3P</strong>. Oferta: X<sub>o</sub> = P − 2 − 2 = <strong>P − 4</strong>.</p>
            ${eq(`29,5 − 3P = P − 4 &nbsp;⇒&nbsp; 33,5 = 4P &nbsp;⇒&nbsp; P* = 8,375 &nbsp;y&nbsp; X* = 4,375`)}
            ${chart({ x: [0, 32], y: [0, 12], curves: [{ f: (x) => (29.5 - x) / 3, dom: [0, 29.5], cls: 'c-d', label: 'D' }, { f: (x) => x + 4, cls: 'c-s', label: 'O' }], points: [{ x: 4.375, y: 8.375, cls: 'c-eq', label: 'E' }], guides: [{ x: 4.375, y: 8.375 }] })}` },
        },
        {
          official: '3.6', level: 3, title: 'Demanda no lineal y cambio en la renta',
          prompt: '<p>X<sub>d</sub> = R / (2P<sub>X</sub>) y X<sub>o</sub> = 4P<sub>X</sub> − W + 20. a) Equilibrio con R = 200 y W = 20. b) Dibuje las curvas. c) Nuevo equilibrio si R = 288.</p>',
          solution: { explain: `
            <p><strong>a)</strong> X<sub>d</sub> = 100/P y X<sub>o</sub> = 4P. Igualando: 100/P = 4P → P² = 25 → <strong>P* = 5, X* = 20</strong>.</p>
            <p><strong>c)</strong> X<sub>d</sub> = 144/P. 144/P = 4P → P² = 36 → <strong>P* = 6, X* = 24</strong>. Al aumentar la renta, la demanda se desplaza a la derecha y suben precio y cantidad (X es un bien normal).</p>
            ${chart({ x: [0, 40], y: [0, 12], curves: [{ f: (x) => 100 / x, dom: [8.5, 40], cls: 'c-d', label: 'D (R=200)' }, { f: (x) => 144 / x, dom: [12, 40], cls: 'c-d', dash: true, label: 'D (R=288)' }, { f: (x) => x / 4, cls: 'c-s', label: 'O' }], points: [{ x: 20, y: 5, cls: 'pl-old', label: 'E₀', pos: 'se' }, { x: 24, y: 6, cls: 'c-eq', label: 'E₁' }], guides: [{ x: 20, y: 5 }, { x: 24, y: 6 }] }, 'La demanda es una hipérbola (elasticidad unitaria, Tema VI).')}` },
        },
        {
          official: '3.7', level: 1, title: 'Equilibrio con curvas inversas',
          prompt: '<p>Demanda P = 100 − X<sub>d</sub>/3 y oferta P = X<sub>o</sub>/2 + 50. Calcule precio y cantidad de equilibrio.</p>',
          solution: { explain: `<p>100 − X/3 = X/2 + 50 → 50 = 5X/6 → <strong>X* = 60</strong>; P* = 100 − 20 = <strong>80</strong>. Verificación con la oferta: 60/2 + 50 = 80 ✔.</p>` },
        },
        {
          official: '3.13', level: 1, title: 'La subasta del cuadro',
          prompt: '<p>Una subasta arranca en 30.000 euros. Pérez pagaría como máximo 35.000; Sánchez, 40.000; Bermúdez, 43.000. Hay un solo cuadro. a) ¿Por qué el precio de salida no es de equilibrio? b) ¿Con qué precio puede terminar? c) ¿Cuál es el papel del subastador?</p>',
          solution: { explain: `
            <p><strong>a)</strong> A 30.000 la cantidad demandada es 3 (los tres quieren comprar) y la ofrecida es 1: hay <strong>exceso de demanda</strong>, así que el precio debe subir.</p>
            <p><strong>b)</strong> Las pujas suben y se retira Pérez al pasar 35.000 y Sánchez al pasar 40.000. Termina apenas por encima de <strong>40.000</strong> (por ejemplo 40.001) y gana Bermúdez. Ahí la cantidad demandada es 1 = cantidad ofrecida.</p>
            <p><strong>c)</strong> Representa el mecanismo de ajuste del mercado: va subiendo el precio mientras haya exceso de demanda, hasta igualar oferta y demanda. Es la imagen del “subastador walrasiano”.</p>` },
        },
      ],
      quiz: [
        { q: 'En el equilibrio…', o: ['la cantidad demandada es mayor que la ofrecida', 'la cantidad demandada es igual a la ofrecida', 'el precio es el más bajo posible', 'el Estado fija el precio'], a: 1, e: 'El mercado se vacía.' },
        { q: 'Si el precio está por encima del de equilibrio hay…', o: ['escasez y el precio sube', 'excedente y el precio baja', 'equilibrio', 'escasez y el precio baja'], a: 1, e: 'Se ofrece más de lo que se demanda.' },
        { q: 'X<sub>d</sub> = 100 − 2P y X<sub>o</sub> = 3P − 50. El precio de equilibrio es…', o: ['20', '30', '40', '50'], a: 1, e: '100 − 2P = 3P − 50 → 150 = 5P → P = 30 (X = 40).' },
        { q: 'Si aumenta la demanda y la oferta no cambia…', o: ['P ↑ y X ↑', 'P ↓ y X ↑', 'P ↑ y X ↓', 'P ↓ y X ↓'], a: 0, e: 'Caso 1 de la diapositiva.' },
        { q: 'Si cae la oferta y la demanda no cambia…', o: ['P ↑ y X ↑', 'P ↓ y X ↑', 'P ↑ y X ↓', 'P ↓ y X ↓'], a: 2, e: 'Caso 2 de la diapositiva.' },
        { q: 'Un cambio en el equilibrio solo ocurre si…', o: ['cambia el precio del bien', 'cambia un factor exógeno que desplaza una curva', 'los consumidores lo deciden', 'pasa el tiempo'], a: 1, e: 'El precio del bien es endógeno: se ajusta, no causa.' },
      ],
      sources: [{ title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 2', points: ['Equilibrio de mercado, exceso de oferta y de demanda.'] }],
    },

    {
      id: 'movimientos-desplazamientos',
      module: 't4',
      title: 'Movimientos y desplazamientos de las curvas',
      keywords: 'movimiento a lo largo desplazamiento curva variación cantidad demandada variación demanda exógena endógena simultáneo ambiguo computadoras tecnología',
      tldr: 'Si cambia el precio del propio bien hay un <mark>movimiento a lo largo</mark> de la curva (varía la cantidad demandada u ofrecida). Si cambia cualquier otro determinante, la curva se <mark>desplaza</mark> (varía la demanda o la oferta). Si se mueven las dos curvas, uno de los dos efectos queda indeterminado.',
      goals: ['Distinguir variación de la cantidad demandada de variación de la demanda.', 'Completar las tablas de los ejercicios 8 y 9 del TP 3.', 'Analizar desplazamientos simultáneos.'],
      body: `
        <h2>La regla de oro</h2>
        ${table(['', 'Qué cambia', 'En el gráfico', 'Se dice'], [
          ['Variable endógena', 'El precio del propio bien (P<sub>x</sub>)', '<strong>Movimiento a lo largo</strong> de la curva', 'Varió la <strong>cantidad demandada</strong> (u ofrecida)'],
          ['Variables exógenas o ceteris paribus', 'Renta, precios de otros bienes, gustos, costos, tecnología, número de agentes, expectativas…', '<strong>Desplazamiento</strong> de toda la curva', 'Varió la <strong>demanda</strong> (u oferta)'],
        ])}
        <div class="figs-2">
          ${h.plot({ x: [0, 10], y: [0, 10], h: 260, curves: [{ f: (x) => 9 - 0.8 * x, cls: 'c-d', label: 'D' }], points: [{ x: 3, y: 6.6, cls: 'pl-old', label: 'A' }, { x: 6.5, y: 3.8, cls: 'c-eq', label: 'B' }], arrows: [{ from: [3.4, 6.28], to: [6.1, 4.12], cls: 'c-eq' }], alt: 'Movimiento a lo largo de la curva de demanda' })}
          ${h.plot({ x: [0, 10], y: [0, 10], h: 260, curves: [{ f: (x) => 7.5 - 0.8 * x, cls: 'c-d', ghost: true, label: 'D₀' }, { f: (x) => 9.5 - 0.8 * x, cls: 'c-d', label: 'D₁' }], arrows: [{ from: [3, 5.1], to: [5.2, 5.1], cls: 'c-d' }], alt: 'Desplazamiento de la curva de demanda' })}
        </div>
        <p class="muted-s">Izquierda: baja el precio del bien y se pasa de A a B por la misma curva. Derecha: sube la renta (bien normal) y toda la curva se corre.</p>
        ${note('“Si baja el precio del bien, aumenta la demanda” está <strong>mal dicho</strong>: aumenta la <strong>cantidad demandada</strong>. Esta distinción de vocabulario se corrige en el parcial.', 'exam')}
        <h2>Practicá: decidí y mirá la gráfica</h2>
        ${lab(0)}
        <h2>Desplazamientos simultáneos</h2>
        <p>Si se mueven las dos curvas, uno de los resultados depende de cuál se desplaza más:</p>
        ${table(['Demanda', 'Oferta', 'P*', 'X*'], [['↑ (der.)', '↑ (der.)', '¿?', '↑'], ['↓ (izq.)', '↓ (izq.)', '¿?', '↓'], ['↑ (der.)', '↓ (izq.)', '↑', '¿?'], ['↓ (izq.)', '↑ (der.)', '↓', '¿?']])}
        ${note('Truco: analizá cada desplazamiento por separado y anotá la flecha de P y de X. Donde las flechas coinciden, el resultado es seguro; donde se oponen, es ambiguo.', 'tip')}
        <h2>El caso de las computadoras (TP 3, ejercicio 11)</h2>
        <p>El rápido avance tecnológico abarató producir computadoras: la <strong>oferta se desplazó a la derecha</strong>. Resultado: <strong>precio de equilibrio ↓ y cantidad ↑</strong>. A la vez, su uso se volvió imprescindible (gustos, tamaño del mercado): la demanda también se corrió a la derecha. Como el precio bajó en términos reales, el efecto oferta fue el dominante.</p>
        ${chart({ x: [0, 12], y: [0, 10], curves: [{ f: (x) => 9 - 0.7 * x, cls: 'c-d', ghost: true, label: 'D₀' }, { f: (x) => 10 - 0.7 * x, cls: 'c-d', label: 'D₁' }, { f: (x) => 2 + 0.7 * x, cls: 'c-s', ghost: true, label: 'O₀' }, { f: (x) => -1 + 0.7 * x, dom: [1.43, 12], cls: 'c-s', label: 'O₁' }], points: [{ x: 5, y: 5.5, cls: 'pl-old', label: 'E₀', pos: 'w' }, { x: 7.86, y: 4.5, cls: 'c-eq', label: 'E₁' }], guides: [{ x: 7.86, y: 4.5, xt: 'X₁', yt: 'P₁' }] }, 'La oferta se desplazó más que la demanda: el precio baja y la cantidad sube mucho.')}`,
      labs: [{
        type: 'shiftdrill', title: '¿Desplazamiento o movimiento?', intro: 'Situaciones de los ejercicios 5, 8 y 9 del TP 3 (el bien es normal salvo que se aclare). Elegí la respuesta y mirá cómo cambia el gráfico.',
        items: [
          { t: 'Disminuye el precio de un bien <b>sustitutivo</b>.', r: 'd-', why: 'El sustituto se abarata y los consumidores se pasan a él.' },
          { t: 'Disminuye el precio de un bien <b>complementario</b>.', r: 'd+', why: 'Usar los dos juntos sale más barato.' },
          { t: 'Disminuye la renta de los consumidores (bien normal).', r: 'd-' },
          { t: 'Aumenta la renta de los consumidores y el bien es <b>inferior</b>.', r: 'd-', why: 'Con más ingreso se reemplaza por bienes mejores.' },
          { t: 'Disminuye la renta y el bien es <b>inferior</b>.', r: 'd+' },
          { t: 'Aumenta el tamaño del mercado (más consumidores).', r: 'd+' },
          { t: 'Cambio de gustos en contra del bien.', r: 'd-' },
          { t: 'Disminuye el precio del propio bien.', r: 'mov-d', why: 'Aumenta la cantidad demandada: movimiento a lo largo de la demanda.' },
          { t: 'Aumenta el precio de un bien <b>sustitutivo</b>.', r: 'd+' },
          { t: 'Aumenta el precio de los factores productivos.', r: 's-', why: 'Producir cuesta más.' },
          { t: 'Aumentan los impuestos sobre las ventas.', r: 's-' },
          { t: 'Aumenta el número de empresas en el mercado.', r: 's+' },
          { t: 'Mejora tecnológica en la producción del bien.', r: 's+' },
          { t: 'Disminuyen los impuestos sobre las ventas.', r: 's+' },
          { t: 'Aumenta el precio del propio bien (mirado desde la oferta).', r: 'mov-s', up: true, why: 'Aumenta la cantidad ofrecida: movimiento a lo largo de la oferta.' },
        ],
      }],
      exercises: [
        {
          official: '3.5', level: 1, title: '¿Hacia dónde se mueve la demanda?',
          prompt: '<p>El bien X es normal. Indique si la curva de demanda se desplaza a la derecha, a la izquierda o no se desplaza: a) disminuye el precio de un sustitutivo; b) disminuye el precio de un complementario; c) disminuye la renta; d) aumenta el tamaño del mercado; e) cambio de gustos en contra de X; f) disminuye el precio de X.</p>',
          solution: { explain: table(['Caso', 'Respuesta', 'Por qué'], [['a', 'Izquierda', 'Se compra más del sustituto'], ['b', 'Derecha', 'El conjunto sale más barato'], ['c', 'Izquierda', 'Bien normal: menos renta, menos demanda'], ['d', 'Derecha', 'Más consumidores'], ['e', 'Izquierda', 'Gustos'], ['f', '<strong>No se desplaza</strong>', 'Movimiento a lo largo: aumenta la cantidad demandada']]) },
        },
        {
          official: '3.8', level: 2, title: 'Tabla de cambios en la demanda',
          prompt: '<p>Para cada cambio, indique si hay desplazamiento de la curva de demanda o movimiento a lo largo, describa el efecto y justifique.</p>',
          solution: { explain: table(['Cambio', 'Tipo', 'Efecto'], [
            ['Disminución de la renta (bien inferior)', 'Desplazamiento', 'Derecha: con menos ingreso se consume más del bien inferior'],
            ['Aumento del precio de un sustitutivo', 'Desplazamiento', 'Derecha'], ['Disminución del precio de un sustitutivo', 'Desplazamiento', 'Izquierda'],
            ['Aumento de la renta (bien normal)', 'Desplazamiento', 'Derecha'], ['Aumento de la renta (bien inferior)', 'Desplazamiento', 'Izquierda'], ['Disminución de la renta (bien normal)', 'Desplazamiento', 'Izquierda'],
            ['Aumento del tamaño del mercado', 'Desplazamiento', 'Derecha'], ['Disminución del tamaño del mercado', 'Desplazamiento', 'Izquierda'],
            ['Incremento del precio del bien', '<strong>Movimiento</strong>', 'Hacia arriba por la curva: baja la cantidad demandada'], ['Disminución del precio del bien', '<strong>Movimiento</strong>', 'Hacia abajo: sube la cantidad demandada'],
            ['Aumento del precio de un complementario', 'Desplazamiento', 'Izquierda'], ['Disminución del precio de un complementario', 'Desplazamiento', 'Derecha'],
            ['Cambio de gustos a favor', 'Desplazamiento', 'Derecha'], ['Cambio de gustos en contra', 'Desplazamiento', 'Izquierda'],
          ]) },
        },
        {
          official: '3.9', level: 2, title: 'Tabla de cambios en la oferta',
          prompt: '<p>Para cada cambio, indique si hay desplazamiento de la curva de oferta o movimiento a lo largo, describa el efecto y justifique.</p>',
          solution: { explain: table(['Cambio', 'Tipo', 'Efecto'], [
            ['Incremento del precio de los factores productivos', 'Desplazamiento', 'Izquierda: sube el costo'], ['Aumento de los impuestos sobre ventas', 'Desplazamiento', 'Izquierda'],
            ['Incremento del precio del bien', '<strong>Movimiento</strong>', 'Hacia arriba: sube la cantidad ofrecida'],
            ['Disminución del número de empresas', 'Desplazamiento', 'Izquierda'], ['Aumento del número de empresas', 'Desplazamiento', 'Derecha'],
            ['Disminución de los impuestos sobre ventas', 'Desplazamiento', 'Derecha'], ['Disminución del precio de los factores', 'Desplazamiento', 'Derecha'],
            ['Mejora tecnológica', 'Desplazamiento', 'Derecha'], ['Disminución del precio del bien', '<strong>Movimiento</strong>', 'Hacia abajo: baja la cantidad ofrecida'],
          ]) },
        },
        {
          official: '3.11', level: 2, title: 'El mercado de computadoras',
          prompt: '<p>Explique gráfica y analíticamente el efecto del rápido avance tecnológico en la industria de la computadora personal sobre el precio y la cantidad de equilibrio.</p>',
          solution: { explain: '<p>La tecnología reduce los costos: la <strong>oferta se desplaza a la derecha</strong>. Con la demanda constante, <strong>P* baja y X* sube</strong>. Analíticamente, con D: P = a − bX y O: P = c + dX, una baja de c (costo) da X* = (a − c)/(b + d) mayor y P* = a − bX* menor. Si además la demanda creció (el gráfico de la lección), la cantidad sube todavía más y el precio baja porque domina el efecto oferta.</p>' },
        },
      ],
      quiz: [
        { q: 'Si sube el precio del café, en el mercado del café hay…', o: ['un desplazamiento de la demanda a la izquierda', 'una disminución de la cantidad demandada', 'una disminución de la demanda', 'un desplazamiento de la oferta'], a: 1, e: 'Es un movimiento a lo largo de la curva.' },
        { q: 'Si sube el precio del café, en el mercado del té (sustituto)…', o: ['aumenta la demanda de té', 'aumenta la cantidad demandada de té', 'baja la demanda de té', 'no pasa nada'], a: 0, e: 'Para el té es un factor exógeno: su curva se desplaza.' },
        { q: 'Aumenta la demanda y aumenta la oferta. Con seguridad…', o: ['sube el precio', 'baja el precio', 'sube la cantidad', 'baja la cantidad'], a: 2, e: 'Ambos desplazamientos aumentan X; el efecto sobre P es ambiguo.' },
        { q: 'Disminuye la oferta y aumenta la demanda. Con seguridad…', o: ['sube el precio', 'sube la cantidad', 'baja el precio', 'baja la cantidad'], a: 0, e: 'Los dos empujan el precio hacia arriba.' },
        { q: 'Una mejora tecnológica en el mercado de un bien produce…', o: ['P ↑, X ↓', 'P ↓, X ↑', 'P ↑, X ↑', 'P ↓, X ↓'], a: 1, e: 'Oferta a la derecha.' },
        { q: '¿Cuál de estos factores produce un movimiento a lo largo de la curva de oferta?', o: ['Una mejora técnica', 'Un subsidio', 'Un aumento del precio del bien', 'Más empresas'], a: 2, e: 'El precio del propio bien es la variable endógena.' },
      ],
      sources: [{ title: 'Diapositivas del Tema IV', ref: 'Cátedra de Economía', points: ['Variables exógenas (ceteris paribus) y endógena.', 'Desplazamiento = variación de la demanda; movimiento = variación de la cantidad demandada.', 'Desplazamiento simultáneo.'] }],
    },
  );
})();
