/* Tema XII: Dinero. Diapositivas "TEMA XII DINERO mm 26", Blanco cap. 14, Mankiw cap. 29. TP 6 (ejercicio 1). */
(() => {
  const { LESSONS, h } = window.GUIDE;
  const { note, def, table, chart, eq, frac, num, lab } = h;
  // TP 6, ejercicio 1: rondas de creación de dinero con BM = 12.000.000, α = 10 %, e = 20 %
  const rondas = (bm, a, e, n) => { const out = []; let M = bm; for (let k = 1; k <= n; k++) { const d = M / (1 + e); out.push([k, M, d, e * d, a * d, (1 - a) * d]); M = (1 - a) * d; } return out; };

  LESSONS.push(
    {
      id: 'del-trueque-al-dinero',
      module: 't12',
      title: 'Del trueque al dinero: tipos y funciones',
      keywords: 'trueque doble coincidencia deseos mercancía monetaria dinero metálico papel fiduciario patrón oro características durabilidad divisibilidad ley gresham curso forzoso legal funciones medio cambio unidad cuenta depósito valor',
      tldr: 'El trueque exige una <mark>doble coincidencia de deseos</mark>; el dinero la elimina. Pasó de mercancías (sal, ganado) a metales, papel, dinero electrónico y criptomonedas. Hoy es <strong>fiduciario</strong>: vale por la confianza. Cumple tres funciones: <mark>medio de cambio, unidad de cuenta y depósito de valor</mark>.',
      goals: ['Explicar los inconvenientes del trueque.', 'Distinguir dinero mercancía y fiduciario; curso forzoso y legal.', 'Enunciar las características del buen dinero y la ley de Gresham.', 'Explicar las tres funciones del dinero.'],
      body: `
        <h2>El trueque y sus problemas</h2>
        <p>El trueque es el intercambio de bienes por bienes, sin un medio de cambio. Tiene dos inconvenientes:</p>
        <ol>
          <li>Exige la <strong>doble coincidencia de deseos</strong>: tengo zapatos y quiero pan, y tengo que encontrar a alguien que tenga pan y quiera zapatos.</li>
          <li>Las mercancías intercambiadas no siempre tienen valores equivalentes ni son divisibles (no se puede dar “un cuarto de vaca”).</li>
        </ol>
        <p>Hoy sobrevive en sitios de trueque y en los <strong>bancos de tiempo</strong>, donde cada miembro ofrece servicios a la comunidad y recibe otros a cambio, sin depender de que dos personas coincidan.</p>
        <h2>La evolución del dinero</h2>
        ${table(['Momento', 'Forma'], [['10.000 a.C.', 'Primeras evidencias de trueque en África'], ['3.000 a.C.', 'Siclos (unidades de peso) en Mesopotamia; tablillas sumerias de cuentas'], ['600 a.C.', 'Primeras monedas de oro y plata, en Lidia'], ['Siglo IX', 'Papel moneda en China'], ['1816', 'Patrón oro'], ['Hoy', 'Dinero fiduciario, electrónico y criptomonedas']])}
        <p>Las primeras formas fueron <strong>mercancías monetarias</strong>: sal (de ahí “salario”), cuero, cebada, cacao, ganado, té. Pocas cumplían los requisitos, y por eso se impusieron los metales preciosos.</p>
        <h3>Características del buen dinero</h3>
        ${table(['Característica', 'Por qué'], [['Durabilidad', 'Nadie acepta algo que se deteriora rápido'], ['Estabilidad', 'No debe requerir gastos excesivos para mantener su valor'], ['Transportabilidad', 'Alto valor respecto de su peso'], ['Divisibilidad', 'Se debe poder dividir sin perder valor, para pagos pequeños'], ['Homogeneidad', 'Cada unidad igual a las demás'], ['Oferta limitada', 'Si cualquiera puede producirlo sin límite, no tiene valor']])}
        <h2>Dinero mercancía y dinero fiduciario</h2>
        <ul>
          <li><strong>Dinero mercancía</strong>: tiene valor intrínseco (monedas de oro, patrón oro; los cigarrillos en una cárcel).</li>
          <li><strong>Dinero fiduciario</strong>: representa un valor que intrínsecamente no tiene. Vale por la <em>fiducia</em>, la confianza en el Estado que lo emite. Es el dinero actual.</li>
        </ul>
        <ul>
          <li><strong>Curso forzoso</strong>: las leyes obligan a todos a aceptar el papel moneda como dinero.</li>
          <li><strong>Curso legal</strong>: el Estado se obliga a aceptarlo en pago de impuestos, pero los particulares son libres de aceptarlo o no.</li>
        </ul>
        ${def('Ley de Gresham', 'La moneda mala expulsa a la buena.', 'Sir Thomas Gresham, 1558 (antes la formularon Oresme y Copérnico). Citada por Galbraith en “El dinero”.')}
        <p>Si circulan dos monedas con el mismo valor legal pero distinto valor real, la gente paga con la mala y guarda la buena. En Argentina se vio con las cuasimonedas de 2001 (Patacones, Lecop) y, antes, con las monedas privadas tucumanas: se gastaba el papel de dudoso valor y se atesoraban los dólares.</p>
        <h2>Las tres funciones del dinero</h2>
        ${table(['Función', 'Significa', 'Ejemplo'], [['<strong>Medio de cambio</strong>', 'Aceptación generalizada en todas las transacciones', 'Pagar el colectivo'], ['<strong>Unidad de cuenta</strong>', 'Los precios se expresan en dinero', 'El kilo de pan cuesta $2.000'], ['<strong>Depósito de valor</strong>', 'Permite aplazar la transacción y mantener riqueza', 'Guardar el sueldo para el mes que viene']])}
        ${note('No confundas: <strong>dinero</strong> ≠ <strong>riqueza</strong> (el dinero es solo una forma de mantenerla) ≠ <strong>renta</strong> (el ingreso de un período). Con inflación alta el peso falla como depósito de valor y la gente busca el dólar: es la ley de Gresham al revés, porque el bueno pasa a usarse para ahorrar.', 'exam')}`,
      quiz: [
        { q: 'El principal problema del trueque es…', o: ['la inflación', 'la doble coincidencia de deseos', 'los impuestos', 'la falta de bancos'], a: 1, e: 'Cada parte debe querer justo lo que la otra ofrece.' },
        { q: 'El dinero fiduciario vale porque…', o: ['está respaldado en oro', 'la gente confía en quien lo emite', 'tiene valor intrínseco', 'es escaso por naturaleza'], a: 1, e: 'Fiducia = confianza.' },
        { q: 'Expresar el precio de todos los bienes en pesos es la función de…', o: ['medio de cambio', 'unidad de cuenta', 'depósito de valor', 'curso forzoso'], a: 1, e: 'Sirve para comparar valores.' },
        { q: 'La ley de Gresham dice que…', o: ['la inflación es un fenómeno monetario', 'la moneda mala expulsa a la buena', 'el dinero es neutral', 'el oro siempre sube'], a: 1, e: 'Se gasta la mala y se atesora la buena.' },
        { q: 'Que todos estén obligados por ley a aceptar el papel moneda es…', o: ['curso legal', 'curso forzoso', 'patrón oro', 'encaje'], a: 1, e: 'En el curso legal solo el Estado se obliga a aceptarlo.' },
        { q: '¿Cuál NO es una característica deseable del dinero?', o: ['Divisibilidad', 'Durabilidad', 'Oferta ilimitada', 'Homogeneidad'], a: 2, e: 'Sin oferta limitada no tendría valor.' },
      ],
      sources: [{ title: 'Diapositivas del Tema XII', ref: 'Cátedra de Economía', points: ['Trueque, mercancías monetarias, características del dinero, dinero mercancía y fiduciario, ley de Gresham, funciones.'] }],
    },

    {
      id: 'activos-y-demanda-dinero',
      module: 't12',
      title: 'Liquidez, rentabilidad, riesgo y demanda de dinero',
      keywords: 'activos físicos financieros liquidez rentabilidad riesgo demanda de dinero saldos reales motivo transacción especulativo costo oportunidad tasa interés criptomonedas bitcoin blockchain',
      tldr: 'Los activos se comparan por <mark>liquidez, rentabilidad y riesgo</mark>: los más líquidos suelen ser los menos rentables y menos riesgosos. La <strong>demanda de dinero</strong> es cuánta riqueza se quiere tener en forma líquida; su costo de oportunidad es la <mark>tasa de interés</mark>, por eso baja cuando la tasa sube.',
      goals: ['Comparar activos por liquidez, rentabilidad y riesgo.', 'Explicar la demanda de dinero y sus motivos.', 'Graficar la demanda de dinero contra la tasa de interés.', 'Describir las criptomonedas y la blockchain.'],
      body: `
        <h2>Tres atributos de un activo</h2>
        ${table(['Atributo', 'Mide', 'Billetes', 'Plazo fijo', 'Acciones', 'Inmueble'], [['<strong>Liquidez</strong>', 'Facilidad para convertirlo en dinero sin costos ni pérdidas', 'Máxima', 'Media', 'Alta', 'Baja'], ['<strong>Rentabilidad</strong>', 'Lo que se gana por cada peso invertido', 'Nula', 'Baja', 'Alta (incierta)', 'Media'], ['<strong>Riesgo</strong>', 'Inseguridad de recuperar lo invertido y su rendimiento', 'Bajo (robo, inflación)', 'Bajo', 'Alto', 'Medio']])}
        <p>Regla general: los activos más líquidos suelen ser los <strong>menos rentables y menos riesgosos</strong>; los menos líquidos, los más rentables y riesgosos. Y entre riesgo y rentabilidad hay una relación directa: a mayor riesgo, mayor rentabilidad media.</p>
        <h2>La demanda de dinero</h2>
        ${def('Demanda de dinero', 'Está constituida por el volumen de riqueza que los individuos desean mantener en forma de dinero.', 'Diapositivas del Tema XII, a partir de Blanco, cap. 14.')}
        <p>No es cuánto dinero quisiéramos ganar (eso es renta) ni cuán ricos quisiéramos ser (eso es riqueza). Se demanda dinero por dos motivos:</p>
        <ul>
          <li><strong>Transacción</strong>: para hacer los pagos de todos los días. Crece con el ingreso.</li>
          <li><strong>Especulativo</strong>: el dinero es uno de los activos en los que se diversifica la riqueza (riqueza = bonos + dinero).</li>
        </ul>
        <p>Es una demanda de <strong>saldos reales</strong> (md = M/P): si los precios se duplican, se demanda el doble de dinero nominal para comprar lo mismo.</p>
        ${note('El <strong>costo de oportunidad</strong> de tener dinero es la tasa de interés que rendirían los activos alternativos. Por eso, si la tasa sube, la cantidad demandada de dinero baja.', 'exam')}
        ${chart({ x: [0, 2200], y: [0, 9], xl: 'Cantidad real de dinero', yl: 'r %', curves: [{ pts: Array.from({ length: 60 }, (_, i) => { const r = 9 - (9 * i) / 59; return [7000 / (r + 3), r]; }), cls: 'c-d', label: 'md' }], points: [{ x: 7000 / 9, y: 6, cls: 'c-d', label: 'r₁', pos: 'e' }, { x: 7000 / 5, y: 2, cls: 'c-d', label: 'r₂', pos: 'e' }], guides: [{ x: 7000 / 9, y: 6, xt: 'md₁', yt: 'r₁' }, { x: 1400, y: 2, xt: 'md₂', yt: 'r₂' }] }, 'A una tasa alta (r₁) se mantiene poco dinero; a una tasa baja (r₂), mucho.')}
        <h2>Criptomonedas</h2>
        <p>Una criptomoneda es un medio digital de intercambio. La primera fue <strong>bitcoin</strong> (2009); después vinieron Ethereum, Litecoin, Ripple, Dogecoin y muchas otras. Su tecnología base es la <strong>blockchain</strong> (2008): una base de datos descentralizada, distribuida, compartida y encriptada que sirve de registro público inmutable, y que permite que personas que no se conocen acuerden la existencia de transacciones sin una autoridad central.</p>
        <p>El 22 de mayo de 2010 Laszlo Hanyecz pagó dos pizzas con 10.000 bitcoins: la primera compra de un bien físico con bitcoin.</p>
        ${note('¿Cumplen las funciones del dinero? Como medio de cambio su aceptación es limitada, como unidad de cuenta casi no se usan y, por su volatilidad, son un depósito de valor riesgoso. Las críticas incluyen la volatilidad, el anonimato relativo, el costo ambiental y la posibilidad de aumentar la desigualdad.', 'tip')}`,
      quiz: [
        { q: 'El activo más líquido es…', o: ['un inmueble', 'una acción', 'el efectivo', 'un bono a 10 años'], a: 2, e: 'Ya es dinero.' },
        { q: 'En general, a mayor liquidez de un activo…', o: ['mayor rentabilidad', 'menor rentabilidad', 'mayor riesgo', 'no hay relación'], a: 1, e: 'Por la liquidez se resigna rendimiento.' },
        { q: 'El costo de oportunidad de mantener dinero es…', o: ['la inflación', 'la tasa de interés de los activos alternativos', 'el tipo de cambio', 'cero'], a: 1, e: 'Lo que dejás de ganar por no tener bonos.' },
        { q: 'Si sube la tasa de interés, la cantidad demandada de dinero…', o: ['sube', 'baja', 'no cambia', 'se duplica'], a: 1, e: 'Tener efectivo cuesta más.' },
        { q: 'El motivo transacción de la demanda de dinero depende sobre todo…', o: ['del ingreso', 'del riesgo', 'del tipo de cambio', 'del encaje'], a: 0, e: 'Más ingreso, más pagos.' },
        { q: 'La blockchain es…', o: ['un banco digital', 'un registro descentralizado y encriptado de transacciones', 'una moneda del BCRA', 'un tipo de bono'], a: 1, e: 'Permite acordar transacciones sin autoridad central.' },
      ],
      sources: [{ title: 'Diapositivas del Tema XII', ref: 'Cátedra de Economía', points: ['Liquidez, rentabilidad y riesgo; demanda de dinero; criptomonedas y blockchain.'] }],
    },

    {
      id: 'base-y-oferta-monetaria',
      module: 't12',
      title: 'Base monetaria, oferta monetaria y multiplicador',
      keywords: 'base monetaria oferta monetaria efectivo manos particulares emp depósitos activos caja encaje coeficiente reservas relación efectivo depósitos multiplicador monetario creación dinero secundario bancario',
      tldr: 'El Banco Central emite la <mark>base monetaria</mark> (BM = EMP + AC). Los bancos, prestando los depósitos, crean <strong>dinero bancario</strong>: la <mark>oferta monetaria</mark> (OM = EMP + D) es un múltiplo de la base. El multiplicador (1 + e)/(α + e) es mayor cuanto menores son el encaje α y la preferencia por efectivo e.',
      goals: ['Definir BM, OM, e y α.', 'Deducir D = BM/(α + e) y el multiplicador monetario.', 'Calcular la creación de dinero paso a paso (TP 6, ejercicio 1).'],
      body: `
        <h2>Base monetaria</h2>
        <p>La base monetaria está formada por los pasivos monetarios del Banco Central: básicamente, los billetes emitidos. Se crea cuando el Banco Central compra activos pagando con dinero nuevo (reservas de divisas, préstamos a los bancos, títulos) y se destruye cuando los vende. Esas son las <strong>fuentes de creación</strong> de base monetaria.</p>
        ${eq('BM = EMP + AC', 'Base monetaria')}
        <p>EMP: efectivo en manos de los particulares. AC: activos de caja (reservas) de los bancos.</p>
        <h2>Oferta monetaria</h2>
        ${eq('OM = EMP + D', 'Oferta monetaria')}
        <p>D: depósitos de los particulares en los bancos. Los depósitos son dinero porque permiten pagar sin billetes y se pueden convertir en efectivo cuando se quiera.</p>
        <h2>Los dos coeficientes</h2>
        ${table(['Coeficiente', 'Fórmula', 'Lo decide', 'Significa'], [['Relación efectivo/depósitos', '<strong>e = EMP / D</strong>', 'El público', 'Cuánto efectivo se guarda por cada peso depositado'], ['Coeficiente de caja (encaje)', '<strong>α = AC / D</strong>', 'El Banco Central', 'Qué porcentaje de los depósitos no se puede prestar']])}
        <h2>Deducción del multiplicador</h2>
        ${eq(`BM = EMP + AC = e·D + α·D = D·(e + α) &nbsp;⇒&nbsp; <strong>D = ${frac('BM', 'α + e')}</strong>`)}
        ${eq(`${frac('OM', 'BM')} = ${frac('EMP + D', 'EMP + AC')} = ${frac('e·D + D', 'e·D + α·D')} = ${frac('1 + e', 'α + e')} &nbsp;⇒&nbsp; <strong>OM = ${frac('1 + e', 'α + e')} · BM</strong>`, 'Multiplicador monetario')}
        <p>Ejemplo de la diapositiva: EMP = 200, D = 800, AC = 16 → e = 0,25, α = 0,02. Con BM = 1.000: D = 1.000/0,27 = <strong>3.703,70</strong> y OM = 1.000 × 1,25/0,27 = <strong>4.629,63</strong> (la diapositiva redondea el multiplicador a 4,626).</p>
        <h2>Cómo se crea el dinero, ronda por ronda</h2>
        <p>Alguien recibe dinero: guarda una parte en efectivo y deposita el resto. El banco retiene el encaje y presta lo demás; quien recibe el préstamo lo gasta, y el que cobra vuelve a guardar una parte y depositar el resto. Cada ronda es más chica que la anterior y la suma converge a D = BM/(α + e).</p>
        ${lab(0)}
        ${note('El multiplicador depende <strong>inversamente</strong> de α y de e. Si el BCRA baja el encaje, los bancos prestan más y la oferta monetaria crece aunque no se emita un solo billete. Si el público desconfía de los bancos y retiene más efectivo (sube e), la OM cae.', 'exam')}`,
      labs: [{ type: 'money', title: 'Creación de dinero bancario', intro: 'Arranca con los datos del TP 6, ejercicio 1: Lucía tiene $12.000.000, α = 10 % y e = 20 %. Bajá α al 5 % para la segunda pregunta.', bm: 12000000, alpha: 0.1, e: 0.2 }],
      exercises: [
        {
          official: '6.1', level: 3, title: 'El depósito de Lucía',
          prompt: '<p>El coeficiente de caja es del 10 %. Lucía tiene $12.000.000 y los deposita en su banco descontando el 20 %, que es la relación efectivo/depósitos que mantienen las personas. Suponiendo que el banco continúa con el proceso de creación de dinero secundario: a) calcule paso a paso el dinero bancario creado; b) ¿qué pasa si el coeficiente de caja baja al 5 %?</p>',
          hints: ['Si e = EMP/D = 0,2, de cada peso que se recibe se deposita 1/1,2 y se guarda en efectivo 0,2/1,2.', 'El banco presta el 90 % de cada depósito.'],
          solution: { explain: `
            <p>De los 12.000.000, Lucía deposita D = 12.000.000/1,2 = 10.000.000 y guarda 2.000.000 en efectivo (2/10 = 0,2 ✔). El banco encaja el 10 % y presta el resto, que vuelve al sistema:</p>
            ${table(['Ronda', 'Dinero recibido', 'Depósito', 'Efectivo retenido', 'Encaje (10 %)', 'Préstamo'], rondas(12e6, 0.1, 0.2, 5).map((r) => r.map((x, i) => (i ? num(x, 0) : x))).concat([['…', '', '', '', '', ''], ['<strong>Total</strong>', '', '<strong>40.000.000</strong>', '8.000.000', '4.000.000', '36.000.000']]))}
            <p>Cada depósito es el 75 % del anterior (0,9/1,2). La suma: D = 10.000.000/(1 − 0,75) = <strong>40.000.000</strong>, que coincide con la fórmula D = BM/(α + e) = 12.000.000/0,30.</p>
            <ul><li>Oferta monetaria: OM = EMP + D = 8.000.000 + 40.000.000 = <strong>48.000.000</strong>. Multiplicador = 1,2/0,3 = <strong>4</strong>.</li>
            <li>Dinero bancario (secundario) creado por encima del inicial: 48.000.000 − 12.000.000 = <strong>36.000.000</strong> (igual al total de préstamos).</li></ul>
            <p><strong>b)</strong> Con α = 5 %: D = 12.000.000/0,25 = <strong>48.000.000</strong>, OM = 1,2/0,25 × 12.000.000 = <strong>57.600.000</strong>, multiplicador = <strong>4,8</strong>. Al bajar el encaje los bancos prestan más en cada ronda y se crea más dinero.</p>
            ${note('Si se interpreta “descontando el 20 %” como que Lucía guarda el 20 % de lo que recibe (y no e = EMP/D = 0,2), cada ronda es 0,8 × 0,9 = 72 % de la anterior y D = 9.600.000/0,28 ≈ 34.285.714. Aclarar el supuesto en el parcial suma puntos.', 'tip')}` },
        },
      ],
      quiz: [
        { q: 'La base monetaria es…', o: ['EMP + D', 'EMP + AC', 'D + AC', 'solo los depósitos'], a: 1, e: 'Efectivo del público más reservas de los bancos.' },
        { q: 'La oferta monetaria es…', o: ['EMP + D', 'EMP + AC', 'BM × α', 'solo los billetes'], a: 0, e: 'Efectivo del público más depósitos.' },
        { q: 'Con α = 0,1 y e = 0,2, el multiplicador es…', o: ['3', '4', '5', '10'], a: 1, e: '(1 + 0,2)/(0,1 + 0,2) = 4.' },
        { q: 'Si el Banco Central sube el encaje, la oferta monetaria…', o: ['sube', 'baja', 'no cambia', 'se duplica'], a: 1, e: 'Baja el multiplicador.' },
        { q: 'Si la gente prefiere tener más efectivo (sube e), el multiplicador…', o: ['sube', 'baja', 'no cambia', 'es infinito'], a: 1, e: 'Vuelve menos dinero a los bancos para prestar.' },
        { q: 'BM = 1.000, α = 0,02, e = 0,25. Los depósitos son…', o: ['1.000', '3.703,70', '4.629,63', '270'], a: 1, e: '1.000/0,27.' },
      ],
      sources: [{ title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 14', points: ['Base monetaria, oferta monetaria, relación efectivo/depósitos, coeficiente de caja, multiplicador.'] }],
    },
  );
})();
