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
  );
})();
