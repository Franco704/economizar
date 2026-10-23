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
  );
})();
