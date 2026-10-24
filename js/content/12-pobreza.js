/* Tema XV: Desigualdad y pobreza. Diapositivas "TEMA XV DESIGUALDAD Y POBREZA mm 26". TP 6 (ejercicio 7). */
(() => {
  const { LESSONS, h } = window.GUIDE;
  const { note, def, table, chart, eq, frac, num, lab } = h;

  LESSONS.push(
    {
      id: 'pobreza-canastas',
      module: 't15',
      title: 'Pobreza e indigencia: canastas y NBI',
      keywords: 'pobreza indigencia línea canasta básica alimentaria total cba cbt eph encuesta permanente hogares adulto equivalente nbi necesidades básicas insatisfechas estructural coyuntural engel',
      tldr: 'Un hogar es <mark>indigente</mark> si su ingreso no cubre la <strong>Canasta Básica Alimentaria</strong> (CBA) y <mark>pobre</mark> si no cubre la <strong>Canasta Básica Total</strong> (CBT = CBA más bienes y servicios no alimentarios). Los ingresos salen de la EPH. El método de NBI mide, en cambio, la pobreza estructural.',
      goals: ['Explicar el método de la línea de pobreza e indigencia.', 'Calcular si un hogar es pobre o indigente con adultos equivalentes.', 'Distinguir pobreza por ingresos (coyuntural) y por NBI (estructural).'],
      body: `
        <h2>Las dos líneas</h2>
        ${table(['Línea', 'Canasta', 'Un hogar está debajo si…'], [['<strong>Línea de indigencia</strong> (LI)', '<strong>CBA</strong>: alimentos de costo mínimo que cubren un umbral de necesidades energéticas y proteicas, según los hábitos de la población de referencia (ENGHo 2004/05)', 'su ingreso no alcanza a comprar la CBA'], ['<strong>Línea de pobreza</strong> (LP)', '<strong>CBT</strong>: la CBA ampliada con bienes y servicios no alimentarios (vestimenta, transporte, educación, salud…)', 'su ingreso no alcanza a comprar la CBT']])}
        <p>Los datos de ingresos salen de la <strong>Encuesta Permanente de Hogares</strong> (EPH) del INDEC. Todo indigente es pobre, pero no todo pobre es indigente.</p>
        <h2>Adultos equivalentes</h2>
        <p>Un hogar de cuatro personas no necesita cuatro veces lo que necesita un adulto: un chico de 5 años come menos que un varón de 35. Por eso las canastas se expresan por <strong>adulto equivalente</strong> (varón de 30 a 60 años = 1) y cada integrante pesa según su edad y sexo. El hogar tipo del INDEC (varón de 35, mujer de 31, un hijo de 5 y una hija de 8) equivale a <strong>3,09 adultos equivalentes</strong>.</p>
        ${eq(`CBA del hogar = CBA por adulto equivalente × adultos equivalentes &nbsp;&nbsp; CBT = CBA × inversa del coeficiente de Engel`)}
        ${lab(0)}
        <h2>Necesidades Básicas Insatisfechas (NBI)</h2>
        <p>Mide la pobreza <strong>estructural</strong>, no solo la falta de ingresos. Un hogar tiene NBI si presenta alguna de estas carencias: niños en edad escolar que no asisten a la escuela, falta de servicios públicos, malas condiciones sanitarias (sin agua potable ni cañería para desechos), hacinamiento crítico o vivienda precaria, desnutrición, o baja capacidad de alcanzar un consumo mínimo.</p>
        ${table(['Pobreza', 'Se mide con', 'Cambia…'], [['<strong>Coyuntural</strong>', 'Ingresos vs. CBA y CBT', 'Rápido: con la inflación, los salarios y el empleo'], ['<strong>Estructural</strong>', 'NBI: acceso a servicios (agua, electricidad, gas), educación, salud, vivienda, seguridad', 'Lento: requiere inversión e infraestructura']])}
        ${note('Las diapositivas muestran que la pobreza es mayor en los chicos (41,3 % de las personas de 0 a 14 años vivía en hogares pobres) que en los mayores de 65 (9,7 %), y que varía por región (Noreste y Cuyo, por encima del 32 %). Consultá el último informe semestral del INDEC para los datos actualizados.', 'tip')}`,
      labs: [{
        type: 'calc', title: '¿Este hogar es pobre o indigente?', intro: 'Los valores de las canastas son <strong>ilustrativos</strong>: reemplazalos por los del último informe del INDEC para tu región.',
        fields: [{ id: 'ae', label: 'Adultos equivalentes del hogar', value: 3.09 }, { id: 'cba', label: 'CBA por adulto equivalente ($/mes)', value: 160000 }, { id: 'engel', label: 'Inversa del coef. de Engel (CBT/CBA)', value: 2.2 }, { id: 'ing', label: 'Ingreso total del hogar ($/mes)', value: 900000 }],
        run: (v) => {
          const a = v.cba * v.ae, t = a * v.engel;
          const st = v.ing < a ? '✘ INDIGENTE: no cubre ni la canasta alimentaria.' : v.ing < t ? '⚠ POBRE (no indigente): cubre los alimentos pero no la canasta total.' : '✔ No pobre: cubre la canasta básica total.';
          return `CBA del hogar (línea de indigencia): $${num(a, 0)}\nCBT del hogar (línea de pobreza):    $${num(t, 0)}\nIngreso del hogar:                  $${num(v.ing, 0)}\n\n${st}\nBrecha respecto de la CBT: ${num((v.ing / t - 1) * 100, 1)} %`;
        },
      }],
      quiz: [
        { q: 'Un hogar es indigente si su ingreso no cubre…', o: ['la CBT', 'la CBA', 'el salario mínimo', 'el IPC'], a: 1, e: 'La canasta alimentaria.' },
        { q: 'La CBT se obtiene…', o: ['sumando todas las canastas del país', 'ampliando la CBA con bienes y servicios no alimentarios', 'con el PIB per cápita', 'con el Gini'], a: 1, e: 'Vestimenta, transporte, educación, salud…' },
        { q: 'Los ingresos de los hogares para medir pobreza salen de…', o: ['la ENGHo', 'la EPH', 'el censo económico', 'el BCRA'], a: 1, e: 'Encuesta Permanente de Hogares.' },
        { q: 'El método NBI mide pobreza…', o: ['coyuntural', 'estructural', 'monetaria', 'futura'], a: 1, e: 'Acceso a vivienda, servicios, educación.' },
        { q: 'Si la CBA por adulto equivalente es $100.000, ¿cuánto es para un hogar de 3,09 adultos equivalentes?', o: ['$100.000', '$309.000', '$400.000', '$32.362'], a: 1, e: '100.000 × 3,09.' },
      ],
      sources: [{ title: 'Diapositivas del Tema XV', ref: 'Cátedra de Economía', points: ['EPH, CBA y CBT; líneas de indigencia y pobreza; NBI; pobreza estructural y coyuntural.'] }],
    },

    {
      id: 'lorenz-gini',
      module: 't15',
      title: 'Curva de Lorenz y coeficiente de Gini',
      keywords: 'curva lorenz coeficiente índice gini desigualdad distribución ingreso quintiles deciles igualdad perfecta área cálculo trapecios tucumán cepal',
      tldr: 'La <mark>curva de Lorenz</mark> muestra qué porcentaje del ingreso recibe cada porcentaje acumulado de la población, ordenada de más pobre a más rica. El <mark>coeficiente de Gini</mark> es el área entre la diagonal de igualdad y la curva, dividida por el área total bajo la diagonal: va de <strong>0</strong> (igualdad perfecta) a <strong>1</strong> (desigualdad máxima).',
      goals: ['Construir una curva de Lorenz a partir de quintiles.', 'Calcular el Gini con la fórmula de trapecios.', 'Interpretar el Gini.'],
      body: `
        <h2>La curva de Lorenz</h2>
        <p>Se ordena a la población de menor a mayor ingreso y se grafica, en el eje X, el % acumulado de población y, en el Y, el % acumulado del ingreso que recibe. Si todos ganaran lo mismo, el 20 % de la población tendría el 20 % del ingreso: la curva sería la <strong>diagonal de igualdad perfecta</strong>. Cuanto más se aleja la curva de la diagonal, más desigual es la distribución.</p>
        ${lab(0)}
        <h2>El coeficiente de Gini</h2>
        ${eq(`G = ${frac('A', 'A + B')}`, 'Definición')}
        <p>A es el área entre la diagonal y la curva; A + B, el triángulo bajo la diagonal (que vale ½). Con datos por grupos (quintiles, deciles) se calcula con trapecios:</p>
        ${eq(`G = 1 − Σ (X<sub>k</sub> − X<sub>k−1</sub>) · (Y<sub>k</sub> + Y<sub>k−1</sub>)`, 'Cálculo (X e Y acumulados, en proporciones)')}
        <h3>Ejemplo paso a paso</h3>
        ${table(['Quintil', '% del ingreso', 'X<sub>k</sub> acumulado', 'Y<sub>k</sub> acumulado', '(X<sub>k</sub> − X<sub>k−1</sub>)(Y<sub>k</sub> + Y<sub>k−1</sub>)'], [['1', '5 %', '0,2', '0,05', '0,2 × (0,05 + 0) = 0,010'], ['2', '10 %', '0,4', '0,15', '0,2 × (0,15 + 0,05) = 0,040'], ['3', '15 %', '0,6', '0,30', '0,2 × (0,30 + 0,15) = 0,090'], ['4', '22 %', '0,8', '0,52', '0,2 × (0,52 + 0,30) = 0,164'], ['5', '48 %', '1,0', '1,00', '0,2 × (1,00 + 0,52) = 0,304'], ['', '', '', '<strong>Σ</strong>', '<strong>0,608</strong>']])}
        <p>G = 1 − 0,608 = <strong>0,392</strong>. El 20 % más rico recibe 48/5 = 9,6 veces lo que el 20 % más pobre.</p>
        ${table(['Gini', 'Lectura'], [['0', 'Igualdad perfecta'], ['Menos de 0,30', 'Distribución bastante igualitaria (países nórdicos)'], ['0,40 a 0,50', 'Desigualdad media-alta (gran parte de América Latina)'], ['1', 'Una persona se lleva todo']])}
        ${note('El Gini resume la desigualdad en un número, pero dos curvas de Lorenz distintas que se cruzan pueden tener el mismo Gini. En el parcial pueden pedir dibujar la curva <em>y</em> calcular el coeficiente: practicá con la tabla.', 'exam')}
        <h2>TP 6, ejercicio 7: la pobreza en América Latina</h2>
        <p>El TP pide leer el informe de la CEPAL 2024 sobre pobreza en América Latina y opinar vinculándolo con la materia. Un buen análisis usa los conceptos del segundo parcial: <strong>pobreza por ingresos</strong> (líneas de pobreza y de indigencia), <strong>desigualdad</strong> (Gini y la región como una de las más desiguales del mundo), la relación con el <strong>crecimiento del PIB</strong> (crecer ayuda, pero no alcanza si la distribución no mejora), la <strong>inflación</strong> (que golpea más a quienes tienen ingresos fijos y ahorran en efectivo) y el rol del <strong>Estado</strong> (función de equidad: transferencias, educación, salud; Tema II).</p>`,
      labs: [{ type: 'lorenz', title: 'Construí una curva de Lorenz', intro: 'Mové la participación de cada quintil en el ingreso total (se normaliza para sumar 100 %). El área A, entre la diagonal y la curva, es la desigualdad.', q: [5, 10, 15, 22, 48] }],
      quiz: [
        { q: 'Si todos tuvieran el mismo ingreso, la curva de Lorenz sería…', o: ['una horizontal', 'la diagonal', 'una vertical', 'una curva en U'], a: 1, e: 'Cada x % de la población tendría el x % del ingreso.' },
        { q: 'Un Gini de 0 significa…', o: ['desigualdad máxima', 'igualdad perfecta', 'pobreza cero', 'que no hay datos'], a: 1, e: 'Va de 0 a 1.' },
        { q: 'G = A/(A + B). ¿Qué es A?', o: ['El área bajo la curva de Lorenz', 'El área entre la diagonal y la curva de Lorenz', 'El área total del cuadrado', 'El ingreso del quintil más rico'], a: 1, e: 'Cuanto mayor A, más desigualdad.' },
        { q: 'Si la curva de Lorenz se aleja de la diagonal, el Gini…', o: ['baja', 'sube', 'no cambia', 'se vuelve negativo'], a: 1, e: 'Más desigualdad.' },
        { q: 'Quintiles con 4, 8, 13, 22 y 53 % del ingreso. ¿Cuánto más recibe el 20 % más rico que el más pobre?', o: ['53 veces', '13,25 veces', '4 veces', '49 veces'], a: 1, e: '53/4.' },
      ],
      sources: [{ title: 'Diapositivas del Tema XV', ref: 'Cátedra de Economía', points: ['Curva de Lorenz como representación gráfica del Gini; cálculo; Gini de Argentina y del aglomerado Gran Tucumán–Tafí Viejo.'] }],
    },

    {
      id: 'desigualdad-a-fondo',
      module: 't15',
      title: 'Umbrales, pobreza estructural y cómo se mide la desigualdad',
      keywords: 'umbral línea de indigencia pobreza necesidades energéticas proteicas población de referencia engho incidencia hogares personas pobreza estructural coyuntural nbi desigualdad medición quintiles relación gini lorenz problemas de medición transferencias en especie ciclo de vida ingreso transitorio permanente movilidad económica utilitarismo rawls velo de ignorancia maximin libre albedrío nozick políticas salario mínimo asistencia social impuesto negativo',
      tldr: 'La pobreza por ingresos se mide con <mark>umbrales</mark>: la línea de indigencia (CBA, que cubre un mínimo de energía y proteínas) y la de pobreza (CBT). La <mark>pobreza estructural</mark> es otra cosa: carencias persistentes de vivienda, servicios, educación o salud, que mide el método NBI. La <mark>desigualdad</mark> no se mide con un umbral sino comparando cómo se reparte el ingreso: quintiles, curva de Lorenz y Gini, con límites que conviene conocer.',
      goals: ['Explicar qué es un umbral y cómo se construyen las líneas de indigencia y pobreza.', 'Distinguir pobreza coyuntural (ingresos) de estructural (NBI) con ejemplos.', 'Explicar qué es la desigualdad y cómo se mide, con sus problemas de medición.', 'Conocer los enfoques sobre la redistribución y las políticas contra la pobreza.', 'Armar la respuesta a la pregunta del 2do parcial 2025.'],
      body: `
        ${note('2do parcial 2025: “<em>Defina pobreza e indigencia. Explique cuáles son sus umbrales. ¿Qué es la pobreza estructural? ¿Qué es y cómo se mide la desigualdad?</em>”. El 2do parcial 2024 y el recuperatorio de diciembre 2024 preguntaron lo mismo, más el índice de Gini “conceptual y gráficamente”.', 'exam')}
        <h2>Los umbrales</h2>
        <p>Un <strong>umbral</strong> es un valor límite: de un lado quedan los hogares que pueden satisfacer un conjunto de necesidades consideradas esenciales y del otro los que no. El INDEC define dos, a partir de los ingresos que releva la Encuesta Permanente de Hogares:</p>
        ${table(['Umbral', 'Qué cubre', 'Cómo se construye', 'Quién queda debajo'], [
          ['<strong>Línea de indigencia</strong>', 'Un umbral mínimo de <strong>necesidades energéticas y proteicas</strong>', 'Canasta Básica Alimentaria (CBA) de costo mínimo, según los hábitos de consumo de una población de referencia (ENGHo 2004/05), valorizada cada mes con los precios del IPC', '<strong>Indigentes</strong>: su ingreso no alcanza para comer lo mínimo'],
          ['<strong>Línea de pobreza</strong>', 'Necesidades alimentarias <strong>y no alimentarias</strong> esenciales', 'Canasta Básica Total (CBT) = CBA ampliada con vestimenta, transporte, educación, salud, etc. (CBA × inversa del coeficiente de Engel)', '<strong>Pobres</strong>: su ingreso no alcanza para la canasta total'],
        ])}
        <ul>
          <li>Las canastas se expresan por <strong>adulto equivalente</strong>: cada integrante del hogar pesa según su edad y sexo (varón de 30 a 60 años = 1).</li>
          <li>La <strong>incidencia</strong> de la pobreza es la proporción de hogares (o de personas) cuyo ingreso no supera la CBT; la de indigencia, la de los que no superan la CBA. Todo indigente es pobre; no todo pobre es indigente.</li>
          <li>Como la CBA y la CBT se actualizan con los precios, la pobreza por ingresos <strong>reacciona rápido</strong> a la inflación y a los salarios.</li>
        </ul>
        <h2>Pobreza coyuntural y pobreza estructural</h2>
        <p>El método de las <strong>Necesidades Básicas Insatisfechas (NBI)</strong> “permite la delimitación de grupos de pobreza estructural y representa una alternativa a la identificación de la pobreza considerada únicamente como insuficiencia de ingresos” (diapositivas del Tema XV). Un hogar tiene NBI si presenta alguna de estas carencias: chicos en edad escolar que no van a la escuela, falta de servicios públicos, desnutrición, malas condiciones sanitarias (sin agua potable ni cañería para los desechos), hacinamiento crítico o vivienda precaria, o baja capacidad para alcanzar niveles mínimos de consumo.</p>
        ${table(['', 'Pobreza coyuntural', 'Pobreza estructural'], [
          ['Qué mide', 'Falta de <strong>ingresos</strong> en un momento dado', 'Carencias <strong>persistentes</strong> en las condiciones de vida'],
          ['Con qué se mide', 'Ingresos (EPH) contra CBA y CBT', 'NBI: acceso a servicios (agua, electricidad, gas), educación, salud, vivienda, seguridad'],
          ['Qué la cambia', 'Inflación, salarios, empleo, transferencias: cambia en meses', 'Inversión en infraestructura, vivienda, escuelas, hospitales: cambia en años'],
          ['Ejemplo', 'Una familia que perdió el empleo este año pero tiene casa con servicios', 'Una familia que vive hace años en una vivienda precaria, sin agua de red, con chicos que no terminan la escuela'],
        ])}
        <p>Las dos miradas se combinan: un hogar puede salir de la pobreza por ingresos (consiguió trabajo) y seguir con NBI (sigue sin cloacas). Por eso la cátedra presenta la pobreza estructural como la que requiere políticas de largo plazo.</p>
        <h2>Qué es la desigualdad</h2>
        <p>La <strong>pobreza</strong> mira a los que están debajo de un umbral; la <strong>desigualdad</strong> mira <strong>cómo se reparte</strong> el ingreso entre todos. Un país puede reducir la pobreza (si crece y suben todos los ingresos) sin reducir la desigualdad, y al revés. Se refiere a la distribución <strong>personal</strong> de la renta (Tema II): cuánto recibe cada hogar, sin importar de qué factor viene el ingreso.</p>
        <h2>Cómo se mide</h2>
        ${table(['Herramienta', 'Cómo se arma', 'Qué dice'], [
          ['<strong>Distribución por quintiles o deciles</strong>', 'Se ordena a los hogares de menor a mayor ingreso y se agrupa en cinco (o diez) grupos iguales; se calcula qué % del ingreso total recibe cada grupo', 'Cuánto recibe el 20 % más pobre y el 20 % más rico'],
          ['<strong>Relación entre extremos</strong>', 'Ingreso del quintil (o decil) más rico / ingreso del más pobre', '“El 20 % más rico recibe 9,6 veces lo que el 20 % más pobre”'],
          ['<strong>Curva de Lorenz</strong>', '% acumulado de población (eje X) contra % acumulado del ingreso (eje Y)', 'Cuanto más lejos de la diagonal, más desigualdad'],
          ['<strong>Coeficiente de Gini</strong>', 'Área entre la diagonal y la curva de Lorenz sobre el área total bajo la diagonal: G = A / (A + B) = 1 − Σ(X<sub>k</sub> − X<sub>k−1</sub>)(Y<sub>k</sub> + Y<sub>k−1</sub>)', 'Un número entre 0 (igualdad perfecta) y 1 (una persona se lleva todo)'],
        ])}
        <p>La lección anterior tiene el cálculo del Gini paso a paso y el laboratorio para construir la curva de Lorenz.</p>
        <h3>Los problemas de medir la desigualdad (Mankiw, cap. 20)</h3>
        <p>Los datos se basan en el ingreso anual de los hogares, pero a las personas les importa su nivel de vida. Por eso las medidas exageran o subestiman la desigualdad:</p>
        <ul>
          <li><strong>Transferencias en especie</strong>: los bienes y servicios que reciben los más pobres sin pasar por su ingreso monetario (alimentos, medicamentos, vivienda) no se cuentan. La pobreza medida queda más alta de lo que es.</li>
          <li><strong>Ciclo de vida</strong>: el ingreso es bajo cuando uno es joven y estudia, máximo alrededor de los 50 y cae con la jubilación. Como se puede pedir prestado y ahorrar, parte de la desigualdad anual no es desigualdad de nivel de vida.</li>
          <li><strong>Ingreso transitorio y permanente</strong>: una helada o un año malo bajan el ingreso de un año; las familias consumen según su ingreso normal (permanente), que es menos desigual que el anual.</li>
          <li><strong>Movilidad económica</strong>: si las personas se mueven entre quintiles a lo largo de la vida, la foto de un año exagera la desigualdad persistente.</li>
        </ul>
        <h2>¿Debe el Estado redistribuir? Tres enfoques</h2>
        ${table(['Enfoque', 'Autor', 'Idea', 'Cuánta redistribución'], [
          ['<strong>Utilitarismo</strong>', 'Bentham y Mill', 'Maximizar la utilidad total; un peso vale más para un pobre que para un rico (utilidad marginal decreciente)', 'Bastante, pero no la igualdad total: quitaría incentivos y bajaría el ingreso total'],
          ['<strong>Liberalismo</strong>', 'John Rawls (1971)', 'Elegir las reglas detrás de un “velo de ignorancia”, sin saber qué lugar nos tocará. Criterio <strong>maximin</strong>: maximizar el bienestar del que está peor. La redistribución funciona como un seguro social', 'Más que el utilitarismo'],
          ['<strong>Liberalismo del libre albedrío</strong> (libertarismo)', 'Robert Nozick (1974)', 'Solo los individuos ganan ingresos; el Estado debe castigar delitos y hacer cumplir contratos, no redistribuir. Importa que el proceso sea justo, no el resultado', 'Ninguna: igualdad de oportunidades, no de resultados'],
        ])}
        <p>Es una discusión <strong>normativa</strong>: la economía mide y compara, pero cuánto redistribuir depende de juicios de valor (Tema II).</p>
        <h2>Políticas contra la pobreza</h2>
        ${table(['Política', 'A favor', 'En contra'], [
          ['<strong>Salario mínimo</strong>', 'Sube el ingreso de los trabajadores de menor salario', 'Si supera al de equilibrio, puede generar desempleo (Tema V); depende de la elasticidad de la demanda de trabajo'],
          ['<strong>Asistencia social</strong> (transferencias a hogares)', 'Llega directo a quien lo necesita', 'Puede desalentar el trabajo si se pierde al conseguir empleo'],
          ['<strong>Impuesto negativo sobre la renta</strong>', 'Los de mayores ingresos pagan; los de menores reciben un subsidio que baja gradualmente al ganar más', 'Costo fiscal'],
          ['<strong>Transferencias en especie</strong>', 'Asegura que se use en lo esencial (alimentos, salud)', 'Quita libertad de elección y es más caro de administrar'],
        ])}
        ${note('Un buen cierre para el parcial: la pobreza por ingresos se reduce con crecimiento, empleo y estabilidad de precios (la inflación golpea más a quienes tienen ingresos fijos y ahorran en efectivo, Tema XIV); la estructural, con inversión sostenida en infraestructura, vivienda, educación y salud; la desigualdad, con políticas de la función de <strong>equidad</strong> del Estado (impuestos progresivos y transferencias), cuidando el costo en eficiencia.', 'tip')}`,
      quiz: [
        { q: 'La línea de indigencia busca establecer si los hogares cubren…', o: ['todas sus necesidades', 'un umbral mínimo de necesidades energéticas y proteicas', 'el salario mínimo', 'la canasta del IPC'], a: 1, e: 'Es la Canasta Básica Alimentaria.' },
        { q: 'La pobreza estructural se identifica con el método…', o: ['de la línea de pobreza', 'de las Necesidades Básicas Insatisfechas', 'del coeficiente de Gini', 'del IPC'], a: 1, e: 'Mide carencias persistentes, no solo ingresos.' },
        { q: '¿Cuál es un indicador de NBI?', o: ['Que el ingreso no alcance la CBT', 'Niños en edad escolar que no asisten a la escuela', 'Que el hogar tenga deudas', 'Que el Gini supere 0,4'], a: 1, e: 'Junto con hacinamiento, falta de servicios, malas condiciones sanitarias…' },
        { q: 'La pobreza coyuntural reacciona rápido a…', o: ['la construcción de cloacas', 'la inflación y los salarios', 'la educación de largo plazo', 'el clima'], a: 1, e: 'Porque se mide con ingresos contra canastas que se actualizan con los precios.' },
        { q: 'Un país crece y todos los ingresos suben un 10 %. Con seguridad…', o: ['baja la desigualdad', 'el Gini no cambia y la pobreza por ingresos tiende a bajar', 'sube el Gini', 'no cambia la pobreza'], a: 1, e: 'La distribución relativa es la misma; más hogares superan la CBT.' },
        { q: 'El criterio maximin de Rawls propone…', o: ['maximizar la utilidad total', 'maximizar el bienestar de quien está peor', 'no redistribuir', 'igualar todos los ingresos'], a: 1, e: 'Elegido detrás del velo de ignorancia.' },
        { q: '¿Por qué el ciclo de vida exagera la desigualdad anual?', o: ['Porque los jóvenes y los jubilados ganan poco en un año aunque su nivel de vida a lo largo de la vida sea similar', 'Porque los ricos no declaran', 'Porque el Gini es incorrecto', 'Porque hay inflación'], a: 0, e: 'Se puede ahorrar y pedir prestado para suavizar el consumo.' },
      ],
      sources: [
        { title: 'Diapositivas del Tema XV', ref: 'Cátedra de Economía', points: ['Línea de indigencia: umbral mínimo de necesidades energéticas y proteicas; población de referencia de la ENGHo 2004/05.', 'NBI como delimitación de la pobreza estructural; pobreza estructural y coyuntural.'] },
        { title: 'Principios de Economía', ref: 'Mankiw, cap. 20', points: ['Medición de la desigualdad y la pobreza; problemas de medición: transferencias en especie, ciclo de vida, ingreso transitorio y permanente, movilidad económica.', 'Utilitarismo, liberalismo (Rawls) y liberalismo del libre albedrío (Nozick).', 'Políticas para reducir la pobreza.'] },
      ],
    },
  );
})();
