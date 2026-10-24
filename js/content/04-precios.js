/* Tema V: Precios máximos y mínimos (más impuestos y excedentes). Diapositivas "TEMA V Precios Maximos y minimos 2026", Blanco cap. 2, Mankiw caps. 6 y 7. TP 3 (ejercicios 10, 12 y 14). */
(() => {
  const { LESSONS, h } = window.GUIDE;
  const { note, def, table, chart, eq, frac, lab } = h;
  const D = (x) => 9 - 0.8 * x, S = (x) => 1 + 0.8 * x;

  LESSONS.push(
    {
      id: 'precios-maximos',
      module: 't5',
      title: 'Intervención del Estado: precios máximos',
      keywords: 'intervención estado precio máximo techo escasez mercado negro colas racionamiento alquileres control barcelona cantidad comprada vendida',
      tldr: 'Un <mark>precio máximo</mark> se fija <strong>por debajo</strong> del de equilibrio: el precio no puede superarlo. A ese precio se demanda más de lo que se ofrece y aparece <strong>escasez</strong>. Se compra y se vende solo lo que los productores ofrecen.',
      goals: ['Enumerar las formas de intervención del Estado en los mercados.', 'Graficar un precio máximo y medir la escasez.', 'Explicar por qué la cantidad comprada y la vendida coinciden.', 'Analizar el control de alquileres (TP 3, ejercicio 14).'],
      body: `
        <h2>Cómo interviene el Estado</h2>
        <ul>
          <li>Estableciendo precios superiores o inferiores a los de equilibrio (máximos y mínimos).</li>
          <li>Estableciendo precios subvencionados.</li>
          <li>Fijando tasas impositivas al proceso productivo o al consumo (próxima lección de impuestos).</li>
          <li>Promulgando leyes o decretos que impiden al mercado funcionar libremente.</li>
        </ul>
        <h2>El precio máximo</h2>
        ${def('Precio máximo', 'Es un precio inferior al de equilibrio, fijado por autoridad competente, por encima del cual no se permite que este fluctúe, aunque sí por debajo. Como consecuencia podría generarse una situación de escasez.', 'Diapositivas del Tema V.')}
        ${chart({ x: [0, 10], y: [0, 10], curves: [{ f: D, cls: 'c-d', label: 'D' }, { f: S, cls: 's c-s', label: 'O' }], hlines: [{ y: 3, cls: 'c-ctrl', label: 'Pmáx' }],
          areas: [{ pts: [[2.5, 2.8], [7.5, 2.8], [7.5, 3.2], [2.5, 3.2]], cls: 'a-bad', label: 'escasez', at: [5, 2.2] }],
          points: [{ x: 5, y: 5, cls: 'pl-old', label: 'E' }, { x: 2.5, y: 3, cls: 'c-s', label: 'Xo', pos: 'nw' }, { x: 7.5, y: 3, cls: 'c-d', label: 'Xd', pos: 'ne' }],
          guides: [{ x: 5, y: 5, xt: 'Xe', yt: 'Pe' }, { x: 2.5, y: 3, xt: 'Xo', yt: '' }, { x: 7.5, y: 3, xt: 'Xd', yt: '' }] },
          'Con Pmáx < Pe: la cantidad demandada (Xd) supera a la ofrecida (Xo). La diferencia Xd − Xo es la escasez. Solo se intercambia Xo.')}
        ${table(['Magnitud', 'Con el precio máximo'], [['Cantidad demandada', 'Xd (sube respecto del equilibrio)'], ['Cantidad ofrecida', 'Xo (baja respecto del equilibrio)'], ['Cantidad comprada', 'Xo'], ['Cantidad vendida', 'Xo'], ['Escasez', 'Xd − Xo']])}
        ${note('<p><strong>Comprada y vendida siempre coinciden</strong>: cada compra es a la vez una venta. Lo que no coincide es lo que se <em>quiere</em> comprar con lo que se <em>quiere</em> vender. En un mercado intervenido se intercambia el <strong>mínimo</strong> entre Xd y Xo (el “lado corto” del mercado). Comprada y vendida solo podrían diferir si se mide mal (por ejemplo, ventas en negro que no se registran) o si hay existencias que los productores acumulan.</p>', 'exam')}
        <h3>Consecuencias de la escasez</h3>
        <ul>
          <li><strong>Colas y racionamiento</strong>: alguien decide quién compra (el primero que llega, cupos, sorteos).</li>
          <li><strong>Mercado negro</strong>: se vende por encima del máximo de manera ilegal.</li>
          <li><strong>Caída de calidad</strong> o desaparición de los productos de las góndolas.</li>
          <li>A largo plazo, menos inversión en ese mercado: la oferta se achica todavía más.</li>
        </ul>
        ${note('Un precio máximo fijado <strong>por encima</strong> del de equilibrio no tiene efecto: el mercado sigue en su equilibrio. Probalo moviendo el control del laboratorio por encima de E.', 'tip')}
        ${lab(0)}
        <h2>El caso de los alquileres (TP 3, ejercicio 14)</h2>
        <p>La nota de Vozpópuli cuenta que, tras dos años con precios de alquiler intervenidos, Barcelona se afianzó como la capital más cara para alquilar. El modelo lo explica: con un tope, los propietarios retiran viviendas del mercado de alquiler tradicional (las venden, las pasan a alquiler turístico o de temporada, que no está topeado), la cantidad ofrecida cae y la escasez aumenta. Quien consigue un contrato topeado se beneficia; el que busca, enfrenta menos oferta y precios más altos en los segmentos no regulados.</p>`,
      labs: [{ type: 'market', title: 'Precio máximo y mínimo sobre un mercado', intro: 'Elegí el tipo de control y mové el precio fijado. Mirá cuándo genera escasez o excedente y cuándo no tiene efecto.', mode: 'control', kind: 'max', d: [100, 1 / 3], s: [50, 0.5], x: [0, 160], y: [0, 120] }],
      exercises: [
        {
          official: '3.12', level: 1, title: 'Precio máximo: las cuatro cantidades',
          prompt: '<p>Dibuje oferta y demanda, fije un precio máximo inferior al de equilibrio y señale: a) la cantidad demandada; b) la ofrecida; c) la comprada; d) la vendida. ¿Por qué coinciden la comprada y la vendida? ¿Hay alguna situación en la que podrían diferir?</p>',
          solution: { explain: '<p>Ver el primer gráfico de la lección: a) Xd, sobre la demanda al nivel de Pmáx; b) Xo, sobre la oferta; c) y d) Xo, porque los productores no venden más que eso. Coinciden porque toda transacción tiene un comprador y un vendedor. Podrían diferir en las estadísticas si parte de las ventas se hace en el mercado negro (se registra menos de lo vendido) o si se confunde “vendido” con “producido” cuando hay stock acumulado.</p>' },
        },
        {
          official: '3.14', level: 2, title: 'Alquileres intervenidos en Barcelona',
          prompt: '<p>Analice la noticia “Barcelona se afianza como capital más cara para alquilar tras dos años con los precios intervenidos” (Vozpópuli) y explique cómo se vincula con el práctico.</p>',
          hints: ['¿El tope es un precio máximo o mínimo? ¿Por debajo o por encima del equilibrio?', '¿Qué hacen los propietarios cuando el alquiler tradicional rinde menos?'],
          solution: { explain: '<p>El tope al alquiler es un <strong>precio máximo</strong> efectivo (por debajo del equilibrio). Genera escasez: muchos buscan y pocos ofrecen. Además, con el tiempo la oferta se vuelve más elástica y se contrae: viviendas que pasan a venta, a alquiler de temporada o turístico, menos construcción para alquilar. Por eso, aunque los contratos regulados sean más baratos, el precio que enfrenta quien busca hoy (en los segmentos libres o en el mercado informal) termina siendo mayor. Es la consecuencia que predice el modelo: escasez, racionamiento y mercados paralelos.</p>' },
        },
      ],
      quiz: [
        { q: 'Un precio máximo efectivo se fija…', o: ['por encima del precio de equilibrio', 'por debajo del precio de equilibrio', 'igual al de equilibrio', 'en cero'], a: 1, e: 'Si estuviera por encima no restringiría nada.' },
        { q: 'Un precio máximo efectivo provoca…', o: ['excedente', 'escasez', 'equilibrio', 'aumento de la oferta'], a: 1, e: 'Xd > Xo.' },
        { q: 'Con un precio máximo, la cantidad que efectivamente se intercambia es…', o: ['la demandada', 'la ofrecida', 'la de equilibrio', 'la suma de ambas'], a: 1, e: 'Nadie puede obligar a los productores a vender más.' },
        { q: 'D: X = 100 − 2P, O: X = 3P − 50, Pmáx = 25. ¿Cuánta escasez hay?', o: ['25', '50', '0', '10'], a: 0, e: 'Xd = 50, Xo = 25: escasez = 25. (El equilibrio era P = 30).' },
        { q: 'Si se fija un precio máximo de 40 en un mercado cuyo equilibrio es P = 30…', o: ['hay escasez de 10', 'no tiene efecto', 'hay excedente', 'el precio sube a 40'], a: 1, e: 'El techo está por encima: el mercado sigue en 30.' },
        { q: '¿Cuál es una consecuencia típica de un precio máximo?', o: ['Acumulación de stock', 'Mercado negro', 'Baja del desempleo', 'Más oferta'], a: 1, e: 'Se vende ilegalmente por encima del tope.' },
      ],
      sources: [{ title: 'Principios de Economía', ref: 'Mankiw, cap. 6', points: ['Precio máximo obligatorio y escasez; el control de alquileres a corto y largo plazo.'] }],
    },

    {
      id: 'precios-minimos',
      module: 't5',
      title: 'Precios mínimos y salario mínimo',
      keywords: 'precio mínimo piso sostén excedente salario mínimo vital móvil smvm desempleo illia consejo canasta biocombustibles bioetanol yerba inym',
      tldr: 'Un <mark>precio mínimo</mark> se fija <strong>por encima</strong> del de equilibrio: el precio no puede bajar de él. Se ofrece más de lo que se demanda y aparece un <strong>excedente</strong>. El ejemplo más importante es el Salario Mínimo, Vital y Móvil.',
      goals: ['Graficar un precio mínimo y medir el excedente.', 'Explicar el SMVM como precio mínimo del mercado de trabajo.', 'Interpretar ejemplos argentinos: biocombustibles y yerba mate.'],
      body: `
        ${def('Precio mínimo', 'Es un precio superior al de equilibrio, fijado por autoridad competente, por debajo del cual no se permite que este fluctúe, aunque sí por encima. Como consecuencia podría generarse una situación de excedente.', 'Diapositivas del Tema V.')}
        ${chart({ x: [0, 10], y: [0, 10], curves: [{ f: D, cls: 'c-d', label: 'D' }, { f: S, cls: 'c-s', label: 'O' }], hlines: [{ y: 7, cls: 'c-ctrl', label: 'Pmín' }],
          areas: [{ pts: [[2.5, 6.8], [7.5, 6.8], [7.5, 7.2], [2.5, 7.2]], cls: 'a-warn', label: 'excedente', at: [5, 7.8] }],
          points: [{ x: 5, y: 5, cls: 'pl-old', label: 'E', pos: 'e' }, { x: 2.5, y: 7, cls: 'c-d', label: 'Xd', pos: 'sw' }, { x: 7.5, y: 7, cls: 'c-s', label: 'Xo', pos: 'se' }],
          guides: [{ x: 5, y: 5, xt: 'Xe', yt: 'Pe' }, { x: 2.5, y: 7, xt: 'Xd', yt: '' }, { x: 7.5, y: 7, xt: 'Xo', yt: '' }] },
          'Con Pmín > Pe: se ofrece Xo pero solo se compra Xd. El excedente Xo − Xd queda sin vender (o lo compra el Estado, si garantiza el precio).')}
        ${table(['', 'Precio máximo', 'Precio mínimo'], [['Ubicación (si es efectivo)', 'Debajo de Pe', 'Encima de Pe'], ['Desequilibrio', 'Escasez (Xd > Xo)', 'Excedente (Xo > Xd)'], ['Se intercambia', 'Xo', 'Xd'], ['A quién busca proteger', 'Consumidores', 'Productores o trabajadores']])}
        <h2>El Salario Mínimo, Vital y Móvil</h2>
        <p>En el mercado de trabajo el “precio” es el salario: las empresas demandan trabajo y las personas lo ofrecen. Por razones de justicia social se considera que todo trabajador debe tener un salario que garantice un nivel de vida digno.</p>
        ${def('Salario Mínimo, Vital y Móvil (Ley de Contrato de Trabajo)', 'La menor remuneración que debe percibir en efectivo el trabajador sin cargas de familia, en su jornada legal de trabajo, de modo que le asegure alimentación adecuada, vivienda digna, educación, vestuario, asistencia sanitaria, transporte y esparcimiento, vacaciones y previsión.', 'Citado en las diapositivas del Tema V.')}
        <ul>
          <li>Se estableció durante el gobierno de Arturo Umberto Illia, en 1964.</li>
          <li>Lo fija el Consejo Nacional del Empleo, la Productividad y el Salario Mínimo, Vital y Móvil, con representantes de sindicatos, empresas y el Poder Ejecutivo. Cuando no hay acuerdo, el gobierno lo define por decreto o resolución, como ocurrió en 2025 (las diapositivas muestran un SMVM de $357.800, con una caída real cercana al 50 % en la última década).</li>
          <li>Comparar el SMVM con la canasta básica muestra cuánto “vale” en términos reales (Tema XV).</li>
        </ul>
        ${chart({ x: [0, 10], y: [0, 10], xl: 'Trabajo (L)', yl: 'Salario (W)', curves: [{ f: D, cls: 'c-d', label: 'Demanda de trabajo (empresas)', at: 6.3 }, { f: S, cls: 'c-s', label: 'Oferta de trabajo', at: 7.6 }], hlines: [{ y: 6.6, cls: 'c-ctrl', label: 'SMVM' }],
          areas: [{ pts: [[3, 6.45], [7, 6.45], [7, 6.75], [3, 6.75]], cls: 'a-bad', label: 'desempleo', at: [5, 7.3] }], points: [{ x: 5, y: 5, cls: 'pl-old', label: 'E', pos: 'e' }] },
          'Si el salario mínimo supera al de equilibrio, en el modelo aparece un excedente de trabajo: desempleo. Si está por debajo del salario de mercado, no tiene efecto.')}
        ${note('El modelo de competencia perfecta predice desempleo si el mínimo está por encima del equilibrio. En la práctica, cuánto desempleo genera depende de la elasticidad de la demanda de trabajo (Tema VI) y de cuán alto se fije. Es un debate abierto: decí qué predice el modelo y qué supuestos usa.', 'warn')}
        <h2>Otros precios mínimos en Argentina</h2>
        <ul>
          <li><strong>Biocombustibles</strong>: la Secretaría de Energía fija un precio mínimo de compra del bioetanol de maíz y de caña de azúcar, y del biodiésel, que las petroleras deben pagar para la mezcla obligatoria con nafta y gasoil (Ley 27.640). Protege a los productores, muchos de ellos ingenios tucumanos.</li>
          <li><strong>Yerba mate</strong>: durante 22 años el Instituto Nacional de la Yerba Mate (INYM) fijó el precio de la hoja verde, un precio sostén para unos 12.000 pequeños productores. Al desregularse, el precio pasó a definirse por oferta y demanda.</li>
        </ul>
        <p>En el laboratorio de la lección anterior podés elegir “Precio mínimo” y mover el piso.</p>`,
      quiz: [
        { q: 'Un precio mínimo efectivo genera…', o: ['escasez', 'excedente', 'mercado negro de compradores', 'equilibrio'], a: 1, e: 'Xo > Xd.' },
        { q: 'En el modelo, un salario mínimo por encima del de equilibrio genera…', o: ['más empleo', 'desempleo', 'inflación', 'escasez de trabajadores'], a: 1, e: 'Las personas ofrecen más trabajo del que las empresas demandan.' },
        { q: 'Con un precio mínimo efectivo, la cantidad intercambiada es…', o: ['la ofrecida', 'la demandada', 'la de equilibrio', 'cero'], a: 1, e: 'Los compradores solo compran Xd.' },
        { q: 'D: X = 100 − 2P, O: X = 3P − 50, Pmín = 40. El excedente es…', o: ['50', '70', '20', '0'], a: 0, e: 'Xd = 20, Xo = 70: excedente = 50.' },
        { q: '¿Quién fija el SMVM en Argentina?', o: ['El Banco Central', 'El Consejo del Empleo, la Productividad y el Salario (o el Ejecutivo si no hay acuerdo)', 'Cada empresa', 'El INDEC'], a: 1, e: 'Es un órgano tripartito.' },
        { q: 'Un precio mínimo de 20 en un mercado con equilibrio en P = 30…', o: ['genera excedente', 'no tiene efecto', 'genera escasez', 'baja el precio a 20'], a: 1, e: 'El piso está por debajo del equilibrio.' },
      ],
      sources: [{ title: 'Diapositivas del Tema V', ref: 'Cátedra de Economía', points: ['Precios mínimos, SMVM, biocombustibles y yerba mate.'] }],
    },

    {
      id: 'impuestos-excedentes',
      module: 't5',
      title: 'Excedentes e impuestos sobre las ventas',
      keywords: 'impuesto por unidad cuña tributaria incidencia carga compradores vendedores recaudación pérdida irrecuperable excedente consumidor productor bienestar',
      tldr: 'El <mark>excedente del consumidor</mark> es lo que los compradores habrían pagado de más; el del productor, lo que los vendedores cobran por encima de su costo. Un impuesto por unidad abre una cuña entre el precio que paga el comprador y el que recibe el vendedor: <strong>la carga recae más sobre el lado menos elástico</strong>, sin importar a quién se le cobre.',
      goals: ['Medir excedentes del consumidor y del productor.', 'Calcular el nuevo equilibrio con un impuesto por unidad.', 'Repartir la carga del impuesto y medir recaudación y pérdida irrecuperable (TP 3, ejercicio 10).'],
      body: `
        <h2>Excedente del consumidor y del productor</h2>
        <p>La curva de demanda dice cuánto está dispuesto a pagar cada comprador. Si alguien pagaría $90 y el precio es $80, gana $10 de <strong>excedente del consumidor</strong>. Sumado entre todos, es el triángulo entre la demanda y el precio. Del mismo modo, el <strong>excedente del productor</strong> es el triángulo entre el precio y la oferta.</p>
        ${lab(0)}
        <h2>Un impuesto por unidad</h2>
        <p>Si el Estado cobra <em>t</em> pesos por cada unidad vendida a los vendedores, para ellos es como un aumento de costos: la oferta se desplaza <strong>hacia arriba en t</strong>. El nuevo equilibrio tiene:</p>
        <ul>
          <li>un precio que pagan los compradores (P<sub>c</sub>) más alto que antes;</li>
          <li>un precio que reciben los vendedores (P<sub>v</sub> = P<sub>c</sub> − t) más bajo que antes;</li>
          <li>una cantidad menor.</li>
        </ul>
        ${eq(`Carga del comprador = P<sub>c</sub> − P<sub>e</sub> &nbsp;&nbsp;·&nbsp;&nbsp; Carga del vendedor = P<sub>e</sub> − P<sub>v</sub> &nbsp;&nbsp;·&nbsp;&nbsp; Recaudación = t · X<sub>t</sub>`)}
        ${note('El impuesto se reparte según las elasticidades: <strong>paga más el lado menos elástico</strong>, el que tiene menos alternativas para escaparse. Da igual si la ley se lo cobra al vendedor o al comprador: el resultado es el mismo.', 'exam')}
        <p>Además del ingreso que pasa al Estado, se pierden transacciones que antes beneficiaban a ambos: es la <strong>pérdida irrecuperable de eficiencia</strong> (el triángulo rojo).</p>
        ${lab(1)}`,
      labs: [
        { type: 'market', title: 'Excedentes del consumidor y del productor', intro: 'Desplazá las curvas y mirá cómo cambian las áreas.', mode: 'surplus', d: [100, 1 / 3], s: [50, 0.5], x: [0, 160], y: [0, 120], shifts: [{ id: 'r', label: 'Renta (bien normal)', curve: 'd', min: -3, max: 3, step: 1, value: 0, k: 5 }, { id: 'w', label: 'Costos de producción', curve: 's', min: -3, max: 3, step: 1, value: 0, k: 5 }] },
        { type: 'market', title: 'Impuesto por unidad (TP 3, ejercicio 10)', intro: 'X<sub>d</sub> = 100 − 2P y X<sub>o</sub> = P − t − 10. Arranca con t = 3 como en el TP. Subí el impuesto y mirá la carga de cada lado, la recaudación y la pérdida.', mode: 'tax', d: [50, 0.5], s: [10, 1], x: [0, 55], y: [0, 55], t: 3, tmax: 30 },
      ],
      exercises: [
        {
          official: '3.10', level: 3, title: 'Impuesto de 3 euros por unidad',
          prompt: '<p>X<sub>d</sub> = 100 − 2P<sub>x</sub> y X<sub>o</sub> = P<sub>x</sub> − imp − 10. a) Equilibrio sin impuesto. b) Cantidad de equilibrio con un impuesto de 3 € por unidad. c) Precio que pagan los compradores y precio neto que reciben los vendedores. d) Reparto de la carga. e) Gráfico.</p>',
          hints: ['Con impuesto, la oferta es X<sub>o</sub> = P − 13 (P es lo que paga el comprador).', 'Comparar con el precio sin impuesto da la carga de cada lado.'],
          solution: { explain: `
            <p><strong>a)</strong> 100 − 2P = P − 10 → 3P = 110 → <strong>P* = 36,67</strong>; X* = 100 − 73,33 = <strong>26,67</strong>.</p>
            <p><strong>b)</strong> 100 − 2P = P − 13 → 3P = 113 → P<sub>c</sub> = 37,67; <strong>X<sub>t</sub> = 24,67</strong>.</p>
            <p><strong>c)</strong> Pagan los compradores <strong>P<sub>c</sub> = 37,67 €</strong>; reciben los vendedores <strong>P<sub>v</sub> = 37,67 − 3 = 34,67 €</strong>.</p>
            <p><strong>d)</strong> Comprador: 37,67 − 36,67 = <strong>1 €</strong> (un tercio). Vendedor: 36,67 − 34,67 = <strong>2 €</strong> (dos tercios). Los vendedores cargan más porque su oferta es menos sensible al precio: la demanda reacciona 2 unidades por cada peso y la oferta solo 1. Recaudación = 3 × 24,67 = <strong>74 €</strong>. Pérdida irrecuperable = ½ × 3 × (26,67 − 24,67) = <strong>3 €</strong>.</p>
            ${chart({ x: [0, 55], y: [0, 55], curves: [{ f: (x) => 50 - x / 2, cls: 'c-d', label: 'D' }, { f: (x) => 10 + x, cls: 'c-s', label: 'O' }, { f: (x) => 13 + x, cls: 'c-s c-tax', label: 'O + 3' }],
              areas: [{ pts: [[0, 37.67], [24.67, 37.67], [24.67, 34.67], [0, 34.67]], cls: 'a-tax' }, { pts: [[24.67, 37.67], [26.67, 36.67], [24.67, 34.67]], cls: 'a-bad' }],
              points: [{ x: 26.67, y: 36.67, cls: 'pl-old', label: 'E', pos: 'e' }, { x: 24.67, y: 37.67, cls: 'c-eq', label: 'Pc', pos: 'nw' }, { x: 24.67, y: 34.67, cls: 'c-s', label: 'Pv', pos: 'sw' }],
              guides: [{ x: 24.67, y: 37.67, yt: '37,67', xt: '24,67' }, { x: 24.67, y: 34.67, yt: '34,67', xt: '' }] }, 'La franja naranja es la recaudación (3 × 24,67). El triángulo rojo, la pérdida irrecuperable.')}` },
        },
      ],
      quiz: [
        { q: 'Un impuesto por unidad cobrado a los vendedores desplaza…', o: ['la demanda hacia arriba', 'la oferta hacia arriba (izquierda) en el monto del impuesto', 'la oferta a la derecha', 'ninguna curva'], a: 1, e: 'Para el vendedor es un costo más por unidad.' },
        { q: 'La carga de un impuesto recae más sobre…', o: ['quien lo paga legalmente', 'el lado más elástico del mercado', 'el lado menos elástico del mercado', 'el Estado'], a: 2, e: 'Quien tiene menos alternativas no puede esquivarlo.' },
        { q: 'En el TP 3 (ej. 10), con t = 3 los compradores pagan 1 € más. ¿Cuánto menos reciben los vendedores?', o: ['1 €', '2 €', '3 €', '0 €'], a: 1, e: 'La suma de las cargas es el impuesto: 1 + 2 = 3.' },
        { q: 'La pérdida irrecuperable de eficiencia de un impuesto es…', o: ['lo que recauda el Estado', 'el excedente que se pierde por las transacciones que dejan de hacerse', 'el aumento de precio', 'el costo de cobrar el impuesto'], a: 1, e: 'Es el triángulo entre la cantidad sin impuesto y con impuesto.' },
        { q: 'El excedente del consumidor es…', o: ['lo que gasta el consumidor', 'la diferencia entre lo que estaría dispuesto a pagar y lo que paga', 'el ahorro del consumidor', 'el ingreso del vendedor'], a: 1, e: 'Es el área entre la demanda y el precio.' },
      ],
      sources: [{ title: 'Principios de Economía', ref: 'Mankiw, caps. 6 y 7', points: ['Incidencia de un impuesto según las elasticidades.', 'Excedente del consumidor y del productor.'] }],
    },

    {
      id: 'bienestar',
      module: 't5',
      title: 'Excedentes y bienestar: cuánto pierde la sociedad con cada intervención',
      keywords: 'economía del bienestar disposición a pagar excedente del consumidor productor total coste marginal eficiencia equilibrio competitivo maximiza pérdida irrecuperable precio máximo mínimo impuesto recaudación beneficio coste fijo',
      tldr: 'El <mark>excedente del consumidor</mark> es lo que se estaba dispuesto a pagar menos lo que se paga; el <mark>del productor</mark>, lo que se cobra menos el costo marginal. Su suma, el <strong>excedente total</strong>, mide el bienestar que deja un mercado, y es <strong>máximo en el equilibrio competitivo</strong>. Precios máximos, mínimos e impuestos achican la cantidad y generan una <mark>pérdida irrecuperable de eficiencia</mark>.',
      goals: ['Calcular excedentes con tablas y con curvas lineales.', 'Explicar por qué el equilibrio competitivo maximiza el excedente total.', 'Medir la pérdida irrecuperable de un precio máximo, un precio mínimo y un impuesto.', 'Distinguir excedente del productor y beneficio.'],
      body: `
        <p>Hasta ahora el análisis fue <strong>positivo</strong>: cómo se forma el precio. La <strong>economía del bienestar</strong> da un paso normativo: ¿es bueno ese resultado? ¿Mejora o empeora la sociedad si el Estado interviene? Para responder hace falta medir cuánto gana cada participante.</p>
        <h2>El excedente del consumidor</h2>
        <p>La curva de demanda dice, para cada unidad, cuánto está dispuesto a pagar como máximo el consumidor (su <strong>disposición a pagar</strong>). Si paga menos, gana la diferencia. El ejemplo de Blanco (7.8.1), con un precio de 5 €:</p>
        ${table(['Unidad', '1.ª', '2.ª', '3.ª', '4.ª', '5.ª', '6.ª', '7.ª', '8.ª'], [['Pagaría como máximo', '15', '14', '12', '10', '8', '5', '4', '3'], ['Excedente (− 5)', '10', '9', '7', '5', '3', '0', '—', '—']])}
        <p>Compra <strong>6 unidades</strong> (hasta que lo que pagaría iguala lo que paga) y su excedente es 10 + 9 + 7 + 5 + 3 + 0 = <strong>34 €</strong>. Con muchas unidades, el excedente es el <strong>área entre la demanda y el precio</strong>. Se mide en unidades monetarias.</p>
        <h2>El excedente del productor</h2>
        <p>Del lado de la oferta, cada unidad tiene un costo marginal: es lo mínimo que el productor aceptaría cobrar por ella. Blanco 7.8.2, con un precio de 20 €:</p>
        ${table(['Unidad', '1.ª', '2.ª', '3.ª', '4.ª', '5.ª', '6.ª', '7.ª', '8.ª'], [['Costo marginal', '5', '8', '10', '14', '16', '18', '20', '22'], ['Excedente (20 −)', '15', '12', '10', '6', '4', '2', '0', '—']])}
        <p>Produce <strong>7 unidades</strong> y su excedente es <strong>49 €</strong>: el <strong>área entre el precio y la oferta</strong>.</p>
        ${note('El excedente del productor <strong>no es el beneficio</strong>: es el beneficio <strong>más el costo fijo</strong> (Blanco 7.6.6). Suma precio menos costo marginal, y los costos marginales no incluyen el fijo.', 'warn')}
        <h2>El excedente total y la eficiencia del mercado</h2>
        ${eq('Excedente total = EC + EP = Σ (disposición a pagar − costo marginal)', 'Bienestar')}
        <p>Con Xd = 38 − P y Xo = P − 2 (Blanco 7.8.6): el equilibrio es P = 20 y X = 18.</p>
        ${chart({ x: [0, 40], y: [0, 40], curves: [{ f: (x) => 38 - x, dom: [0, 38], cls: 'c-d', label: 'D' }, { f: (x) => x + 2, cls: 'c-s', label: 'O' }],
          areas: [{ pts: [[0, 38], [18, 20], [0, 20]], cls: 'a-d', label: 'EC = 162', at: [6, 25] }, { pts: [[0, 2], [18, 20], [0, 20]], cls: 'a-s', label: 'EP = 162', at: [6, 15] }],
          points: [{ x: 18, y: 20, cls: 'c-eq', label: 'E' }], guides: [{ x: 18, y: 20, xt: '18', yt: '20' }] },
          'EC = ½ · 18 · (38 − 20) = 162. EP = ½ · 18 · (20 − 2) = 162. Excedente total = 324.')}
        <p>¿Por qué el equilibrio competitivo es <strong>eficiente</strong>? Antes de X = 18, cada unidad que se deja de producir vale para alguien más de lo que cuesta producirla: se pierde excedente. Después de X = 18, cada unidad extra cuesta más de lo que alguien pagaría por ella: produciría pérdidas para la sociedad. Solo en el equilibrio se producen exactamente las unidades cuya disposición a pagar supera al costo marginal. En ningún mercado puede venderse una unidad cuya disposición a pagar sea menor que su costo marginal.</p>
        ${note('Una transferencia pura no cambia el bienestar: si los productores ganan exactamente lo que pierden los consumidores, el excedente total queda igual (Blanco 7.5.8 es falso). Lo que reduce el bienestar es que dejen de hacerse transacciones que convenían a ambos.', 'tip')}

        <h2>Precio máximo: menos cantidad y pérdida de bienestar</h2>
        <p>Mismo mercado con un precio máximo de 12 € (Blanco 7.8.7). Los productores ofrecen 12 − 2 = <strong>10</strong> unidades; se intercambian 10 (el lado corto).</p>
        ${chart({ x: [0, 40], y: [0, 40], curves: [{ f: (x) => 38 - x, dom: [0, 38], cls: 'c-d', label: 'D' }, { f: (x) => x + 2, cls: 'c-s', label: 'O' }], hlines: [{ y: 12, cls: 'c-ctrl', label: 'Pmáx = 12' }],
          areas: [{ pts: [[0, 38], [10, 28], [10, 12], [0, 12]], cls: 'a-d', label: 'EC = 210', at: [5, 21] }, { pts: [[0, 2], [10, 12], [0, 12]], cls: 'a-s', label: 'EP = 50', at: [3.5, 9.5] }, { pts: [[10, 28], [18, 20], [10, 12]], cls: 'a-bad', label: 'PIE = 64', at: [13, 20] }],
          points: [{ x: 18, y: 20, cls: 'pl-old', label: 'E', pos: 'e' }], guides: [{ x: 10, y: 28, xt: '10', yt: '28' }] },
          'Solo se intercambian 10 unidades. El triángulo rojo es la pérdida irrecuperable: transacciones que convenían y ya no se hacen.')}
        ${table(['', 'Sin intervención', 'Con Pmáx = 12', 'Cambio'], [['EC', '162', '½·10·10 + 10·16 = <strong>210</strong>', '+48'], ['EP', '162', '½·10·10 = <strong>50</strong>', '−112'], ['Total', '324', '<strong>260</strong>', '<strong>−64</strong> (pérdida irrecuperable)']])}
        <p>Los consumidores que consiguen comprar ganan (pagan menos), los productores pierden mucho y la sociedad pierde 64. Y esto supone que las 10 unidades van a los consumidores que más las valoran: si se reparten por colas o por sorteo, la pérdida es todavía mayor.</p>
        <h2>Precio mínimo</h2>
        <p>Con un precio mínimo de 24 €: los consumidores compran 38 − 24 = 14 unidades. Si los productores solo producen lo que venden: EC = ½·14·14 = <strong>98</strong>; EP = área entre 24 y la oferta hasta 14 = <strong>210</strong>; total <strong>308</strong>, pérdida irrecuperable = <strong>16</strong> (el triángulo entre X = 14 y X = 18). Si además producen el excedente y el Estado lo compra y almacena, la pérdida crece.</p>
        <h2>Impuesto por unidad</h2>
        <p>Con un impuesto de 4 € (Blanco 7.8.8) la oferta pasa a Xo = P − 6: los compradores pagan 22, los vendedores reciben 18 y se intercambian 16.</p>
        ${chart({ x: [0, 40], y: [0, 40], curves: [{ f: (x) => 38 - x, dom: [0, 38], cls: 'c-d', label: 'D' }, { f: (x) => x + 2, cls: 'c-s', label: 'O' }, { f: (x) => x + 6, cls: 'c-s c-tax', label: 'O + 4' }],
          areas: [{ pts: [[0, 38], [16, 22], [0, 22]], cls: 'a-d', label: 'EC = 128', at: [5, 27] }, { pts: [[0, 2], [16, 18], [0, 18]], cls: 'a-s', label: 'EP = 128', at: [5, 13] }, { pts: [[0, 18], [16, 18], [16, 22], [0, 22]], cls: 'a-tax', label: 'Recaudación = 64', at: [8, 20] }, { pts: [[16, 22], [18, 20], [16, 18]], cls: 'a-bad' }],
          points: [{ x: 16, y: 22, cls: 'c-eq', label: 'Pc', pos: 'ne' }, { x: 16, y: 18, cls: 'c-s', label: 'Pv', pos: 'se' }] },
          'EC 128 + EP 128 + recaudación 64 = 320. La pérdida irrecuperable es 324 − 320 = 4 (el triángulo rojo).')}
        ${table(['Intervención', 'Cantidad', 'Excedente total', 'Pérdida irrecuperable'], [['Ninguna', '18', '324', '0'], ['Precio máximo 12', '10', '260', '64'], ['Precio mínimo 24', '14', '308', '16'], ['Impuesto de 4 (contando la recaudación)', '16', '320', '4']])}
        ${note('Regla general (Blanco 7.6.9 y 7.6.10): un precio máximo efectivo y un impuesto <strong>reducen la cantidad producida y el excedente total</strong>. El Estado puede tener buenas razones para intervenir (equidad, Tema II), pero el modelo dice que tiene un costo de eficiencia, y conviene saber medirlo.', 'exam')}`,
      quiz: [
        { q: 'El excedente del consumidor es…', o: ['lo que el consumidor paga', 'lo que está dispuesto a pagar menos lo que paga', 'lo que paga menos lo que está dispuesto a pagar', 'el gasto total'], a: 1, e: 'Blanco 7.5.2 invierte la resta: es falso.', src: 'Blanco 7.6.1' },
        { q: 'Al disminuir el precio de un producto…', o: ['aumentan los dos excedentes', 'disminuyen los dos excedentes', 'disminuye el del consumidor y aumenta el del productor', 'aumenta el del consumidor y disminuye el del productor'], a: 3, e: 'El consumidor paga menos y el productor cobra menos.', src: 'Blanco 7.6.3' },
        { q: 'En una empresa, el excedente del productor es igual…', o: ['al beneficio', 'al beneficio más el costo marginal', 'al beneficio más el costo medio', 'al beneficio más el costo fijo'], a: 3, e: 'Suma P − CMg, que no descuenta el costo fijo.', src: 'Blanco 7.6.6' },
        { q: 'El excedente total, por unidad, se mide como…', o: ['lo que paga el consumidor menos el costo marginal', 'lo que está dispuesto a pagar el consumidor menos el costo marginal', 'el costo marginal menos el precio', 'lo que está dispuesto a pagar menos lo que paga'], a: 1, e: 'El precio se cancela: lo que gana uno al pagar menos lo pierde el otro.', src: 'Blanco 7.6.8' },
        { q: 'Un precio máximo efectivo…', o: ['aumenta la cantidad y reduce el excedente total', 'reduce la cantidad y aumenta el excedente total', 'aumenta los dos', 'reduce la cantidad y el excedente total'], a: 3, e: 'Se pierden transacciones que convenían a ambas partes.', src: 'Blanco 7.6.9' },
        { q: 'Xd = 38 − P y Xo = P − 2. ¿Cuál es el excedente total en el equilibrio?', o: ['162', '324', '360', '18'], a: 1, e: 'EC = EP = 162.' },
        { q: 'Con el mismo mercado y un impuesto de 4 por unidad, la pérdida irrecuperable es…', o: ['64', '4', '16', '0'], a: 1, e: '½ · 4 · (18 − 16) = 4.' },
        { q: 'En un mercado competitivo, la última unidad vendida proporciona un excedente total…', o: ['máximo', 'nulo', 'negativo', 'igual al precio'], a: 1, e: 'En el equilibrio la disposición a pagar iguala al costo marginal (Blanco 7.5.4).' },
      ],
      sources: [
        { title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 7', points: ['Excedente del consumidor y del productor: concepto y medición.', 'El excedente total como medida del bienestar; eficiencia del equilibrio competitivo.', 'Efectos sobre el bienestar de un precio máximo y de un impuesto (ejercicios 7.8.6 a 7.8.8).'] },
        { title: 'Principios de Economía', ref: 'Mankiw, caps. 7 y 8', points: ['Consumidores, productores y eficiencia de los mercados; costos de los impuestos.'] },
      ],
    },
  );
})();
