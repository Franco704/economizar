/* Tema XIII: Funciones del Banco Central. Diapositivas "TEMA XIII FUNCIONES BANCO CENTRAL 26", Blanco cap. 14, Mankiw cap. 29. TP 6 (ejercicio 2). */
(() => {
  const { LESSONS, h } = window.GUIDE;
  const { note, def, table, chart, eq, frac, num, lab, flow } = h;

  LESSONS.push(
    {
      id: 'bcra-funciones',
      module: 't13',
      title: 'El Banco Central de la República Argentina',
      keywords: 'bcra banco central autoridad monetaria autárquico carta orgánica ley 24144 artículo 4 funciones política monetaria cambiaria financiera reservas',
      tldr: 'El BCRA es una <mark>entidad autárquica</mark> regida por su Carta Orgánica (Ley 24.144). Es la <strong>autoridad monetaria</strong>: regula la cantidad de dinero y las tasas de interés, ejecuta la política cambiaria, administra las reservas y supervisa a los bancos.',
      goals: ['Describir las características del BCRA.', 'Enumerar sus funciones según el artículo 4 de la Carta Orgánica.', 'Distinguir política monetaria, cambiaria y financiera.'],
      body: `
        <h2>Características</h2>
        <ul>
          <li>Es una entidad <strong>autárquica</strong> del gobierno nacional: independiente y autosuficiente en lo económico y lo político.</li>
          <li>Se rige por la <strong>Ley 24.144</strong>, su Carta Orgánica.</li>
          <li>Es la <strong>autoridad monetaria</strong> del país.</li>
          <li>Puede intervenir en el mercado cambiario para incidir en la cotización de la moneda extranjera.</li>
          <li>Supervisa y controla a todas las entidades financieras.</li>
        </ul>
        ${table(['Política', 'Qué hace el BCRA'], [['<strong>Monetaria</strong>', 'Aumenta o disminuye la cantidad de dinero (expansiva o contractiva) e incide en las tasas de interés'], ['<strong>Cambiaria</strong>', 'Interviene o no en el mercado de cambios para influir en el tipo de cambio'], ['<strong>Financiera y crediticia</strong>', 'Regula el funcionamiento de los bancos como prestadores de servicios y otorgantes de crédito']])}
        <h2>Carta Orgánica, artículo 4: funciones y facultades</h2>
        <ol type="a">
          <li>Regular el funcionamiento del sistema financiero y aplicar la Ley de Entidades Financieras.</li>
          <li>Regular la cantidad de dinero y las tasas de interés, y regular y orientar el crédito.</li>
          <li>Actuar como agente financiero del Estado nacional y como depositario y agente del país ante las instituciones monetarias internacionales.</li>
          <li>Concentrar y administrar sus reservas de oro, divisas y otros activos externos.</li>
          <li>Contribuir al buen funcionamiento del mercado de capitales.</li>
          <li>Ejecutar la política cambiaria de acuerdo con la legislación del Congreso.</li>
          <li>Regular los sistemas de pago, cámaras compensadoras, remesadoras y transportadoras de caudales.</li>
          <li>Proteger los derechos de los usuarios de servicios financieros y defender la competencia.</li>
        </ol>
        <p>En el ejercicio de sus funciones el Banco no está sujeto a órdenes del Poder Ejecutivo (texto según la Ley 26.739 de 2012).</p>
        ${note('Las reservas internacionales son los activos externos que respaldan la base monetaria. Cuando el BCRA compra dólares en el mercado, las reservas suben y emite pesos: la base monetaria aumenta (es una fuente de creación de base, Tema XII).', 'tip')}`,
      quiz: [
        { q: 'El BCRA se rige por…', o: ['la Ley de Contrato de Trabajo', 'su Carta Orgánica, Ley 24.144', 'decretos del Ministerio de Economía', 'el FMI'], a: 1, e: 'Modificada por la Ley 26.739.' },
        { q: 'Que el BCRA sea autárquico significa que…', o: ['depende del Presidente', 'es independiente y autosuficiente', 'es una empresa privada', 'no puede emitir dinero'], a: 1, e: 'No está sujeto a órdenes del Ejecutivo.' },
        { q: 'Intervenir en el mercado de cambios es política…', o: ['monetaria', 'cambiaria', 'fiscal', 'comercial'], a: 1, e: 'Incide en el tipo de cambio.' },
        { q: 'Si el BCRA compra dólares en el mercado, la base monetaria…', o: ['sube', 'baja', 'no cambia', 'se vuelve negativa'], a: 0, e: 'Paga con pesos nuevos.' },
      ],
      sources: [{ title: 'Diapositivas del Tema XIII', ref: 'Cátedra de Economía', points: ['Características del BCRA; Carta Orgánica, artículo 4.'] }],
    },

    {
      id: 'instrumentos-politica-monetaria',
      module: 't13',
      title: 'Instrumentos de política monetaria y tasas de interés',
      keywords: 'encaje coeficiente caja operaciones mercado abierto oma facilidades permanentes tasa referencia oficial pasiva activa spread margen intermediación riesgo país t-bill devaluación',
      tldr: 'El Banco Central controla la oferta monetaria con tres instrumentos: el <mark>coeficiente de caja</mark>, las <mark>operaciones de mercado abierto</mark> (comprar activos emite, venderlos absorbe) y las <strong>facilidades permanentes</strong>. Su tasa de referencia es una señal. La diferencia entre tasa activa y pasiva es el <strong>spread</strong>.',
      goals: ['Explicar cada instrumento y en qué sentido mueve la oferta monetaria.', 'Explicar los efectos de una suba del encaje.', 'Distinguir tasa pasiva, activa y spread; descomponer la tasa activa.'],
      body: `
        ${eq(`OM = ${frac('1 + e', 'α + e')} · BM`)}
        <p>El Banco Central puede mover la OM por dos vías: cambiando la <strong>base monetaria</strong> o cambiando el <strong>coeficiente de caja</strong> α (el multiplicador).</p>
        <h2>Los instrumentos</h2>
        ${table(['Instrumento', 'Para aumentar la OM', 'Para reducir la OM'], [
          ['<strong>Coeficiente de caja</strong> (encaje)', 'Bajarlo: los bancos prestan parte de las reservas que tenían “congeladas”', 'Subirlo'],
          ['<strong>Operaciones de mercado abierto</strong> (OMA)', 'El BC <strong>compra</strong> activos (títulos, divisas) y paga con dinero nuevo: sube la BM', 'El BC <strong>vende</strong> activos y recoge dinero: baja la BM'],
          ['<strong>Facilidades permanentes</strong>', 'Préstamos a un día a bancos con falta de liquidez', 'Depósitos a un día de bancos con exceso de liquidez'],
          ['<strong>Tasa de interés de referencia</strong>', 'Bajarla: los bancos se endeudan más con el BC', 'Subirla: encarece el crédito del BC'],
        ])}
        <h2>Efectos de subir el encaje</h2>
        <p>El encaje es la porción de los depósitos que los bancos no pueden prestar; queda inmovilizada en una cuenta en el BCRA (que puede pagar un interés por ella). Si sube:</p>
        ${flow('Encaje ↑', 'Menos dinero para prestar', 'Crédito ↓ y OM ↓', 'Tasas de interés ↑', 'Frena la inflación (y el crecimiento)')}
        ${note('Al subir el encaje la <strong>base monetaria no cambia</strong>: el dinero sigue existiendo, pero como reservas de los bancos en vez de préstamos. Lo que cae es el multiplicador.', 'exam')}
        <h2>La tasa de interés de referencia</h2>
        <p>Es la que cobra el Banco Central a los bancos en sus operaciones de corto plazo. Si quiere reducir la base monetaria, la sube; si quiere expandirla, la baja. Además es una <strong>señal</strong>: comunica las intenciones de la política monetaria.</p>
        <h2>Tasas bancarias</h2>
        ${table(['Tasa', 'Quién la paga', 'Ejemplo'], [['<strong>Pasiva</strong> (de captación)', 'El banco, a los ahorristas que le depositan', 'Lo que te paga un plazo fijo'], ['<strong>Activa</strong> (de colocación)', 'Los que piden prestado, al banco', 'La tasa de un préstamo personal'], ['<strong>Spread</strong> (margen de intermediación)', 'Activa − pasiva', 'Cubre costos administrativos y deja una utilidad']])}
        ${eq('i<sub>activa</sub> = T-bill + Riesgo de devaluación + Riesgo país + otros riesgos (default, liquidez, costos administrativos)', 'Tasa activa en moneda extranjera')}
        <p>Por eso una empresa argentina se financia más caro que una estadounidense del mismo tamaño: al rendimiento de los bonos del Tesoro de EE. UU. se le suman el riesgo país y el riesgo de devaluación.</p>`,
      labs: [{
        type: 'classify', title: '¿Expansiva o contractiva?', buckets: ['Aumenta la oferta monetaria', 'Reduce la oferta monetaria'],
        items: [{ t: 'El BCRA compra dólares en el mercado de cambios', b: 0 }, { t: 'El BCRA sube el encaje', b: 1 }, { t: 'El BCRA vende títulos a los bancos (OMA)', b: 1 }, { t: 'El BCRA baja la tasa de referencia', b: 0 }, { t: 'El BCRA compra bonos del Tesoro', b: 0 }, { t: 'El público retira sus depósitos y guarda efectivo (sube e)', b: 1, why: 'No lo decide el BC, pero baja el multiplicador.' }],
      }],
      quiz: [
        { q: 'Una venta de títulos del BC en el mercado abierto…', o: ['aumenta la BM', 'reduce la BM', 'no afecta la BM', 'baja el encaje'], a: 1, e: 'El BC recoge dinero a cambio de los títulos.' },
        { q: 'Si el BC baja el encaje…', o: ['la OM baja', 'la OM sube', 'la BM sube', 'las tasas suben'], a: 1, e: 'Sube el multiplicador.' },
        { q: 'El spread bancario es…', o: ['la tasa del BC', 'la diferencia entre tasa activa y pasiva', 'el riesgo país', 'el encaje'], a: 1, e: 'El margen de intermediación.' },
        { q: 'La tasa que te paga un plazo fijo es la tasa…', o: ['activa', 'pasiva', 'de referencia', 'real'], a: 1, e: 'Es la de captación.' },
        { q: 'Un aumento del riesgo país hace que la tasa activa…', o: ['baje', 'suba', 'no cambie', 'sea cero'], a: 1, e: 'Es uno de sus componentes.' },
      ],
      sources: [{ title: 'Diapositivas del Tema XIII', ref: 'Cátedra de Economía', points: ['Instrumentos: coeficiente de caja, OMA, facilidades permanentes; tasa de referencia; tasas pasiva, activa y spread.'] }],
    },

    {
      id: 'mercado-dinero-cuantitativa',
      module: 't13',
      title: 'Mercado de dinero y ecuación cuantitativa',
      keywords: 'mercado dinero equilibrio tasa interés oferta real demanda bonos política expansiva contractiva demanda agregada ecuación cuantitativa velocidad circulación mv=py',
      tldr: 'La tasa de interés de equilibrio iguala la <mark>oferta real de dinero</mark> (vertical, la fija el BC) con la demanda. Si el BC aumenta la oferta, a corto plazo <strong>la tasa baja</strong>, sube la inversión y la demanda agregada. La <mark>ecuación cuantitativa M·V = P·Y</mark> conecta el dinero con los precios.',
      goals: ['Graficar el mercado de dinero y mover la oferta.', 'Explicar la transmisión de una política monetaria expansiva.', 'Usar M·V = P·Y para resolver el ejercicio 2 del TP 6.'],
      body: `
        <h2>El equilibrio del mercado de dinero</h2>
        <p>La oferta real de dinero (OM/P) la fija el Banco Central: no depende de la tasa, es una recta vertical. La demanda tiene pendiente negativa. Su cruce da la tasa de interés de equilibrio.</p>
        <p>Si la tasa está por encima del equilibrio, la gente quiere tener menos dinero del que tiene: compra bonos, su precio sube y la tasa baja (r = pago anual / precio del bono). Si está por debajo, vende bonos y la tasa sube.</p>
        ${lab(0)}
        ${note('Ejemplo de la diapositiva: OM = 2.000 y P = 2 → OM/P = 1.000; el equilibrio es r = 4 % (punto A). Si el BC reduce la oferta nominal, a corto plazo la tasa sube; si la aumenta, baja.', 'exam')}
        <h2>Política monetaria y demanda agregada</h2>
        ${flow('OM ↑ (expansiva)', 'Tasa de interés ↓', 'Inversión ↑', 'Demanda agregada →')}
        ${flow('OM ↓ (contractiva)', 'Tasa de interés ↑', 'Inversión ↓', 'Demanda agregada ←')}
        <h2>La ecuación cuantitativa del dinero</h2>
        ${eq('M · V = P · Y', 'Ecuación cuantitativa')}
        ${table(['Símbolo', 'Significa'], [['M', 'Oferta monetaria'], ['V', 'Velocidad de circulación: veces que cada peso se usa en el período para comprar la producción'], ['P', 'Nivel general de precios'], ['Y', 'Producción real'], ['P·Y', 'PIB nominal']])}
        <p>Si V es estable y la producción Y crece por razones reales, un aumento de M que supere el crecimiento de Y termina en <strong>suba de P</strong>: inflación (Tema XIV). En tasas de crecimiento, aproximadamente: %ΔM + %ΔV ≈ %ΔP + %ΔY.</p>
        ${lab(1)}`,
      labs: [
        { type: 'moneymkt', title: 'Mercado de dinero', intro: 'Subí la oferta monetaria nominal o bajá el nivel de precios: la oferta real se corre a la derecha y la tasa baja.' },
        {
          type: 'calc', title: 'Ecuación cuantitativa: M · V = P · Y', intro: 'Datos del TP 6, ejercicio 2 (en billones de pesos).',
          fields: [{ id: 'm', label: 'Oferta monetaria (M)', value: 0.5 }, { id: 'pn', label: 'PIB nominal (P·Y)', value: 10 }, { id: 'y', label: 'PIB real (Y)', value: 5 }, { id: 'gy', label: 'Crecimiento de Y el año próximo (%)', value: 5 }, { id: 'pi', label: 'Inflación buscada el año próximo (%)', value: 10 }],
          run: (v) => {
            const P = v.pn / v.y, V = v.pn / v.m, Y1 = v.y * (1 + v.gy / 100);
            return `Nivel de precios P = ${num(P, 4)}\nVelocidad V = P·Y/M = ${num(V, 4)}\n\nAño próximo con M constante: P·Y = ${num(v.m * V)} → P = ${num((v.m * V) / Y1, 4)} (${num(((v.m * V) / Y1 / P - 1) * 100, 2)} %)\nM para precios estables: ${num((P * Y1) / V, 4)}\nM para ${num(v.pi)} % de inflación: ${num((P * (1 + v.pi / 100) * Y1) / V, 4)}`;
          },
        },
      ],
      exercises: [
        {
          official: '6.2', level: 3, title: 'Ecuación cuantitativa en el país X',
          prompt: '<p>La oferta monetaria es 0,5 billones de pesos, el PIB nominal 10 billones y el real 5 billones. a) ¿Nivel de precios? b) ¿Velocidad del dinero? Suponga V constante y que la producción crece 5 % por año. c) ¿Qué pasa con el PIB nominal y los precios el año próximo si el BC mantiene constante la oferta monetaria? d) ¿Qué oferta monetaria mantiene estables los precios? e) ¿Y para un 10 % de inflación? f) Si la oferta monetaria se triplica, el PIB real no cambia y la velocidad se duplica, ¿qué pasa con los precios?</p>',
          solution: { explain: `
            <p><strong>a)</strong> P = PIB nominal / PIB real = 10/5 = <strong>2</strong> (deflactor 200).</p>
            <p><strong>b)</strong> V = P·Y / M = 10 / 0,5 = <strong>20</strong>.</p>
            <p><strong>c)</strong> Con M y V constantes, P·Y = 0,5 × 20 = 10 sigue igual: el <strong>PIB nominal no cambia</strong>. Como Y = 5,25, P = 10/5,25 = <strong>1,905</strong>: los precios <strong>bajan 4,76 %</strong> (deflación).</p>
            <p><strong>d)</strong> Para P = 2: M = P·Y/V = 2 × 5,25 / 20 = <strong>0,525</strong> (crece 5 %, igual que la producción).</p>
            <p><strong>e)</strong> Para P = 2,2: M = 2,2 × 5,25 / 20 = <strong>0,5775</strong> (crece 15,5 %).</p>
            <p><strong>f)</strong> 3M · 2V = P′ · Y → P′ = 6 · M·V/Y = <strong>6P</strong>: el nivel de precios se multiplica por 6 (sube 500 %).</p>` },
        },
      ],
      quiz: [
        { q: 'En el mercado de dinero, la oferta real se grafica…', o: ['con pendiente negativa', 'vertical', 'horizontal', 'con pendiente positiva'], a: 1, e: 'La fija el BC, no depende de la tasa.' },
        { q: 'Una política monetaria expansiva, a corto plazo…', o: ['sube la tasa de interés', 'baja la tasa de interés', 'no afecta la tasa', 'reduce la inversión'], a: 1, e: 'Hay más dinero del que se demanda a la tasa inicial.' },
        { q: 'En M·V = P·Y, V es…', o: ['el valor del PIB', 'la velocidad de circulación del dinero', 'la variación de precios', 'el volumen de depósitos'], a: 1, e: 'Veces que cada peso se usa en el período.' },
        { q: 'M = 100, V = 5, Y = 250. El nivel de precios es…', o: ['1', '2', '5', '0,5'], a: 1, e: 'P = M·V/Y = 500/250.' },
        { q: 'Si M se duplica y V e Y no cambian, P…', o: ['se duplica', 'se reduce a la mitad', 'no cambia', 'se cuadruplica'], a: 0, e: 'Es la versión más simple de la teoría cuantitativa.' },
      ],
      sources: [{ title: 'Diapositivas del Tema XIII', ref: 'Cátedra de Economía', points: ['Demanda de dinero y tasa de interés de equilibrio; regulación del BC; ecuación cuantitativa.'] }],
    },

    {
      id: 'politica-monetaria',
      module: 't13',
      title: 'Política monetaria expansiva y contractiva: transmisión y consecuencias',
      keywords: 'política monetaria expansiva contractiva instrumentos consecuencias corto plazo largo plazo mecanismo transmisión tasa de interés inversión demanda agregada oferta agregada creciente vertical neutralidad precios producción inflación recesión independencia banco central facilidades permanentes bonos',
      tldr: 'Una política monetaria <mark>expansiva</mark> aumenta la oferta monetaria: baja la tasa de interés, sube la inversión y la demanda agregada; a corto plazo crecen la producción y los precios, y a largo plazo <strong>solo los precios</strong>. Una <mark>contractiva</mark> hace lo contrario y se usa para frenar la inflación. Por eso el Banco Central no puede combatir a la vez la inflación y la caída de la producción.',
      goals: ['Responder la pregunta del 2do parcial: instrumentos, tipos de política y consecuencias de corto plazo.', 'Explicar el mecanismo de transmisión con el mercado de dinero.', 'Distinguir los efectos de corto plazo (oferta agregada creciente) y de largo plazo (vertical).', 'Explicar por qué se busca un Banco Central independiente.'],
      body: `
        ${note('Pregunta del 2do parcial 2025, de su otra versión y del recuperatorio de diciembre 2024: “<em>¿Cuáles son los instrumentos del Banco Central para ejercer el control de la política monetaria? ¿Cuáles son los tipos de políticas monetarias que puede llevar a cabo el Banco Central y cuáles sus consecuencias en el corto plazo?</em>”. Abajo está la respuesta armada, sección por sección.', 'exam')}
        <h2>1. Los instrumentos</h2>
        ${table(['Instrumento', 'Qué mueve', 'Expansiva', 'Contractiva'], [
          ['<strong>Coeficiente de caja</strong> (encaje)', 'El multiplicador', 'Bajarlo', 'Subirlo'],
          ['<strong>Operaciones de mercado abierto</strong>', 'La base monetaria', 'Comprar títulos o divisas', 'Vender títulos o divisas'],
          ['<strong>Facilidades permanentes</strong>', 'La base, a muy corto plazo', 'Prestar a un día a bancos con falta de liquidez', 'Tomar depósitos a un día de bancos con exceso de liquidez'],
          ['<strong>Tasa de interés de referencia</strong>', 'El costo del dinero del BC; es además una señal', 'Bajarla', 'Subirla'],
        ])}
        <p>Los impuestos sobre los activos financieros <strong>no</strong> son un instrumento de política monetaria: son política fiscal (Blanco 14.6.7). Sobre las facilidades permanentes, Blanco agrega: el BC presta a una tasa bastante superior a la oficial y paga por los depósitos una inferior, así que los bancos solo acuden cuando no les queda otra opción. Si piden prestado, la base aumenta; si depositan, disminuye.</p>
        <h2>2. Los dos tipos de política</h2>
        ${table(['', 'Expansiva', 'Contractiva'], [['Qué hace con la OM', 'La aumenta', 'La reduce'], ['Para qué se usa', 'Reactivar la economía en una recesión, bajar el desempleo', 'Frenar la inflación, enfriar una economía recalentada'], ['Riesgo', 'Inflación', 'Recesión y desempleo']])}
        <h2>3. El mecanismo de transmisión</h2>
        <p>Todo pasa primero por el mercado de dinero (lección anterior). Si el BC aumenta la oferta monetaria, a la tasa vieja la gente tiene más dinero del que quiere mantener: intenta <strong>comprar bonos</strong>, el precio de los bonos sube y la <strong>tasa de interés baja</strong> (Blanco 14.6.11). Con crédito más barato, empresas y familias invierten más y compran más bienes durables: la <strong>demanda agregada aumenta</strong>.</p>
        ${flow('BC: OM ↑ (compra títulos, baja el encaje o la tasa)', 'Exceso de dinero: se compran bonos', 'Tasa de interés ↓', 'Inversión y consumo durable ↑', 'Demanda agregada →')}
        ${flow('BC: OM ↓ (vende títulos, sube el encaje o la tasa)', 'Falta de dinero: se venden bonos', 'Tasa de interés ↑', 'Inversión ↓', 'Demanda agregada ←')}
        <h2>4. Consecuencias a corto y a largo plazo</h2>
        <div class="figs-2">
          ${h.plot({ x: [0, 10], y: [0, 10], h: 250, xl: 'Producción (Y)', yl: 'Nivel de precios (P)', alt: 'Corto plazo: oferta agregada creciente', curves: [{ f: (x) => 9 - 0.8 * x, cls: 'c-d', ghost: true, label: 'DA₀' }, { f: (x) => 11 - 0.8 * x, cls: 'c-d', label: 'DA₁' }, { f: (x) => 1 + 0.8 * x, cls: 'c-s', label: 'OA corto plazo' }], points: [{ x: 5, y: 5, cls: 'pl-old', label: 'A', pos: 'w' }, { x: 6.25, y: 6, cls: 'c-eq', label: 'B' }], guides: [{ x: 5, y: 5, xt: 'Y₀', yt: 'P₀' }, { x: 6.25, y: 6, xt: 'Y₁', yt: 'P₁' }] })}
          ${h.plot({ x: [0, 10], y: [0, 10], h: 250, xl: 'Producción (Y)', yl: 'Nivel de precios (P)', alt: 'Largo plazo: oferta agregada vertical', curves: [{ f: (x) => 9 - 0.8 * x, cls: 'c-d', ghost: true, label: 'DA₀' }, { f: (x) => 11 - 0.8 * x, cls: 'c-d', label: 'DA₁' }, { pts: [[5, 0.3], [5, 9.6]], cls: 'c-s', label: 'OA largo plazo' }], points: [{ x: 5, y: 5, cls: 'pl-old', label: 'A', pos: 'w' }, { x: 5, y: 7, cls: 'c-eq', label: 'C', pos: 'e' }], guides: [{ x: 5, y: 7, xt: 'Y*', yt: 'P₂' }] })}
        </div>
        <p class="muted-s">Izquierda: a corto plazo la oferta agregada es creciente y una política expansiva sube la producción y los precios. Derecha: a largo plazo la oferta agregada es vertical (la producción depende de los recursos y la tecnología) y solo suben los precios.</p>
        ${table(['Política', 'Corto plazo (OA creciente)', 'Largo plazo (OA vertical)'], [
          ['<strong>Expansiva</strong>', 'Tasa ↓, Y ↑, P ↑, desempleo ↓', 'Solo P ↑: la producción vuelve a su nivel (Blanco 14.6.10)'],
          ['<strong>Contractiva</strong>', 'Tasa ↑, Y ↓, P ↓ (o sube menos), desempleo ↑ (Blanco 14.6.9)', 'Solo P ↓ (menos inflación)'],
        ])}
        <p>Esa es la <strong>neutralidad del dinero</strong> a largo plazo: más dinero no hace a un país más productivo, solo eleva los precios. Es la ecuación cuantitativa: con V estable e Y fijada por los recursos, M·V = P·Y implica que P sigue a M. Por eso aumentar la oferta monetaria <strong>no</strong> es una buena medida para contener la inflación (Blanco 14.5.13): es su causa.</p>
        ${note('<p>¿Puede la política monetaria combatir a la vez la inflación y la caída de la producción? <strong>No a corto plazo</strong> (Blanco 14.7.4): para bajar la inflación hay que reducir la demanda agregada, lo que reduce la producción; para reactivar hay que expandirla, lo que sube los precios. Es el décimo principio de Mankiw: a corto plazo hay una disyuntiva entre inflación y desempleo.</p>', 'warn')}
        <h2>Por qué un Banco Central independiente</h2>
        <p>Desde que los billetes dejaron de ser convertibles en oro, la cantidad de dinero es una decisión política: el Banco Central podría emitir cuanto quisiera. Históricamente, muchos gobiernos financiaron sus déficits con emisión y llevaron a sus países a procesos inflacionarios. Separar al Banco Central del gobierno busca que las decisiones de emisión no dependan de las necesidades de financiamiento del Tesoro (Blanco 14.7.3). En Argentina, la Carta Orgánica dice que el BCRA no está sujeto a órdenes del Poder Ejecutivo.</p>
        <h2>La respuesta del parcial, en limpio</h2>
        <ol>
          <li><strong>Instrumentos</strong>: coeficiente de caja (encaje), operaciones de mercado abierto, facilidades permanentes de crédito y depósito, y la tasa de interés de referencia como señal. Con ellos el BC mueve la base monetaria o el multiplicador: OM = (1 + e)/(α + e) · BM.</li>
          <li><strong>Tipos</strong>: expansiva (aumenta la OM) y contractiva (la reduce).</li>
          <li><strong>Consecuencias en el corto plazo</strong>: la expansiva baja la tasa de interés, aumenta la inversión y la demanda agregada, sube la producción y el empleo, y también los precios. La contractiva sube la tasa, reduce la inversión y la demanda, frena la inflación a costa de producción y empleo. (A largo plazo, solo cambian los precios.)</li>
          <li><strong>Gráficos</strong>: el mercado de dinero (oferta vertical que se desplaza y nueva tasa) y DA–OA de corto plazo.</li>
        </ol>`,
      quiz: [
        { q: 'Una de las siguientes medidas NO es un instrumento de política monetaria:', o: ['el coeficiente de caja', 'las operaciones de mercado abierto', 'los impuestos sobre el rendimiento de los activos financieros', 'las facilidades permanentes de crédito y depósito'], a: 2, e: 'Los impuestos son política fiscal.', src: 'Blanco 14.6.7' },
        { q: 'El tipo de interés aumenta si…', o: ['se reduce el coeficiente de caja', 'el Banco Central vende títulos de deuda pública', 'el Banco Central compra títulos', 'aumenta el multiplicador'], a: 1, e: 'Retira dinero: la oferta monetaria baja y la tasa sube.', src: 'Blanco 14.6.8' },
        { q: 'Al aumentar la oferta monetaria, en el mercado de dinero la gente…', o: ['intenta vender bonos y la tasa sube', 'intenta comprar bonos y la tasa sube', 'intenta vender bonos y la tasa baja', 'intenta comprar bonos y la tasa baja'], a: 3, e: 'Más demanda de bonos sube su precio y baja la tasa.', src: 'Blanco 14.6.11' },
        { q: 'Con oferta agregada creciente (corto plazo), una reducción de la oferta monetaria nominal da lugar a…', o: ['más producción y precios', 'más producción y menos precios', 'menos producción y menos precios', 'menos producción y más precios'], a: 2, e: 'La demanda agregada se desplaza a la izquierda.', src: 'Blanco 14.6.9' },
        { q: 'Con oferta agregada vertical (largo plazo), un aumento de la oferta monetaria lleva a que…', o: ['aumenten los precios y la producción se mantenga', 'bajen los precios', 'aumente la producción con precios constantes', 'baje la producción'], a: 0, e: 'Neutralidad del dinero.', src: 'Blanco 14.6.10' },
        { q: 'El incremento de la oferta monetaria es una buena medida para contener la inflación.', o: ['Verdadero', 'Falso'], a: 1, e: 'Llevaría a un aumento de precios.', src: 'Blanco 14.5.13' },
        { q: 'Una compra de títulos de deuda pública por parte del Banco Central es una buena medida para reducir el tipo de interés.', o: ['Verdadero', 'Falso'], a: 0, e: 'Aumenta la base y la oferta monetaria.', src: 'Blanco 14.5.12' },
        { q: '¿Por qué el BC no puede combatir a la vez la inflación y la recesión a corto plazo?', o: ['Porque no tiene instrumentos', 'Porque bajar la inflación exige reducir la demanda, y eso reduce la producción', 'Porque la ley se lo prohíbe', 'Porque la tasa de interés no afecta la inversión'], a: 1, e: 'Disyuntiva inflación-desempleo.' },
      ],
      sources: [
        { title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 14 (14.3.14 a 14.3.18 y ejercicios 14.6 y 14.7)', points: ['Por qué las variaciones de la cantidad de dinero afectan al tipo de interés.', 'Efectos de la oferta monetaria con oferta agregada creciente (corto plazo) y vertical (largo plazo).', 'Instrumentos y diseño de la política monetaria; independencia del Banco Central.'] },
        { title: 'Principios de Economía', ref: 'Mankiw, caps. 29 y 34', points: ['Herramientas del banco central; influencia de la política monetaria en la demanda agregada.'] },
      ],
    },
  );
})();
