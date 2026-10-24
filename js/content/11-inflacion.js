/* Tema XIV: Inflación. Diapositivas "TEMA XIV INFLACION mm 2026", Blanco cap. 14, Mankiw caps. 24 y 30. TP 6 (ejercicios 5 y 6). */
(() => {
  const { LESSONS, h } = window.GUIDE;
  const { note, def, table, chart, eq, frac, num, lab, flow } = h;

  LESSONS.push(
    {
      id: 'inflacion-medicion',
      module: 't14',
      title: 'Inflación y su medición: IPC y deflactor',
      keywords: 'inflación definición proceso suba continuada nivel general precios ipc índice precios consumidor canasta ponderación engho indec año base laspeyres deflactor tasa costo de vida',
      tldr: 'La inflación es un <mark>proceso de suba continuada del nivel general de precios</mark>: persistente y generalizada. Se mide con el <strong>IPC</strong> (promedio ponderado de los precios de la canasta de consumo de los hogares) o con el <strong>deflactor del PIB</strong>. La tasa de inflación es la variación porcentual del índice.',
      goals: ['Definir inflación y sus tres rasgos.', 'Calcular un IPC con ponderaciones.', 'Calcular la tasa de inflación con el IPC o el deflactor.', 'Distinguir IPC de costo de vida.'],
      body: `
        <p>“No hay forma más segura y sutil para destruir las bases de la sociedad que echar a perder su moneda.” <em>J. M. Keynes</em></p>
        ${def('Inflación', 'Un proceso de suba continuada en el nivel general de precios de la economía.', 'Definición prácticamente unánime de los manuales, citada en las diapositivas del Tema XIV.')}
        ${table(['Rasgo', 'Qué excluye'], [['<strong>Proceso</strong>', 'Un salto único y aislado de precios no es inflación'], ['<strong>Suba continuada</strong> (persistencia)', 'Debe repetirse en el tiempo'], ['<strong>Nivel general</strong> (generalidad)', 'Que suba un solo bien (el tomate por una helada) es un cambio de precio relativo. Y no confundir suba de precios con precios altos']])}
        <h2>El Índice de Precios al Consumidor</h2>
        <p>Mide la variación de los precios de los bienes y servicios representativos del gasto de consumo de los hogares, comparados con los del año base. En Argentina lo elabora el <strong>INDEC</strong>, con datos del total nacional y de seis regiones (GBA, Pampeana, Noreste, Noroeste, Cuyo, Patagonia). Las ponderaciones salen de la <strong>Encuesta Nacional de Gastos de los Hogares</strong> (ENGHo): cuánto gasta la familia media en cada bien.</p>
        ${eq(`IPC<sub>t</sub> = Σ g<sub>i</sub> · ${frac('P<sub>t,i</sub>', 'P<sub>0,i</sub>')} × 100`, 'IPC (g = ponderación de cada bien)')}
        <p>Ejemplo de la diapositiva: ponderaciones 30 %, 25 %, 35 % y 10 %.</p>
        ${table(['', 'Bien 1', 'Bien 2', 'Bien 3', 'Bien 4', 'IPC'], [['Ponderación', '30 %', '25 %', '35 %', '10 %', ''], ['Año 0', '400', '10.000', '60.000', '800', '100'], ['Año 1', '350', '12.000', '80.000', '1.200', '0,3·0,875 + 0,25·1,2 + 0,35·1,333 + 0,1·1,5 = <strong>118</strong>'], ['Año 2', '450', '11.000', '100.000', '1.200', '<strong>135</strong>']])}
        <h2>La tasa de inflación</h2>
        ${eq(`π<sub>t</sub> = ${frac('IPC<sub>t</sub> − IPC<sub>t−1</sub>', 'IPC<sub>t−1</sub>')} × 100 &nbsp;&nbsp; o con el deflactor: &nbsp; ${frac('D<sub>t</sub> − D<sub>t−1</sub>', 'D<sub>t−1</sub>')} × 100`, 'Tasa de inflación')}
        <p>En el ejemplo: año 1, 18 %; año 2, (135 − 118)/118 = <strong>14,4 %</strong> (no 17 %: se divide por el índice del año anterior).</p>
        ${lab(0)}
        ${table(['', 'IPC', 'Deflactor del PIB'], [['Qué bienes', 'Canasta fija de consumo de los hogares (incluye importados)', 'Todo lo producido en el país (incluye bienes de inversión, excluye importados)'], ['Ponderaciones', 'Fijas (año base)', 'Cambian con la producción de cada año']])}
        <h2>IPC y costo de vida</h2>
        <p>El IPC mide la evolución de los precios de una canasta fija. El <strong>costo de vida</strong> de una familia concreta depende de lo que <em>ella</em> consume: una familia que alquila sufre más una suba de alquileres que lo que muestra el IPC promedio. Además, la canasta fija no capta que los consumidores sustituyen hacia bienes que se encarecen menos ni las mejoras de calidad.</p>`,
      labs: [{
        type: 'calc', title: 'Calculadora de IPC e inflación (TP 6, ejercicio 5)', intro: 'Tres productos, tres años y sus ponderaciones.',
        fields: [{ id: 'a0', label: 'Alimentos año 0', value: 10 }, { id: 'a1', label: 'Alimentos año 1', value: 14 }, { id: 'a2', label: 'Alimentos año 2', value: 16 }, { id: 'v0', label: 'Vestidos año 0', value: 30 }, { id: 'v1', label: 'Vestidos año 1', value: 45 }, { id: 'v2', label: 'Vestidos año 2', value: 58 }, { id: 'h0', label: 'Vivienda año 0', value: 300 }, { id: 'h1', label: 'Vivienda año 1', value: 350 }, { id: 'h2', label: 'Vivienda año 2', value: 420 }, { id: 'ga', label: 'Ponderación alimentos (%)', value: 25 }, { id: 'gv', label: 'Ponderación vestidos (%)', value: 35 }, { id: 'gh', label: 'Ponderación vivienda (%)', value: 40 }],
        run: (v) => {
          const ipc = (t) => (v.ga * v[`a${t}`] / v.a0 + v.gv * v[`v${t}`] / v.v0 + v.gh * v[`h${t}`] / v.h0) / ((v.ga + v.gv + v.gh) / 100);
          const i0 = ipc(0), i1 = ipc(1), i2 = ipc(2);
          return `${v.ga + v.gv + v.gh !== 100 ? '⚠ Las ponderaciones no suman 100: se normalizan.\n' : ''}IPC año 0 = ${num(i0)}\nIPC año 1 = ${num(i1)}\nIPC año 2 = ${num(i2)}\n\nInflación año 1 = ${num((i1 / i0 - 1) * 100)} %\nInflación año 2 = ${num((i2 / i1 - 1) * 100)} %\nAcumulada = ${num((i2 / i0 - 1) * 100)} %`;
        },
      }],
      exercises: [
        {
          official: '6.5', level: 2, title: 'IPC con tres productos',
          prompt: '<p>Precios: Alimentos 10, 14, 16; Vestidos 30, 45, 58; Vivienda 300, 350, 420 (años 0, 1 y 2). Ponderaciones: 25 %, 35 % y 40 %. a) Calcule el IPC de los tres años. b) Calcule la tasa de inflación de los años 1 y 2.</p>',
          solution: { explain: `
            <p><strong>a)</strong> IPC<sub>0</sub> = <strong>100</strong>.</p>
            <p>IPC<sub>1</sub> = 0,25·(14/10) + 0,35·(45/30) + 0,40·(350/300) = 0,35 + 0,525 + 0,4667 = 1,3417 → <strong>134,17</strong>.</p>
            <p>IPC<sub>2</sub> = 0,25·(16/10) + 0,35·(58/30) + 0,40·(420/300) = 0,40 + 0,6767 + 0,56 = 1,6367 → <strong>163,67</strong>.</p>
            <p><strong>b)</strong> π<sub>1</sub> = (134,17 − 100)/100 = <strong>34,17 %</strong>. π<sub>2</sub> = (163,67 − 134,17)/134,17 = <strong>21,99 %</strong>. La inflación se desaceleró, pero los precios siguieron subiendo: desinflación no es deflación.</p>
            ${note('El enunciado del TP repite en c) una pregunta del ejercicio 3 (crecimiento del PIB 2009–2011); con los datos de este ejercicio solo se pueden calcular a) y b).', 'tip')}` },
        },
      ],
      quiz: [
        { q: 'Sube mucho el precio del tomate por una helada y el resto no cambia. ¿Es inflación?', o: ['Sí', 'No: es un cambio de precio relativo, no del nivel general', 'Solo si dura un mes', 'Depende del IPC'], a: 1, e: 'Falta generalidad y persistencia.' },
        { q: 'El IPC pasa de 120 a 150. La inflación es…', o: ['30 %', '25 %', '20 %', '50 %'], a: 1, e: '(150 − 120)/120.' },
        { q: 'Las ponderaciones del IPC se obtienen de…', o: ['el PIB', 'la Encuesta Nacional de Gastos de los Hogares', 'el BCRA', 'la EPH'], a: 1, e: 'Reflejan cuánto gasta la familia media en cada bien.' },
        { q: '¿Qué índice incluye bienes importados?', o: ['El deflactor del PIB', 'El IPC', 'Ambos', 'Ninguno'], a: 1, e: 'El deflactor solo mide lo producido en el país.' },
        { q: 'La inflación es una suba…', o: ['de un precio', 'continuada del nivel general de precios', 'de los salarios', 'del tipo de cambio'], a: 1, e: 'Proceso, continuada, nivel general.' },
      ],
      sources: [{ title: 'Diapositivas del Tema XIV', ref: 'Cátedra de Economía', points: ['Definición de inflación; IPC y ENGHo; cálculo del IPC; tasa de inflación; IPC y costo de vida.'] }],
    },

    {
      id: 'poder-adquisitivo',
      module: 't14',
      title: 'Poder adquisitivo, salario real e interés real',
      keywords: 'salario real nominal poder adquisitivo tasa interés real nominal fisher ilusión monetaria acreedores deudores ganadores perdedores impuesto inflacionario señoreaje renta fija',
      tldr: 'Lo que importa es el poder de compra: <mark>salario real = salario nominal / IPC</mark>. La <mark>tasa de interés real ≈ nominal − inflación</mark>. La inflación imprevista pasa riqueza de acreedores a deudores y de quienes tienen ingresos fijos al Estado (impuesto inflacionario).',
      goals: ['Calcular salarios reales con el IPC.', 'Calcular la tasa de interés real.', 'Identificar ganadores y perdedores de la inflación (TP 6, ejercicio 6).', 'Explicar el impuesto inflacionario y el señoreaje.'],
      body: `
        ${eq(`Salario real<sub>t</sub> = ${frac('Salario nominal<sub>t</sub>', 'IPC<sub>t</sub>')} × 100`, 'Salario real')}
        ${table(['Año', 'Salario nominal', 'IPC', 'Salario real (a precios del año 0)'], [['0', '45.000', '100', '45.000'], ['1', '50.000', '118', '<strong>42.372</strong>'], ['2', '55.000', '135', '<strong>40.740</strong>']])}
        <p>El salario nominal subió 22 %, pero el real <strong>cayó</strong> casi 9,5 %: se puede comprar menos. Actuar mirando solo el nominal es la <strong>ilusión monetaria</strong>.</p>
        ${eq('Tasa de interés real ≈ Tasa de interés nominal − Tasa de inflación', 'Interés real')}
        <p>Es lo que en términos reales recibe el prestamista y paga el prestatario. Un plazo fijo al 30 % con inflación del 40 % rinde −10 % real: el ahorrista pierde poder de compra.</p>
        ${note('La fórmula exacta es (1 + i) = (1 + r)(1 + π). La resta es la aproximación que usa la cátedra y funciona bien con tasas bajas.', 'tip')}
        <h2>Ganadores y perdedores</h2>
        ${table(['Efecto negativo de la inflación', 'Quién pierde', 'Quién gana'], [
          ['Desplaza riqueza de acreedores a deudores (si la tasa nominal no la compensa)', 'Quien prestó a tasa fija', 'Quien debe a tasa fija'],
          ['Reduce el poder de compra de las rentas fijas', 'Asalariados, jubilados, quienes cobran alquileres fijos', 'Quien paga montos fijos'],
          ['Aumenta la recaudación (IVA, Ganancias, Bienes Personales sin actualizar)', 'Contribuyentes', 'El Estado'],
          ['Distorsiona los precios relativos', 'Todos: las señales de precios se vuelven confusas', ''],
          ['Aumenta el riesgo y la incertidumbre: sube el costo del dinero', 'Quien necesita crédito', ''],
          ['Desalienta la inversión productiva', 'El crecimiento', ''],
        ])}
        <h2>Impuesto inflacionario y señoreaje</h2>
        <p>La emisión reduce el valor del dinero. Quien tiene billetes en su <strong>activo</strong> pierde poder de compra; quien los tiene en su <strong>pasivo</strong> (el Banco Central, el único que puede imprimirlos) no. Funciona como un impuesto que nadie votó y que pagan sobre todo quienes ahorran en efectivo, generalmente los de menores ingresos. El <strong>señoreaje</strong> es el ingreso que obtiene el Estado por emitir dinero.</p>`,
      labs: [{
        type: 'classify', title: 'TP 6, ejercicio 6: ¿gana o pierde con la inflación?', buckets: ['Gana', 'Pierde'],
        items: [
          { t: 'Cristian pidió un préstamo a 30 años para comprarse una casa', b: 0, why: 'Deudor: devuelve pesos que valen menos (si la tasa es fija y no indexada).' },
          { t: 'María es jubilada y tiene unos pocos ahorros de toda su vida', b: 1, why: 'Renta fija y ahorros que se licúan.' },
          { t: 'Sofía le prestó dinero a su prima, que se lo devolverá en 5 años', b: 1, why: 'Acreedora: le devuelven pesos con menos poder de compra.' },
          { t: 'Francisco trabaja en una cafetería ganando el salario mínimo', b: 1, why: 'Su salario se ajusta con rezago: cae su salario real.' },
          { t: 'El Estado, que emite el dinero', b: 0, why: 'Señoreaje e impuesto inflacionario.' },
        ],
      }],
      exercises: [
        {
          official: '6.6', level: 1, title: 'Ganadores y perdedores',
          prompt: '<p>Explique si la inflación beneficia o perjudica a: Cristian (préstamo a 30 años para una casa), María (jubilada con pocos ahorros), Sofía (le prestó dinero a su prima, que se lo devolverá en 5 años) y Francisco (cobra el salario mínimo).</p>',
          solution: { explain: '<ul><li><strong>Cristian gana</strong> (si su tasa es fija o menor que la inflación): la deuda se licúa en términos reales.</li><li><strong>María pierde</strong>: la jubilación es una renta que se ajusta con rezago, y sus ahorros pierden poder de compra.</li><li><strong>Sofía pierde</strong>: es acreedora y recibirá pesos que valen menos, salvo que haya pactado un interés que compense la inflación.</li><li><strong>Francisco pierde</strong>: el salario mínimo se actualiza por detrás de los precios, así que su salario real cae.</li></ul>' },
        },
      ],
      quiz: [
        { q: 'Salario nominal 60.000, IPC 150. El salario real (a precios base) es…', o: ['90.000', '40.000', '60.000', '400'], a: 1, e: '60.000 × 100/150.' },
        { q: 'Tasa nominal 50 %, inflación 60 %. La tasa real aproximada es…', o: ['+10 %', '−10 %', '110 %', '0 %'], a: 1, e: '50 − 60.' },
        { q: 'Con inflación inesperada, ¿quién gana?', o: ['El acreedor', 'El deudor a tasa fija', 'El jubilado', 'El ahorrista en efectivo'], a: 1, e: 'Devuelve dinero que vale menos.' },
        { q: 'La ilusión monetaria es…', o: ['creer que el dinero no existe', 'actuar mirando variables nominales en vez de reales', 'emitir sin respaldo', 'ahorrar en dólares'], a: 1, e: 'Celebrar un aumento nominal que no compensa la inflación.' },
        { q: 'El impuesto inflacionario lo pagan principalmente…', o: ['quienes tienen deudas', 'quienes mantienen dinero en efectivo', 'el Banco Central', 'los exportadores'], a: 1, e: 'Su efectivo pierde poder de compra.' },
      ],
      sources: [{ title: 'Diapositivas del Tema XIV', ref: 'Cátedra de Economía', points: ['Salario real; tasa de interés real; efectos negativos de la inflación; impuesto inflacionario y señoreaje.'] }],
    },

    {
      id: 'causas-inflacion',
      module: 't14',
      title: 'Causas de la inflación y la experiencia argentina',
      keywords: 'causas inflación demanda costos autoconstruida expectativas base monetaria emisión ecuación cuantitativa españa metales américa ciclos argentina rodrigazo austral hiperinflación 2001 rem',
      tldr: 'La inflación puede venir de la <mark>demanda</mark> (gasto mayor que la capacidad de producir), de los <mark>costos</mark> (suben insumos, salarios o impuestos), de las <mark>expectativas</mark> (se sube hoy porque se espera que suba) o de la <mark>emisión monetaria</mark> (más dinero que bienes). En la práctica se combinan.',
      goals: ['Explicar los cuatro enfoques sobre las causas de la inflación con gráficos de oferta y demanda agregada.', 'Relacionar la emisión con la ecuación cuantitativa.', 'Conocer la historia de las crisis y planes antiinflacionarios en Argentina.'],
      body: `
        <h2>Cuatro causas</h2>
        ${table(['Tipo', 'Mecanismo', 'Ejemplo'], [
          ['<strong>Por demanda</strong>', 'La demanda general aumenta y la oferta no alcanza a cubrirla', 'Un boom de consumo o de gasto público con la economía a plena capacidad'],
          ['<strong>Por costos</strong>', 'Suben los costos (materias primas, salarios, impuestos) y los productores lo trasladan a precios', 'Suba internacional del petróleo, devaluación que encarece insumos'],
          ['<strong>Autoconstruida</strong> (expectativas)', 'Los productores esperan subas y se adelantan subiendo precios: la profecía se autocumple', 'Remarcaciones “por las dudas”'],
          ['<strong>Monetaria</strong> (aumento de la base)', 'Más dinero hace crecer la demanda más rápido que la oferta de bienes', 'Llegada de metales de América a España en los siglos XVI y XVII; financiamiento del déficit con emisión'],
        ])}
        <div class="figs-2">
          ${h.plot({ x: [0, 10], y: [0, 10], h: 250, xl: 'Producción', yl: 'Nivel de precios', curves: [{ f: (x) => 9 - 0.8 * x, cls: 'c-d', ghost: true, label: 'DA₀' }, { f: (x) => 11 - 0.8 * x, cls: 'c-d', label: 'DA₁' }, { f: (x) => 1 + 0.8 * x, cls: 'c-s', label: 'OA' }], points: [{ x: 5, y: 5, cls: 'pl-old' }, { x: 6.25, y: 6, cls: 'c-eq', label: 'P ↑' }], alt: 'Inflación de demanda' })}
          ${h.plot({ x: [0, 10], y: [0, 10], h: 250, xl: 'Producción', yl: 'Nivel de precios', curves: [{ f: (x) => 9 - 0.8 * x, cls: 'c-d', label: 'DA' }, { f: (x) => 1 + 0.8 * x, cls: 's c-s', ghost: true, label: 'OA₀' }, { f: (x) => 3 + 0.8 * x, cls: 'c-s', label: 'OA₁' }], points: [{ x: 5, y: 5, cls: 'pl-old' }, { x: 3.75, y: 6, cls: 'c-eq', label: 'P ↑' }], alt: 'Inflación de costos' })}
        </div>
        <p class="muted-s">Izquierda: inflación de demanda (sube la producción y los precios). Derecha: inflación de costos (suben los precios y cae la producción: estanflación).</p>
        ${note('La causa monetaria es la ecuación cuantitativa en acción: con V y Y dados, M·V = P·Y implica que si M crece más rápido que Y, sube P. Es el noveno principio de Mankiw.', 'exam')}
        <h2>Argentina: ciclos e inflación</h2>
        <p>Crisis y planes antiinflacionarios: Rodrigazo (1975), la Tablita (1978), Plan Austral (1985), Plan Primavera (1988), hiperinflación (1989–1990), Plan Bonex, Convertibilidad, efecto Tequila (1995), crisis de 2001. Las reglas mnemotécnicas de Martín Lousteau (<em>Economía 3D</em>):</p>
        ${table(['Regla', 'Significado'], [['<strong>1 × 3</strong>', 'Desde 1900, uno de cada tres años estuvimos en recesión'], ['<strong>4 × 4</strong>', 'Desde principios del siglo XX, solo cuatro veces crecimos al menos cuatro años seguidos a un 4 % o más'], ['<strong>25 × 10</strong>', 'En 25 años padecimos diez recesiones'], ['40 %', 'Un adulto que empezó a trabajar a los 25 pasó el 40 % de su vida laboral en recesión']])}
        <p>El BCRA publica cada mes el <strong>REM</strong> (Relevamiento de Expectativas de Mercado): lo que analistas esperan de inflación, tipo de cambio y crecimiento. Es una forma de medir las expectativas que alimentan la inflación autoconstruida.</p>`,
      quiz: [
        { q: 'Suben los salarios y el precio del petróleo, y las empresas trasladan el aumento a precios. Es inflación…', o: ['de demanda', 'de costos', 'autoconstruida', 'monetaria'], a: 1, e: 'Desplaza la oferta agregada hacia arriba.' },
        { q: 'Los comerciantes suben precios porque esperan que el mes que viene suban. Es inflación…', o: ['de costos', 'autoconstruida (expectativas)', 'de demanda', 'importada'], a: 1, e: 'La expectativa se autocumple.' },
        { q: 'La llegada de oro y plata de América a España en los siglos XVI y XVII provocó…', o: ['deflación', 'aumento de precios', 'más producción', 'baja de la tasa de interés'], a: 1, e: 'Más dinero sin más bienes: suben los precios.' },
        { q: 'Una inflación de costos, en el modelo de oferta y demanda agregada, provoca…', o: ['P ↑ y producción ↑', 'P ↑ y producción ↓', 'P ↓ y producción ↑', 'nada'], a: 1, e: 'Estanflación.' },
        { q: 'La regla “1 × 3” de Lousteau significa que…', o: ['la inflación se triplica cada año', 'uno de cada tres años desde 1900 estuvimos en recesión', 'un peso vale tres centavos', 'cada tres años hay un plan'], a: 1, e: 'Muestra la volatilidad del crecimiento argentino.' },
      ],
      sources: [{ title: 'Diapositivas del Tema XIV', ref: 'Cátedra de Economía', points: ['Causas: demanda, costos, autoconstruida y aumento de la base monetaria.', 'Oscilación de los ciclos en Argentina (Lousteau, Economía 3D).'] }],
    },

    {
      id: 'inflacion-a-fondo',
      module: 't14',
      title: 'La inflación a fondo: medirla bien, deflación y sus costos',
      keywords: 'ipc deflactor diferencias laspeyres convencional encadenado ponderaciones fijas inflación aumenta disminuye desinflación deflación hiperinflación costos suela de zapatos menú precios relativos distorsiones fiscales redistribución arbitraria inesperada nivel general índice no se mide en pesos ganadores perdedores pregunta parcial',
      tldr: 'Que suba el IPC no significa que suba la inflación: si los precios suben cada vez menos, hay <strong>desinflación</strong>; si bajan, <mark>deflación</mark>. El IPC y el deflactor miden cosas distintas (canasta fija de consumo frente a toda la producción del país). La inflación tiene costos aunque los salarios la acompañen: suela de zapatos, menú, precios relativos confusos, distorsiones fiscales y, si es inesperada, <mark>redistribución arbitraria de la riqueza</mark>.',
      goals: ['Explicar las diferencias entre IPC y deflactor del PIB.', 'Distinguir aumento del IPC, aumento de la inflación, desinflación y deflación.', 'Calcular un IPC de Laspeyres y detectar una deflación.', 'Enumerar los costos de la inflación, esperada e inesperada.', 'Armar la respuesta completa a la pregunta de inflación del 2do parcial 2025.'],
      body: `
        ${note('2do parcial 2025 y su otra versión: “<em>¿Defina inflación, cuáles son las formas de calcularla? ¿Cuáles son las diferencias entre los distintos métodos de cálculo? ¿Cuáles son las causas y consecuencias de la inflación? ¿Quiénes son los ganadores y perdedores en los procesos inflacionarios?</em>”. Esta lección completa lo que falta de las tres anteriores.', 'exam')}
        <h2>IPC y deflactor: qué mide cada uno</h2>
        ${table(['', 'Índice de Precios al Consumidor (IPC)', 'Deflactor del PIB'], [
          ['Qué bienes', 'Una canasta de bienes y servicios de <strong>consumo final</strong> de los hogares', '<strong>Todos</strong> los bienes y servicios finales producidos en el país'],
          ['Importados', '<strong>Los incluye</strong> si los hogares los consumen', 'No los incluye: no se producen en el país'],
          ['Bienes de inversión', 'No los incluye', '<strong>Los incluye</strong> (Blanco 11.5.15 y 11.6.6)'],
          ['Ponderaciones', '<strong>Fijas</strong> del año base (índice de Laspeyres), según la ENGHo', 'Cambian cada año con la producción'],
          ['Cómo se calcula', 'Σ g<sub>i</sub> · P<sub>t,i</sub> / P<sub>0,i</sub> × 100', 'PIB nominal / PIB real × 100'],
        ])}
        <p>Los dos son <strong>índices</strong>: no se miden en pesos ni en ninguna moneda (Blanco 11.5.6). Un IPC de 135 dice que la canasta cuesta 35 % más que en el año base, no que cueste $135. Y el IPC es una media <strong>ponderada</strong> de los precios de los bienes de consumo finales, no de “todos los bienes” (Blanco 11.5.1, tomado en el 2do parcial 2024: falso).</p>
        <h3>Laspeyres convencional y encadenado</h3>
        <p>El IPC clásico (Laspeyres convencional) mantiene las ponderaciones del año base. El problema: con el tiempo la canasta envejece (la gente cambia lo que consume). El <strong>Laspeyres encadenado</strong> actualiza las ponderaciones cada año y encadena los índices (Blanco 11.5.14: es falso que use ponderaciones fijas).</p>
        <h2>IPC, inflación, desinflación y deflación</h2>
        <p>Ejemplo de Blanco 11.8.1 (Laspeyres, base 2000; ponderaciones: alimentos 40 %, vestido 15 %, vivienda 20 %, ocio 25 %):</p>
        ${table(['', '2000', '2001', '2002', '2003'], [['Alimentos', '7,5', '8,7', '9', '8'], ['Vestido', '5', '7,5', '10', '11,5'], ['Vivienda', '3', '3', '2,5', '2,5'], ['Ocio', '10', '12,5', '13', '12,5'], ['<strong>IPC</strong>', '100', '120,15', '127,17', '125,08'], ['<strong>Inflación</strong>', '—', '20,15 %', '5,84 %', '<strong>−1,64 %</strong>']])}
        ${table(['Situación', 'Qué pasa con el IPC', 'Qué pasa con la inflación', 'En el ejemplo'], [['Inflación', 'Sube', 'Positiva', '2001 y 2002'], ['<strong>Desinflación</strong>', 'Sigue subiendo, pero menos', 'Positiva y decreciente', 'De 2001 a 2002: la inflación cae de 20,15 % a 5,84 %'], ['<strong>Deflación</strong>', 'Baja', 'Negativa', '2003']])}
        ${note('Por eso “es posible que aumente el IPC pero descienda la inflación” es <strong>verdadero</strong> (Blanco 11.5.2), y “si el IPC aumenta, la inflación aumenta” es falso: si el IPC aumenta, lo único seguro es que <strong>hay</strong> inflación (Blanco 11.6.12). Del mismo modo, “si hay inflación es imposible que baje el precio de algún bien” es <strong>falso</strong> (Blanco 11.5.4, tomado en el 2do parcial 2024): la inflación es la suba del nivel <em>general</em>, y algunos precios pueden bajar.', 'exam')}
        <h2>Deflación e hiperinflación</h2>
        <ul>
          <li><strong>Deflación</strong>: baja sostenida del nivel general de precios. Parece buena, pero Keynes advertía que “retarda la producción de la riqueza”: si se espera que todo esté más barato mañana, se posterga comprar e invertir, las deudas pesan más en términos reales y caen la producción y el empleo.</li>
          <li><strong>Hiperinflación</strong>: inflación descontrolada, que Mankiw ubica en más del 50 % <em>mensual</em>. La gente se deshace del dinero apenas lo cobra, así que la velocidad de circulación se dispara (Blanco 14.5.15). La Argentina la vivió en 1989 y 1990.</li>
          <li>El PIB nominal creciendo más que el real implica que el deflactor sube: <strong>hay inflación</strong> (Blanco 11.5.5, tomado en el 2do parcial 2024: verdadero).</li>
        </ul>
        <h2>Los costos de la inflación</h2>
        <p>Un error común es creer que la inflación empobrece a todos por igual: si los precios suben, también suben los ingresos nominales de quien vende esos bienes. Los costos reales son otros (Mankiw, cap. 30), y existen <strong>aunque la inflación sea esperada</strong>:</p>
        ${table(['Costo', 'En qué consiste'], [
          ['<strong>Suela de zapatos</strong>', 'Para no perder poder de compra se tiene menos efectivo: más idas al banco, más tiempo y esfuerzo gastados en administrar el dinero'],
          ['<strong>Costos de menú</strong>', 'Remarcar precios, reimprimir listas y catálogos, renegociar contratos'],
          ['<strong>Variabilidad de los precios relativos</strong>', 'Los precios no se ajustan todos juntos: las señales se confunden y los recursos se asignan mal'],
          ['<strong>Distorsiones fiscales</strong>', 'Los impuestos sobre ganancias nominales gravan subas que son solo inflación; sin actualización, la recaudación crece (las diapositivas lo listan como efecto)'],
          ['<strong>Confusión</strong>', 'El dinero falla como unidad de cuenta: comparar precios y calcular ganancias en el tiempo se vuelve difícil'],
          ['<strong>Redistribución arbitraria</strong> (si es inesperada)', 'Pasa riqueza de acreedores a deudores y de quienes tienen ingresos fijos al resto, sin que nadie lo decida'],
        ])}
        <h2>La respuesta del parcial, en limpio</h2>
        <ol>
          <li><strong>Definición</strong>: proceso de suba continuada del nivel general de precios: proceso, persistencia, generalidad.</li>
          <li><strong>Formas de calcularla</strong>: tasa de variación del IPC (INDEC, canasta de la ENGHo) o del deflactor del PIB: π = (I<sub>t</sub> − I<sub>t−1</sub>) / I<sub>t−1</sub> × 100.</li>
          <li><strong>Diferencias</strong>: la tabla IPC/deflactor de arriba (bienes de consumo frente a toda la producción, importados, bienes de inversión, ponderaciones fijas o variables). Y el IPC no es el costo de vida de cada familia.</li>
          <li><strong>Causas</strong>: de demanda, de costos, autoconstruida (expectativas) y monetaria (emisión, M·V = P·Y), con los gráficos de oferta y demanda agregada.</li>
          <li><strong>Consecuencias</strong>: los seis efectos de la cátedra (redistribución acreedor-deudor e ilusión monetaria, rentas fijas, recaudación, precios relativos, incertidumbre y costo del dinero, desaliento de la inversión) más el impuesto inflacionario.</li>
          <li><strong>Ganadores y perdedores</strong>: ganan los deudores a tasa fija y el Estado (señoreaje, recaudación); pierden acreedores, asalariados y jubilados con ajustes rezagados y quienes ahorran en efectivo.</li>
        </ol>`,
      quiz: [
        { q: 'El IPC se calcula como una media ponderada del precio de todos los bienes.', o: ['Verdadero', 'Falso'], a: 1, e: 'Solo de los bienes de consumo final de la canasta.', src: 'Blanco 11.5.1', exam: ['2p-2024-3k3#3'] },
        { q: 'Si hay inflación, es imposible que descienda el precio de algún bien.', o: ['Verdadero', 'Falso'], a: 1, e: 'Sube el nivel general; precios particulares pueden bajar.', src: 'Blanco 11.5.4', exam: ['2p-2024-3k3#3'] },
        { q: 'Si el PIB nominal crece más que el PIB real, podemos afirmar que hay inflación.', o: ['Verdadero', 'Falso'], a: 0, e: 'El deflactor sube.', src: 'Blanco 11.5.5', exam: ['2p-2024-3k3#3'] },
        { q: 'Es posible que aumente el IPC pero descienda la inflación.', o: ['Verdadero', 'Falso'], a: 0, e: 'Desinflación: los precios suben, pero cada vez menos.', src: 'Blanco 11.5.2' },
        { q: 'Una diferencia importante entre el IPC y el deflactor del PIB es que…', o: ['el IPC mide precios y el deflactor producción', 'el IPC mide la inflación y el deflactor la deflación', 'el IPC incluye bienes intermedios y el deflactor no', 'el deflactor incluye el precio de los bienes de inversión y el IPC no'], a: 3, e: 'El deflactor abarca toda la producción final del país.', src: 'Blanco 11.6.6' },
        { q: 'El deflactor del PIB valía 500 y la inflación del año siguiente fue del 5 %. El deflactor pasó a valer…', o: ['495', '505', '510', '525'], a: 3, e: '500 × 1,05.', src: 'Blanco 11.6.3' },
        { q: 'El salario medio pasó de 20.000 a 21.000 y el IPC de 400 a 420. El poder adquisitivo…', o: ['aumentó', 'disminuyó', 'permaneció constante', 'varió de forma indeterminada'], a: 2, e: 'Los dos subieron 5 %.', src: 'Blanco 11.6.5' },
        { q: '¿Cuál es un costo de la inflación aun cuando es perfectamente esperada?', o: ['La redistribución de acreedores a deudores', 'Los costos de suela de zapatos y de menú', 'Que todos pierden poder de compra', 'Ninguno'], a: 1, e: 'La redistribución arbitraria ocurre cuando es inesperada.' },
        { q: 'Con el IPC de Blanco 11.8.1 (120,15 en 2001; 127,17 en 2002; 125,08 en 2003), en 2003 hubo…', o: ['inflación creciente', 'desinflación', 'deflación', 'hiperinflación'], a: 2, e: 'El índice bajó: inflación de −1,64 %.' },
      ],
      sources: [
        { title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 11 (11.3.2 a 11.3.7 y ejercicios 11.5 a 11.8)', points: ['IPC y deflactor del PIB: diferencias; índices de Laspeyres convencional y encadenado.', 'Crecimiento del IPC frente a crecimiento de la inflación.', 'Efectos de la inflación; magnitudes reales.'] },
        { title: 'Principios de Economía', ref: 'Mankiw, caps. 24 y 30', points: ['Medición del costo de la vida; costos de la inflación: suela de zapatos, menú, precios relativos, distorsiones fiscales, confusión y redistribución arbitraria; hiperinflación.'] },
        { title: 'Diapositivas del Tema XIV', ref: 'Cátedra de Economía', points: ['Cita de Keynes sobre inflación y deflación; efectos negativos de la inflación.'] },
      ],
    },
  );
})();
