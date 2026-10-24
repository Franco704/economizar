/* Tema III: Escasez y costo de oportunidad. Diapositivas "TEMA III ESCASEZ Y COSTO DE OPORTUNIDAD", Blanco cap. 1, Mankiw caps. 1-3. TP 1 y TP 2. */
(() => {
  const { LESSONS, h } = window.GUIDE;
  const { note, def, table, chart, eq, frac, num, plot, fig, lab, flow } = h;
  // 1er parcial 2024: alimentos (tierra 9) y máquinas (capital 12) según el trabajo; 6 trabajadores en total
  const FA = [0, 3200, 5040, 6580, 7810, 9400, 10000], FM = [0, 1000, 2460, 3260, 4100, 4840, 5290];
  const P24 = FA.map((a, la) => [a, FM[6 - la]]);
  // Tramos de G (todo alimentos) hacia A (todo máquinas): máquinas ganadas, alimentos resignados y su cociente
  const CO24 = [5, 4, 3, 2, 1, 0].map((i) => {
    const [a0, m0] = P24[i + 1], [a1, m1] = P24[i];
    return [`${'ABCDEFG'[i + 1]} → ${'ABCDEFG'[i]}`, num(m1 - m0), num(a0 - a1), `<strong>${num((a0 - a1) / (m1 - m0))}</strong>`];
  });

  // TP 2, ejercicio 1: producción de A (tierra 9 fija) y de B (capital 12 fijo) según el trabajo asignado
  const TA = [0, 4500, 7200, 10800, 12600, 13500, 13950, 14175];
  const TB = [0, 450, 720, 1080, 1260, 1350, 1395, 1417.5];
  const TB2 = [0, 540, 864, 1296, 1512, 1620, 1674, 1701];
  const fppPts = (L, tb = TB) => Array.from({ length: L + 1 }, (_, la) => [TA[la], tb[L - la]]);
  const P6 = fppPts(6), P7 = fppPts(7), P4 = fppPts(4), P6t = fppPts(6, TB2);
  const fppB = (ka, kb, L) => (A) => kb * Math.sqrt(Math.max(0, L - A / ka));

  LESSONS.push(
    {
      id: 'escasez-y-eleccion',
      module: 't3',
      title: 'Necesidad, escasez y costo de oportunidad',
      keywords: 'necesidad escasez maslow elección costo de oportunidad renuncia alternativa individual social',
      tldr: 'Las necesidades son muchas y los recursos, escasos. La escasez obliga a elegir, y elegir es renunciar: <mark>el costo de oportunidad de una opción es el valor de la mejor alternativa a la que se renuncia</mark>.',
      goals: ['Definir necesidad, escasez, bien y servicio.', 'Explicar la cadena escasez → elección → costo de oportunidad.', 'Calcular un costo de oportunidad en un ejemplo cotidiano.'],
      body: `
        <h2>Necesidad y escasez</h2>
        ${def('Necesidad', 'Es la conciencia de la carencia de un bien, material o inmaterial, para la vida o para los fines que el individuo desea satisfacer.', 'Diapositivas del Tema III.')}
        ${def('Escasez', 'Existencia limitada de un bien o servicio que es necesario para satisfacer necesidades.', 'Diapositivas del Tema III.')}
        <p>La <strong>pirámide de Maslow</strong> ordena las necesidades de las más básicas a las más elevadas: fisiológicas (alimento, descanso), de seguridad, de afiliación (pertenencia, afecto), de reconocimiento y de autorrealización. Las necesidades crecen a medida que se satisfacen las anteriores: por eso nunca “alcanza”.</p>
        <p>La escasez existe a dos escalas:</p>
        <ul>
          <li><strong>Escasez individual</strong>: el ingreso y, sobre todo, el <strong>tiempo</strong> de cada persona son limitados. Un día tiene 24 horas aunque seas millonario.</li>
          <li><strong>Escasez social</strong>: un país tiene una cantidad limitada de trabajadores, tierra, capital y tecnología.</li>
        </ul>

        <h2>De la escasez al costo de oportunidad</h2>
        <ol class="flow"><li>Recursos escasos</li><li>Hay que elegir</li><li>Elegir es renunciar</li><li>Lo renunciado es el costo de oportunidad</li></ol>
        ${def('Costo de oportunidad', 'El costo de oportunidad de una opción es la mejor de las alternativas que existen para esa opción: la opción preferida rechazada. Es el precio que pagamos en términos de otro bien cuando elegimos una de las alternativas posibles.', 'Diapositivas del Tema III.')}
        <p>Dos detalles que suelen tomarse:</p>
        <ul>
          <li>Se cuenta <strong>solo la mejor</strong> alternativa rechazada, no todas sumadas. Si el sábado podías trabajar en una lavandería por $35 o cortar el pasto por $30 y te quedás estudiando, tu costo de oportunidad es $35, no $65.</li>
          <li>Incluye costos que no se pagan con dinero: el tiempo, el ocio, un ingreso que dejaste de cobrar.</li>
        </ul>
        <p>Blanco lo usa para comparar opciones: al valor de cada opción se le resta su costo de oportunidad. Con el vecino que ofrece $30 por cortar el pasto y la lavandería que ofrece $35:</p>
        ${table(['Opción', 'Ganancia', 'Costo de oportunidad', 'Valor neto'], [['A: cortar el pasto', '30', '35 (la lavandería)', '−5'], ['B: lavandería', '35', '30 (el pasto)', '+5']])}
        <p>Solo la mejor opción tiene valor neto positivo. Esa es la regla de la elección racional.</p>
        ${note('TP 1, ejercicio 2: explicá por qué la escasez lleva a la elección y esta al costo de oportunidad, con una decisión propia. Estructura recomendada: 1) cuál era el recurso escaso (tiempo, dinero); 2) cuáles eran las alternativas; 3) qué elegiste; 4) cuál era la mejor alternativa rechazada y cuánto valía. Y sí: las personas toman decisiones económicas todo el tiempo, aunque no involucren dinero.', 'exam')}`,
      quiz: [
        { q: '¿Cuál es el orden lógico correcto?', o: ['Elección → escasez → costo de oportunidad', 'Escasez → elección → costo de oportunidad', 'Costo de oportunidad → escasez → elección', 'Necesidad → precio → elección'], a: 1, e: 'Como los recursos son escasos hay que elegir, y al elegir se renuncia a algo.' },
        { q: 'Podés trabajar el sábado por $35, por $30 o quedarte a estudiar. Si estudiás, tu costo de oportunidad es…', o: ['$65', '$35', '$30', '$0, porque no pagaste nada'], a: 1, e: 'Solo cuenta la mejor alternativa rechazada.' },
        { q: 'El costo de oportunidad…', o: ['solo incluye el dinero pagado', 'incluye costos monetarios y no monetarios', 'es siempre igual al precio', 'no existe si algo es gratis para mí'], a: 1, e: 'El tiempo y los ingresos que dejás de ganar también cuentan.' },
        { q: 'La escasez individual más universal es la de…', o: ['tierra', 'tiempo', 'capital', 'tecnología'], a: 1, e: 'Todos tienen 24 horas por día.' },
        { q: 'Según Maslow, las necesidades más básicas son las…', o: ['de autorrealización', 'de reconocimiento', 'fisiológicas', 'de afiliación'], a: 2, e: 'Alimento, descanso, abrigo.' },
      ],
      sources: [{ title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 1', points: ['Escasez, elección y coste de oportunidad.', 'Ejemplo del césped y la lavandería: valor de cada opción = ganancia − coste de oportunidad.'] }],
    },

    {
      id: 'costos-explicitos-implicitos',
      module: 't3',
      title: 'Costos explícitos e implícitos: beneficio contable y económico',
      keywords: 'costo explícito implícito beneficio utilidad contable económica renta económica ingreso renunciado interés renunciado alquiler renunciado educación',
      tldr: 'Un costo <mark>explícito</mark> es dinero que efectivamente se paga; uno <mark>implícito</mark>, el valor de lo que se sacrifica sin pagar (el sueldo que dejás de cobrar, el interés que dejás de ganar). El contador resta solo los explícitos; el economista resta ambos.',
      goals: ['Clasificar costos en explícitos e implícitos.', 'Calcular beneficio contable y económico.', 'Resolver los ejercicios 5, 7 y 9 del TP 1.'],
      body: `
        <h2>Dos tipos de costos</h2>
        ${table(['Costos explícitos (requieren desembolso)', 'Costos implícitos (no requieren desembolso)'], [
          ['Alquiler pagado', 'Alquiler renunciado de un local propio que usás en tu negocio'],
          ['Intereses de préstamos', 'Interés renunciado del dinero propio que invertís'],
          ['Sueldos del personal', 'Ingreso renunciado por tu propio tiempo de trabajo'],
          ['Costo de los insumos', ''],
        ])}
        <p>El costo explícito puede ser solo una parte, a veces pequeña, del costo de oportunidad total. Estudiar en la universidad pública cuesta poco en dinero, pero mucho en tiempo: el <strong>ingreso renunciado</strong> por no trabajar a tiempo completo.</p>

        <h2>Utilidad contable y utilidad económica</h2>
        ${eq(`Utilidad contable = Ingreso total − Costos explícitos`, 'Contador')}
        ${eq(`Utilidad económica = Ingreso total − Costos explícitos − Costos implícitos`, 'Economista')}
        ${fig(`<svg viewBox="0 0 420 210" class="plot" role="img" aria-label="Barras: el ingreso total se reparte en costos explícitos y utilidad contable; la utilidad contable se reparte en costos implícitos y utilidad económica">
          <rect x="40" y="20" width="90" height="170" rx="6" fill="var(--c-ctme)" opacity=".85"/><text x="85" y="110" text-anchor="middle" class="pl-lbl" style="fill:#fff;stroke:none">Ingreso</text><text x="85" y="126" text-anchor="middle" class="pl-lbl" style="fill:#fff;stroke:none">total</text>
          <rect x="165" y="20" width="90" height="80" rx="6" fill="var(--c-s)" opacity=".8"/><text x="210" y="64" text-anchor="middle" class="pl-lbl" style="fill:#fff;stroke:none">explícitos</text>
          <rect x="165" y="104" width="90" height="86" rx="6" fill="var(--c-cvme)" opacity=".85"/><text x="210" y="142" text-anchor="middle" class="pl-lbl" style="fill:#fff;stroke:none">utilidad</text><text x="210" y="158" text-anchor="middle" class="pl-lbl" style="fill:#fff;stroke:none">contable</text>
          <rect x="290" y="20" width="90" height="80" rx="6" fill="var(--c-s)" opacity=".8"/><text x="335" y="64" text-anchor="middle" class="pl-lbl" style="fill:#fff;stroke:none">explícitos</text>
          <rect x="290" y="104" width="90" height="50" rx="6" fill="var(--c-eq)" opacity=".9"/><text x="335" y="133" text-anchor="middle" class="pl-lbl" style="fill:#fff;stroke:none">implícitos</text>
          <rect x="290" y="158" width="90" height="32" rx="6" fill="var(--c-cmg)" opacity=".85"/><text x="335" y="178" text-anchor="middle" class="pl-lbl" style="fill:#fff;stroke:none">económica</text>
          <text x="210" y="206" text-anchor="middle" class="pl-tick">contador</text><text x="335" y="206" text-anchor="middle" class="pl-tick">economista</text></svg>`, 'La utilidad económica siempre es menor o igual que la contable, porque además resta los costos implícitos.')}
        <p>Si la utilidad económica es <strong>positiva</strong>, la decisión fue conveniente: ganaste más que en tu mejor alternativa. Si es <strong>cero</strong>, ganás exactamente lo mismo que en la alternativa (beneficio “normal”). Si es <strong>negativa</strong>, te convenía la alternativa, aunque el contador muestre ganancias.</p>
        ${note('Mucha gente “gana plata” con un negocio propio y aun así pierde en términos económicos, porque no se cobra su propio sueldo ni el alquiler del local propio. Es exactamente la trampa del TP 1, ejercicio 9.', 'warn')}
        ${lab(0)}

        <h2>Renta económica (excedente)</h2>
        <p>Cuando una persona valora algo en más de lo que le cuesta (incluido el costo de oportunidad), la diferencia es su <strong>renta económica</strong> o excedente: lo que gana por encima de su mejor alternativa. Es la idea que pide el ejercicio 5 del TP 1.</p>
        ${eq(`Renta económica = Valoración − Costo económico (explícito + implícito)`)}`,
      labs: [
        {
          type: 'calc', title: 'Calculadora: ¿conviene el negocio propio?', intro: 'Cargada con los datos del TP 1, ejercicio 9 (valores anuales). Cambiá los números y mirá cómo se mueve la utilidad económica.',
          fields: [
            { id: 'it', label: 'Ingresos totales', value: 13000000 },
            { id: 'asis', label: 'Sueldo del asistente', value: 2500000 },
            { id: 'equip', label: 'Alquiler de equipos', value: 120000 },
            { id: 'serv', label: 'Luz y teléfono (anual)', value: 600000 },
            { id: 'sueldo', label: 'Sueldo que dejás (implícito)', value: 12000000 },
            { id: 'ahorro', label: 'Ahorro invertido', value: 300000 },
            { id: 'tasa', label: 'Tasa del ahorro (%)', value: 5 },
            { id: 'alq', label: 'Alquiler renunciado de la habitación (anual)', value: 120000 },
          ],
          run: (v) => {
            const exp = v.asis + v.equip + v.serv, imp = v.sueldo + (v.ahorro * v.tasa) / 100 + v.alq;
            const uc = v.it - exp, ue = uc - imp;
            return `Costos explícitos: ${num(exp)}\nCostos implícitos: ${num(imp)}\nUtilidad contable:  ${num(uc)}\nUtilidad económica: ${num(ue)}\n\n${ue > 0 ? '✔ Conviene: gana más que en su mejor alternativa.' : ue === 0 ? '= Beneficio normal: le da lo mismo.' : '✘ No conviene: le iba mejor en la oficina contable.'}`;
          },
        },
      ],
      exercises: [
        {
          official: '1.9', level: 2, title: 'El negocio propio',
          prompt: '<p>Usted trabajaba en una oficina contable con un sueldo anual de $12.000.000. Renuncia, liquida una cuenta de ahorros de $300.000 (pagaba 5 % anual) y compra equipos. Convierte una habitación que alquilaba a $10.000 por mes en local. Alquila equipos de oficina por $120.000 al año, contrata un asistente por $2.500.000 anuales y paga luz y teléfono por unos $50.000 al mes. Al terminar el año obtiene ingresos por $13.000.000. Determine: a) costos explícitos totales anuales; b) costos implícitos totales anuales; c) beneficio económico. ¿Fue conveniente la decisión?</p>',
          hints: ['Pasá todo a valores anuales: lo mensual se multiplica por 12.', 'La compra de equipos con el ahorro no es un gasto anual: lo que se pierde cada año es el interés que ese ahorro dejaba.', 'Implícitos: sueldo renunciado, interés renunciado y alquiler renunciado.'],
          solution: { explain: `
            ${table(['Concepto', 'Tipo', 'Monto anual'], [
              ['Sueldo del asistente', 'Explícito', '2.500.000'], ['Alquiler de equipos', 'Explícito', '120.000'], ['Luz y teléfono (50.000 × 12)', 'Explícito', '600.000'],
              ['<strong>a) Total explícitos</strong>', '', '<strong>3.220.000</strong>'],
              ['Sueldo renunciado', 'Implícito', '12.000.000'], ['Interés renunciado (5 % de 300.000)', 'Implícito', '15.000'], ['Alquiler renunciado (10.000 × 12)', 'Implícito', '120.000'],
              ['<strong>b) Total implícitos</strong>', '', '<strong>12.135.000</strong>'],
            ])}
            <p>Utilidad contable = 13.000.000 − 3.220.000 = <strong>9.780.000</strong>.</p>
            <p><strong>c)</strong> Utilidad económica = 9.780.000 − 12.135.000 = <strong>−2.355.000</strong>.</p>
            <p><strong>No fue conveniente.</strong> El contador ve una ganancia de casi 10 millones, pero el economista compara contra la mejor alternativa: seguir en la oficina contable, cobrar el alquiler de la habitación y los intereses. Esa alternativa le habría dejado 2.355.000 más. Los $300.000 de equipos no se suman como costo anual: el costo de oportunidad de inmovilizarlos es el interés que dejan de rendir.</p>` },
        },
        {
          official: '1.5', level: 2, title: 'El ingeniero y la final de la Libertadores',
          prompt: '<p>Un ingeniero gana $300.000 por día de trabajo. Le ofrecen ir a la final de la Libertadores: cuesta $2.000.000 en total (viajes, entradas, alojamiento y comidas) y le ocupa 3 días. Valora la experiencia en $3.200.000. Calcule: el costo de oportunidad de asistir; el costo económico de asistir; la renta económica de esos días; y cuánto hubiera estado dispuesto a pagar como máximo.</p>',
          hints: ['El costo de oportunidad de los 3 días es lo que deja de ganar trabajando.', 'Costo económico = explícito + implícito.', 'Lo máximo que pagaría en gastos es lo que la deja indiferente: valoración − ingreso renunciado.'],
          solution: { explain: `
            <ul>
              <li><strong>Costo de oportunidad del tiempo</strong> (implícito): 3 días × 300.000 = <strong>900.000</strong>.</li>
              <li><strong>Costo económico</strong> = explícito + implícito = 2.000.000 + 900.000 = <strong>2.900.000</strong>.</li>
              <li><strong>Renta económica</strong> = valoración − costo económico = 3.200.000 − 2.900.000 = <strong>300.000</strong>. Como es positiva, le conviene ir.</li>
              <li><strong>Máximo dispuesto a pagar</strong> en gastos: 3.200.000 − 900.000 = <strong>2.300.000</strong>. Si el viaje costara más, la renta sería negativa y le convendría quedarse trabajando.</li>
            </ul>
            ${note('Si en el parcial te piden “costo de oportunidad de asistir” en sentido amplio, es el costo económico total (2.900.000): todo aquello a lo que renuncia por ir, en dinero y en tiempo. Aclará qué estás calculando.', 'tip')}` },
        },
        {
          official: '1.7', level: 1, title: 'El enfoque económico de la educación',
          prompt: '<p>A partir del párrafo de Blanco “¿Cuál es el enfoque económico de la educación?”, responda: a) ¿Estudiar en la universidad tiene costos implícitos? ¿El mayor sacrificio es de tiempo? ¿Cuánto vale ese tiempo? ¿Cuál sería el ingreso renunciado? b) ¿Deben incluirse en los beneficios las satisfacciones intelectuales, emocionales o de reconocimiento social? c) ¿Buena parte de los ingresos adicionales se posponen varios años, con lo que se reduce su valor actual?</p>',
          hints: ['Blanco: “el coste de oportunidad de los años dedicados a estudiar en la universidad es el salario que podría obtenerse trabajando durante esos años”.'],
          solution: { explain: `
            <p><strong>a)</strong> Sí. Además de los explícitos (apuntes, transporte, materiales; la matrícula en la UTN es gratuita), el mayor costo es implícito: el <strong>tiempo</strong>. Vale lo que se podría ganar trabajando esas horas; ese salario es el <strong>ingreso renunciado</strong>. Quien estudia y trabaja también lo paga, en forma de ocio y descanso renunciados.</p>
            <p><strong>b)</strong> Sí, si se quiere medir el beneficio completo. El enfoque económico compara costos y beneficios de la opción, y una satisfacción no monetaria también es beneficio. Omitirla subestima el valor de estudiar.</p>
            <p><strong>c)</strong> Sí. Los mayores ingresos llegan después de recibirse, y un peso futuro vale menos que un peso hoy (podría invertirse y rendir intereses). Por eso al comparar se descuentan los ingresos futuros, lo que reduce su valor actual. Aun así, en promedio los graduados universitarios ganan más, y los estudiantes responden a ese incentivo eligiendo carreras con mejores perspectivas.</p>` },
        },
      ],
      quiz: [
        { q: '¿Cuál es un costo implícito?', o: ['El sueldo que le pagás a un empleado', 'El alquiler que pagás por un local', 'El sueldo que dejás de cobrar por dedicarte a tu negocio', 'La factura de luz'], a: 2, e: 'No hay desembolso, pero sí sacrificio.' },
        { q: 'Un negocio tiene IT = 100, costos explícitos = 60 e implícitos = 50. ¿Cuál es la utilidad económica?', o: ['40', '−10', '50', '−50'], a: 1, e: 'Contable: 100 − 60 = 40. Económica: 40 − 50 = −10.' },
        { q: 'Si la utilidad económica es negativa pero la contable es positiva…', o: ['el negocio conviene', 'la mejor alternativa rendía más que el negocio', 'hay un error de cálculo', 'el Estado debe intervenir'], a: 1, e: 'El negocio da ganancias contables, pero menos que la mejor alternativa.' },
        { q: 'Utilidad económica igual a cero significa que…', o: ['el negocio quiebra', 'se gana exactamente lo mismo que en la mejor alternativa', 'no hay ingresos', 'no hay costos implícitos'], a: 1, e: 'Es el beneficio “normal”.' },
        { q: 'Tenés $300.000 ahorrados al 5 % anual y los usás para comprar equipos. ¿Cuál es el costo implícito anual?', o: ['$300.000', '$15.000', '$285.000', '$0'], a: 1, e: 'El interés que dejás de ganar: 5 % de 300.000.' },
        { q: 'La renta económica de una decisión es…', o: ['lo que se paga de alquiler', 'la diferencia entre la valoración y el costo económico total', 'el ingreso total', 'el costo explícito'], a: 1, e: 'Lo que se gana por encima de la mejor alternativa.' },
      ],
      sources: [
        { title: 'Diapositivas del Tema III', ref: 'Cátedra de Economía', points: ['Costo explícito: dinero efectivamente pagado. Implícito: valor de lo que se sacrifica sin pago directo.', 'Utilidad económica versus contable.'] },
        { title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 1', points: ['Enfoque económico de la educación: recursos escasos, capital humano, ingreso renunciado.'] },
      ],
    },

    {
      id: 'ventaja-comparativa',
      module: 't3',
      title: 'Especialización, ventaja absoluta y comparativa',
      keywords: 'especialización intercambio ventaja absoluta comparativa adam smith ricardo inglaterra portugal tela vino horas',
      tldr: 'Tener <mark>ventaja absoluta</mark> es producir algo con menos recursos; tener <mark>ventaja comparativa</mark>, producirlo con menor costo de oportunidad. Aunque un país sea mejor en todo, ambos ganan si cada uno se especializa en lo que tiene ventaja comparativa e intercambian.',
      goals: ['Explicar por qué la especialización aumenta la producción.', 'Distinguir ventaja absoluta de comparativa.', 'Resolver el problema de Inglaterra y Portugal del TP 1.'],
      body: `
        <h2>Por qué conviene especializarse</h2>
        <p><strong>Especialización</strong>: cada persona se concentra en un número limitado de actividades. <strong>Intercambio</strong>: comerciar con otros para obtener lo que deseamos. Juntos permiten más producción y niveles de vida más altos. Sus ventajas vienen de tres fuentes:</p>
        <ol>
          <li>Las capacidades humanas son limitadas: conviene ser experto en pocas cosas y no aficionado en muchas.</li>
          <li>Se reduce el “tiempo inoperante” de cambiar de una actividad a otra (el ejemplo de la fábrica de alfileres de Adam Smith).</li>
          <li>Las personas, tierras y máquinas no son igualmente aptas para todo: de ahí surge la <strong>ventaja comparativa</strong>.</li>
        </ol>
        <h2>Absoluta y comparativa</h2>
        ${table(['', 'Ventaja absoluta', 'Ventaja comparativa'], [
          ['Definición', 'Producir un bien consumiendo <strong>menos recursos</strong> que otro', 'Producir un bien con <strong>menor costo de oportunidad</strong> que otro'],
          ['Se compara', 'Horas (o recursos) por unidad', 'Cuánto de otro bien se sacrifica por unidad'],
          ['¿Puede tenerla en todo un mismo país?', 'Sí', 'No: si la tiene en un bien, el otro la tiene en el otro'],
        ])}
        ${note('La producción total es máxima cuando cada uno se especializa según su <strong>ventaja comparativa</strong>, no según la absoluta. Es la razón de fondo del comercio internacional (David Ricardo).', 'exam')}
        <h2>El ejemplo de Ricardo: Inglaterra y Portugal (TP 1, ejercicio 6)</h2>
        ${table(['Horas de trabajo', 'Tela (por metro)', 'Vino (por litro)'], [
          ['Inglaterra', '16 h / 200 m = <strong>0,08</strong>', '14 h / 100 L = <strong>0,14</strong>'],
          ['Portugal', '34 h / 200 m = <strong>0,17</strong>', '16 h / 100 L = <strong>0,16</strong>'],
        ])}
        <p>Inglaterra necesita menos horas para ambos bienes: tiene <strong>ventaja absoluta en los dos</strong>. Pero mirá los costos de oportunidad:</p>
        ${table(['Costo de oportunidad', 'De 1 m de tela (en litros de vino)', 'De 1 L de vino (en metros de tela)'], [
          ['Inglaterra', '0,08 / 0,14 = <strong>0,57 L</strong>', '0,14 / 0,08 = 1,75 m'],
          ['Portugal', '0,17 / 0,16 = 1,06 L', '0,16 / 0,17 = <strong>0,94 m</strong>'],
        ])}
        <p>A Inglaterra la tela le “cuesta” menos vino: ventaja comparativa en <strong>tela</strong>. A Portugal el vino le cuesta menos tela: ventaja comparativa en <strong>vino</strong>.</p>
        ${lab(0)}
        <h2>¿Exportar o importar?</h2>
        <p>Un país <strong>exporta</strong> el bien en el que tiene ventaja comparativa e <strong>importa</strong> aquel en el que no la tiene. Inglaterra exporta tela e importa vino; Portugal, al revés. El comercio conviene a los dos si el precio del intercambio queda <strong>entre</strong> los dos costos de oportunidad: por ejemplo, 1 m de tela por 0,8 L de vino. Inglaterra recibe 0,8 L por algo que le cuesta 0,57 L; Portugal consigue la tela a 0,8 L cuando producirla le costaría 1,06 L.</p>
        ${note('Pregunta del 1er parcial 2023: “Si un país tiene ventaja comparativa para producir un bien, ¿tendería a exportarlo o importarlo?”. Respuesta: <strong>exportarlo</strong>, porque lo produce con menor costo de oportunidad que sus socios; con lo que obtiene a cambio importa lo que a él le costaría más producir. Con comercio, ambos países pueden consumir combinaciones que quedan <em>fuera</em> de su propia FPP (Mankiw, cap. 3).', 'exam')}`,
      labs: [
        {
          type: 'calc', title: 'Calculadora: ¿cuántas horas se ahorran especializándose?', intro: 'Horas por unidad y consumos del TP 1, ejercicio 6. Probá cambiarlos.',
          fields: [
            { id: 'it', label: 'Inglaterra: h por m de tela', value: 0.08 }, { id: 'iv', label: 'Inglaterra: h por L de vino', value: 0.14 },
            { id: 'pt', label: 'Portugal: h por m de tela', value: 0.17 }, { id: 'pv', label: 'Portugal: h por L de vino', value: 0.16 },
            { id: 'ct1', label: 'Consumo de tela en Inglaterra (m)', value: 160000 }, { id: 'cv1', label: 'Consumo de vino en Inglaterra (L)', value: 20000 },
            { id: 'ct2', label: 'Consumo de tela en Portugal (m)', value: 120000 }, { id: 'cv2', label: 'Consumo de vino en Portugal (L)', value: 16000 },
          ],
          run: (v) => {
            const hi = v.ct1 * v.it + v.cv1 * v.iv, hp = v.ct2 * v.pt + v.cv2 * v.pv;
            const telaI = v.it / v.iv < v.pt / v.pv; // Inglaterra tiene ventaja comparativa en tela
            const T = v.ct1 + v.ct2, V = v.cv1 + v.cv2;
            const si = telaI ? T * v.it : V * v.iv, sp = telaI ? V * v.pv : T * v.pt;
            return `Sin intercambio:\n  Inglaterra ${num(hi)} h · Portugal ${num(hp)} h · Total ${num(hi + hp)} h\n\nVentaja comparativa: Inglaterra en ${telaI ? 'tela' : 'vino'}, Portugal en ${telaI ? 'vino' : 'tela'}\n\nCon especialización completa:\n  Inglaterra ${num(si)} h · Portugal ${num(sp)} h · Total ${num(si + sp)} h\n\nAhorro: ${num(hi + hp - si - sp)} horas (${num(((hi + hp - si - sp) / (hi + hp)) * 100, 1)} %)`;
          },
        },
      ],
      exercises: [
        {
          official: '1.6', level: 3, title: 'Inglaterra y Portugal: horas y costos',
          prompt: '<p>En Inglaterra producir 200 m de tela cuesta 16 horas y 100 L de vino, 14 horas. En Portugal, 34 y 16 horas. Inglaterra consume 160.000 m de tela y 20.000 L de vino; Portugal, 120.000 m y 16.000 L. a) Sin intercambio, ¿cuál es el costo total en horas de cada país? b) Si cada país se especializa en lo que mejor sabe hacer, ¿cuántas horas se necesitan? c) Calcule los costos monetarios con 9 £/h en Inglaterra, 10 €/h en Portugal y 1 £ = 0,89 €.</p>',
          hints: ['Pasá todo a horas por unidad: 0,08 y 0,14 en Inglaterra; 0,17 y 0,16 en Portugal.', '“Lo que mejor sabe hacer” se decide por ventaja comparativa.', 'Para sumar, convertí las libras a euros: × 0,89.'],
          solution: { explain: `
            <p><strong>a) Sin intercambio</strong> (cada país produce lo que consume):</p>
            ${table(['', 'Tela', 'Vino', 'Total'], [
              ['Inglaterra', '160.000 × 0,08 = 12.800 h', '20.000 × 0,14 = 2.800 h', '<strong>15.600 h</strong>'],
              ['Portugal', '120.000 × 0,17 = 20.400 h', '16.000 × 0,16 = 2.560 h', '<strong>22.960 h</strong>'],
              ['', '', '', '<strong>38.560 h</strong>'],
            ])}
            <p><strong>b) Con especialización</strong> según ventaja comparativa: Inglaterra produce toda la tela (280.000 m) y Portugal todo el vino (36.000 L).</p>
            ${table(['', 'Producción', 'Horas'], [['Inglaterra', '280.000 m × 0,08', '22.400 h'], ['Portugal', '36.000 L × 0,16', '5.760 h'], ['Total', '', '<strong>28.160 h</strong>']])}
            <p>Se ahorran <strong>10.400 horas</strong> (27 %) produciendo exactamente lo mismo.</p>
            <p><strong>c) En dinero</strong> (1 £ = 0,89 €):</p>
            ${table(['', 'Sin intercambio', 'Con especialización'], [
              ['Inglaterra', '15.600 × 9 = 140.400 £ = 124.956 €', '22.400 × 9 = 201.600 £ = 179.424 €'],
              ['Portugal', '22.960 × 10 = 229.600 €', '5.760 × 10 = 57.600 €'],
              ['Total', '<strong>354.556 €</strong>', '<strong>237.024 €</strong>'],
            ])}
            <p>El costo total cae en 117.532 €. Inglaterra trabaja más horas, pero puede cambiar parte de su tela por el vino portugués y, con un buen precio de intercambio, ambos países terminan mejor.</p>` },
        },
      ],
      quiz: [
        { q: 'Un país tiene ventaja comparativa en un bien cuando…', o: ['lo produce con menos horas', 'lo produce con menor costo de oportunidad', 'lo exporta más barato', 'tiene más trabajadores'], a: 1, e: 'Menos horas es ventaja absoluta.' },
        { q: 'En el ejemplo de Ricardo, Inglaterra tiene ventaja absoluta en…', o: ['solo tela', 'solo vino', 'ambos bienes', 'ninguno'], a: 2, e: 'Necesita menos horas para los dos (0,08 < 0,17 y 0,14 < 0,16).' },
        { q: '¿Puede un país tener ventaja comparativa en los dos bienes a la vez?', o: ['Sí, si es más productivo en ambos', 'No, si tiene menor costo de oportunidad en uno, tiene mayor en el otro', 'Sí, siempre', 'Depende del tipo de cambio'], a: 1, e: 'Los costos de oportunidad son recíprocos.' },
        { q: 'Si Ana tarda 2 h en un informe y 1 h en un plano, el costo de oportunidad de un informe es…', o: ['2 planos', '0,5 planos', '3 horas', '1 plano'], a: 0, e: 'En 2 horas podría hacer 2 planos.' },
        { q: '¿Cuál NO es una fuente de ventajas de la especialización según la cátedra?', o: ['Capacidades humanas limitadas', 'Menor tiempo inoperante', 'Diferencias individuales (ventaja comparativa)', 'Precios fijados por el Estado'], a: 3, e: 'Las tres primeras son las de la diapositiva.' },
      ],
      sources: [{ title: 'Principios de Economía', ref: 'Mankiw, cap. 3', points: ['Ventaja absoluta y comparativa; el comercio beneficia a ambas partes.'] }],
    },

    {
      id: 'frontera-posibilidades',
      module: 't3',
      title: 'La frontera de posibilidades de producción',
      keywords: 'fpp frontera posibilidades producción eficiente ineficiente accesible inaccesible costo de oportunidad creciente concavidad rendimientos decrecientes pendiente',
      tldr: 'La FPP muestra las <mark>combinaciones máximas de dos bienes</mark> que un país puede producir con sus factores y su tecnología. Sobre ella están los puntos eficientes, dentro los ineficientes y fuera los inaccesibles. Es cóncava porque el costo de oportunidad es creciente.',
      goals: ['Construir una FPP a partir de una tabla o de funciones de producción.', 'Clasificar puntos en eficientes, ineficientes e inaccesibles.', 'Calcular el costo de oportunidad como pendiente.', 'Explicar la concavidad.'],
      body: `
        <h2>Qué es la FPP</h2>
        ${def('Frontera de posibilidades de producción', 'Modelo que indica las combinaciones de cantidades máximas de bienes que puede producir una sociedad con unos factores y una tecnología dados. Con dos bienes se representa como una curva cóncava hacia el origen que separa las combinaciones inaccesibles (a la derecha de la frontera) de las accesibles (sobre ella o a su izquierda).', 'Diapositivas del Tema III, a partir de Blanco, cap. 1.')}
        <p><strong>Supuestos</strong>: pleno empleo y eficiencia productiva; recursos fijos en cantidad y calidad pero reasignables; tecnología fija (por eso vale para períodos cortos); solo dos bienes.</p>
        ${chart({ x: [0, 160], y: [0, 160], xl: 'Vestidos', yl: 'Alimentos', alt: 'FPP cóncava con puntos eficientes, ineficiente e inaccesible',
          areas: [{ pts: [[0, 0], ...Array.from({ length: 41 }, (_, i) => [i * 3.5, 150 * Math.sqrt(1 - ((i * 3.5) / 140) ** 2)]), [140, 0]], cls: 'a-fpp' }],
          curves: [{ f: (x) => 150 * Math.sqrt(Math.max(0, 1 - (x / 140) ** 2)), dom: [0, 140], cls: 'c-fpp', label: 'FPP' }],
          points: [{ x: 0, y: 150, label: 'A', cls: 'c-ok' }, { x: 70, y: 130, label: 'B (eficiente)', cls: 'c-ok' }, { x: 120, y: 77, label: 'C (eficiente)', cls: 'c-ok' }, { x: 50, y: 60, label: 'D (ineficiente)', cls: 'c-warn' }, { x: 120, y: 130, label: 'E (inaccesible)', cls: 'c-err' }] },
          'Sobre la frontera (A, B, C) se usan todos los recursos con la mejor tecnología. En D hay recursos ociosos o mal usados (desempleo, recesión). E no se puede alcanzar con los recursos actuales.')}
        <ul>
          <li><strong>Eficientes</strong>: sobre la frontera. No se puede producir más de un bien sin producir menos del otro.</li>
          <li><strong>Ineficientes</strong>: debajo. Se podría producir más de al menos un bien sin sacrificar el otro. Ejemplos: recesiones, capacidad ociosa. (Estados Unidos en la Segunda Guerra Mundial aumentó la producción de armas <em>y</em> de bienes de consumo porque partía de un punto interior tras la Gran Depresión.)</li>
          <li><strong>Inaccesibles</strong>: por encima. Imposibles hoy; quizás alcanzables con crecimiento.</li>
        </ul>

        <h2>El costo de oportunidad es la pendiente</h2>
        <p>Moverse por la frontera obliga a resignar un bien para tener más del otro. El costo de oportunidad entre dos puntos es:</p>
        ${eq(`CO = ${frac('ΔY', 'ΔX')} = ${frac('Y<sub>2</sub> − Y<sub>1</sub>', 'X<sub>2</sub> − X<sub>1</sub>')}`, 'Costo de oportunidad')}
        <p>Ejemplo de la diapositiva: al pasar de A (0 vestidos; 150 alimentos) a B (10; 140), CO = |140 − 150| / (10 − 0) = <strong>1 alimento por vestido</strong>. Se toma en valor absoluto: “cuánto de Y se resigna por cada unidad de X”.</p>
        <p>Si la FPP está dada por una función B = f(A), el costo de oportunidad de una unidad infinitesimal de A es el valor absoluto de la <strong>derivada</strong>: |dB/dA|.</p>

        <h2>Por qué es cóncava: costo de oportunidad creciente</h2>
        <p>A medida que producimos más de un bien, cada unidad adicional cuesta cada vez más del otro. Dos razones:</p>
        <ol>
          <li><strong>Ley de rendimientos decrecientes</strong>: a partir de cierto momento, al añadir dosis iguales de un factor a una cantidad fija de otro, los aumentos de producción son cada vez menores. Los factores variables tienen cada vez menos factor fijo con el que trabajar.</li>
          <li><strong>Factores heterogéneos</strong>: los recursos no son igualmente aptos para todo. Al principio pasamos a vestidos los recursos que menos sirven para alimentos; al final hay que sacar de los alimentos a los mejores agricultores.</li>
        </ol>
        ${note('Si la FPP fuera una recta, el costo de oportunidad sería <strong>constante</strong> (factores perfectamente adaptables). La cátedra trabaja con la cóncava.', 'tip')}

        <h2>Laboratorio</h2>
        <p>Esta FPP sale del TP 2, ejercicio 4: A = 9·L<sub>A</sub>, B = 18·√L<sub>B</sub> con 49 unidades de trabajo. Mové la producción de A y mirá cómo crece el costo de oportunidad (la pendiente de la tangente). Después ubicá un punto Q y clasificalo.</p>
        ${lab(0)}`,
      labs: [{ type: 'fpp', title: 'La FPP del TP 2: puntos, pendiente y desplazamientos', ka: 9, kb: 18, L: 49, an: 'A', bn: 'B', zoom: 1.45 }],
      exercises: [
        {
          official: '2.1', level: 2, title: 'FPP a partir de una tabla',
          prompt: '<p>Un país tiene Tierra = 9, Capital = 12 y Trabajo = 6. Produce A (con la tierra y trabajo) y B (con el capital y trabajo):</p>' + table(['Trabajo', '0', '1', '2', '3', '4', '5', '6', '7'], [['Bien A', ...TA.map((x) => num(x))], ['Bien B', ...TB.map((x) => num(x))]]) + '<p>a) Obtenga los puntos de la FPP y grafíquela. b) Señale una combinación inaccesible y otra accesible. c) Una eficiente y otra ineficiente.</p>',
          hints: ['El trabajo total es 6: si A usa L<sub>A</sub>, B usa 6 − L<sub>A</sub>.', 'Armá 7 puntos: (A con 0 trabajadores; B con 6), (A con 1; B con 5)…'],
          solution: { explain: `
            ${table(['L<sub>A</sub>', 'L<sub>B</sub>', 'A', 'B'], P6.map(([a, b], i) => [i, 6 - i, num(a), num(b)]))}
            ${chart({ x: [0, 15500], y: [0, 1600], xl: 'A', yl: 'B', curves: [{ pts: P6, cls: 'c-fpp', label: 'FPP' }], points: [...P6.map(([x, y]) => ({ x, y, cls: 'c-fpp', r: 3.5 })), { x: 10800, y: 1080, cls: 'c-ok', label: 'eficiente', pos: 'e' }, { x: 6000, y: 700, cls: 'c-warn', label: 'ineficiente' }, { x: 12600, y: 1300, cls: 'c-err', label: 'inaccesible' }] }, 'FPP del TP 2, ejercicio 1, con los 7 puntos de la tabla.')}
            <p><strong>b)</strong> Inaccesible: (12.600; 1.300), porque con 4 trabajadores en A solo quedan 2 para B, que producen 720. Accesible: (6.000; 700).</p>
            <p><strong>c)</strong> Eficiente: cualquier punto de la tabla, por ejemplo (10.800; 1.080). Ineficiente: (6.000; 700), que está debajo de la frontera.</p>` },
        },
        {
          official: '2.4', level: 3, title: 'FPP con funciones de producción',
          prompt: '<p>Un país tiene 49 unidades de trabajo. A = 9·L y B = 18·√L. a) Máximos de A y de B. b) Expresión de la FPP y gráfico. c) Costo de oportunidad de una unidad infinitesimal adicional de A en i) A = 39 y ii) A = 120. d) El trabajo sube a 64: nueva FPP. e) Con 49 de trabajo, A = 12·L: nueva FPP. f) Con 49, A = 12·L y B = 24·√L: nueva FPP.</p>',
          hints: ['L<sub>A</sub> = A/9 y L<sub>B</sub> = 49 − A/9.', 'Derivá B respecto de A y tomá valor absoluto.'],
          solution: { explain: `
            <p><strong>a)</strong> A<sub>máx</sub> = 9 × 49 = <strong>441</strong>; B<sub>máx</sub> = 18 × √49 = <strong>126</strong>.</p>
            <p><strong>b)</strong> Como L<sub>B</sub> = 49 − A/9: <strong>B = 18·√(49 − A/9)</strong>. Es cóncava.</p>
            <p><strong>c)</strong> ${frac('dB', 'dA')} = 18 · ${frac('1', '2√(49 − A/9)')} · (−${frac('1', '9')}) = −${frac('1', '√(49 − A/9)')}</p>
            <ul><li>A = 39: √(49 − 4,33) = 6,68 → CO = <strong>0,150</strong> unidades de B por unidad de A.</li><li>A = 120: √(49 − 13,33) = 5,97 → CO = <strong>0,167</strong>. Es mayor: el costo de oportunidad crece.</li></ul>
            <p><strong>d)</strong> B = 18·√(64 − A/9): A<sub>máx</sub> = 576, B<sub>máx</sub> = 144. Desplazamiento <strong>paralelo hacia afuera</strong> (crece en ambos ejes).</p>
            <p><strong>e)</strong> B = 18·√(49 − A/12): A<sub>máx</sub> = 588, B<sub>máx</sub> = 126. <strong>Rota hacia afuera sobre el eje A</strong>; la intersección en B no cambia.</p>
            <p><strong>f)</strong> B = 24·√(49 − A/12): A<sub>máx</sub> = 588, B<sub>máx</sub> = 168. Se expande en ambos ejes.</p>
            ${chart({ x: [0, 620], y: [0, 180], xl: 'A', yl: 'B', curves: [
              { f: fppB(9, 18, 49), dom: [0, 441], cls: 'c-fpp', label: 'b' }, { f: fppB(9, 18, 64), dom: [0, 576], cls: 'c-d', label: 'd' },
              { f: fppB(12, 18, 49), dom: [0, 588], cls: 'c-s', dash: true, label: 'e' }, { f: fppB(12, 24, 49), dom: [0, 588], cls: 'c-cmg', label: 'f' }],
              points: [{ x: 39, y: fppB(9, 18, 49)(39), cls: 'c-eq', label: 'i' }, { x: 120, y: fppB(9, 18, 49)(120), cls: 'c-eq', label: 'ii' }] }, 'Las cuatro fronteras del ejercicio. En e) solo mejora A: la curva rota sobre el eje de A.')}` },
        },
        {
          official: '2.6', level: 1, title: '¿Por qué es cóncava?',
          prompt: '<p>La forma cóncava de la FPP puede deberse a: a) la ley de rendimientos decrecientes; b) la existencia de un costo de oportunidad; c) la escasez; d) la eficiencia en la producción.</p>',
          solution: { explain: '<p><strong>a)</strong> La ley de rendimientos decrecientes (junto con la heterogeneidad de los factores) hace que el costo de oportunidad sea <strong>creciente</strong>, y eso da la concavidad. b) y c) explican que la FPP tenga pendiente negativa (hay que renunciar a algo), pero no su curvatura: con costo de oportunidad constante la FPP sería recta. d) explica que los puntos estén sobre la curva, no su forma.</p>' },
        },
      ],
      quiz: [
        { q: 'Un punto dentro de la FPP indica…', o: ['una combinación inaccesible', 'que se usan todos los recursos eficientemente', 'recursos desempleados o mal utilizados', 'crecimiento económico'], a: 2, e: 'Se podría producir más de algún bien sin resignar el otro.' },
        { q: 'La concavidad de la FPP refleja…', o: ['costo de oportunidad constante', 'costo de oportunidad creciente', 'que no hay escasez', 'pleno empleo'], a: 1, e: 'Cada unidad adicional cuesta más del otro bien.' },
        { q: 'Al pasar de A (0; 150) a B (10; 140), el costo de oportunidad de un vestido es…', o: ['10 alimentos', '1 alimento', '0,1 alimentos', '150 alimentos'], a: 1, e: '|140 − 150| / (10 − 0) = 1.' },
        { q: '¿Cuál NO es un supuesto de la FPP?', o: ['Tecnología fija', 'Recursos fijos', 'Pleno empleo', 'Precios fijados por el Estado'], a: 3, e: 'La FPP no habla de precios.' },
        { q: 'Si la FPP fuera una línea recta, el costo de oportunidad sería…', o: ['creciente', 'decreciente', 'constante', 'cero'], a: 2, e: 'La pendiente sería la misma en todos sus puntos.' },
        { q: 'Si B = 18·√(49 − A/9), el costo de oportunidad de A en un punto se obtiene…', o: ['dividiendo B por A', 'con el valor absoluto de la derivada dB/dA', 'restando 49 − A', 'con el máximo de B'], a: 1, e: 'Es la pendiente de la frontera en ese punto.' },
      ],
      sources: [{ title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 1', points: ['FPP: combinaciones accesibles, inaccesibles, eficientes e ineficientes.', 'Coste de oportunidad creciente y concavidad.'] }],
    },

    {
      id: 'crecimiento-fpp',
      module: 't3',
      title: 'Crecimiento económico y desplazamientos de la FPP',
      keywords: 'crecimiento económico desplazamiento fpp tecnología capital inversión productiva bienes de capital consumo capacidad ociosa capacidad instalada',
      tldr: 'Crecer es <mark>desplazar la FPP hacia afuera</mark>: más factores (trabajo, capital físico o humano) o mejor tecnología. Para crecer hay que resignar consumo presente y producir bienes de capital. Si la tecnología mejora solo en un bien, la frontera rota sobre ese eje.',
      goals: ['Predecir cómo se mueve la FPP ante cambios en factores o tecnología.', 'Explicar el dilema entre bienes de capital y de consumo.', 'Relacionar la capacidad ociosa con un punto interior.'],
      body: `
        <h2>Qué mueve la frontera</h2>
        ${table(['Cambio', 'Efecto sobre la FPP'], [
          ['Aumenta la dotación de un factor usado en ambos bienes (más trabajo)', 'Se expande hacia afuera en ambos ejes'],
          ['Disminuye un factor (guerra, emigración, catástrofe)', 'Se contrae hacia adentro'],
          ['Mejora tecnológica solo en el bien A', 'Rota hacia afuera sobre el eje de A; el máximo del otro bien no cambia'],
          ['Mejora tecnológica en ambos bienes', 'Se expande en ambos ejes'],
          ['Desempleo o recesión', 'La FPP no se mueve: la economía se ubica en un punto interior'],
        ])}
        ${chart({ x: [0, 650], y: [0, 180], xl: 'A', yl: 'B', curves: [
          { f: fppB(9, 18, 49), dom: [0, 441], cls: 'c-fpp', label: 'FPP₀' }, { f: fppB(9, 18, 64), dom: [0, 576], cls: 'c-d', label: 'más trabajo' }, { f: fppB(12, 18, 49), dom: [0, 588], cls: 'c-s', dash: true, label: 'tecnología en A' }],
          arrows: [{ from: [250, 95], to: [320, 110], cls: 'c-d' }] }, 'Más trabajo desplaza toda la frontera; una mejora técnica solo en A la hace rotar sobre el eje de A.')}
        ${note('Pregunta trampa (TP 2, ejercicio 5): si mejora la tecnología de vestidos, ¿por qué se puede producir más alimentos para una misma cantidad de vestidos? Porque ahora hacen falta menos recursos para producir esos vestidos: los recursos liberados pueden pasar a alimentos. La FPP rota y, salvo en el eje de alimentos, queda por encima de la anterior.', 'exam')}

        <h2>Bienes de capital o bienes de consumo</h2>
        <p>Los recursos de un país pueden dedicarse a <strong>bienes de consumo</strong> (satisfacen necesidades hoy) o a <strong>bienes de capital</strong> (sirven para producir en el futuro). Como la capacidad es limitada, más capital hoy implica menos consumo hoy. Esa <strong>inversión productiva</strong>, junto con la investigación y desarrollo, es lo que desplaza la frontera: hay que resignar consumo presente por producción futura, o endeudarse.</p>
        ${chart({ x: [0, 12], y: [0, 12], xl: 'Bienes de consumo', yl: 'Bienes de capital', curves: [
          { f: (x) => 7 * Math.sqrt(Math.max(0, 1 - (x / 7) ** 2)), dom: [0, 7], cls: 'c-fpp', label: '2000' }, { f: (x) => 8 * Math.sqrt(Math.max(0, 1 - (x / 8) ** 2)), dom: [0, 8], cls: 'c-cvme', dash: true, label: 'P 2010' }, { f: (x) => 10.5 * Math.sqrt(Math.max(0, 1 - (x / 10.5) ** 2)), dom: [0, 10.5], cls: 'c-d', label: 'R 2010' }],
          points: [{ x: 6.4, y: 2.8, label: 'P', cls: 'c-warn' }, { x: 4.95, y: 4.95, label: 'M', cls: 'c-eq' }, { x: 2.8, y: 6.4, label: 'R', cls: 'c-ok' }] },
          'Tres países con la misma FPP en el año 2000. R dedica más recursos a bienes de capital: diez años después su frontera se expandió mucho más.')}
        <p>Observaciones de la cátedra sobre este gráfico:</p>
        <ol>
          <li>Que P crezca menos no significa que no quiera crecer: los países pobres deben dedicar casi toda su capacidad a bienes de consumo para alimentar a su población.</li>
          <li>El país rico R puede destinar más a acumular capital y por eso crece más rápido: la desigualdad entre países tiende a perpetuarse.</li>
          <li>No se puede decir que P “consuma en exceso”: R, con una frontera mayor, consume más en términos absolutos.</li>
        </ol>
        <h2>Capacidad instalada</h2>
        <p>La <strong>utilización de la capacidad instalada</strong> que publica el INDEC mide qué porcentaje de su capacidad está usando la industria. Si cae, la economía se aleja de su frontera: un punto interior con máquinas y personas ociosas. Es lo que piden analizar los ejercicios 7 y 8 del TP 2.</p>
        <p>Probá en el laboratorio de la lección anterior: subí la dotación de trabajo y luego la tecnología de un solo bien.</p>`,
      exercises: [
        {
          official: '2.2', level: 2, title: 'Más y menos trabajo',
          prompt: '<p>Con los datos del ejercicio 1, represente cómo se desplaza la FPP si: a) el trabajo aumenta a 7 unidades; b) el trabajo se reduce a 4.</p>',
          hints: ['Rehacé la tabla de combinaciones con L<sub>A</sub> + L<sub>B</sub> = 7 (o 4).'],
          solution: { explain: `
            ${table(['FPP', 'Puntos (A; B)'], [
              ['L = 6', P6.map(([a, b]) => `(${num(a)}; ${num(b)})`).join(' ')],
              ['L = 7', P7.map(([a, b]) => `(${num(a)}; ${num(b)})`).join(' ')],
              ['L = 4', P4.map(([a, b]) => `(${num(a)}; ${num(b)})`).join(' ')],
            ])}
            ${chart({ x: [0, 15500], y: [0, 1600], xl: 'A', yl: 'B', curves: [{ pts: P4, cls: 'c-s', label: 'L = 4' }, { pts: P6, cls: 'c-fpp', label: 'L = 6' }, { pts: P7, cls: 'c-d', label: 'L = 7' }] }, 'Más trabajo expande la frontera; menos trabajo la contrae.')}
            <p>a) Con 7 trabajadores la frontera se desplaza <strong>hacia afuera</strong>. b) Con 4, <strong>hacia adentro</strong>. Como el trabajo se usa en ambos bienes, cambian ambos extremos.</p>` },
        },
        {
          official: '2.3', level: 2, title: 'Mejora tecnológica en B',
          prompt: '<p>Con los datos del ejercicio 1, una mejora tecnológica en B cambia su producción a 0, 540, 864, 1.296, 1.512, 1.620, 1.674 y 1.701 (para 0 a 7 trabajadores). Obtenga la nueva FPP e indique el desplazamiento.</p>',
          solution: { explain: `
            ${table(['L<sub>A</sub>', 'A', 'B antes', 'B nueva'], P6.map(([a, b], i) => [i, num(a), num(b), num(P6t[i][1])]))}
            ${chart({ x: [0, 15500], y: [0, 1800], xl: 'A', yl: 'B', curves: [{ pts: P6, cls: 'c-fpp', ghost: true, label: 'FPP₀' }, { pts: P6t, cls: 'c-fpp', label: 'FPP₁' }], arrows: [{ from: [2000, 1370], to: [2000, 1580], cls: 'c-fpp' }] }, 'La frontera rota hacia arriba sobre el eje de B. El máximo de A (13.950) no cambia.')}
            <p>La producción de B aumenta un 20 % para cada cantidad de trabajo. La FPP <strong>rota hacia afuera desde el eje de A</strong>: el máximo de B pasa de 1.395 a 1.674 y el de A sigue en 13.950.</p>` },
        },
      ],
      quiz: [
        { q: 'Si mejora la tecnología para producir solo el bien A, la FPP…', o: ['se desplaza paralelamente', 'rota hacia afuera sobre el eje de A', 'no cambia', 'se contrae'], a: 1, e: 'El máximo del otro bien no cambia.' },
        { q: 'Una recesión con mucho desempleo se representa…', o: ['desplazando la FPP hacia adentro', 'con un punto interior a la FPP', 'con un punto fuera de la FPP', 'con una FPP recta'], a: 1, e: 'Los recursos siguen existiendo; lo que pasa es que no se usan.' },
        { q: 'Para crecer más rápido, un país debe destinar más recursos a…', o: ['bienes de consumo', 'bienes de capital', 'importaciones', 'impuestos'], a: 1, e: 'La inversión productiva desplaza la frontera.' },
        { q: 'Si emigra parte de la población activa, la FPP…', o: ['se expande', 'se contrae', 'rota', 'no cambia'], a: 1, e: 'Hay menos trabajo disponible.' },
        { q: 'Cae la utilización de la capacidad instalada de la industria. En el modelo de FPP la economía…', o: ['se aleja hacia un punto interior', 'pasa a un punto inaccesible', 'expande su frontera', 'queda sobre la frontera'], a: 0, e: 'Hay capacidad ociosa: ineficiencia.' },
      ],
      sources: [{ title: 'Diapositivas del Tema III', ref: 'Cátedra de Economía', points: ['Crecimiento económico: capital físico, humano y cambio tecnológico.', 'Inversión productiva: resignar consumo presente por producción futura.', 'Ejemplo de los países P, M y R.'] }],
    },

    {
      id: 'fpp-parcial',
      module: 't3',
      title: 'La FPP en el parcial: de la tabla al costo de oportunidad creciente',
      keywords: 'fpp tabla parcial armas alimentos máquinas puntos fuera dentro sobre cóncava convexa costo de oportunidad creciente rendimientos decrecientes desplazamientos terremoto emigración desempleo recursos ociosos escasez países ricos pobres',
      tldr: 'El ejercicio de FPP del parcial siempre sigue el mismo camino: <mark>armar las combinaciones</mark> repartiendo el trabajo, <mark>graficar</mark>, <mark>clasificar puntos</mark>, decir por qué es <strong>cóncava</strong> y <mark>calcular costos de oportunidad</mark>. Acá está resuelto entero con la tabla del 1er parcial 2024, más la lista de desplazamientos que toman siempre.',
      goals: ['Resolver de punta a punta un ejercicio de FPP con tabla.', 'Explicar qué significa un punto sobre, dentro y fuera de la frontera.', 'Relacionar la concavidad con los rendimientos decrecientes y el costo de oportunidad creciente.', 'Decidir cómo se mueve la FPP en los casos típicos (y cuándo no se mueve).'],
      body: `
        <h2>El enunciado (1er parcial 2024)</h2>
        <p>Un país decide entre producir alimentos (con 9 unidades de tierra) y máquinas (con 12 de capital). Tiene <strong>6 unidades de trabajo</strong> para repartir:</p>
        ${table(['Trabajo (L)', '0', '1', '2', '3', '4', '5', '6'], [['Alimentos', ...FA.map((x) => num(x))], ['Máquinas', ...FM.map((x) => num(x))]])}
        <h2>Paso 1: armar las combinaciones</h2>
        <p>La regla es una sola: <strong>L<sub>A</sub> + L<sub>M</sub> = 6</strong>. Si alimentos usa 2 trabajadores, máquinas usa 4. Se lee la columna correspondiente de cada tabla.</p>
        ${table(['Punto', 'L<sub>A</sub>', 'L<sub>M</sub>', 'Alimentos', 'Máquinas'], P24.map(([a, m], i) => ['ABCDEFG'[i], i, 6 - i, num(a), num(m)]))}
        <h2>Paso 2: graficar</h2>
        ${chart({ x: [0, 11000], y: [0, 6000], xl: 'Alimentos', yl: 'Máquinas', alt: 'FPP del primer parcial 2024',
          curves: [{ pts: P24, cls: 'c-fpp', label: 'FPP' }],
          points: [...P24.map(([x, y], i) => ({ x, y, cls: 'c-fpp', r: 3.5, label: 'ABCDEFG'[i], pos: i < 3 ? 'ne' : 'e' })), { x: 5040, y: 2460, cls: 'c-warn', label: 'H (ineficiente)', pos: 'sw' }, { x: 7810, y: 4100, cls: 'c-err', label: 'I (inaccesible)' }] },
          'Los 7 puntos de la tabla unidos forman la frontera. H usa solo 4 trabajadores; I necesitaría 8.')}
        <h2>Paso 3: puntos sobre, dentro y fuera</h2>
        ${table(['Punto', 'Ejemplo', 'Qué indica'], [
          ['<strong>Sobre</strong> la frontera', 'Cualquiera de A a G, por ejemplo D (6.580; 3.260)', '<strong>Eficiente</strong>: se usan todos los recursos con la mejor tecnología. Para tener más de un bien hay que renunciar al otro'],
          ['<strong>Dentro</strong> de la frontera', 'H (5.040; 2.460): 2 trabajadores en alimentos + 2 en máquinas', '<strong>Ineficiente</strong>: hay recursos ociosos (2 trabajadores desempleados) o mal usados. Se podría producir más de algo sin resignar nada'],
          ['<strong>Fuera</strong> de la frontera', 'I (7.810; 4.100): 4 trabajadores en cada bien', '<strong>Inaccesible</strong> con los recursos y la tecnología actuales. Solo se alcanzaría con crecimiento (más factores o mejor tecnología). Con comercio internacional, un país puede <em>consumir</em> fuera de su FPP aunque no pueda producir ahí'],
        ])}
        <h2>Paso 4: costo de oportunidad por tramos</h2>
        <p>“Pasar de producir X a Y unidades de máquinas” es moverse entre dos puntos. El costo de oportunidad es lo que se resigna del otro bien por cada unidad ganada:</p>
        ${eq(`CO de una máquina = ${frac('alimentos que se resignan', 'máquinas que se ganan')} = ${frac('|ΔA|', 'ΔM')}`)}
        ${table(['Tramo', 'Máquinas ganadas', 'Alimentos resignados', 'CO de 1 máquina'], CO24)}
        <p>El ejercicio d) del parcial (“pasar de 3.260 a 4.100 máquinas”, de D a C) da <strong>1.540 / 840 = 1,83 alimentos por máquina</strong>. El enunciado decía 3.200, pero ese valor no está en la tabla de máquinas: es un error de tipeo (3.200 aparece en la de alimentos). Aclararlo en el examen suma.</p>
        ${note('Fijate la última columna: <strong>cada máquina adicional cuesta más alimentos</strong> (0,60 → 1,09 → 1,54 → 1,83 → 2,49 → 7,11). Eso es costo de oportunidad creciente, y es lo que hace que la frontera sea cóncava.', 'exam')}
        <h2>Paso 5: ¿cóncava o convexa? ¿Por qué?</h2>
        <p>La FPP es <strong>cóncava respecto del origen</strong> (se “abomba” hacia afuera). Significa que el costo de oportunidad es <strong>creciente</strong>. La cadena que conviene escribir, que además responde la pregunta del recuperatorio de diciembre de 2024:</p>
        ${flow('Se pasa trabajo de alimentos a máquinas', 'En máquinas, cada trabajador nuevo tiene menos capital fijo: aporta menos (rendimientos decrecientes)', 'En alimentos se pierden trabajadores que aportaban cada vez más', 'Cada máquina extra cuesta más alimentos', 'Costo de oportunidad creciente → FPP cóncava')}
        <ul>
          <li><strong>Ley de rendimientos decrecientes</strong> (Blanco): si se produce con cantidades fijas de un factor (la tierra en alimentos, el capital en máquinas) y se agregan unidades sucesivas de otro (trabajo), llega un momento en que los incrementos de producción son cada vez menores. En la tabla: el primer trabajador en alimentos agrega 3.200; el sexto, solo 600.</li>
          <li><strong>Factores no igualmente aptos</strong>: los primeros recursos que se pasan a máquinas son los que menos servían para alimentos; al final hay que sacar a los mejores agricultores.</li>
          <li>Si los factores fueran perfectamente adaptables y no hubiera rendimientos decrecientes, el costo de oportunidad sería <strong>constante</strong> y la FPP una <strong>recta</strong>. Con costo decreciente sería convexa.</li>
        </ul>
        ${note('Los datos del parcial tienen pequeñas irregularidades (el 5.º trabajador en alimentos agrega 1.590, más que el 4.º), pero el costo de oportunidad por tramo crece igual: la conclusión no cambia. Si te toca algo así, decilo.', 'tip')}
        <h2>¿Cuándo se mueve la frontera? Los casos que toman</h2>
        <p>Es el ejercicio 1.9.2 de Blanco, que se tomó tal cual en el 1er parcial 2023, más los casos del parcial de Ingeniería Civil 2022:</p>
        ${table(['Situación', 'La FPP…', 'Por qué'], [
          ['Mejora la tecnología (de todos los bienes)', '<strong>se desplaza hacia afuera</strong> en ambos ejes', 'Con los mismos recursos se produce más de todo'],
          ['Mejora tecnológica en un solo bien', '<strong>rota hacia afuera</strong> sobre el eje de ese bien', 'El máximo del otro bien no cambia (lección anterior)'],
          ['Se produce una inversión en maquinaria', 'se desplaza hacia afuera', 'Hay más capital: más recursos'],
          ['Se amplía la educación y la formación profesional', 'se desplaza hacia afuera', 'Más capital humano'],
          ['Un terremoto destruye varias fábricas', '<strong>se desplaza hacia adentro</strong>', 'Hay menos capital'],
          ['Una parte de los trabajadores emigra', 'se desplaza hacia adentro', 'Hay menos trabajo'],
          ['Disminuyen los recursos productivos', 'se desplaza hacia adentro', 'Blanco 1.6.6'],
          ['Personas desempleadas encuentran empleo', '<strong>no se desplaza</strong>', 'Los recursos ya existían: la economía pasa de un punto interior a uno más cercano a la frontera'],
          ['Las empresas usan máquinas que estaban improductivas', 'no se desplaza', 'Ídem: se usan recursos ociosos'],
          ['Al caer las ventas, cierran plantas esperando mejores tiempos', 'no se desplaza', 'Las plantas siguen existiendo: la economía se mueve hacia un punto interior'],
        ])}
        ${note('La trampa más frecuente: “disminuye el desempleo, entonces la FPP se desplaza a la derecha”. Es <strong>falso</strong> (Blanco 1.5.11): la frontera mide lo que se <em>puede</em> producir; usar recursos ociosos cambia lo que se produce, no lo que se puede producir.', 'warn')}
        <h2>¿Los países ricos también enfrentan escasez?</h2>
        <p><strong>Sí.</strong> La escasez no depende de cuánto se tenga, sino de que los recursos no alcanzan para todo lo que se desea, porque los deseos crecen con lo que se tiene (Maslow). Un país rico tiene una FPP más grande, pero sigue teniendo una frontera: más hospitales implica menos de otra cosa. También enfrenta escasez de tiempo, de tierra o de trabajo calificado. La diferencia está en qué necesidades quedan sin cubrir, no en que exista o no el problema de elegir.</p>`,
      quiz: [
        { q: 'Con 6 trabajadores, ¿qué combinación es inaccesible en la tabla del parcial 2024?', o: ['(6.580; 3.260)', '(5.040; 2.460)', '(7.810; 4.100)', '(0; 5.290)'], a: 2, e: '7.810 alimentos usa 4 trabajadores y 4.100 máquinas otros 4: hacen falta 8.' },
        { q: 'Al pasar de D (6.580; 3.260) a C (5.040; 4.100), el costo de oportunidad de una máquina es…', o: ['0,55 alimentos', '1,83 alimentos', '840 máquinas', '1.540 alimentos'], a: 1, e: '1.540 alimentos resignados / 840 máquinas ganadas.' },
        { q: 'Si cada máquina adicional cuesta cada vez más alimentos, la FPP es…', o: ['una recta', 'cóncava respecto del origen', 'convexa respecto del origen', 'vertical'], a: 1, e: 'Costo de oportunidad creciente.' },
        { q: 'Algunas personas desempleadas encuentran empleo. La FPP…', o: ['se desplaza hacia afuera', 'se desplaza hacia adentro', 'no se desplaza: la economía se acerca a la frontera', 'rota'], a: 2, e: 'Los recursos ya existían.', src: 'Blanco 1.9.2 d' },
        { q: 'Un terremoto destruye varias fábricas. La FPP…', o: ['se desplaza hacia adentro', 'se desplaza hacia afuera', 'no cambia', 'rota sobre un eje'], a: 0, e: 'Hay menos capital.' },
        { q: 'Un punto fuera de la FPP indica…', o: ['desempleo', 'una combinación que no se puede producir con los recursos y la tecnología actuales', 'eficiencia', 'que sobran recursos'], a: 1, e: 'Solo con crecimiento (o, para consumir, con comercio).' },
        { q: 'Si los factores fueran perfectamente adaptables a ambas producciones y sin rendimientos decrecientes, la FPP sería…', o: ['cóncava', 'convexa', 'recta', 'un punto'], a: 2, e: 'Costo de oportunidad constante.' },
      ],
      sources: [
        { title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 1 (1.3.6 y ejercicios 1.8.2, 1.9.2 y 1.9.3)', points: ['Combinaciones accesibles, inaccesibles, eficientes e ineficientes.', 'La frontera no se desplaza cuando se usan recursos que estaban ociosos.', 'Casos de desplazamiento: tecnología, inversión, educación, terremoto, emigración, cierre de plantas.'] },
        { title: 'Principios de Economía', ref: 'Mankiw, caps. 2 y 3', points: ['La FPP como modelo; el comercio permite consumir fuera de la propia frontera.'] },
      ],
    },
  );
})();
