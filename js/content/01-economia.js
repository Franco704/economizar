/* Tema II: Qué es la economía. Diapositivas "TEMA II QUE ES LA ECONOMÍA 2026", Blanco cap. 1 y Mankiw caps. 1 y 2. */
(() => {
  const { LESSONS, h } = window.GUIDE;
  const { note, def, table, fig, flow, lab } = h;

  // Flujo circular de la renta en una economía mixta: flechas azules = bienes y factores, punteadas naranjas = dinero
  const circular = fig(`<svg class="flowc" viewBox="0 0 560 330" role="img" aria-label="Flujo circular de la renta: familias y empresas se relacionan en el mercado de bienes y en el de factores; el Estado cobra impuestos y devuelve gasto y transferencias">
    <rect x="200" y="12" width="160" height="54" rx="12" class="fc-mkt"/><text x="280" y="36" class="fc-t">Mercado de bienes</text><text x="280" y="54" class="fc-s">y servicios</text>
    <rect x="200" y="264" width="160" height="54" rx="12" class="fc-mkt"/><text x="280" y="288" class="fc-t">Mercado de factores</text><text x="280" y="306" class="fc-s">trabajo, tierra, capital</text>
    <rect x="16" y="138" width="130" height="54" rx="12" class="fc-node"/><text x="81" y="170" class="fc-t">Familias</text>
    <rect x="414" y="138" width="130" height="54" rx="12" class="fc-node"/><text x="479" y="170" class="fc-t">Empresas</text>
    <rect x="222" y="140" width="116" height="50" rx="12" class="fc-state"/><text x="280" y="170" class="fc-t">Estado</text>
    <path d="M200 30H90V138" class="fc-real"/><path d="M200 50H110V138" class="fc-money"/>
    <path d="M360 30H470V138" class="fc-real"/><path d="M360 50H450V138" class="fc-money"/>
    <path d="M90 192V300H200" class="fc-real"/><path d="M110 192V280H200" class="fc-money"/>
    <path d="M470 192V300H360" class="fc-real"/><path d="M450 192V280H360" class="fc-money"/>
    <path d="M146 158H222" class="fc-money"/><path d="M338 158H414" class="fc-money"/><path d="M222 176H146" class="fc-real"/><path d="M414 176H338" class="fc-real"/>
    <text x="145" y="24" class="fc-s">bienes</text><text x="160" y="64" class="fc-s">gasto $</text>
    <text x="415" y="24" class="fc-s">bienes</text><text x="400" y="64" class="fc-s">ingresos $</text>
    <text x="145" y="318" class="fc-s">factores</text><text x="160" y="274" class="fc-s">rentas $</text>
    <text x="415" y="318" class="fc-s">factores</text><text x="400" y="274" class="fc-s">pagos $</text>
    <text x="184" y="150" class="fc-s">impuestos</text><text x="184" y="194" class="fc-s">transferencias</text>
    <text x="376" y="150" class="fc-s">impuestos</text><text x="376" y="194" class="fc-s">compras, subsidios</text>
  </svg>`, 'Flujo circular de la renta en una economía mixta. En azul circulan bienes y factores; en naranja punteado, el dinero en sentido contrario. El Estado recauda impuestos de familias y empresas y devuelve bienes públicos, transferencias y subsidios.');

  LESSONS.push(
    {
      id: 'que-es-la-economia',
      module: 't2',
      title: '¿Qué es la economía?',
      keywords: 'definición etimología oikos nomos ciencia social método modelo supuestos ley positiva normativa micro macro racionalidad',
      tldr: 'La economía estudia cómo una sociedad <mark>elige usar recursos escasos con usos alternativos</mark> para producir bienes y repartirlos. Es una ciencia social: construye modelos simplificados, los contrasta con la realidad y distingue entre lo que <em>es</em> (positiva) y lo que <em>debería ser</em> (normativa).',
      goals: ['Dar la definición de economía de la cátedra y su etimología.', 'Explicar qué es un modelo, un supuesto y una ley económica.', 'Clasificar afirmaciones en economía positiva o normativa.', 'Distinguir micro de macroeconomía.'],
      body: `
        <h2>Origen de la palabra</h2>
        <p>“Economía” une dos palabras griegas: <strong>oikos</strong>, casa (en el sentido de la actividad familiar), y <strong>nomos</strong>, del verbo <em>nemein</em>: administrar, arreglar, manejar. Su significado original era algo así como <em>el arte de administrar la propia casa</em>. Hoy la “casa” es un país entero, pero el problema sigue siendo el mismo: no alcanza para todo, hay que elegir.</p>
        ${def('Economía', 'Es el estudio de la forma en que decidimos utilizar los recursos productivos escasos que tienen usos alternativos para producir diversos bienes y distribuirlos para su consumo, presente o futuro, entre las diferentes personas y grupos de la sociedad.', 'Samuelson y Nordhaus, duodécima edición. Definición que usa la cátedra.')}
        <p>Conviene leer la definición por partes, porque cada palabra es un concepto del curso:</p>
        ${table(['Parte de la definición', 'Qué significa', 'Dónde vuelve a aparecer'], [
          ['recursos productivos', 'Los factores: trabajo, recursos naturales, capital, iniciativa empresarial', 'Tema VII, función de producción'],
          ['escasos', 'No alcanzan para cubrir todos los deseos', 'Tema III, escasez'],
          ['usos alternativos', 'El mismo recurso sirve para producir cosas distintas', 'Tema III, costo de oportunidad y FPP'],
          ['producir… distribuir', 'Las preguntas qué, cómo y para quién', 'Tema II, sistemas económicos'],
          ['presente o futuro', 'Consumir hoy o ahorrar e invertir para mañana', 'Tema III, crecimiento económico'],
        ])}
        <h2>Una ciencia social</h2>
        <p>La economía es una <strong>ciencia</strong> porque, en su búsqueda de explicaciones, usa un método científico: formula teorías y modelos que, para ser aceptados, deben contrastarse con la realidad. Es <strong>social</strong> porque estudia el comportamiento de personas y sociedades, no de objetos. Por eso no es una ciencia exacta: la conducta humana cambia, y los experimentos controlados casi nunca son posibles.</p>
        <p>Estudia a los individuos suponiendo <strong>racionalidad</strong>: una coherencia entre los fines que se persiguen y los medios que se usan para lograrlos. Un individuo racional compara ventajas (ganancias) y desventajas (costos) de cada opción y elige aquella en la que las ganancias superan a los costos por la mayor diferencia.</p>
        <p>La economía se relaciona con otras ciencias: la psicología (cómo responde el ser humano a estímulos), la historia (la relación entre los hechos del pasado y la situación económica), la sociología, el derecho (normas para el bien común), la administración (planificación de recursos, costos y beneficios), la ciencia política, las matemáticas y hasta las neurociencias.</p>
        ${note('<p>Keynes decía que el buen economista debe ser “matemático, historiador, estadista y filósofo (en cierto grado)”: comprender los símbolos y hablar con palabras corrientes, estudiar el presente a la luz del pasado y con vista al futuro.</p>', 'tip')}

        <h2>Teorías, modelos, supuestos y leyes</h2>
        ${def('Modelo', 'Una representación simplificada de la realidad basada en una teoría. Las simplificaciones que se realizan para construir un modelo suelen ser explícitas y se denominan «supuestos».', 'Diapositivas del Tema II, a partir de Blanco, cap. 1.')}
        <p>Un mapa es un buen ejemplo de modelo: no dibuja cada árbol, y justamente por eso sirve para no perderse. Los modelos económicos hacen lo mismo. En este curso vas a usar muchos:</p>
        <ul>
          <li>la <strong>frontera de posibilidades de producción</strong> supone que un país produce solo dos bienes (Tema III);</li>
          <li>la <strong>curva de demanda</strong> supone que todo lo demás permanece constante, <em>ceteris paribus</em> (Tema IV);</li>
          <li>el <strong>flujo circular de la renta</strong> reduce la economía a familias, empresas, Estado y dos mercados (lección siguiente).</li>
        </ul>
        <p>La economía también formula <strong>leyes económicas</strong>: regularidades que se cumplen para colectivos suficientemente grandes, no para cada persona. La más conocida es la <strong>ley de la demanda</strong>: al aumentar el precio de un bien, la cantidad demandada disminuye. Puede haber alguien que compre más caro por capricho, pero el conjunto de los consumidores reacciona así.</p>

        <h2>Economía positiva y economía normativa</h2>
        ${table(['', 'Economía positiva', 'Economía normativa'], [
          ['Qué estudia', 'La realidad <strong>tal cual es</strong>: cómo funciona la economía', 'Cómo <strong>debería ser</strong> la realidad'],
          ['Tipo de enunciado', 'Se puede contrastar con datos (verdadero o falso)', 'Contiene juicios de valor basados en principios éticos o morales'],
          ['Palabras que la delatan', '“si… entonces…”, “provoca”, “llevará a”', '“debe”, “debería”, “es conveniente”, “es justo”'],
          ['Ejemplo', 'Un aumento salarial llevará a un incremento del consumo', 'El Estado debe garantizar la asistencia sanitaria a toda la población'],
        ])}
        ${note('El TP 1 (ejercicio 8) pide clasificar afirmaciones. Buscá el verbo: si la frase predice o describe una relación causa-efecto que se podría medir, es positiva, aunque sea falsa. Si recomienda, opina o valora, es normativa.', 'exam')}
        ${lab(0)}

        <h2>Microeconomía y macroeconomía</h2>
        <p>La distinción depende del <strong>nivel de detalle</strong> que queremos estudiar:</p>
        <ul>
          <li><strong>Microeconomía</strong>: el comportamiento de hogares y empresas, las opciones que eligen y su interacción en mercados específicos. Es el <strong>primer parcial</strong>: oferta, demanda, elasticidad, costos, competencia perfecta.</li>
          <li><strong>Macroeconomía</strong>: el comportamiento de la economía en general. Es el <strong>segundo parcial</strong>: PIB, dinero, Banco Central, inflación, pobreza y desigualdad.</li>
        </ul>
        <p>La macroeconomía persigue objetivos y usa instrumentos para alcanzarlos:</p>
        ${table(['Objetivo', 'Instrumentos'], [
          ['Producción', 'Gasto público, impuestos, subsidios, política monetaria'],
          ['Empleo', 'Programas para desempleados (subsidios, capacitaciones), paritarias'],
          ['Precios e inflación', 'Políticas de seguimiento y control, tasa de interés'],
          ['Exportaciones e importaciones', 'Tipo de cambio, acuerdos comerciales regionales, barreras arancelarias y paraarancelarias'],
        ])}`,
      labs: [
        {
          type: 'classify', title: '¿Positiva o normativa?', intro: 'Las cuatro primeras son las del TP 1, ejercicio 8. Elegí una categoría para cada una y comprobá.',
          buckets: ['Economía positiva', 'Economía normativa'],
          items: [
            { t: 'Un aumento salarial llevará a un incremento del consumo.', b: 0, why: 'Predice una relación causa-efecto que se puede verificar con datos.' },
            { t: 'El Estado debe garantizar la asistencia sanitaria a todos los miembros de la población.', b: 1, why: '“Debe” expresa un juicio de valor.' },
            { t: 'Es conveniente reducir los impuestos con el fin de que aumente el consumo de las familias.', b: 1, why: '“Es conveniente” es una recomendación. Que la baja de impuestos aumente el consumo sería positivo; decir que conviene hacerlo es normativo.' },
            { t: 'Si aumenta el precio de venta de la vivienda, los constructores tendrán mayores incentivos a seguir edificando.', b: 0, why: 'Describe cómo responden los productores a un incentivo (ley de la oferta).' },
            { t: 'La inflación de 2024 fue mayor que la de 2025.', b: 0, why: 'Es un dato verificable, aunque podría ser verdadero o falso.' },
            { t: 'Es injusto que el salario mínimo esté por debajo de la canasta básica.', b: 1, why: '“Injusto” es una valoración ética.' },
          ],
        },
      ],
      quiz: [
        { q: '¿Qué significan las raíces griegas de “economía”?', o: ['Oikos = casa y nomos = administración', 'Oikos = dinero y nomos = ley', 'Oikos = mercado y nomos = número', 'Oikos = trabajo y nomos = riqueza'], a: 0, e: 'El arte de administrar la propia casa.' },
        { q: 'Según la definición de la cátedra, el problema central de la economía surge porque los recursos son…', o: ['abundantes pero mal distribuidos', 'escasos y con usos alternativos', 'propiedad del Estado', 'imposibles de medir'], a: 1, e: 'Si no fueran escasos no habría que elegir; si no tuvieran usos alternativos no habría entre qué elegir.' },
        { q: '¿Qué es un “supuesto” dentro de un modelo económico?', o: ['Una predicción que siempre se cumple', 'Una simplificación explícita de la realidad', 'Un dato estadístico', 'Una ley aprobada por el Congreso'], a: 1, e: 'Los modelos simplifican, y esas simplificaciones declaradas son los supuestos (por ejemplo, ceteris paribus).' },
        { q: '“El Estado debería subsidiar el transporte público”. Esta afirmación es de economía…', o: ['positiva', 'normativa', 'microeconómica positiva', 'experimental'], a: 1, e: 'Contiene un juicio de valor (“debería”).' },
        { q: 'Una ley económica, como la ley de la demanda, es…', o: ['una regularidad que se cumple para colectivos suficientemente grandes', 'una norma que todos deben obedecer', 'válida para cada persona sin excepción', 'una definición contable'], a: 0, e: 'Describe el comportamiento del conjunto, no de cada individuo.' },
        { q: '¿Cuál de estos temas es de macroeconomía?', o: ['El precio de la yerba en el mercado', 'Los costos de una panadería', 'La tasa de inflación del país', 'La elasticidad de la demanda de entradas de fútbol'], a: 2, e: 'La inflación mide el nivel general de precios de toda la economía.' },
        { q: '¿Qué supone la economía sobre los individuos cuando habla de “racionalidad”?', o: ['Que nunca se equivocan', 'Que hay coherencia entre los fines que persiguen y los medios que usan', 'Que solo buscan dinero', 'Que conocen el futuro'], a: 1, e: 'Racional es comparar costos y ganancias de cada opción y elegir la mejor según los propios fines.' },
      ],
      sources: [
        { title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 1', points: ['La economía como ciencia social que formula teorías y modelos contrastables.', 'Racionalidad: coherencia entre fines y medios; elegir la opción con mayor diferencia entre ganancias y costos.', 'Leyes económicas como regularidades para colectivos grandes.'] },
        { title: 'Principios de Economía', ref: 'Mankiw, caps. 1 y 2', points: ['El economista como científico: observación, teoría y nueva observación.', 'Afirmaciones positivas (descriptivas) y normativas (prescriptivas).', 'Microeconomía y macroeconomía.'] },
      ],
    },

    {
      id: 'recursos-y-factores',
      module: 't2',
      title: 'Bienes, factores productivos y agentes',
      keywords: 'bienes libres gratuitos económicos factores producción trabajo tierra recursos naturales capital físico humano iniciativa empresarial agentes consumo ahorro riqueza qué cómo para quién',
      tldr: 'Un bien es <mark>económico</mark> si es escaso y por eso tiene precio y costo de oportunidad; es <mark>libre</mark> si no lo es. Para producir bienes se combinan cuatro factores: trabajo, recursos naturales, capital e iniciativa empresarial. Toda sociedad debe responder tres preguntas: qué, cómo y para quién producir.',
      goals: ['Distinguir bienes libres de bienes económicos.', 'Nombrar y caracterizar los factores productivos, incluido el capital humano.', 'Explicar las tres preguntas fundamentales con ejemplos.', 'Definir consumo, ahorro y riqueza.'],
      body: `
        <h2>Bienes libres y bienes económicos</h2>
        ${table(['Bienes libres (gratuitos)', 'Bienes económicos'], [
          ['No son escasos en relación con su demanda total', 'Son escasos, por eso deben racionarse cobrando un precio'],
          ['Obtenerlos no implica renunciar a nada', 'Para obtenerlos hay que renunciar a algo'],
          ['No tienen costo de oportunidad', 'Implican costo de oportunidad'],
          ['Ejemplo: el aire que respiramos', 'Ejemplo: el agua potable que llega por cañería'],
        ])}
        <p>Que algo sea gratis para quien lo usa no lo convierte en bien libre. Una plaza pública o la universidad estatal son bienes económicos: alguien paga los recursos (con impuestos) y esos recursos podrían haberse usado en otra cosa. Como dice Blanco, “si usted recibe algo gratis, es porque otro paga por usted”.</p>
        <p>Un <strong>bien</strong> es todo objeto material transable que satisface necesidades; un <strong>servicio</strong>, una prestación intangible que también las satisface (una clase, un corte de pelo, un viaje en colectivo).</p>

        <h2>Los factores productivos</h2>
        ${table(['Factor', 'Qué es', 'Su remuneración'], [
          ['<strong>Trabajo</strong> (mano de obra)', 'El tiempo que las personas dedican a producir bienes y servicios', 'Salario'],
          ['<strong>Recursos naturales</strong> (tierra)', 'La tierra y los materiales naturales que la acompañan: minerales, agua, bosques', 'Renta o alquiler'],
          ['<strong>Capital</strong>', 'Bien producido que es duradero y sirve para producir otros bienes', 'Interés'],
          ['<strong>Iniciativa empresarial</strong>', 'La capacidad y disposición para combinar los otros recursos en una empresa productiva', 'Beneficio'],
        ])}
        <p>El capital tiene tres caras que la cátedra distingue:</p>
        <ul>
          <li><strong>Capital físico</strong>: maquinaria, equipos y fábricas.</li>
          <li><strong>Capital humano</strong>: las aptitudes y la capacitación de los trabajadores. Estudiar Ingeniería es invertir en capital humano.</li>
          <li><strong>Reserva de capital</strong>: la cantidad total de capital de una nación que es productivamente útil en un momento dado.</li>
        </ul>
        ${note('Cuidado: en economía “capital” no es dinero. El dinero no produce nada por sí mismo; una máquina sí. Comprar acciones o un plazo fijo es una inversión financiera, no capital físico.', 'warn')}
        <p>Los <strong>agentes económicos</strong> son los actores de la economía: <strong>individuos (familias), empresas y Estado</strong>.</p>

        <h2>Consumo, ahorro y riqueza</h2>
        <ul>
          <li>El <strong>consumo</strong> es el fin último de la actividad económica: la actividad por la que los individuos satisfacen sus necesidades.</li>
          <li>El <strong>ahorro</strong> es la decisión de consumir menos ahora para consumir más en el futuro.</li>
          <li>El proceso de ahorro incrementa la <strong>riqueza</strong> de los individuos (el stock de bienes y activos que poseen).</li>
        </ul>

        <h2>Las tres preguntas fundamentales</h2>
        ${table(['Pregunta', 'Por qué hay que responderla', 'Ejemplo argentino'], [
          ['<strong>¿Qué producir?</strong> (y cuánto)', 'Los recursos tienen usos alternativos: hay que asignarlos a una producción u otra', '¿Más soja o más maíz? ¿Más rutas o más hospitales?'],
          ['<strong>¿Cómo producirlo?</strong>', 'Hay varias combinaciones de factores que producen lo mismo; hay que elegir la más apropiada', 'Cosechar a mano (mucho trabajo) o con cosechadora (mucho capital)'],
          ['<strong>¿Para quién producirlo?</strong>', 'Una vez producidos, hay que repartir los bienes', '¿Quién accede a la vivienda? ¿Cómo se reparte el ingreso?'],
        ])}
        <p>Cómo responde cada sociedad estas preguntas es lo que diferencia a los <strong>sistemas económicos</strong>, el tema de la próxima lección.</p>`,
      labs: [
        {
          type: 'classify', title: '¿Qué factor productivo es?', buckets: ['Trabajo', 'Recursos naturales', 'Capital físico', 'Capital humano', 'Iniciativa empresarial'],
          items: [
            { t: 'Una cosechadora de un productor de Tucumán', b: 2, why: 'Bien producido y duradero que sirve para producir otros bienes.' },
            { t: 'Las horas que un operario pasa en el ingenio', b: 0 },
            { t: 'El título de ingeniero y lo aprendido para obtenerlo', b: 3, why: 'Aptitudes y capacitación de las personas.' },
            { t: 'Un yacimiento de litio en la Puna', b: 1 },
            { t: 'La decisión de alguien de abrir una fábrica combinando máquinas, empleados y un terreno', b: 4 },
            { t: 'El agua de un río usada para riego', b: 1 },
            { t: 'Un galpón industrial', b: 2 },
          ],
        },
      ],
      quiz: [
        { q: 'Un bien económico se caracteriza porque…', o: ['siempre lo produce el Estado', 'es escaso y obtenerlo implica un costo de oportunidad', 'no tiene precio', 'solo lo consumen las empresas'], a: 1, e: 'La escasez obliga a racionarlo con un precio y a renunciar a algo para obtenerlo.' },
        { q: 'La educación universitaria pública y sin arancel es…', o: ['un bien libre, porque el alumno no paga', 'un bien económico, porque usa recursos escasos que alguien financia', 'un factor productivo natural', 'un bien inferior'], a: 1, e: 'Que sea gratis para el alumno no significa que no tenga costo: lo pagan los contribuyentes y además hay costo de oportunidad.' },
        { q: '¿Cuál de estos es capital en sentido económico?', o: ['Un plazo fijo en el banco', 'Billetes guardados', 'Una máquina de coser en un taller', 'Una acción de una empresa'], a: 2, e: 'El capital es un bien producido y duradero que sirve para producir otros bienes.' },
        { q: 'El capital humano es…', o: ['la cantidad de trabajadores de un país', 'las aptitudes y la capacitación de los trabajadores', 'el sueldo de los empleados', 'el capital que tienen las familias'], a: 1, e: 'Se acumula con educación, formación y experiencia.' },
        { q: 'Decidir si una ruta se construye con picos y palas o con maquinaria responde a la pregunta…', o: ['¿qué producir?', '¿cómo producir?', '¿para quién producir?', '¿cuándo producir?'], a: 1, e: 'Es una elección entre combinaciones de factores (más trabajo o más capital).' },
        { q: 'El ahorro es…', o: ['consumir menos ahora para consumir más en el futuro', 'el dinero que se gasta en bienes', 'el beneficio de las empresas', 'lo que el Estado recauda'], a: 0, e: 'Y al ahorrar, aumenta la riqueza.' },
      ],
      sources: [
        { title: 'Diapositivas del Tema II', ref: 'Cátedra de Economía', points: ['Bienes gratuitos y económicos.', 'Factores productivos: mano de obra, recursos naturales, capital (físico, humano, reserva) e iniciativa empresarial.', 'Las tres preguntas fundamentales.'] },
        { title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 1', points: ['Consumo como fin último, ahorro y riqueza.', 'Tecnología: conocimientos técnicos y formas de hacer y actuar para producir.'] },
      ],
    },

    {
      id: 'sistemas-y-estado',
      module: 't2',
      title: 'Sistemas económicos, precios y rol del Estado',
      keywords: 'sistema tradicional planificada centralizada mercado mixta precios coordinación flujo circular renta distribución funcional personal estado eficiencia equidad estabilidad diez principios mankiw',
      tldr: 'Una sociedad puede coordinar qué, cómo y para quién producir por tradición, por autoridad o por el mercado. En el mercado <mark>la coordinación la hacen los precios</mark>. En la economía mixta, como la argentina, conviven el mercado y un Estado que busca eficiencia, equidad y estabilidad.',
      goals: ['Comparar los cuatro sistemas económicos.', 'Explicar por qué en el mercado la coordinación se hace a través de los precios.', 'Interpretar el flujo circular de la renta.', 'Enunciar las tres funciones del Estado y los diez principios de Mankiw.'],
      body: `
        <h2>Cuatro formas de organizar la economía</h2>
        ${table(['Sistema', 'Quién decide qué, cómo y para quién'], [
          ['<strong>Economía tradicional</strong>', 'La costumbre: se produce lo que siempre se produjo y como se hizo siempre (comunidades rurales, economías de subsistencia).'],
          ['<strong>Economía de mando, centralizada o planificada</strong>', 'La autoridad: un organismo central planifica la producción y la distribución (la ex Unión Soviética).'],
          ['<strong>Economía de mercado</strong>', 'Las decisiones descentralizadas de millones de compradores y vendedores, coordinadas por los precios.'],
          ['<strong>Economía mixta</strong>', 'Conviven el mercado y el Estado, que regula e interviene. Es el sistema de casi todos los países actuales.'],
        ])}
        <h3>Cómo coordinan los precios</h3>
        <p>En un mercado nadie le ordena a un productor de limones cuánto producir. Si los consumidores quieren más limones, el precio sube; ese precio más alto es a la vez una <strong>señal</strong> (hay demanda) y un <strong>incentivo</strong> (producir limones rinde más). Los productores producen más, los consumidores moderan sus compras y el mercado se ordena. Por eso, en un sistema de mercado, la coordinación entre agentes se lleva a cabo <strong>a través de los precios</strong>.</p>
        ${note('El TP 1 (ejercicio 4) pregunta cómo se coordinan los agentes en un sistema de mercado. Respuesta: b) a través de los precios. Justificación: el precio transmite información sobre la escasez relativa y da incentivos para producir o consumir más o menos, sin que nadie centralice la decisión.', 'exam')}

        <h2>La economía mixta</h2>
        <p>En la economía mixta, las instituciones privadas y las públicas ejercen el control económico: el sector privado a través del mecanismo de mercado y las instituciones públicas a través de regulaciones e incentivos fiscales. La actividad privada decide sin dirección central, y el Estado interviene mediante leyes, decretos y resoluciones: regulación de servicios públicos, salario mínimo, seguridad social, obras públicas, defensa, impuestos, control de la contaminación, justicia, subsidios.</p>
        <h3>El flujo circular de la renta</h3>
        <p>Es el modelo que resume cómo circula la economía. Las familias venden factores a las empresas en el mercado de factores y reciben a cambio rentas (salarios, alquileres, intereses, beneficios). Con esas rentas compran bienes a las empresas en el mercado de bienes. El dinero gira en un sentido; bienes y factores, en el contrario. El Estado cobra impuestos y devuelve gasto, transferencias y subsidios.</p>
        ${circular}
        ${note('Este mismo flujo es la base del PIB en el segundo parcial: medir lo que se produce, lo que se gasta o lo que se cobra en rentas da el mismo número (Tema X).', 'tip')}

        <h2>Distribución de la renta</h2>
        <p>La renta se distribuye según las cantidades de factores que posee cada uno (horas de trabajo, hectáreas, capital) y sus precios (salarios, alquileres, intereses). Por eso depende mucho de la distribución inicial de la propiedad, de las capacidades adquiridas y de la ausencia de discriminación de género, social o racial.</p>
        <ul>
          <li><strong>Distribución funcional</strong>: entre los factores. Los trabajadores aportan trabajo y reciben salarios; los propietarios aportan capital y perciben beneficios.</li>
          <li><strong>Distribución personal</strong>: entre las personas u hogares, sin importar de qué factor viene el ingreso (es la que mide el coeficiente de Gini, Tema XV).</li>
        </ul>

        <h2>Las tres funciones del Estado</h2>
        ${table(['Función', 'Problema que corrige', 'Instrumentos'], [
          ['<strong>Eficiencia</strong>', 'Mercados de competencia imperfecta (monopolios) y externalidades', 'Defensa de la competencia; incentivar externalidades positivas y desincentivar las negativas'],
          ['<strong>Equidad</strong>', 'El mercado sigue los “votos monetarios”, no las necesidades', 'Subsidios, becas, política fiscal con impuestos progresivos'],
          ['<strong>Estabilidad</strong>', 'Las oscilaciones del ciclo económico', 'Poderes monetarios y fiscales para influir en producción, empleo e inflación'],
        ])}

        <h2>Los diez principios de la economía (Mankiw)</h2>
        ${table(['#', 'Principio', 'Idea en una línea'], [
          ['1', 'Las personas enfrentan disyuntivas', 'Para conseguir algo hay que renunciar a otra cosa.'],
          ['2', 'El costo de algo es aquello a lo que se renuncia', 'El costo de oportunidad.'],
          ['3', 'Las personas racionales piensan en términos marginales', 'Se compara el beneficio marginal con el costo marginal.'],
          ['4', 'Las personas responden a los incentivos', 'Si cambian costos o beneficios, cambia la conducta.'],
          ['5', 'El comercio puede mejorar el bienestar de todos', 'Especialización e intercambio.'],
          ['6', 'Los mercados normalmente son un buen mecanismo para organizar la economía', 'La “mano invisible” de los precios.'],
          ['7', 'El Estado puede mejorar a veces los resultados del mercado', 'Corregir fallas de mercado y promover equidad.'],
          ['8', 'El nivel de vida de un país depende de su capacidad para producir', 'Productividad.'],
          ['9', 'Los precios suben cuando el gobierno imprime demasiado dinero', 'Inflación (Tema XIV).'],
          ['10', 'La sociedad enfrenta a corto plazo una disyuntiva entre inflación y desempleo', 'Curva de Phillips.'],
        ])}`,
      labs: [
        {
          type: 'classify', title: '¿Qué función del Estado cumple?', buckets: ['Eficiencia', 'Equidad', 'Estabilidad'],
          items: [
            { t: 'Un impuesto a las industrias que contaminan un río', b: 0, why: 'Desincentiva una externalidad negativa.' },
            { t: 'Becas para estudiantes de bajos ingresos', b: 1 },
            { t: 'Bajar la tasa de interés para reactivar la economía en una recesión', b: 2, why: 'Política monetaria contra el ciclo.' },
            { t: 'Multar a empresas que se ponen de acuerdo para subir precios', b: 0, why: 'Corrige competencia imperfecta.' },
            { t: 'Un impuesto a las ganancias con alícuotas que suben con el ingreso', b: 1, why: 'Impuesto progresivo.' },
            { t: 'Subsidiar la vacunación, que protege también a quien no se vacuna', b: 0, why: 'Incentiva una externalidad positiva.' },
          ],
        },
      ],
      exercises: [
        {
          official: '1.4', level: 1, title: 'Cómo se coordinan los agentes en un mercado',
          prompt: '<p>En un sistema de mercado, la necesaria coordinación entre los agentes económicos se lleva a cabo: a) a través del Estado; b) a través de los precios; c) poniéndose de acuerdo después de una discusión; d) a través de la publicidad. Justifique.</p>',
          hints: ['Pensá qué información recibe un productor que no conoce a sus clientes.'],
          solution: { explain: '<p><strong>b) A través de los precios.</strong> En el mercado nadie centraliza las decisiones. El precio resume la información sobre la escasez de cada bien: si un bien escasea, su precio sube; eso desalienta su consumo y alienta su producción. Así millones de decisiones independientes se coordinan sin un plan central. La opción a) describe una economía planificada; c) es inviable con millones de agentes; d) la publicidad informa o persuade, pero no asigna recursos.</p>' },
        },
      ],
      quiz: [
        { q: 'En una economía planificada, ¿quién responde qué, cómo y para quién producir?', o: ['La costumbre', 'Los precios', 'Una autoridad central', 'Las empresas extranjeras'], a: 2, e: 'Un organismo central planifica producción y distribución.' },
        { q: 'En un sistema de mercado, la coordinación entre agentes se realiza…', o: ['a través del Estado', 'a través de los precios', 'por acuerdo después de discutir', 'a través de la publicidad'], a: 1, e: 'Los precios son señales e incentivos (TP 1, ejercicio 4).' },
        { q: 'En el flujo circular, las familias obtienen sus ingresos…', o: ['vendiendo bienes en el mercado de bienes', 'vendiendo factores en el mercado de factores', 'solo de las transferencias del Estado', 'pidiendo préstamos'], a: 1, e: 'Venden trabajo, tierra o capital y reciben salarios, rentas, intereses y beneficios.' },
        { q: 'Un subsidio a familias de bajos ingresos responde a la función de…', o: ['eficiencia', 'equidad', 'estabilidad', 'competencia perfecta'], a: 1, e: 'Corrige que el mercado siga los votos monetarios y no las necesidades.' },
        { q: '¿Qué estudia la distribución funcional de la renta?', o: ['Cómo se reparte el ingreso entre los factores (salarios, beneficios…)', 'Cómo se reparte entre provincias', 'Cuánto gana cada persona', 'Cuánto recauda el Estado'], a: 0, e: 'La personal, en cambio, mira el ingreso de cada persona u hogar.' },
        { q: 'El noveno principio de Mankiw dice que…', o: ['el comercio empeora a todos', 'los precios suben cuando el gobierno imprime demasiado dinero', 'el Estado nunca debe intervenir', 'la inflación reduce el desempleo a largo plazo'], a: 1, e: 'Es la base del tema de inflación del segundo parcial.' },
      ],
      sources: [
        { title: 'Diapositivas del Tema II', ref: 'Cátedra de Economía', points: ['Sistemas económicos: tradicional, planificada, de mercado y mixta.', 'Economía mixta: control privado vía mercado y público vía regulaciones e incentivos fiscales.', 'Rol del Estado: eficiencia, equidad y estabilidad.', 'Distribución funcional y personal de la renta.'] },
        { title: 'Principios de Economía', ref: 'Mankiw, cap. 1', points: ['Los diez principios de la economía.'] },
      ],
    },

    {
      id: 'fallos-de-mercado',
      module: 't2',
      title: 'Autoridad o mercado: la mano invisible y los fallos del mercado',
      keywords: 'autoridad mercado mano invisible adam smith intercambio voluntario propiedad privada precio información incentivo racionamiento fallos del mercado poder de mercado externalidades efectos externos coase pigou bienes públicos polizón equidad eficiencia estabilidad keynes fallos del estado historia pensamiento',
      tldr: 'Una sociedad que se especializa necesita coordinarse, y hay dos formas básicas: la <mark>autoridad</mark> y el <mark>mercado</mark>. En el mercado los precios transmiten información, crean incentivos y racionan lo escaso: es la “mano invisible” de Adam Smith. Pero falla con <strong>poder de mercado, externalidades y bienes públicos</strong>, y puede dar una distribución injusta o ajustar muy lento. Por eso el Estado interviene, aunque también puede equivocarse.',
      goals: ['Comparar el sistema de autoridad con el de mercado.', 'Explicar las tres funciones del precio con un ejemplo.', 'Explicar cómo el mercado responde qué, cómo y para quién producir.', 'Reconocer los tres fallos del mercado y la solución de cada uno.', 'Relacionar las causas de la intervención del Estado con eficiencia, equidad y estabilidad.'],
      body: `
        <h2>Especializarse obliga a coordinarse</h2>
        <p>Robinson Crusoe, solo en su isla, no tiene ningún problema de organización: decide él mismo qué producir con sus recursos. Pero la humanidad descubrió hace mucho que conviene <strong>dividir el trabajo</strong>: cada uno se especializa en lo que hace mejor y, con la práctica, gana destreza. El precio de la especialización es la <strong>dependencia</strong>: ahora cada uno necesita lo que producen los demás. Alguien tiene que decidir qué se produce y cómo se reparte. En la historia hubo dos maneras básicas de hacerlo.</p>
        ${table(['', 'Sistema de autoridad', 'Sistema de mercado'], [
          ['Quién decide', 'Una persona o un colectivo (en general, el gobierno) con potestad para obligar al resto', 'Nadie en particular: millones de individuos y empresas deciden por separado lo que les conviene'],
          ['Propiedad de los factores', 'El Estado suele ser dueño de buena parte de la tierra y el capital', 'Privada, con normas que regulan cómo se adquiere y se transfiere'],
          ['Cómo se coordina', 'Por órdenes', 'Por <strong>precios</strong> e <strong>intercambio voluntario</strong>'],
          ['Ejemplos', 'Rusia, gran parte de Europa del Este y China durante buena parte del siglo XX', 'La mayoría de las decisiones económicas de casi todos los países actuales'],
        ])}
        <h2>La mano invisible</h2>
        <p>En 1776 Adam Smith se sorprendía de que un sistema en el que cada uno busca su propio interés no terminara en caos sino en armonía: consumidores y empresas promueven el interés general <em>sin pretenderlo</em>, “como guiados por una mano invisible”. La “mano” es una forma de nombrar el complejo sistema de coordinación que forman los precios. El resultado: sin que nadie obligue a nada, las empresas producen lo que desean los consumidores y los consumidores aceptan lo que producen las empresas.</p>
        <p>El mercado se basa en el <strong>intercambio voluntario</strong>: nadie compra ni vende si no le conviene, así que todo intercambio beneficia a las dos partes. Para eso la sociedad tiene que garantizar la propiedad privada y hacer cumplir los contratos, con sanciones para quien no los respete.</p>
        <h3>Las tres funciones del precio</h3>
        ${table(['Función', 'Qué hace', 'Ejemplo de Blanco'], [
          ['<strong>Información</strong>', 'Transmite los deseos de los consumidores y las condiciones de producción', 'Cambia la moda y se quieren más prendas de algodón: los cultivadores se enteran porque sube el precio del algodón'],
          ['<strong>Incentivo</strong>', 'Premia o castiga conductas, porque cambia ganancias y costos', 'Con el algodón más caro, plantar algodón rinde más: muchos agricultores plantan más'],
          ['<strong>Racionamiento</strong>', 'Reparte lo escaso: ante la escasez el precio sube y algunos compradores se retiran', 'Se lo lleva quien está dispuesto a pagar más (Tema IV)'],
        ])}
        ${note('El mecanismo funciona bien si <strong>nadie puede fijar o manipular el precio</strong> por su cuenta, es decir, en competencia perfecta. Si un vendedor controla el precio, el precio deja de transmitir la información verdadera.', 'warn')}
        <h3>Cómo responde el mercado a las tres preguntas</h3>
        ${table(['Pregunta', 'La responden…', 'Ejemplo'], [
          ['¿Qué producir?', 'Los precios de los productos', 'Si se quiere más pan, sube el trigo y algunos agricultores pasan campos de cebada a trigo'],
          ['¿Cómo producir?', 'Los precios de los factores: se usa la combinación más barata', 'Donde los salarios son altos las rutas se hacen con mucha maquinaria; donde son bajos, con muchos trabajadores'],
          ['¿Para quién producir?', 'Los precios de los factores, que determinan las rentas', 'Si las empresas necesitan más ingenieros, sube su salario y reciben una parte mayor del producto'],
        ])}
        <p>No confundas <strong>renta</strong> (lo que una persona percibe en un período: su parte del producto de ese año) con <strong>riqueza</strong> (lo acumulado con el ahorro propio o ajeno en años anteriores).</p>

        <h2>Los fallos del mercado</h2>
        <p>En ningún país el mercado asigna absolutamente todos los recursos. Hay situaciones en que funciona mal o directamente no funciona: son los <strong>fallos del mercado</strong>.</p>
        <h3>1. Mercados no competitivos</h3>
        <p>Si un vendedor produce tanto que puede manipular el precio, tiene <strong>poder de mercado</strong> (un monopolio, por ejemplo). El precio ya no refleja ni los deseos de los consumidores ni las condiciones de producción. Solución: regular precios o fomentar la competencia (defensa de la competencia).</p>
        <h3>2. Efectos externos (externalidades)</h3>
        <p>A veces ventajas o desventajas de una decisión no recaen sobre quien compra o vende, sino sobre <strong>terceros</strong> que no decidieron nada. El ejemplo clásico: una fábrica química vierte residuos en un río. Usa un recurso (el río) sin pagar nada por él: el costo recae sobre pescadores, bañistas y poblaciones que toman esa agua. Como el precio no le transmite lo que vale el río, contamina más de lo socialmente deseable.</p>
        <ul>
          <li><strong>Externalidad negativa</strong> (contaminación, ruido): el Estado impone sanciones o impuestos para que contaminar tenga un costo. A estos impuestos se los llama <strong>pigovianos</strong>, por Arthur Pigou (1920).</li>
          <li><strong>Externalidad positiva</strong> (vacunarse, restaurar la fachada de una casa histórica): se subsidia o se incentiva.</li>
        </ul>
        ${note('<p><strong>Teorema de Coase</strong> (Ronald Coase, 1960): si las partes pueden negociar sin costos importantes, el propio mercado resuelve la externalidad. Si Pedro perjudica a Juan, Juan puede pagarle a Pedro para que deje de hacerlo cuando su daño supera el beneficio de Pedro. Lo notable es que el resultado no depende de quién tenga el derecho: solo cambia quién le paga a quién. Pero cuando hay muchos afectados, los <strong>costos de transacción</strong> (ponerse de acuerdo y hacer cumplir el acuerdo) son tan altos que la negociación no ocurre y hace falta el Estado.</p>', 'tip')}
        <h3>3. Bienes públicos</h3>
        <p>Una vez que alguien adquiere un bien público, todos los demás lo disfrutan, <strong>aunque no lo hayan pagado</strong>: no se puede excluir a nadie. Por eso cada uno tiene incentivo a no pagar y esperar que paguen los otros (el problema del “polizón” o del que viaja gratis). El alumbrado de una calle no lo contrataría nunca un acuerdo voluntario de vecinos: el Estado lo contrata y lo cobra con impuestos. Otros ejemplos: la defensa nacional, la seguridad, el mantenimiento de la vía pública, un faro para los barcos. Un bien público es un caso extremo de externalidad positiva.</p>
        ${lab(0)}

        <h2>Por qué interviene el Estado</h2>
        <p>Blanco resume las causas de la intervención en una tabla que conviene saber de memoria:</p>
        ${table(['Causa', 'Objetivo', 'Medidas'], [
          ['1a. El mercado funciona mal: mercados no competitivos y externalidades', 'Corregir los fallos: <strong>eficiencia</strong>', 'Regulación, fomento de la competencia, impuestos y sanciones'],
          ['1b. El mercado no funciona: bienes públicos', '<strong>Eficiencia</strong>', 'Provisión pública de esos bienes'],
          ['2. El mercado funciona pero da una distribución que la sociedad considera injusta', '<strong>Equidad</strong>', 'Políticas de redistribución: impuestos a los que más ganan, transferencias a los que menos'],
          ['3. El mercado funciona pero, a veces, con excesiva lentitud (crisis, desempleo)', '<strong>Estabilidad</strong>', 'Políticas de estabilización'],
        ])}
        <ul>
          <li><strong>Equidad y eficiencia chocan</strong>: el esfuerzo, la capacitación y la innovación se hacen porque prometen más ingresos. Redistribuir achica esa diferencia y puede desalentarlos. Por eso se busca redistribuir sin desincentivar demasiado.</li>
          <li><strong>Estabilidad</strong>: algunos mercados, sobre todo el de trabajo, tardan mucho en volver al equilibrio. Keynes (1936) sostuvo que el Estado puede acelerar la salida de una crisis con una política económica activa. Es el precursor de las políticas de estabilización.</li>
        </ul>
        ${note('<p>Hoy predomina el mercado, pero el Estado tiene un papel importante: es la <strong>economía mixta</strong>. Que el Estado deba intervenir más o menos es una discusión de <strong>economía normativa</strong>. Quienes quieren limitarlo hablan de <strong>fallos del Estado</strong>: políticos y funcionarios deciden sobre recursos ajenos en beneficio ajeno, y por eso tendrían menos incentivos que un privado para usarlos bien.</p>', 'exam')}

        <h2>Algo de historia</h2>
        ${table(['Autor y año', 'Aporte'], [
          ['Jenofonte (siglo IV a. C.)', '<em>Oeconomicus</em>: el primer texto que usa la palabra “economía”, sobre la gestión del hogar y la agricultura'],
          ['Cicerón (44 a. C.)', 'Primer uso de <em>ceteris paribus</em> en un contexto económico'],
          ['François Quesnay (1758)', '<em>Tableau économique</em>: el primer esquema del flujo circular de la renta'],
          ['Adam Smith (1776)', '<em>La riqueza de las naciones</em>: la mano invisible. Nace la economía moderna'],
          ['Thomas Malthus', 'El crecimiento de la población llevaría los salarios al nivel de subsistencia'],
          ['David Ricardo', 'Ley de rendimientos decrecientes y teoría del valor trabajo'],
          ['Karl Marx', 'Teoría de la explotación (plusvalía); inspiró los sistemas de autoridad del siglo XX'],
          ['Jevons, Menger, Walras, Marshall (1870–1890)', 'La revolución marginalista o neoclásica: matemáticas y utilidad marginal'],
          ['John M. Keynes (1936)', '<em>Teoría general</em>: nace la macroeconomía moderna y la idea de estabilizar'],
          ['Paul Samuelson (1947, 1954)', 'Formalización matemática y tratamiento formal de los bienes públicos'],
          ['Arthur Pigou (1920) y Ronald Coase (1960)', 'Externalidades: impuestos correctivos y negociación entre las partes'],
        ])}`,
      labs: [
        {
          type: 'classify', title: '¿Qué fallo del mercado es?', intro: 'Incluye los cuatro casos del ejercicio 1.9.10 de Blanco (¿es un bien público?).', buckets: ['Poder de mercado', 'Externalidad negativa', 'Externalidad positiva', 'Bien público', 'No es un fallo'],
          items: [
            { t: 'La defensa nacional', b: 3, why: 'Nadie puede ser excluido de su protección, pague o no.' },
            { t: 'Un faro para los barcos', b: 3, why: 'Todos los barcos que pasan lo aprovechan, paguen o no.' },
            { t: 'Un diario de tirada nacional', b: 4, why: 'Quien no lo compra no lo lee: se puede excluir. Es un bien privado.' },
            { t: 'Una visita al médico', b: 4, why: 'La consulta la aprovecha solo quien la paga: bien privado.' },
            { t: 'Una curtiembre que vierte residuos en el río Salí', b: 1 },
            { t: 'Un vecino que se vacuna y reduce el contagio de todo el barrio', b: 2 },
            { t: 'La única empresa de una provincia que ofrece un servicio sube su tarifa porque nadie puede competirle', b: 0 },
            { t: 'El alumbrado público de una calle', b: 3, why: 'El ejemplo de Blanco: una vez instaladas las farolas, nadie puede impedir que los que no pagaron también vean.' },
          ],
        },
      ],
      quiz: [
        { q: 'En un sistema de mercado, el resultado final depende de…', o: ['las órdenes de una autoridad central', 'las acciones de millones de agentes que deciden por separado', 'un acuerdo entre todas las empresas', 'la tradición'], a: 1, e: 'Nadie decide globalmente; los precios coordinan.' },
        { q: '¿Cuál NO es una función del precio en un sistema de mercado?', o: ['Transmitir información', 'Crear incentivos', 'Racionar lo escaso', 'Garantizar una distribución equitativa'], a: 3, e: 'El mercado reparte según los “votos monetarios”: por eso existe la función de equidad del Estado.' },
        { q: 'Una fábrica contamina un río y el costo lo pagan los pescadores. Es…', o: ['un bien público', 'una externalidad negativa', 'poder de mercado', 'un costo explícito de la fábrica'], a: 1, e: 'El costo recae sobre terceros que no decidieron nada.' },
        { q: 'La característica de un bien público es que…', o: ['lo produce siempre el Estado', 'una vez suministrado no se puede excluir a nadie de su disfrute', 'es gratis', 'todos están dispuestos a pagar por él'], a: 1, e: 'Blanco 1.6.12. Por eso cada uno espera que pague el otro.', src: 'Blanco 1.6.12' },
        { q: 'Según el teorema de Coase, una externalidad se resuelve sin el Estado si…', o: ['hay muchos afectados', 'las partes pueden negociar con costos de transacción bajos', 'el Estado fija un impuesto', 'el bien es público'], a: 1, e: 'Con muchos afectados, ponerse de acuerdo cuesta demasiado.' },
        { q: 'Las políticas de redistribución persiguen el objetivo de…', o: ['eficiencia', 'equidad', 'estabilidad', 'competencia perfecta'], a: 1, e: 'Transfieren rentas de quienes ganan más a quienes ganan menos.' },
        { q: '¿Por qué puede chocar la equidad con la eficiencia?', o: ['Porque los impuestos son ilegales', 'Porque redistribuir reduce la recompensa del esfuerzo y la innovación', 'Porque la eficiencia exige monopolios', 'No pueden chocar'], a: 1, e: 'Es la disyuntiva equidad-eficiencia de Blanco.' },
        { q: 'El primer esquema del flujo circular de la renta lo describió…', o: ['Adam Smith', 'François Quesnay', 'Keynes', 'Marshall'], a: 1, e: 'En el <em>Tableau économique</em> de 1758.' },
      ],
      sources: [
        { title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 1 (1.3.7 a 1.3.9 y “Algo de historia”)', points: ['Autoridad y mercado; la mano invisible; intercambio voluntario.', 'Precios: información, incentivos; cómo responde el mercado a qué, cómo y para quién.', 'Fallos del mercado: mercados no competitivos, efectos externos (Coase, Pigou) y bienes públicos.', 'Causas de la intervención del Estado (Tabla 1.7) y fallos del Estado.'] },
        { title: 'Principios de Economía', ref: 'Mankiw, caps. 1, 10 y 11', points: ['Principios 6 y 7: los mercados suelen organizar bien la economía; el Estado puede mejorar a veces sus resultados.', 'Externalidades y bienes públicos.'] },
      ],
    },

    {
      id: 'flujo-circular',
      module: 't2',
      title: 'El flujo circular de la renta, paso a paso',
      keywords: 'flujo circular renta diagrama familias empresas mercado de bienes productos mercado de factores flujo real monetario dinero estado economía mixta impuestos gasto público transferencias subsidios sector externo exportaciones importaciones dibujar parcial',
      tldr: 'El flujo circular resume toda la economía en dos tipos de agentes y dos mercados. Las familias venden <strong>factores</strong> a las empresas y compran sus <strong>bienes</strong>; por cada flujo <mark>real</mark> (bienes, factores) corre un flujo <mark>monetario</mark> (gasto, rentas) en sentido contrario. En una economía mixta se suma el Estado: cobra impuestos y devuelve compras, transferencias y subsidios. Es una pregunta fija del primer parcial.',
      goals: ['Dibujar el flujo circular de dos sectores y el de una economía mixta.', 'Distinguir en el diagrama los flujos reales de los monetarios.', 'Ubicar en qué mercado se forma cada precio y de dónde salen las rentas.', 'Conectar el diagrama con el cálculo del PIB.'],
      body: `
        ${note('Aparece en los parciales de 2023 y 2024 (y en la resolución del 1er parcial que circula): <em>“Dibuje un diagrama de flujo circular. Identifique las partes del modelo que corresponden al flujo de bienes y servicios y las que corresponden al flujo de dinero, suponiendo una economía mixta.”</em>', 'exam')}
        <h2>Los protagonistas</h2>
        <ul>
          <li><strong>Familias</strong>: son las dueñas de los factores productivos (su trabajo, sus tierras, su capital) y consumen bienes y servicios.</li>
          <li><strong>Empresas</strong>: compran factores, producen bienes y servicios y los venden.</li>
          <li><strong>Mercado de bienes y servicios</strong> (de productos): las empresas venden y las familias compran. Ahí se forman los <strong>precios de los productos</strong>.</li>
          <li><strong>Mercado de factores</strong>: las familias venden trabajo, tierra y capital y las empresas los compran. Ahí se forman los <strong>precios de los factores</strong>: salario, alquiler o renta, interés y beneficio.</li>
        </ul>
        <h2>Primero, la economía sin Estado</h2>
        ${fig(`<svg class="flowc" viewBox="0 0 560 330" role="img" aria-label="Flujo circular con familias, empresas, mercado de bienes y mercado de factores; los bienes y factores circulan en un sentido y el dinero en el contrario">
          <rect x="200" y="12" width="160" height="54" rx="12" class="fc-mkt"/><text x="280" y="36" class="fc-t">Mercado de bienes</text><text x="280" y="54" class="fc-s">precios de los productos</text>
          <rect x="200" y="264" width="160" height="54" rx="12" class="fc-mkt"/><text x="280" y="288" class="fc-t">Mercado de factores</text><text x="280" y="306" class="fc-s">salarios, alquileres, intereses</text>
          <rect x="16" y="138" width="130" height="54" rx="12" class="fc-node"/><text x="81" y="170" class="fc-t">Familias</text>
          <rect x="414" y="138" width="130" height="54" rx="12" class="fc-node"/><text x="479" y="170" class="fc-t">Empresas</text>
          <path d="M200 30H90V138" class="fc-real"/><path d="M200 50H110V138" class="fc-money"/>
          <path d="M360 30H470V138" class="fc-real"/><path d="M360 50H450V138" class="fc-money"/>
          <path d="M90 192V300H200" class="fc-real"/><path d="M110 192V280H200" class="fc-money"/>
          <path d="M470 192V300H360" class="fc-real"/><path d="M450 192V280H360" class="fc-money"/>
          <text x="140" y="24" class="fc-s">bienes que compran</text><text x="160" y="66" class="fc-s">gasto en consumo $</text>
          <text x="420" y="24" class="fc-s">bienes que venden</text><text x="400" y="66" class="fc-s">ingresos por ventas $</text>
          <text x="140" y="318" class="fc-s">trabajo, tierra, capital</text><text x="160" y="272" class="fc-s">rentas $</text>
          <text x="420" y="318" class="fc-s">factores que compran</text><text x="400" y="272" class="fc-s">pagos a factores $</text>
        </svg>`, 'Economía de mercado de dos sectores. Línea continua azul: flujo real (bienes y factores). Línea naranja punteada: flujo monetario, en sentido contrario. Es la Figura 1.3 de Blanco.')}
        ${table(['Flujo', 'De → a', 'Pasa por el mercado de…', 'Tipo'], [
          ['Bienes y servicios', 'Empresas → familias', 'bienes', '<strong>Real</strong>'],
          ['Gasto en consumo', 'Familias → empresas', 'bienes', '<strong>Monetario</strong> (para las empresas es su ingreso por ventas)'],
          ['Trabajo, tierra, capital, iniciativa', 'Familias → empresas', 'factores', '<strong>Real</strong>'],
          ['Salarios, alquileres, intereses, beneficios', 'Empresas → familias', 'factores', '<strong>Monetario</strong> (para las familias son sus rentas)'],
        ])}
        <p>Leelo como un círculo cerrado: las familias reciben rentas por sus factores; con esas rentas compran bienes; ese gasto es el ingreso de las empresas; con ese ingreso las empresas pagan los factores… y vuelve a empezar. Por eso <strong>los precios de los factores determinan la distribución</strong>: quien tiene un factor con precio alto obtiene más renta y se lleva una parte mayor de la producción.</p>
        <h2>Ahora, la economía mixta</h2>
        <p>En una economía mixta el Estado participa en los dos mercados y, además, quita y da dinero sin contraprestación:</p>
        ${circular}
        ${table(['Flujo del Estado', 'De → a', 'Tipo y comentario'], [
          ['<strong>Impuestos</strong>', 'Familias y empresas → Estado', 'Monetario. Directos (sobre la renta) e indirectos (sobre las ventas)'],
          ['<strong>Compras de bienes y servicios</strong> (gasto público)', 'Estado → mercado de bienes', 'Monetario hacia las empresas; a cambio recibe bienes (flujo real). Rutas, insumos de hospitales'],
          ['<strong>Contratación de factores</strong>', 'Estado → mercado de factores', 'Paga salarios a docentes, médicos y policías (monetario) a cambio de su trabajo (real)'],
          ['<strong>Bienes públicos</strong>', 'Estado → familias y empresas', 'Real: defensa, justicia, alumbrado, educación y salud públicas'],
          ['<strong>Transferencias</strong>', 'Estado → familias', 'Monetario <em>sin contraprestación</em>: jubilaciones, asignaciones, becas'],
          ['<strong>Subsidios</strong>', 'Estado → empresas', 'Monetario sin contraprestación: subsidios al transporte o a la energía'],
        ])}
        ${note('Las transferencias y los subsidios no son pago por un bien o un factor: por eso no entran en el PIB por el lado del gasto (Tema X).', 'tip')}
        <h3>Y el resto del mundo</h3>
        <p>Si la economía está abierta, una parte del gasto de las familias se va a empresas extranjeras (<strong>importaciones</strong>) y una parte de la producción nacional la compran extranjeros (<strong>exportaciones</strong>). En el diagrama, un quinto agente, el “resto del mundo”, conectado al mercado de bienes.</p>
        <h2>Por qué importa: producción = gasto = renta</h2>
        <p>Como todo lo que se gasta en bienes es ingreso de alguna empresa, y todo ese ingreso termina pagando factores (incluido el beneficio del empresario), el valor de la <strong>producción</strong>, el <strong>gasto</strong> y las <strong>rentas</strong> es el mismo número medido en tres puntos del círculo. Es la base de los tres enfoques del PIB del segundo parcial.</p>
        <h2>Cómo dibujarlo en el parcial</h2>
        <ol>
          <li>Cuatro cajas: familias a la izquierda, empresas a la derecha, mercado de bienes arriba, mercado de factores abajo. El Estado en el centro.</li>
          <li>Flujo real con línea continua, en sentido antihorario (en este dibujo): bienes de empresas a familias por arriba; factores de familias a empresas por abajo.</li>
          <li>Flujo monetario con línea punteada, en sentido contrario: gasto de familias a empresas; rentas de empresas a familias.</li>
          <li><strong>Rotulá cada flecha</strong> (“gasto en consumo”, “salarios, alquileres, intereses, beneficios”…). Una flecha sin nombre no suma.</li>
          <li>Estado: impuestos desde familias y desde empresas; gasto público hacia el mercado de bienes; salarios públicos por el de factores; transferencias a familias; subsidios a empresas.</li>
          <li>Agregá una leyenda: “continua = bienes y servicios / factores; punteada = dinero”. Es exactamente lo que pide la consigna.</li>
        </ol>
        ${note('Errores que restan: decir que las familias “compran factores” (los <em>venden</em>); dibujar el dinero en el mismo sentido que los bienes; poner al Estado solo cobrando, sin flechas de vuelta; olvidar que la consigna dice “economía mixta”.', 'warn')}`,
      quiz: [
        { q: 'En el flujo circular, las familias…', o: ['compran factores y venden bienes', 'venden factores y compran bienes', 'solo compran bienes', 'producen bienes'], a: 1, e: 'Son las dueñas de los factores.' },
        { q: '¿Cuál de estos es un flujo monetario?', o: ['El trabajo que las familias ofrecen', 'Los bienes que venden las empresas', 'Los salarios que pagan las empresas', 'La tierra que se alquila'], a: 2, e: 'El salario es dinero que va de empresas a familias.' },
        { q: 'Los precios de los factores (salarios, alquileres, intereses) se forman en…', o: ['el mercado de bienes', 'el mercado de factores', 'el Estado', 'el resto del mundo'], a: 1, e: 'Y determinan las rentas de las familias.' },
        { q: 'Una jubilación, en el flujo circular, es…', o: ['una compra de bienes del Estado', 'una transferencia del Estado a las familias', 'un impuesto', 'un pago por factores'], a: 1, e: 'Dinero sin contraprestación.' },
        { q: 'El flujo real y el monetario circulan…', o: ['en el mismo sentido', 'en sentidos contrarios', 'solo entre familias', 'solo a través del Estado'], a: 1, e: 'Por cada bien que va hacia un lado, el dinero va hacia el otro.' },
        { q: 'El sueldo de una docente de escuela pública, en el diagrama de economía mixta, pasa por…', o: ['el mercado de factores: el Estado compra trabajo', 'las transferencias', 'el mercado de bienes', 'los subsidios'], a: 0, e: 'Hay contraprestación: la docente entrega su trabajo.' },
      ],
      sources: [
        { title: 'Economía: teoría y práctica', ref: 'Blanco, caps. 1 (1.3.8) y 10 (10.3.6)', points: ['Familias y empresas en los mercados de productos y de factores (Figura 1.3).', 'Línea continua: bienes y factores; discontinua: dinero.', 'Los precios de los factores determinan las rentas y la distribución.'] },
        { title: 'Principios de Economía', ref: 'Mankiw, cap. 2', points: ['El diagrama del flujo circular como primer modelo de la economía.'] },
      ],
    },
  );
})();
