/* Tema X: Estimación de la actividad económica. Diapositivas "TEMA X ESTIMACION DE LA ACTIVIDAD ECONÓMICA 26", Blanco cap. 10, Mankiw cap. 23. TP 6 (ejercicios 3 y 4). */
(() => {
  const { LESSONS, h } = window.GUIDE;
  const { note, def, table, chart, eq, frac, num, lab, fig } = h;

  // Barras apiladas del PIB por el enfoque del gasto (valores ilustrativos en % del PIB)
  const gasto = fig(`<svg class="plot" viewBox="0 0 440 230" role="img" aria-label="El PIB como suma de consumo, inversión, gasto público y exportaciones netas">
    ${[['C', 'Consumo privado', 66, 'var(--c-d)'], ['I', 'Inversión privada', 16, 'var(--c-s)'], ['G', 'Compras del Estado', 15, 'var(--c-eq)'], ['XN', 'Exportaciones netas', 3, 'var(--c-cvme)']].reduce((acc, [k, t, v, c]) => {
      const x = acc.x; acc.svg += `<rect x="${x}" y="40" width="${v * 3.6}" height="56" fill="${c}" opacity=".88" class="pl-fade"/><text x="${x + v * 1.8}" y="74" text-anchor="middle" class="pl-lbl" style="fill:#fff;stroke:none">${k}</text><text x="${x + v * 1.8}" y="${k === 'XN' ? 128 : 116}" text-anchor="middle" class="pl-tick">${t}</text>`; acc.x += v * 3.6; return acc;
    }, { x: 40, svg: '' }).svg}
    <path d="M40 30H400" stroke="var(--ink-2)" stroke-width="1.5"/><text x="220" y="22" text-anchor="middle" class="pl-axl">PIB = C + I + G + XN</text></svg>`, 'Proporciones ilustrativas: en la mayoría de los países el consumo privado es, por lejos, el componente más grande del gasto.');

  LESSONS.push(
    {
      id: 'macro-y-contabilidad',
      module: 't10',
      title: 'Macroeconomía y contabilidad nacional',
      keywords: 'macroeconomía variables agregadas contabilidad nacional estimar medir economía sumergida autoconsumo bienestar problemas macroeconómicos idiota polis',
      tldr: 'La macroeconomía estudia la economía como un todo a través de <mark>variables agregadas</mark>. La Contabilidad Nacional no puede medir con exactitud la actividad de un país: la <strong>estima</strong>, porque usa muestras y no capta la economía sumergida ni el autoconsumo.',
      goals: ['Definir variable macroeconómica.', 'Explicar por qué la actividad económica se estima y no se mide.', 'Explicar por qué importa estimar la producción.'],
      body: `
        <p>Los griegos llamaban <em>idiota</em> (de <em>idios</em>, propio) a quien vivía apartado de los asuntos de la polis y solo se ocupaba de lo suyo. La cátedra abre el segundo parcial con esa idea: entender la economía del país es parte de ser ciudadano. Ahora el foco deja de estar en un mercado y pasa a toda la economía.</p>
        <h2>Variables macroeconómicas</h2>
        <p>Son la <strong>agregación del valor</strong> de las actividades económicas que tienen la misma naturaleza: toda la producción, todo el consumo, toda la inversión, el nivel general de precios. Los grandes problemas macroeconómicos son el crecimiento, el desempleo, la inflación y el sector externo.</p>
        <h2>¿Se puede medir con exactitud la actividad de un país?</h2>
        <p><strong>No.</strong> La Contabilidad Nacional permite <strong>estimarla</strong>, por dos razones:</p>
        <ol>
          <li>Los datos provienen de fuentes estadísticas que se obtienen extrapolando muestras representativas.</li>
          <li>No incluye la economía sumergida (informal), aunque genere renta; tampoco el autoconsumo ni las actividades ilegales.</li>
        </ol>
        <h2>¿Por qué es importante estimarla?</h2>
        <p>Porque, a priori, hay una relación directa entre producción y bienestar: cuanto más produce un país, más ingresos genera y, en promedio, mayor es el bienestar de su población. Con matices que vas a ver al final del tema.</p>
        ${note('En Argentina, el organismo que elabora las cuentas nacionales es el INDEC. El EMAE (Estimador Mensual de Actividad Económica) es el adelanto mensual del PIB.', 'tip')}`,
      quiz: [
        { q: 'La actividad económica de un país…', o: ['se mide con exactitud', 'se estima', 'no se puede conocer', 'la mide el Banco Central'], a: 1, e: 'Se usan muestras y hay actividades no registradas.' },
        { q: '¿Qué NO captura la Contabilidad Nacional?', o: ['La producción industrial', 'La economía sumergida y el autoconsumo', 'Los servicios', 'Las exportaciones'], a: 1, e: 'Generan renta pero no se registran.' },
        { q: 'Una variable macroeconómica es…', o: ['el precio de un bien', 'la agregación del valor de actividades de igual naturaleza', 'el costo de una empresa', 'el salario de una persona'], a: 1, e: 'Por ejemplo, el consumo total del país.' },
      ],
      sources: [{ title: 'Diapositivas del Tema X', ref: 'Cátedra de Economía', points: ['Variables macroeconómicas; estimación y no medición de la actividad.'] }],
    },

    {
      id: 'pib-y-enfoques',
      module: 't10',
      title: 'El PIB y sus tres enfoques',
      keywords: 'pib producto interior bruto bienes finales intermedios valor agregado enfoque producción gasto renta consumo inversión gasto público exportaciones netas microlandia doble contabilización',
      tldr: 'El <mark>PIB</mark> es el valor a precios de mercado de los bienes y servicios <strong>finales</strong> producidos <strong>en un país</strong> durante un período. Se puede calcular por la producción (suma de valores agregados), por el gasto (C + I + G + XN) o por las rentas (salarios + alquileres + intereses + beneficios). Los tres dan lo mismo.',
      goals: ['Definir el PIB y explicar cada parte de la definición.', 'Calcular el PIB por los tres enfoques.', 'Resolver Microlandia (TP 6, ejercicio 4).'],
      body: `
        ${def('Producto Interior Bruto', 'Es el valor de mercado de todos los bienes y servicios finales producidos durante un año en territorio nacional. Es una variable flujo, no incluye el valor de los bienes intermedios, valora los bienes finales a precios de mercado y computa toda la producción dentro de un país aunque los factores de producción sean de propiedad extranjera.', 'Diapositivas del Tema X, a partir de Blanco, cap. 10.')}
        ${table(['Parte de la definición', 'Qué implica'], [
          ['“a precios de mercado”', 'Para sumar manzanas y celulares se usa una unidad común: su precio. 2 manzanas a $2 y 3 peras a $3 → 2·2 + 3·3 = $13'],
          ['“bienes y servicios finales”', 'Bienes terminados, semielaborados y materias primas no incorporadas a ningún proceso. Los intermedios ya están dentro del valor de los finales: sumarlos sería contar dos veces'],
          ['“producidos en un país”', 'Todo lo producido dentro de la frontera, sea la empresa nacional o extranjera'],
          ['“en un período”', 'Normalmente un año: es un <strong>flujo</strong>'],
          ['Qué no entra', 'Compras de terrenos, activos financieros (bonos, acciones), bienes de segunda mano, autoconsumo, economía ilegal'],
        ])}
        <h2>Los tres enfoques</h2>
        <h3>1. Producción (valor agregado)</h3>
        <p>En la práctica es difícil saber qué producto es final o intermedio. Por eso se suma el <strong>valor agregado</strong> de todas las empresas:</p>
        ${eq('Valor agregado = Valor de la producción − Valor de los bienes intermedios comprados', 'Enfoque de la producción')}
        <h3>2. Gasto</h3>
        ${eq('PIB = C + I + G + XN', 'Enfoque del gasto')}
        ${gasto}
        ${table(['Componente', 'Incluye', 'No incluye'], [
          ['<strong>C</strong> Consumo privado', 'Bienes no duraderos (alimentos, ropa), duraderos (autos, electrodomésticos) y servicios', 'Bienes de segunda mano, autoconsumo, economía ilegal'],
          ['<strong>I</strong> Inversión privada', 'Inversión productiva (maquinaria, instalaciones), vivienda nueva y variación de existencias (lo producido y no vendido)', 'Compra de acciones o bonos (es inversión financiera)'],
          ['<strong>G</strong> Compras del Estado', 'Consumo público (sueldos de docentes, insumos) e inversión pública (rutas, escuelas)', 'Transferencias como jubilaciones o subsidios: no son compra de bienes'],
          ['<strong>XN</strong> Exportaciones netas', 'X − M: lo que compran los extranjeros menos lo que importamos', ''],
        ])}
        ${note('Las importaciones se restan porque ya están dentro de C, I y G pero no fueron producidas en el país. Y las existencias se suman como si la empresa se hubiera comprado su propia producción: así el gasto siempre iguala a la producción.', 'exam')}
        <h3>3. Renta</h3>
        ${eq('PIB = Salarios + Alquileres + Intereses + Beneficios (+ impuestos indirectos netos y amortizaciones)', 'Enfoque de la renta')}
        <p>Lo que una empresa agrega se reparte entre quienes aportaron factores. Es el flujo circular del Tema II: lo que se produce, se gasta y se cobra es lo mismo visto desde tres lugares.</p>
        ${lab(0)}`,
      labs: [{
        type: 'calc', title: 'Microlandia: el PIB por producción y por rentas', intro: 'Datos del TP 6, ejercicio 4. Cada empresa paga 20 de salarios, 10 de alquileres y 10 de intereses.',
        fields: [{ id: 'a', label: 'Trigo (agricultor)', value: 50 }, { id: 'b', label: 'Harina (molino)', value: 100 }, { id: 'c', label: 'Pan (panadería)', value: 150 }, { id: 'w', label: 'Salarios por empresa', value: 20 }, { id: 'r', label: 'Alquileres por empresa', value: 10 }, { id: 'i', label: 'Intereses por empresa', value: 10 }],
        run: (v) => {
          const va = [v.a, v.b - v.a, v.c - v.b], f = v.w + v.r + v.i, ben = va.map((x) => x - f);
          return `Valor agregado: agricultor ${num(va[0])} · molino ${num(va[1])} · panadería ${num(va[2])}\nPIB (producción) = ${num(va[0] + va[1] + va[2])}   (= valor del bien final: ${num(v.c)})\n\nBeneficios: ${ben.map((b) => num(b)).join(' · ')}\nPIB (rentas) = salarios ${num(3 * v.w)} + alquileres ${num(3 * v.r)} + intereses ${num(3 * v.i)} + beneficios ${num(ben.reduce((s, b) => s + b, 0))} = ${num(3 * f + ben.reduce((s, b) => s + b, 0))}\n\nSi sumaras las ventas de las tres empresas obtendrías ${num(v.a + v.b + v.c)}: contarías el trigo tres veces.`;
        },
      }],
      exercises: [
        {
          official: '6.4', level: 2, title: 'Microlandia',
          prompt: '<p>Microlandia tiene tres empresas: un agricultor (trigo por 50), un molino (harina por 100, usando todo el trigo) y una panadería (pan por 150, usando toda la harina). Las tres pagan 20 de salarios, 10 de alquileres y 10 de intereses. a) PIB por el enfoque de la producción. b) PIB por el enfoque de las rentas.</p>',
          solution: { explain: `
            ${table(['Empresa', 'Producción', 'Intermedios', 'Valor agregado', 'Salarios', 'Alquileres', 'Intereses', 'Beneficio'], [['Agricultor', '50', '0', '50', '20', '10', '10', '10'], ['Molino', '100', '50', '50', '20', '10', '10', '10'], ['Panadería', '150', '100', '50', '20', '10', '10', '10'], ['<strong>Total</strong>', '300', '150', '<strong>150</strong>', '60', '30', '30', '30']])}
            <p><strong>a)</strong> PIB = 50 + 50 + 50 = <strong>150</strong>, igual al valor del único bien final (el pan).</p>
            <p><strong>b)</strong> PIB = 60 + 30 + 30 + 30 = <strong>150</strong>. El beneficio de cada empresa es su valor agregado menos lo que paga a los factores: 50 − 40 = 10.</p>` },
        },
      ],
      quiz: [
        { q: 'Una panadería compra harina por $100 y vende pan por $250. Su valor agregado es…', o: ['$250', '$150', '$350', '$100'], a: 1, e: '250 − 100.' },
        { q: '¿Cuál se incluye en el PIB?', o: ['Un auto usado vendido este año', 'Una acción de YPF', 'Un auto nuevo fabricado este año', 'Un terreno'], a: 2, e: 'Es producción corriente de un bien final.' },
        { q: 'Una jubilación pagada por el Estado…', o: ['entra en G', 'no entra en el PIB: es una transferencia', 'entra en C', 'entra en I'], a: 1, e: 'No es pago por un bien o servicio producido.' },
        { q: 'Una empresa produce y no vende: esos bienes se registran como…', o: ['nada', 'inversión en existencias', 'consumo', 'exportaciones'], a: 1, e: 'Como si se los hubiera comprado a sí misma.' },
        { q: 'Una automotriz japonesa produce autos en Argentina. Esa producción entra en…', o: ['el PIB de Japón', 'el PIB argentino', 'ninguno', 'el PNB argentino'], a: 1, e: 'El PIB es por territorio.' },
        { q: 'C = 600, I = 150, G = 200, X = 120, M = 100. El PIB es…', o: ['1.170', '970', '1.070', '950'], a: 1, e: '600 + 150 + 200 + (120 − 100).' },
      ],
      sources: [{ title: 'Economía: teoría y práctica', ref: 'Blanco, cap. 10', points: ['Definición del PIB; bienes finales; los tres enfoques; componentes del gasto.'] }, { title: 'Principios de Economía', ref: 'Mankiw, cap. 23', points: ['Medición del ingreso de un país; componentes del PIB.'] }],
    },

    {
      id: 'pib-nominal-real',
      module: 't10',
      title: 'PIB nominal, real, deflactor y crecimiento',
      keywords: 'pib nominal real precios corrientes constantes año base deflactor tasa crecimiento per cápita nivel de vida',
      tldr: 'El <mark>PIB nominal</mark> usa los precios de cada año; el <mark>real</mark>, los de un año base. Solo el real mide si se produjo más. El cociente nominal/real es el <strong>deflactor</strong>, una medida del nivel de precios. El crecimiento se mide con el PIB real y el nivel de vida con el PIB real per cápita.',
      goals: ['Calcular PIB nominal y real con una tabla de precios y cantidades.', 'Calcular el deflactor y la inflación que implica.', 'Calcular tasas de crecimiento y el PIB per cápita.'],
      body: `
        ${eq(`PIB nominal<sub>t</sub> = Σ P<sub>t</sub> · q<sub>t</sub> &nbsp;&nbsp;&nbsp; PIB real<sub>t</sub> = Σ P<sub>0</sub> · q<sub>t</sub>`, 'Nominal y real')}
        <p>El nominal puede crecer porque se produjo más <em>o</em> porque subieron los precios. Valuando todos los años con los precios del año base (P<sub>0</sub>), el real solo cambia si cambian las cantidades.</p>
        ${eq(`Deflactor<sub>t</sub> = ${frac('PIB nominal<sub>t</sub>', 'PIB real<sub>t</sub>')} × 100`, 'Deflactor del PIB')}
        ${eq(`Crecimiento<sub>t</sub> = ${frac('PIB real<sub>t</sub> − PIB real<sub>t−1</sub>', 'PIB real<sub>t−1</sub>')} × 100 &nbsp;&nbsp;&nbsp; PIB per cápita = ${frac('PIB', 'habitantes')}`, 'Crecimiento y per cápita')}
        ${note('Para evaluar si mejoró el nivel de vida se usa el <strong>PIB real per cápita</strong>: el nominal puede subir solo por inflación, y el total puede subir solo porque hay más habitantes.', 'exam')}
        <h2>Ejemplo completo</h2>
        ${lab(0)}
        <p>Con los valores precargados: el PIB nominal pasa de 1.000 a 1.320 (+32 %), pero el real solo de 1.000 a 1.100 (+10 %). El deflactor de 120 dice que los precios subieron un 20 % en promedio. Aproximadamente: 1,32 = 1,10 × 1,20.</p>`,
      labs: [{
        type: 'calc', title: 'PIB nominal, real y deflactor', intro: 'Dos bienes y dos años. El año 0 es la base.',
        fields: [{ id: 'p1', label: 'Bien A: precio año 0', value: 10 }, { id: 'q1', label: 'Bien A: cantidad año 0', value: 50 }, { id: 'p1b', label: 'Bien A: precio año 1', value: 12 }, { id: 'q1b', label: 'Bien A: cantidad año 1', value: 55 }, { id: 'p2', label: 'Bien B: precio año 0', value: 25 }, { id: 'q2', label: 'Bien B: cantidad año 0', value: 20 }, { id: 'p2b', label: 'Bien B: precio año 1', value: 30 }, { id: 'q2b', label: 'Bien B: cantidad año 1', value: 22 }, { id: 'pob', label: 'Crecimiento de la población (%)', value: 1 }],
        run: (v) => {
          const n0 = v.p1 * v.q1 + v.p2 * v.q2, n1 = v.p1b * v.q1b + v.p2b * v.q2b, r1 = v.p1 * v.q1b + v.p2 * v.q2b, d1 = (n1 / r1) * 100;
          const g = (r1 / n0 - 1) * 100, pc = ((r1 / n0) / (1 + v.pob / 100) - 1) * 100;
          return `Año 0: nominal = real = ${num(n0)}   deflactor = 100\nAño 1: nominal = ${num(n1)}   real = ${num(r1)}   deflactor = ${num(d1, 1)}\n\nCrecimiento nominal: ${num((n1 / n0 - 1) * 100, 2)} %\nCrecimiento real:    ${num(g, 2)} %\nInflación (deflactor): ${num(d1 - 100, 2)} %\nCrecimiento del PIB real per cápita: ${num(pc, 2)} %  ${pc > 0 ? '→ mejoró el nivel de vida medio' : '→ empeoró el nivel de vida medio'}`;
        },
      }],
      exercises: [
        {
          official: '6.3', level: 2, title: 'PIB nominal y real de España 2009–2011',
          prompt: '<p>Con el cuadro de precios y cantidades del TP (economía española 2009–2011): a) calcule el PIB nominal y real de cada año; b) la tasa de inflación de 2010 y 2011, ¿qué año fue más inflacionario?; c) las tasas de crecimiento 2009–2011 del PIB nominal y del real, ¿cuál creció más y qué significa?; d) ¿mejoró el nivel de vida? Justifique con el indicador adecuado.</p><p class="muted-s">El cuadro del TP está como imagen y no se transcribe acá: cargá sus valores en el laboratorio de esta lección (usando 2009 como base) o seguí los pasos de la solución.</p>',
          hints: ['Base 2009: el real de cada año valúa sus cantidades con los precios de 2009.', 'Inflación con el deflactor: (D<sub>t</sub> − D<sub>t−1</sub>)/D<sub>t−1</sub>.'],
          solution: { explain: `<ol>
            <li><strong>a)</strong> Nominal<sub>t</sub> = Σ P<sub>t</sub>·q<sub>t</sub>. Real<sub>t</sub> = Σ P<sub>2009</sub>·q<sub>t</sub>. En 2009 nominal = real.</li>
            <li><strong>b)</strong> Deflactor<sub>t</sub> = nominal/real × 100. Inflación 2010 = (D<sub>2010</sub> − 100)/100; inflación 2011 = (D<sub>2011</sub> − D<sub>2010</sub>)/D<sub>2010</sub>. El año con la tasa mayor fue el más inflacionario.</li>
            <li><strong>c)</strong> Crecimiento = (valor 2011 − valor 2009)/valor 2009. El nominal crece más que el real cuando hubo inflación: la diferencia es la parte del crecimiento que se debe solo a precios.</li>
            <li><strong>d)</strong> El indicador adecuado es el <strong>PIB real per cápita</strong> (y, mejor aún, mirar también la distribución). Si el real creció más que la población, en promedio mejoró. Si el crecimiento fue solo nominal, no.</li></ol>` },
        },
      ],
      quiz: [
        { q: 'El PIB real se calcula con…', o: ['precios corrientes', 'precios de un año base', 'el tipo de cambio', 'el IPC'], a: 1, e: 'Por eso aísla el cambio en cantidades.' },
        { q: 'PIB nominal = 1.500 y PIB real = 1.200. El deflactor es…', o: ['80', '125', '300', '1,25'], a: 1, e: '1.500/1.200 × 100.' },
        { q: 'Si el PIB nominal creció 30 % y el real 0 %…', o: ['se produjo 30 % más', 'solo subieron los precios', 'cayó la producción', 'mejoró el nivel de vida'], a: 1, e: 'Las cantidades no cambiaron.' },
        { q: 'Para saber si mejoró el nivel de vida medio se usa…', o: ['el PIB nominal', 'el PIB real per cápita', 'el PIB nominal per cápita', 'las exportaciones'], a: 1, e: 'Descuenta inflación y crecimiento de la población.' },
        { q: 'El PIB real pasa de 200 a 210. La tasa de crecimiento es…', o: ['10 %', '5 %', '4,76 %', '210 %'], a: 1, e: '(210 − 200)/200.' },
      ],
      sources: [{ title: 'Diapositivas del Tema X', ref: 'Cátedra de Economía', points: ['PIB nominal y real, deflactor, tasa de crecimiento y PIB per cápita.'] }],
    },

    {
      id: 'pnb-criticas-idh',
      module: 't10',
      title: 'PNB, renta nacional, críticas al PIB e IDH',
      keywords: 'producto nacional bruto pnb neto pnn renta nacional depreciación impuestos indirectos subvenciones críticas pib bienestar idh desarrollo humano felicidad world happiness report fnb bután better life ocde',
      tldr: 'El <mark>PNB</mark> suma las rentas de los <strong>residentes</strong> (estén donde estén); el PIB, las generadas <strong>en el territorio</strong>. Restando depreciación se llega al PNN, y restando impuestos indirectos netos, a la Renta Nacional. El PIB no mide todo el bienestar: por eso existen el IDH y los índices de felicidad.',
      goals: ['Pasar del PIB al PNB, PNN y Renta Nacional.', 'Enumerar las críticas al PIB como medida de bienestar.', 'Describir el IDH y otros indicadores alternativos.'],
      body: `
        <h2>De PIB a Renta Nacional</h2>
        ${eq('PNB = PIB − RFEN + RFNE', 'Producto Nacional Bruto')}
        <p>RFEN: rentas de factores extranjeros en el territorio nacional (las ganancias que una minera canadiense gira a su casa matriz). RFNE: rentas de factores nacionales en el extranjero. En Argentina el PNB suele ser <strong>menor</strong> que el PIB porque giran al exterior más rentas (utilidades, intereses de deuda) de las que entran.</p>
        ${eq('PNN = PNB − Depreciación', 'Producto Nacional Neto (a precios de mercado)')}
        ${eq('RN = PNN − Impuestos indirectos + Subvenciones', 'Renta Nacional (a costo de los factores)')}
        ${table(['Concepto', 'Criterio', 'Qué se le resta'], [['PIB', 'Territorio · bruto · precios de mercado', '—'], ['PNB', 'Residentes', 'RFEN (y se suma RFNE)'], ['PNN', 'Neto', 'Depreciación del capital'], ['RN', 'A costo de los factores', 'Impuestos indirectos netos de subvenciones']])}
        <h2>Críticas al PIB como medida de bienestar</h2>
        <ul>
          <li>No tiene en cuenta la <strong>depreciación</strong> del capital, incluidos los recursos naturales y el capital humano.</li>
          <li>No tiene en cuenta las <strong>externalidades negativas</strong>, como la contaminación.</li>
          <li>No tiene en cuenta la <strong>distribución del ingreso</strong>: dos países con el mismo PIB per cápita pueden tener bienestares muy distintos.</li>
          <li>No incluye actividades sin transacción: el <strong>trabajo doméstico</strong> y el voluntariado.</li>
          <li>Ignora el <strong>endeudamiento externo</strong>: endeudarse sube el PIB hoy y lo baja en el futuro.</li>
        </ul>
        <p>Aun así, el PIB guarda relación con el bienestar: un país que produce más puede ofrecer más bienes y mejores servicios de salud y educación.</p>
        <h2>Indicadores alternativos</h2>
        ${table(['Indicador', 'Quién', 'Qué mide'], [
          ['<strong>IDH</strong> (Índice de Desarrollo Humano)', 'PNUD (Naciones Unidas)', 'Tres dimensiones: <strong>esperanza de vida</strong> al nacer, <strong>educación</strong> (alfabetización y años de estudio) y <strong>PIB per cápita</strong> a paridad de poder adquisitivo. Va de 0 a 1: alto > 0,80; medio 0,50–0,80; bajo < 0,50'],
          ['<strong>World Happiness Report</strong>', 'Red de Soluciones para el Desarrollo Sostenible de la ONU, con la encuesta Gallup', 'Felicidad declarada (escala 0 a 10) explicada por PIB per cápita, apoyo social, esperanza de vida saludable, libertad, generosidad, percepción de corrupción y afectos positivos y negativos'],
          ['<strong>Felicidad Nacional Bruta</strong>', 'Bután', 'Cuestionario de 180 preguntas en nueve dimensiones: bienestar psicológico, uso del tiempo, vitalidad comunitaria, cultura, salud, educación, diversidad medioambiental, nivel de vida y gobierno'],
          ['<strong>Better Life Index</strong>', 'OCDE', 'Once dimensiones del bienestar que cada usuario puede ponderar'],
        ])}
        ${note('El informe de felicidad 2025 destaca factores “invisibles” para el PIB: compartir comidas, vivir acompañado (hasta 4 personas en el hogar), tener en quién confiar y la benevolencia de los demás.', 'tip')}`,
      quiz: [
        { q: 'El PNB se diferencia del PIB en que…', o: ['usa precios constantes', 'suma las rentas de los residentes, estén donde estén', 'resta la depreciación', 'excluye al Estado'], a: 1, e: 'El PIB es territorial; el PNB, por residencia.' },
        { q: 'PNN = PNB − …', o: ['impuestos', 'depreciación', 'importaciones', 'subsidios'], a: 1, e: 'Neto de la depreciación del capital.' },
        { q: 'La Renta Nacional valora la producción…', o: ['a precios de mercado', 'a costo de los factores', 'en dólares', 'a precios del año base'], a: 1, e: 'Se descuentan impuestos indirectos netos de subvenciones.' },
        { q: '¿Cuál es una crítica al PIB?', o: ['Incluye el trabajo doméstico', 'No considera la distribución del ingreso', 'Mide la felicidad', 'Resta la contaminación'], a: 1, e: 'Dos países con igual PIB per cápita pueden ser muy distintos.' },
        { q: 'El IDH combina…', o: ['PIB, inflación y desempleo', 'esperanza de vida, educación y PIB per cápita', 'felicidad y corrupción', 'exportaciones e importaciones'], a: 1, e: 'Lo elabora el PNUD.' },
        { q: 'Un IDH de 0,85 indica desarrollo humano…', o: ['bajo', 'medio', 'alto', 'negativo'], a: 2, e: 'Alto: más de 0,80.' },
      ],
      sources: [{ title: 'Diapositivas del Tema X', ref: 'Cátedra de Economía', points: ['PNB, PNN y RN; críticas al PIB; IDH; World Happiness Report; FNB; Better Life OCDE.'] }],
    },
  );
})();
