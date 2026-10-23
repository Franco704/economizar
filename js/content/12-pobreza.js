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
  );
})();
