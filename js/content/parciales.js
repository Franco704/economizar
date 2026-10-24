/* Parciales reales de la cátedra (carpeta Parciales/): registro de cada examen con sus preguntas y la resolución de cada una,
   cargada como ejercicio en la lección que le corresponde. exam: ['1p-2024#5'] = pregunta 5 del 1er parcial 2024.
   Varias preguntas salen textuales de Blanco (V/F, “sólo una respuesta es cierta”, temas de discusión) y de los TP. */
(() => {
  const { LESSONS, EXAMS, h } = window.GUIDE;
  const { table, note, chart, eq, frac, num, plot, flow } = h;
  const lesson = (id) => { const l = LESSONS.find((x) => x.id === id); if (!l) throw new Error(`Lección inexistente: ${id}`); return l; };
  const add = (id, ...exs) => { const l = lesson(id); l.exercises = [...(l.exercises || []), ...exs]; };
  // Un ejercicio de TP que se tomó tal cual en un parcial: se le agregan las etiquetas
  const tagTP = (official, ...exam) => {
    const ex = LESSONS.flatMap((l) => l.exercises || []).find((e) => e.official === official);
    if (!ex) throw new Error(`TP inexistente: ${official}`);
    ex.exam = [...(ex.exam || []), ...exam];
  };
  const D = (x) => 9 - 0.8 * x, S = (x) => 1 + 0.8 * x;
  const fpp = (a, b) => (x) => b * Math.sqrt(Math.max(0, 1 - (x / a) ** 2));

  EXAMS.push(
    { id: '1p-2022-sis', unit: 'p1', short: '1P 2022 Sistemas', title: 'Primera evaluación parcial 2022, Ingeniería en Sistemas', sub: '28/10/2022',
      items: [['1', 'Costo de oportunidad; costos explícitos e implícitos; ventaja comparativa'], ['2', 'Efecto sobre la demanda: baja el complementario, renta con bien inferior, baja el sustituto, sube el precio del bien. Graficar'], ['3', 'Xd = −1,5Px − R + Py − 2Pz + 30 y Xo = Px − W − PM: bien normal o inferior, bienes relacionados, equilibrio y elasticidades'], ['4', 'Precio mínimo: definir, graficar, a quién está dirigido y consecuencias'], ['5', 'Fábrica de camisas: completar la tabla de producción con K = 8']] },
    { id: '1p-2022-3k2', unit: 'p1', short: '1P 2022 3K2', title: 'Primer parcial 2022, 3K2', sub: '21/10/2022',
      items: [['1', 'Ley de rendimientos decrecientes: explicación conceptual y gráfica (1 punto)'], ['2', 'Efecto de las nuevas tecnologías en la FPP. Justificar y graficar (1,5 puntos)'], ['3', 'Al aumentar la renta, la demanda del bien X se desplaza a la derecha si el bien es… (2 puntos)'], ['4', 'Si en un mercado existe exceso de demanda, el precio… (1,5 puntos)'], ['5', 'Xd = 40 − 2PX y Xo = PX − 5: equilibrio, gráfico y exceso de demanda a PX = 10 (2 puntos)'], ['6', '¿Es posible que los años de buenas cosechas sean perjudiciales para los agricultores? (2 puntos)']] },
    { id: '1p-2022-civ', unit: 'p1', short: '1P 2022 Civil', title: 'Primer parcial 2022, Ingeniería Civil', sub: '2022',
      items: [['1', '¿Los países ricos y los pobres enfrentan el problema de la escasez?'], ['2', 'Desplazamiento de la FPP en cuatro situaciones. Graficar'], ['3', 'Mercado del arroz: salarios agrícolas, renta (bien inferior) y semilla más productiva'], ['4', '¿Qué es un precio máximo? ¿A quién beneficia?'], ['5', 'Xd = 60 − Px, Xo = Px + 20 y precio máximo de 15'], ['6', '“Tengo que conseguirlo a cualquier precio”: ¿cómo es la demanda?'], ['7', 'Elasticidad ingreso +2, 1.000 unidades mensuales y la renta sube 3 %'], ['8', 'Si el gasto en un bien aumenta cuando baja su precio…']] },
    { id: '1p-2023', unit: 'p1', short: '1P 2023', title: 'Primer parcial 2023', sub: 'Comisión 3K3',
      items: [['1', 'Diagrama de flujo circular en una economía mixta'], ['2', 'Clasificar afirmaciones en positivas o normativas'], ['3', 'FPP: ¿se desplaza a la derecha, a la izquierda o no se desplaza? (ocho casos)'], ['4', 'Ventaja comparativa: ¿exportar o importar?'], ['5', 'V o F: sube la renta y X es normal, ¿qué pasa con el equilibrio?'], ['6', 'La cantidad cae 30 % y el ingreso sube 15 %: ¿elástica o inelástica?']] },
    { id: '1p-2024', unit: 'p1', short: '1P 2024', title: 'Primer parcial 2024', sub: '01/11/2024 · Comisión 3K3',
      items: [['1', 'Diagrama de flujo circular en una economía mixta'], ['2', 'FPP de armas y alimentos con tabla: gráfico, puntos fuera y dentro, forma y costo de oportunidad'], ['3', 'Sube la renta y X es inferior: variación del equilibrio. Justificar y graficar'], ['4', '¿Es posible que los años de buenas cosechas sean perjudiciales para los agricultores?'], ['5', 'El precio es inferior al punto de nivelación: ¿qué pasa a largo plazo?']] },
    { id: '1p-2025-t3', unit: 'p1', short: '1P 2025 (T3)', title: 'Primer parcial 2025, 3K (tema 3)', sub: '2025',
      items: [['1', 'FPP de alimentos y vestidos: mejora la tecnología de vestidos y se pueden producir más alimentos'], ['2', 'El gerente baja los precios 25 % y vende 20 % más: ¿es correcto?'], ['3', '¿En qué casos un aumento de la demanda producirá un aumento en los ingresos?'], ['4', 'Relación entre productividad y costos marginales; etapas de la productividad'], ['5', 'Nivel de producción de máximo beneficio en competencia perfecta']] },
    { id: '1p-2025-b', unit: 'p1', short: '1P 2025 (otro tema)', title: 'Primer parcial 2025, 3K (otro tema)', sub: '2025', note: 'La foto está cortada en el margen derecho: los enunciados 1 y 5 se completaron con lo legible.',
      items: [['1', '¿Por qué no es posible estar fuera de la FPP? ¿Cómo sería posible…?'], ['2', 'El gerente propone subir los precios: la cantidad subió 20 % cuando los precios bajaron 25 %'], ['3', '¿En qué casos un aumento de la demanda producirá un aumento en los ingresos?'], ['4', 'Relación entre productividad media y costo total medio. ¿Qué es el óptimo técnico?'], ['5', 'Precio inferior al punto de nivelación: ¿beneficios o pérdidas a corto plazo? ¿Cierran?']] },
    { id: '1p-2025-c', unit: 'p1', short: '1P 2025 (Carlos)', title: 'Primer parcial 2025 (otro tema)', sub: '2025',
      items: [['1', 'Carlos viaja de Tucumán a Córdoba: costo de oportunidad del avión y del colectivo'], ['2', 'Bajan los precios 15 % y la cantidad sube 20 %: ¿es correcto?'], ['3', '¿En qué caso una disminución de la oferta producirá un aumento en los ingresos?'], ['4', '¿El mínimo del costo medio puede darse al mismo nivel que el mínimo del CVMe?'], ['5', 'Precio superior al punto de nivelación: comportamiento a largo plazo']] },
    { id: 'rec-2024', unit: 'int', short: 'Recup. 2024', title: 'Recuperatorio 1.º/2.º parcial e integral 2024', sub: 'Comisión 6R1', note: 'La foto muestra solo la primera hoja.',
      items: [['1', 'FPP de alimentos y vestidos: ¿por qué una mejora en vestidos permite producir más alimentos?'], ['2', 'Sube la renta y X es inferior: variación del equilibrio'], ['3', 'Precio inferior al punto de nivelación: largo plazo'], ['4', 'La cantidad cae 30 % y el ingreso sube 15 %: ¿elástica o inelástica?']] },
    { id: 'rec-dic-2024', unit: 'int', short: 'Recup. dic. 2024', title: 'Recuperación de Economía, diciembre 2024', sub: 'Diciembre 2024',
      items: [['1', 'Demanda rectilínea: ¿en qué punto los vendedores tienen mayores ingresos?'], ['2', '¿Cuáles son los factores que afectan la elasticidad de un bien?'], ['3', 'Forma de la FPP, ley de rendimientos decrecientes y costo de oportunidad'], ['4', 'Precio inferior al punto de nivelación: comportamiento a largo plazo'], ['5', '¿De qué depende el proceso de multiplicación de los depósitos?'], ['6', 'Herramientas del Banco Central para una política monetaria expansiva y consecuencias de corto plazo'], ['7', 'Defina el PIB y los enfoques con los que se puede medir'], ['8', 'Pobreza e indigencia; índice de Gini conceptual y gráficamente']] },
    { id: '2p-2024-6r1', unit: 'p2', short: '2P 2024 6R1', title: 'Segundo parcial 2024', sub: 'Comisión 6R1',
      items: [['1', 'Describa y explique las funciones del dinero'], ['2', '¿De qué depende el proceso de multiplicación de los depósitos?'], ['3', 'La base monetaria aumentará si…'], ['4', 'Pobreza e indigencia, umbrales y desigualdad'], ['5', 'Precio inferior al punto de nivelación: largo plazo']] },
    { id: '2p-2024-3k3', unit: 'p2', short: '2P 2024 3K3', title: 'Segundo parcial 2024', sub: 'Comisión 3K3',
      items: [['1', 'V o F sobre el PIB (tres afirmaciones)'], ['2', 'Defina PIB; nominal y real; enfoques para medirlo'], ['3', 'V o F sobre IPC e inflación (tres afirmaciones)'], ['4', 'V o F sobre activos líquidos y demanda de dinero']] },
    { id: '2p-2025', unit: 'p2', short: '2P 2025', title: 'Segundo parcial 2025', sub: '27/11/2025',
      items: [['1', 'Creación de dinero: Jorge, $15.000.000, coeficiente de caja 10 % y efectivo 20 %'], ['2', 'Instrumentos del Banco Central, tipos de política monetaria y consecuencias de corto plazo'], ['3', 'Inflación: definición, cálculo, diferencias entre métodos, causas, consecuencias, ganadores y perdedores'], ['4', 'Pobreza e indigencia, umbrales, pobreza estructural y desigualdad']] },
    { id: '2p-2025-b', unit: 'p2', short: '2P otra versión', title: 'Segundo parcial, otra versión', sub: '2025/2026', note: 'La primera pregunta aparece sin número en la foto.',
      items: [['1', '¿Cuáles son las funciones del dinero?'], ['2', 'Creación de dinero: coeficiente de caja 15 % y efectivo 25 %; el coeficiente baja al 10 %'], ['3', 'Instrumentos del Banco Central, tipos de política y consecuencias de corto plazo'], ['4', 'Inflación: definición, cálculo, diferencias, causas, consecuencias, ganadores y perdedores'], ['5', 'Ecuación cuantitativa: oferta monetaria 0,9, PIB nominal 15 y PIB real 5 (billones)']] },
    { id: 'recop', unit: 'p1', short: 'Recopilación', title: 'Pregunta suelta de la recopilación de parciales', sub: 'Sin fecha', note: 'Aparece en el PDF que junta resoluciones (es el ejercicio 3.8.3 de Blanco).',
      items: [['8', 'La curva de demanda es Xd = 150 − P: precios con elasticidad 0,5, 1 y 2']] },
  );

  // ---------- Ejercicios de TP que se tomaron tal cual ----------
  tagTP('5.5', '1p-2022-sis#5');
  tagTP('5.9', '1p-2025-c#4');

  // ---------- Tema II ----------
  add('que-es-la-economia', {
    exam: ['1p-2023#2'], level: 1, title: 'Afirmaciones positivas y normativas (1er parcial 2023)',
    prompt: '<p>Clasifique cada una de las siguientes afirmaciones en positivas o normativas y explíquelas: a) A corto plazo, la sociedad enfrenta una disyuntiva entre inflación y desempleo. b) Una reducción de la tasa a la que crece la cantidad de dinero que circula en la economía reducirá la tasa de inflación. c) La Reserva Federal de Estados Unidos debe reducir la tasa a la que crece la cantidad de dinero que circula en la economía. d) La sociedad debe exigir a los beneficiarios de la asistencia social que busquen trabajo. e) Impuestos menores provocan más trabajo y más ahorro.</p>',
    hints: ['Buscá el verbo: ¿describe o predice algo que se puede contrastar con datos, o recomienda?'],
    solution: { explain: `${table(['', 'Tipo', 'Por qué'], [
      ['a', '<strong>Positiva</strong>', 'Describe una relación (la curva de Phillips, décimo principio de Mankiw) que se puede contrastar con datos'],
      ['b', '<strong>Positiva</strong>', 'Predice causa y efecto: menos emisión, menos inflación (teoría cuantitativa). Podría ser falsa, pero se verifica con datos'],
      ['c', '<strong>Normativa</strong>', '“Debe”: es una recomendación de política, depende de qué objetivo se valore más'],
      ['d', '<strong>Normativa</strong>', '“Debe exigir”: juicio de valor sobre lo que es justo'],
      ['e', '<strong>Positiva</strong>', 'Afirma un efecto de los incentivos que se puede medir'],
    ])}<p>Las afirmaciones b) y c) muestran la diferencia: hablan de lo mismo, pero b) predice y c) recomienda. Un economista puede estar de acuerdo con b) y en desacuerdo con c), por ejemplo si cree que bajar la emisión causaría demasiado desempleo.</p>` },
  });
  add('flujo-circular', {
    exam: ['1p-2023#1', '1p-2024#1'], level: 2, title: 'El flujo circular en una economía mixta (1er parcial 2023 y 2024)',
    prompt: '<p>Dibuje un diagrama de flujo circular. Identifique las partes del modelo que corresponden al flujo de bienes y servicios y las que corresponden al flujo de dinero, suponiendo una economía mixta.</p>',
    hints: ['Cuatro cajas más el Estado. Dos tipos de línea.', 'Cada flecha lleva un nombre.'],
    solution: { explain: `<p>El diagrama es el de la lección (familias, empresas, mercado de bienes, mercado de factores y el Estado en el centro). La respuesta escrita que lo acompaña:</p>
      <ul>
        <li><strong>Flujo real (bienes, servicios y factores)</strong>, línea continua: las empresas entregan bienes y servicios a las familias a través del mercado de bienes; las familias entregan trabajo, tierra y capital a las empresas a través del mercado de factores. El Estado recibe bienes (compras públicas) y trabajo (empleados públicos) y devuelve bienes públicos.</li>
        <li><strong>Flujo monetario (dinero)</strong>, línea punteada y en sentido contrario: las familias gastan en consumo, que es el ingreso de las empresas; las empresas pagan salarios, alquileres, intereses y beneficios, que son las rentas de las familias.</li>
        <li><strong>Lo propio de la economía mixta</strong>: el Estado cobra impuestos a familias y empresas, gasta en bienes y servicios, paga sueldos, y entrega transferencias (jubilaciones, asignaciones) a las familias y subsidios a las empresas, estas dos últimas sin contraprestación.</li>
      </ul>
      <p>Cerrar con la idea central: el gasto de unos es el ingreso de otros, así que producción, gasto y renta son el mismo valor medido en distintos puntos del círculo.</p>
      ${note('Grilla de corrección orientativa: cajas y mercados correctos (2); sentidos de los flujos reales y monetarios (3); flechas rotuladas (2); el Estado con impuestos, gasto y transferencias (2); leyenda o texto que diga qué es real y qué es monetario (1).', 'tip')}` },
  });

  // ---------- Tema III ----------
  add('escasez-y-eleccion', {
    exam: ['1p-2025-c#1'], level: 2, title: 'Carlos: ¿avión o colectivo? (1er parcial 2025)',
    prompt: '<p>Al tomar un avión, Carlos puede viajar desde Tucumán a Córdoba en una hora. El mismo viaje tarda 5 horas en colectivo. El pasaje de avión cuesta $90.000 y el de colectivo, $30.000. Cuando no está viajando, Carlos puede trabajar y ganar $30.000 por hora. i) ¿Cuál es el costo de oportunidad de Carlos de viajar en colectivo? ii) ¿Y de viajar en avión? iii) ¿Cuál es el modo más barato?</p>',
    hints: ['El costo de oportunidad suma lo que paga (explícito) y lo que deja de ganar (implícito).'],
    solution: { explain: `${table(['', 'Pasaje (explícito)', 'Tiempo × $30.000 (implícito)', 'Costo de oportunidad'], [['Colectivo', '30.000', '5 × 30.000 = 150.000', '<strong>180.000</strong>'], ['Avión', '90.000', '1 × 30.000 = 30.000', '<strong>120.000</strong>']])}
      <p>i) <strong>$180.000</strong>; ii) <strong>$120.000</strong>; iii) el <strong>avión</strong>, aunque el pasaje sea tres veces más caro: el colectivo le hace perder cuatro horas de trabajo (120.000) para ahorrar 60.000 de pasaje.</p>
      <p>Comentario: para alguien que gana $10.000 por hora, el colectivo costaría 80.000 y el avión 100.000: le convendría el colectivo. El modo “más barato” depende del costo de oportunidad del tiempo de cada uno. Por eso quien tiene ingresos altos viaja más en avión.</p>` },
  });
  add('costos-explicitos-implicitos', {
    exam: ['1p-2022-sis#1'], level: 1, title: 'Costo de oportunidad, explícitos, implícitos y ventaja comparativa (1er parcial 2022, Sistemas)',
    prompt: '<p>Explique con sus propias palabras el concepto de costo de oportunidad y: a) suministre ejemplos de costos explícitos e implícitos; b) qué se denomina ventaja comparativa. Ejemplos.</p>',
    solution: { explain: `<p><strong>Costo de oportunidad</strong>: como los recursos (dinero, tiempo, factores) son escasos, elegir una opción obliga a renunciar a otras. El costo de oportunidad de una decisión es el valor de la <strong>mejor alternativa a la que se renuncia</strong>. Incluye lo que se paga y lo que se deja de ganar. Ejemplo: el costo de cursar Ingeniería no es solo el apunte y el colectivo, sino el sueldo que se podría cobrar trabajando esas horas.</p>
      <p><strong>a)</strong> ${table(['Costos explícitos (implican un pago)', 'Costos implícitos (no hay pago, sí renuncia)'], [['Sueldos de los empleados', 'Sueldo que el dueño deja de cobrar en otro trabajo'], ['Alquiler de un local', 'Alquiler que se deja de cobrar por usar un local propio'], ['Intereses de un préstamo', 'Intereses que deja de rendir el dinero propio invertido'], ['Insumos y servicios', 'Tiempo propio dedicado al negocio']])}</p>
      <p><strong>b) Ventaja comparativa</strong>: un país (o una persona) tiene ventaja comparativa en un bien si lo produce con <strong>menor costo de oportunidad</strong> que otro, aunque no sea el que menos recursos usa (eso es ventaja absoluta). Ejemplo de Ricardo: Inglaterra produce tela y vino con menos horas que Portugal, pero la tela le cuesta menos vino que a Portugal: tiene ventaja comparativa en tela, y Portugal en vino. Si cada uno se especializa en su ventaja comparativa e intercambian, ambos ganan. Otro ejemplo: una ingeniera que escribe más rápido que su asistente igual le delega la redacción, porque el costo de oportunidad de su hora es mucho mayor.</p>` },
  });
  add('ventaja-comparativa', {
    exam: ['1p-2023#4'], level: 1, title: '¿Exportar o importar? (1er parcial 2023)',
    prompt: '<p>Si un país tiene ventaja comparativa para producir un bien, ¿tendería a exportarlo o importarlo? Justifique su respuesta.</p>',
    solution: { explain: `<p><strong>Tendería a exportarlo.</strong> Tener ventaja comparativa significa producir ese bien con menor costo de oportunidad que los demás países: renuncia a menos de otros bienes por cada unidad. Le conviene especializarse en él, producir más de lo que consume y vender el resto, e <strong>importar</strong> los bienes en los que su costo de oportunidad es mayor.</p>
      <p>Con el ejemplo de Inglaterra y Portugal: el costo de 1 m de tela es 0,57 L de vino en Inglaterra y 1,06 L en Portugal. Inglaterra exporta tela; si la cambia a cualquier precio entre 0,57 y 1,06 L por metro, obtiene el vino más barato que produciéndolo, y Portugal obtiene tela más barata. Gracias al comercio, ambos pueden consumir por fuera de su propia FPP.</p>` },
  });
  add('frontera-posibilidades', {
    exam: ['1p-2025-b#1'], level: 1, title: '¿Por qué no es posible estar fuera de la FPP? (1er parcial 2025)',
    prompt: '<p>Explique por qué no es posible estar fuera de la Frontera de Posibilidades de Producción. Razone cómo sería posible alcanzar una combinación que hoy está fuera de ella.</p><p class="muted-s">El enunciado de la foto está cortado; se completó la segunda parte con lo que suele pedirse.</p>',
    solution: { explain: `<p>La FPP muestra las combinaciones <strong>máximas</strong> que puede producir una economía con los factores y la tecnología que tiene. Un punto fuera exigiría más recursos de los disponibles o una tecnología que todavía no existe: con 6 trabajadores no se puede producir lo que requiere 8. Por eso esos puntos son <strong>inaccesibles</strong>.</p>
      <p>Para llegar a una combinación que hoy está afuera hace falta <strong>crecimiento económico</strong>, que desplace la frontera hacia afuera:</p>
      <ul><li>más factores: más trabajo (crecimiento de la población activa), más capital físico (inversión, que obliga a resignar consumo presente) o más capital humano (educación);</li><li>mejor tecnología (investigación y desarrollo).</li></ul>
      <p>Además, con <strong>comercio internacional</strong>, un país puede <em>consumir</em> una combinación fuera de su FPP aunque no pueda <em>producirla</em>: se especializa según su ventaja comparativa e intercambia (Mankiw, cap. 3).</p>
      ${chart({ x: [0, 160], y: [0, 160], xl: 'Vestidos', yl: 'Alimentos', curves: [{ f: fpp(110, 110), dom: [0, 110], cls: 'c-fpp', label: 'FPP hoy' }, { f: fpp(140, 140), dom: [0, 140], cls: 'c-d', dash: true, label: 'FPP con crecimiento' }], points: [{ x: 95, y: 95, cls: 'c-err', label: 'hoy inaccesible' }] }, 'El punto queda afuera de la frontera actual y adentro de la que se alcanzaría con más recursos o mejor tecnología.')}` },
  });
  add('crecimiento-fpp',
    {
      exam: ['1p-2022-3k2#2'], level: 2, title: 'Nuevas tecnologías y FPP (1er parcial 3K2 2022)',
      prompt: '<p>¿Cuál es el efecto de las nuevas tecnologías en la curva de Fronteras de Posibilidades de Producción? Justifique y grafique.</p>',
      solution: { explain: `<p>Una nueva tecnología permite producir más con los mismos recursos: la frontera se desplaza <strong>hacia afuera</strong>. Cómo se mueve depende de a qué bienes afecte:</p>
        <div class="figs-2">
          ${plot({ x: [0, 150], y: [0, 150], h: 240, xl: 'A', yl: 'B', curves: [{ f: fpp(100, 100), dom: [0, 100], cls: 'c-fpp', ghost: true, label: 'FPP₀' }, { f: fpp(135, 100), dom: [0, 135], cls: 'c-fpp', label: 'FPP₁' }], alt: 'Mejora solo en A: la frontera rota sobre el eje de A' })}
          ${plot({ x: [0, 150], y: [0, 150], h: 240, xl: 'A', yl: 'B', curves: [{ f: fpp(100, 100), dom: [0, 100], cls: 'c-fpp', ghost: true, label: 'FPP₀' }, { f: fpp(130, 130), dom: [0, 130], cls: 'c-fpp', label: 'FPP₁' }], alt: 'Mejora en ambos bienes: la frontera se expande' })}
        </div>
        <ul>
          <li><strong>Mejora en un solo bien (A)</strong>: la frontera <strong>rota</strong> hacia afuera sobre el eje de A. El máximo de B no cambia (si todo se dedica a B, la mejora en A no sirve), pero en todos los demás puntos la nueva frontera queda por encima: como A requiere menos recursos, los que se liberan pueden ir a B.</li>
          <li><strong>Mejora en todos los bienes</strong>: la frontera se <strong>expande</strong> en ambos ejes.</li>
        </ul>
        <p>En los dos casos baja el costo de oportunidad de producir el bien que mejoró y se vuelven alcanzables combinaciones que antes eran inaccesibles: es crecimiento económico.</p>` },
    },
    {
      exam: ['1p-2025-t3#1', 'rec-2024#1'], level: 2, title: 'Vestidos mejora y hay más alimentos (1er parcial 2025 y recuperatorio 2024)',
      prompt: '<p>Considerando la frontera de posibilidades de producción entre alimentos y vestidos, se observa que, cuando mejora la tecnología en la producción de vestidos, la frontera se desplaza de tal manera que permite producir no solo más cantidades de vestidos, sino también mayor cantidad de alimentos para la misma cantidad de vestidos. ¿Cómo se puede explicar este hecho? Explique y grafique.</p>',
      hints: ['Pensá en los recursos que hacen falta para producir una cantidad fija de vestidos antes y después.'],
      solution: { explain: `${chart({ x: [0, 160], y: [0, 130], xl: 'Vestidos', yl: 'Alimentos', curves: [{ f: fpp(100, 100), dom: [0, 100], cls: 'c-fpp', ghost: true, label: 'FPP₀' }, { f: fpp(140, 100), dom: [0, 140], cls: 'c-fpp', label: 'FPP₁' }],
          points: [{ x: 60, y: fpp(100, 100)(60), cls: 'pl-old', label: 'A', pos: 'sw' }, { x: 60, y: fpp(140, 100)(60), cls: 'c-eq', label: 'B', pos: 'ne' }], vlines: [{ x: 60, cls: 'pl-faint' }], arrows: [{ from: [60, 82], to: [60, 88], cls: 'c-eq' }] },
          'Con la misma cantidad de vestidos (60), la nueva frontera permite más alimentos (de A a B). En el eje de alimentos las dos fronteras coinciden.')}
        <p>La mejora tecnológica en vestidos hace que la frontera <strong>rote hacia afuera sobre el eje de vestidos</strong>: el máximo de vestidos crece y el de alimentos no cambia (si no se producen vestidos, la mejora no se usa).</p>
        <p>¿Por qué hay más alimentos para la <strong>misma</strong> cantidad de vestidos? Porque ahora esa cantidad de vestidos se produce con <strong>menos recursos</strong> (menos trabajo, menos máquinas). Los recursos que se liberan pueden pasar a producir alimentos. Por eso, en cualquier punto que no sea el eje de alimentos, la nueva frontera queda por encima de la vieja: de A a B se tienen los mismos vestidos y más alimentos.</p>
        <p>Dicho con costo de oportunidad: producir un vestido ahora requiere renunciar a menos alimentos, así que la frontera es menos empinada respecto de los vestidos. (Es el ejercicio 1.9.3 de Blanco y el 5 del TP 2.)</p>` },
    },
  );
  add('fpp-parcial',
    {
      exam: ['1p-2024#2'], level: 3, title: 'FPP con tabla: armas o alimentos (1er parcial 2024)',
      prompt: `<p>La economía de un país tiene que decidir entre dedicar sus recursos a la producción de armas o alimentos, teniendo en cuenta que las unidades de trabajo disponibles son 6:</p>${table(['Trabajo (L)', '0', '1', '2', '3', '4', '5', '6'], [['Alimentos (tierra = 9)', '0', '3.200', '5.040', '6.580', '7.810', '9.400', '10.000'], ['Máquinas (capital = 12)', '0', '1.000', '2.460', '3.260', '4.100', '4.840', '5.290']])}<p>a) Represente gráficamente la FPP. b) Si existieran puntos fuera de la frontera, ¿qué indicarían? Explique también el significado de los puntos dentro y sobre la frontera. c) ¿La FPP es cóncava o convexa? ¿Qué significa que tenga esa forma? d) Calcule el costo de oportunidad para pasar de producir 3.200 a 4.100 unidades de maquinarias.</p>`,
      hints: ['L<sub>alimentos</sub> + L<sub>máquinas</sub> = 6.', 'En la tabla de máquinas no existe 3.200: el valor más cercano es 3.260.'],
      solution: { explain: `<p>La lección de esta página tiene el desarrollo completo con el gráfico. En resumen:</p>
        <p><strong>a)</strong> Puntos (alimentos; máquinas): A (0; 5.290), B (3.200; 4.840), C (5.040; 4.100), D (6.580; 3.260), E (7.810; 2.460), F (9.400; 1.000), G (10.000; 0).</p>
        <p><strong>b)</strong> Fuera: combinaciones <strong>inaccesibles</strong> con los recursos y la tecnología actuales (por ejemplo 7.810 alimentos y 4.100 máquinas, que requieren 8 trabajadores); solo se alcanzarían con crecimiento. Dentro: combinaciones <strong>ineficientes</strong>, con recursos ociosos o mal usados (por ejemplo 5.040 y 2.460: solo 4 trabajadores ocupados). Sobre: combinaciones <strong>eficientes</strong>, en las que no se puede producir más de un bien sin producir menos del otro.</p>
        <p><strong>c)</strong> <strong>Cóncava</strong> respecto del origen: el costo de oportunidad es <strong>creciente</strong> (cada máquina adicional cuesta 0,60; 1,09; 1,54; 1,83; 2,49 y 7,11 alimentos según el tramo). Se debe a los rendimientos decrecientes del trabajo en cada producción y a que los factores no son igualmente aptos para todo.</p>
        <p><strong>d)</strong> “3.200” no figura en la tabla de máquinas: se interpreta 3.260 (punto D) → 4.100 (punto C). CO = (6.580 − 5.040) / (4.100 − 3.260) = 1.540 / 840 = <strong>1,83 alimentos por máquina</strong>.</p>` },
    },
    {
      exam: ['1p-2022-civ#2', '1p-2023#3'], level: 1, title: 'Desplazamientos de la FPP (1er parcial 2023 y Civil 2022)',
      prompt: '<p>Indique, en cada caso, si la FPP se desplaza hacia la derecha, hacia la izquierda o no se desplaza, y grafique: a) Mejora la tecnología. b) Al caer las ventas, los empresarios cierran varias plantas de fabricación en espera de mejores tiempos. c) Se produce una inversión en maquinaria. d) Un terremoto destruye varias fábricas. e) Se realiza una ampliación de la educación y la formación profesional. f) Algunas personas, que se encontraban desempleadas, encuentran empleo. g) Las empresas deciden utilizar algunas máquinas que permanecían improductivas. h) Una parte de los trabajadores emigra a otros países.</p><p>Del parcial de Civil 2022: disminución de los recursos productivos; mejora tecnológica en un bien; mejora tecnológica en todos los bienes; la sociedad utiliza recursos que se encontraban ociosos.</p>',
      solution: { explain: `${table(['Caso', 'Respuesta', 'Por qué'], [
        ['a) Mejora la tecnología', '<strong>Derecha</strong> (afuera)', 'Más producción con los mismos recursos'],
        ['b) Cierran plantas esperando mejores tiempos', '<strong>No se desplaza</strong>', 'Las plantas siguen existiendo: la economía pasa a un punto interior'],
        ['c) Inversión en maquinaria', 'Derecha', 'Más capital'],
        ['d) Un terremoto destruye fábricas', '<strong>Izquierda</strong> (adentro)', 'Menos capital'],
        ['e) Más educación y formación', 'Derecha', 'Más capital humano'],
        ['f) Desempleados encuentran empleo', 'No se desplaza', 'Se usan recursos que ya existían: de un punto interior hacia la frontera'],
        ['g) Se usan máquinas improductivas', 'No se desplaza', 'Ídem'],
        ['h) Trabajadores emigran', 'Izquierda', 'Menos trabajo'],
        ['Civil: disminuyen los recursos', 'Izquierda', ''],
        ['Civil: mejora tecnológica en un bien', 'Rota hacia afuera sobre el eje de ese bien', 'El máximo del otro no cambia'],
        ['Civil: mejora en todos los bienes', 'Derecha en ambos ejes', ''],
        ['Civil: se usan recursos ociosos', 'No se desplaza', 'Cambia la producción, no las posibilidades'],
      ])}<p>Gráficos: frontera desplazada hacia afuera (a, c, e), hacia adentro (d, h), rotada (tecnología en un bien) y un punto interior que se acerca a la frontera fija (b al revés, f, g). La lección de esta página tiene los gráficos.</p>` },
    },
    {
      exam: ['1p-2022-civ#1'], level: 1, title: '¿Los países ricos también enfrentan escasez? (1er parcial Civil 2022)',
      prompt: '<p>¿Se podría afirmar que tanto los países ricos como los pobres afrontan el problema de la escasez? Fundamente su respuesta.</p>',
      solution: { explain: '<p><strong>Sí.</strong> La escasez no es pobreza: es la relación entre recursos limitados y necesidades que no tienen límite. Las necesidades crecen a medida que se satisfacen las más básicas (pirámide de Maslow), así que ningún país tiene recursos para todo lo que desea. Un país rico tiene una FPP más grande, pero sigue teniendo una frontera: si destina más recursos a salud, tiene menos para otra cosa. Además, hay recursos escasos para cualquiera, como el tiempo. Lo que cambia entre países es qué necesidades quedan sin cubrir (alimento y vivienda en uno; infraestructura, investigación o servicios en otro), no la existencia del problema de elegir y, por lo tanto, del costo de oportunidad.</p>' },
    },
    {
      exam: ['rec-dic-2024#3'], level: 2, title: 'Forma de la FPP, rendimientos decrecientes y costo de oportunidad (recuperatorio dic. 2024)',
      prompt: '<p>¿Cómo se relaciona la forma de la curva de la Frontera de Posibilidades de Producción con la ley de rendimientos decrecientes y los costos de oportunidad? Defina estos conceptos y relaciónelos.</p>',
      solution: { explain: `<ul>
          <li><strong>FPP</strong>: combinaciones máximas de dos bienes que puede producir una sociedad con unos factores y una tecnología dados.</li>
          <li><strong>Costo de oportunidad</strong>: lo que se renuncia del otro bien por cada unidad adicional de uno. En la FPP es la pendiente (en valor absoluto).</li>
          <li><strong>Ley de rendimientos decrecientes</strong>: si se produce con cantidades fijas de un factor y se agregan unidades sucesivas de otro, llega un momento en que los incrementos de producción son cada vez menores.</li>
        </ul>
        <p><strong>La relación</strong>: al pasar trabajo de alimentos a vestidos, cada trabajador nuevo en vestidos aporta cada vez menos (hay rendimientos decrecientes porque el capital de vestidos es fijo) y cada trabajador que sale de alimentos aportaba cada vez más. Entonces cada vestido adicional cuesta más alimentos: el costo de oportunidad es <strong>creciente</strong>, la pendiente se hace cada vez más empinada y la FPP es <strong>cóncava</strong> respecto del origen. Si no hubiera rendimientos decrecientes y los factores fueran igualmente aptos para todo, el costo de oportunidad sería constante y la FPP, una recta.</p>
        ${chart({ x: [0, 120], y: [0, 120], xl: 'Vestidos', yl: 'Alimentos', curves: [{ f: fpp(100, 100), dom: [0, 100], cls: 'c-fpp', label: 'cóncava (CO creciente)' }, { f: (x) => 100 - x, dom: [0, 100], cls: 'c-s', dash: true, label: 'recta (CO constante)' }], points: [{ x: 30, y: fpp(100, 100)(30), cls: 'c-eq', label: 'pendiente suave' }, { x: 90, y: fpp(100, 100)(90), cls: 'c-err', label: 'pendiente empinada' }] }, 'Al principio un vestido cuesta pocos alimentos; al final, muchos.')}` },
    },
  );

  // ---------- Tema IV ----------
  add('la-demanda',
    {
      exam: ['1p-2022-sis#3'], level: 3, title: 'Función de demanda completa (1er parcial 2022, Sistemas)',
      prompt: '<p>X<sub>d</sub> = −1,5P<sub>x</sub> − R + P<sub>y</sub> − 2P<sub>z</sub> + 30 y X<sub>o</sub> = P<sub>x</sub> − W − PM. a) ¿X es un bien normal o inferior? Justifique. b) ¿Y y Z son bienes relacionados? Analice las variaciones de la demanda de X y justifique. c) Calcule el precio de equilibrio para R = 10, P<sub>y</sub> = 2, P<sub>z</sub> = 4, W = 2 y PM = 4. d) Calcule la elasticidad de la demanda en el punto de equilibrio e indique sus características. e) Calcule la elasticidad precio para P<sub>x</sub> = 4.</p>',
      hints: ['Leé los signos de los coeficientes.', 'Elasticidad en un punto: (dX/dP) · (P/X).'],
      solution: { explain: `<p><strong>a)</strong> <strong>Inferior</strong>: el coeficiente de la renta es negativo (−1): si R sube, X<sub>d</sub> baja.</p>
        <p><strong>b)</strong> Sí. +P<sub>y</sub>: si sube el precio de Y, sube la demanda de X: <strong>sustitutos</strong>. −2P<sub>z</sub>: si sube el precio de Z, baja la demanda de X: <strong>complementarios</strong>.</p>
        <p><strong>c)</strong> X<sub>d</sub> = −1,5P − 10 + 2 − 8 + 30 = <strong>14 − 1,5P</strong>. X<sub>o</sub> = P − 2 − 4 = <strong>P − 6</strong>. Igualando: 14 − 1,5P = P − 6 → 20 = 2,5P → <strong>P* = 8</strong> y X* = 2.</p>
        ${chart({ x: [0, 16], y: [0, 12], curves: [{ f: (x) => (14 - x) / 1.5, dom: [0, 14], cls: 'c-d', label: 'D' }, { f: (x) => x + 6, cls: 'c-s', label: 'O' }], points: [{ x: 2, y: 8, cls: 'c-eq', label: 'E (2; 8)' }, { x: 8, y: 4, cls: 'c-d', label: 'Px = 4', pos: 'e' }], guides: [{ x: 2, y: 8, xt: '2', yt: '8' }] })}
        <p><strong>d)</strong> E = (dX/dP)·(P/X) = −1,5 · 8/2 = <strong>−6</strong> (|E| = 6 > 1): demanda <strong>elástica</strong> en ese punto. Si el precio sube 1 %, la cantidad demandada cae 6 %, y una suba de precio reduciría el ingreso de los vendedores.</p>
        <p><strong>e)</strong> Con P<sub>x</sub> = 4: X<sub>d</sub> = 14 − 6 = 8; E = −1,5 · 4/8 = <strong>−0,75</strong>: <strong>inelástica</strong>. Misma pendiente, distinta elasticidad: en una demanda lineal la elasticidad baja al bajar el precio. (A P = 4 hay exceso de demanda en este mercado; la elasticidad que se pide es la de la curva de demanda en ese punto.)</p>` },
    },
    {
      exam: ['1p-2022-3k2#3'], level: 1, title: 'La renta y el desplazamiento de la demanda (1er parcial 3K2 2022)',
      prompt: '<p>Al aumentar la renta de los consumidores, la curva de demanda del bien X: a) se desplaza hacia la derecha si el bien es normal; b) se desplaza hacia la derecha si el bien es inferior; c) se desplaza hacia la derecha si el bien es sustitutivo; d) se desplaza hacia la derecha si el bien es complementario. Justifique.</p>',
      solution: { explain: '<p><strong>a)</strong> (Blanco 2.6.2). Un bien <strong>normal</strong> es aquel cuya demanda aumenta cuando aumenta la renta, ceteris paribus: con más ingreso, a cada precio se quiere comprar más y la curva se desplaza a la derecha. b) es falsa: un bien inferior se demanda menos al subir la renta (se desplaza a la izquierda). c) y d) mezclan conceptos: sustitutivo y complementario describen la relación con el <em>precio de otro bien</em>, no con la renta.</p>' },
    },
  );
  add('equilibrio',
    {
      exam: ['1p-2022-3k2#5'], level: 2, title: 'Xd = 40 − 2P y Xo = P − 5 (1er parcial 3K2 2022)',
      prompt: '<p>Las curvas de demanda y oferta de un bien son X<sub>d</sub> = 40 − 2P<sub>X</sub> y X<sub>o</sub> = P<sub>X</sub> − 5. a) Obtenga el precio y la cantidad de equilibrio. b) Dibuje las curvas. c) Calcule el exceso de demanda a un precio P<sub>X</sub> = 10.</p>',
      hints: ['Al pasar −2P al otro lado queda 3P, no 4P.'],
      solution: { explain: `<p><strong>a)</strong> 40 − 2P = P − 5 → 45 = <strong>3P</strong> → <strong>P* = 15</strong>; X* = 15 − 5 = <strong>10</strong>. Verificación: 40 − 30 = 10 ✓. (Blanco 2.8.3.)</p>
        ${note('En una resolución que circula se escribió 40 + 5 = P + 3P y se llegó a P = 11,25. Es un error de despeje: −2P pasa como +2P y se suma al P de la derecha (3P, no 4P). Con 11,25 la demanda daría 17,5 y la oferta 6,25: no es equilibrio.', 'warn')}
        <p><strong>b)</strong> Demanda: corta el eje de cantidades en 40 (P = 0) y el de precios en 20 (X = 0). Oferta: empieza a ofrecer con P > 5.</p>
        ${chart({ x: [0, 42], y: [0, 24], curves: [{ f: (x) => 20 - x / 2, dom: [0, 40], cls: 'c-d', label: 'D' }, { f: (x) => x + 5, cls: 'c-s', label: 'O' }], hlines: [{ y: 10, cls: 'c-ctrl pl-faint', label: 'P = 10' }],
          areas: [{ pts: [[5, 9.7], [20, 9.7], [20, 10.3], [5, 10.3]], cls: 'a-bad', label: 'exceso de demanda = 15', at: [12.5, 8.6] }],
          points: [{ x: 10, y: 15, cls: 'c-eq', label: 'E (10; 15)' }, { x: 0, y: 20, cls: 'c-d', label: '20', pos: 'e' }, { x: 40, y: 0, cls: 'c-d', label: '40', pos: 'n' }], guides: [{ x: 10, y: 15, xt: '10', yt: '15' }] })}
        <p><strong>c)</strong> Con P = 10: X<sub>d</sub> = 40 − 20 = 20 y X<sub>o</sub> = 10 − 5 = 5. <strong>Exceso de demanda = 15</strong> unidades. Como el precio está por debajo del de equilibrio, los compradores insatisfechos pujarían y el precio subiría hacia 15.</p>` },
    },
    {
      exam: ['1p-2023#5', '1p-2024#3', 'rec-2024#2'], level: 2, title: 'La renta y el equilibrio: bien normal e inferior (parciales 2023 y 2024)',
      prompt: '<p>Verdadero o falso (justifique y grafique). Si se incrementa la renta de los consumidores y el bien X es <strong>normal</strong> (1er parcial 2023) / <strong>inferior</strong> (1er parcial 2024 y recuperatorio 2024), la variación en el equilibrio de mercado de ese bien se caracteriza por: a) un aumento de la cantidad y del precio; b) una disminución de la cantidad y del precio; c) un incremento de la cantidad y una disminución del precio; d) un incremento del precio y una disminución de la cantidad.</p>',
      solution: { explain: `<div class="figs-2">
          ${plot({ x: [0, 10], y: [0, 10], h: 240, alt: 'Bien normal: la demanda se desplaza a la derecha', curves: [{ f: D, cls: 'c-d', ghost: true, label: 'D₀' }, { f: (x) => 11 - 0.8 * x, cls: 'c-d', label: 'D₁' }, { f: S, cls: 'c-s', label: 'O' }], points: [{ x: 5, y: 5, cls: 'pl-old', label: 'E₀', pos: 'w' }, { x: 6.25, y: 6, cls: 'c-eq', label: 'E₁' }] })}
          ${plot({ x: [0, 10], y: [0, 10], h: 240, alt: 'Bien inferior: la demanda se desplaza a la izquierda', curves: [{ f: D, cls: 'c-d', ghost: true, label: 'D₀' }, { f: (x) => 7 - 0.8 * x, cls: 'c-d', label: 'D₁' }, { f: S, cls: 'c-s', label: 'O' }], points: [{ x: 5, y: 5, cls: 'pl-old', label: 'E₀', pos: 'e' }, { x: 3.75, y: 4, cls: 'c-eq', label: 'E₁', pos: 'sw' }] })}
        </div>
        <p><strong>Bien normal (2023): verdadera la a)</strong>, falsas las demás (Blanco 2.6.7). Con más renta se quiere comprar más a cada precio: la demanda se desplaza a la derecha. Al precio inicial hay exceso de demanda, el precio sube y los productores ofrecen más: <strong>P ↑ y X ↑</strong>.</p>
        <p><strong>Bien inferior (2024): verdadera la b)</strong>. Con más renta los consumidores reemplazan X por bienes que consideran mejores: la demanda se desplaza a la izquierda. Al precio inicial hay exceso de oferta, el precio baja y se produce menos: <strong>P ↓ y X ↓</strong>.</p>
        <p>c) sería el resultado de un aumento de la oferta (mejora tecnológica) y d) el de una disminución de la oferta (suben los costos): ninguno de los dos se debe a un cambio de renta.</p>` },
    },
  );
  add('movimientos-desplazamientos', {
    exam: ['1p-2022-sis#2'], level: 1, title: 'Cuatro cambios y la demanda (1er parcial 2022, Sistemas)',
    prompt: '<p>¿Qué efecto produce sobre la demanda cada uno de estos cambios? Grafique en cada caso. a) Baja el precio del complementario. b) Aumenta la renta (bien inferior). c) Baja el precio del sustituto. d) Aumenta el precio del bien.</p>',
    solution: { explain: `${table(['Cambio', 'Efecto', 'Por qué'], [
      ['a) Baja el precio del complementario', '<strong>Desplazamiento a la derecha</strong>: aumenta la demanda', 'Usar los dos bienes juntos sale más barato'],
      ['b) Aumenta la renta (bien inferior)', '<strong>Desplazamiento a la izquierda</strong>: disminuye la demanda', 'Con más ingreso se reemplaza por bienes mejores'],
      ['c) Baja el precio del sustituto', '<strong>Desplazamiento a la izquierda</strong>', 'Los consumidores se pasan al sustituto, más barato'],
      ['d) Aumenta el precio del bien', '<strong>Movimiento a lo largo</strong> de la curva: disminuye la <em>cantidad demandada</em>', 'El precio del propio bien es la variable de la curva: no la desplaza'],
    ])}<div class="figs-2">
      ${plot({ x: [0, 10], y: [0, 10], h: 220, alt: 'Desplazamiento a la derecha', curves: [{ f: D, cls: 'c-d', ghost: true, label: 'D₀' }, { f: (x) => 11 - 0.8 * x, cls: 'c-d', label: 'D₁ (a)' }], arrows: [{ from: [4, 6.2], to: [6, 6.2], cls: 'c-d' }] })}
      ${plot({ x: [0, 10], y: [0, 10], h: 220, alt: 'Desplazamiento a la izquierda', curves: [{ f: D, cls: 'c-d', ghost: true, label: 'D₀' }, { f: (x) => 7 - 0.8 * x, cls: 'c-d', label: 'D₁ (b, c)' }], arrows: [{ from: [6, 4.2], to: [4, 4.2], cls: 'c-d' }] })}
    </div><p>Para d) se dibuja una sola curva y una flecha desde un punto hacia arriba y a la izquierda sobre ella. Vocabulario que se corrige: en d) no “baja la demanda”, baja la <strong>cantidad demandada</strong>.</p>` },
  });
  add('ajuste-equilibrio',
    {
      exam: ['1p-2022-3k2#4'], level: 1, title: 'Exceso de demanda y precio (1er parcial 3K2 2022)',
      prompt: '<p>Si en un mercado existe exceso de demanda, el precio: a) tenderá a bajar; b) se mantendrá estable; c) tenderá a subir; d) necesitará algún tipo de regulación estatal. Justifique.</p>',
      solution: { explain: '<p><strong>c)</strong> (Blanco 2.6.6). Con exceso de demanda, a ese precio se quiere comprar más de lo que se ofrece. Los compradores que no consiguen el bien ofrecen pagar más; al subir el precio, la cantidad demandada baja y la ofrecida sube, hasta que se igualan en el precio de equilibrio. El mercado se corrige solo: no hace falta regulación (d), y el precio no puede quedarse estable (b) mientras haya exceso. Bajaría (a) si hubiera exceso de <em>oferta</em>.</p>' },
    },
    {
      exam: ['1p-2022-civ#3'], level: 2, title: 'El mercado del arroz (1er parcial Civil 2022)',
      prompt: '<p>Suponga que el mercado del arroz es competitivo. Analice los efectos que sobre el precio y la cantidad de equilibrio tienen los cambios que se citan a continuación, describiendo el proceso generado hasta alcanzar el nuevo equilibrio. Utilice gráficos: a) se incrementan los salarios de los trabajadores agrícolas; b) aumenta la renta de los individuos (el arroz es un bien inferior); c) se descubre una semilla más productiva.</p>',
      solution: { explain: '<p>Está resuelto en la teoría de esta lección, con los tres gráficos. Resumen: a) suben los costos → oferta a la izquierda → exceso de demanda al precio inicial → P ↑, X ↓. b) bien inferior → demanda a la izquierda → exceso de oferta → P ↓, X ↓. c) mejora tecnológica → oferta a la derecha → exceso de oferta → P ↓, X ↑. En cada caso hay que nombrar el exceso que aparece al precio viejo y cómo lo corrige el precio: eso es “describir el proceso”.</p>' },
    },
  );

  // ---------- Tema V ----------
  add('precios-maximos',
    {
      exam: ['1p-2022-civ#4'], level: 1, title: '¿Qué es un precio máximo y a quién beneficia? (1er parcial Civil 2022)',
      prompt: '<p>¿Qué es un precio máximo? ¿A quién beneficia? Defina y proporcione un ejemplo.</p>',
      solution: { explain: `<p>Un <strong>precio máximo</strong> es un precio inferior al de equilibrio, fijado por autoridad competente, por encima del cual no se permite vender (sí por debajo). Si es efectivo, la cantidad demandada supera a la ofrecida: <strong>escasez</strong>, y se intercambia solo lo que se ofrece (el lado corto).</p>
        <p><strong>A quién beneficia</strong>: busca proteger a los <strong>consumidores</strong>, y beneficia a los que consiguen comprar, porque pagan menos. Perjudica a los <strong>productores</strong> (cobran menos y venden menos) y a los consumidores que <strong>no consiguen</strong> el bien. Además aparecen colas, racionamiento, mercado negro y caída de la calidad, y la sociedad pierde excedente total (pérdida irrecuperable de eficiencia).</p>
        <p><strong>Ejemplo</strong>: el control de alquileres (Barcelona, TP 3): quien tiene un contrato regulado paga menos, pero se retiran viviendas del alquiler tradicional y quien busca casa enfrenta escasez y precios más altos en los segmentos no regulados.</p>` },
    },
    {
      exam: ['1p-2022-civ#5'], level: 2, title: 'Xd = 60 − P, Xo = P + 20 y precio máximo de 15 (1er parcial Civil 2022)',
      prompt: '<p>La curva de demanda y de oferta de un producto son X<sub>d</sub> = 60 − P<sub>x</sub> y X<sub>o</sub> = P<sub>x</sub> + 20. El Estado fija un precio máximo de 15 UM. Determinar: a) el equilibrio de mercado; b) el exceso de demanda; c) representar gráficamente.</p>',
      solution: { explain: `<p><strong>a)</strong> 60 − P = P + 20 → 40 = 2P → <strong>P* = 20</strong>, X* = <strong>40</strong>. Como el máximo (15) está por debajo de 20, es efectivo.</p>
        <p><strong>b)</strong> A P = 15: X<sub>d</sub> = 45 y X<sub>o</sub> = 35. <strong>Exceso de demanda (escasez) = 10</strong>. Se compran y venden 35 (lo que ofrecen los productores).</p>
        ${chart({ x: [0, 65], y: [0, 65], curves: [{ f: (x) => 60 - x, dom: [0, 60], cls: 'c-d', label: 'D' }, { f: (x) => x - 20, dom: [20, 65], cls: 'c-s', label: 'O' }], hlines: [{ y: 15, cls: 'c-ctrl', label: 'Pmáx = 15' }],
          areas: [{ pts: [[35, 14], [45, 14], [45, 16], [35, 16]], cls: 'a-bad', label: 'escasez = 10', at: [40, 9] }],
          points: [{ x: 40, y: 20, cls: 'pl-old', label: 'E (40; 20)', pos: 'e' }, { x: 35, y: 15, cls: 'c-s', label: '35', pos: 'nw' }, { x: 45, y: 15, cls: 'c-d', label: '45', pos: 'ne' }], guides: [{ x: 40, y: 20, xt: '40', yt: '20' }] },
          'La oferta corta el eje de cantidades en 20: a precio cero ya se ofrecen 20 unidades.')}` },
    },
  );
  add('precios-minimos', {
    exam: ['1p-2022-sis#4'], level: 1, title: 'El precio mínimo (1er parcial 2022, Sistemas)',
    prompt: '<p>¿Qué es un precio mínimo? Defina, grafique y explique a quién está dirigido y sus consecuencias.</p>',
    solution: { explain: `<p>Un <strong>precio mínimo</strong> es un precio superior al de equilibrio, fijado por autoridad competente, por debajo del cual no se permite vender. Si es efectivo, la cantidad ofrecida supera a la demandada: <strong>excedente</strong>, y se intercambia solo lo que se demanda.</p>
      <p><strong>A quién está dirigido</strong>: a proteger a los <strong>productores</strong> o a los <strong>trabajadores</strong>. Ejemplos: el Salario Mínimo, Vital y Móvil (el precio mínimo del trabajo), el precio mínimo del bioetanol y el biodiésel que fija la Secretaría de Energía (ingenios tucumanos) y el precio de la hoja verde de yerba mate que fijaba el INYM.</p>
      <p><strong>Consecuencias</strong>: queda producción sin vender (excedente), que el Estado a veces compra y almacena; en el mercado de trabajo, el excedente es <strong>desempleo</strong> (según el modelo, si el mínimo supera al salario de equilibrio); los que venden ganan, pero se venden menos unidades y se pierde excedente total; pueden aparecer ventas en negro por debajo del mínimo. Si el mínimo se fija por debajo del equilibrio no tiene efecto.</p>
      ${chart({ x: [0, 10], y: [0, 10], curves: [{ f: D, cls: 'c-d', label: 'D' }, { f: S, cls: 'c-s', label: 'O' }], hlines: [{ y: 7, cls: 'c-ctrl', label: 'Pmín' }], areas: [{ pts: [[2.5, 6.8], [7.5, 6.8], [7.5, 7.2], [2.5, 7.2]], cls: 'a-warn', label: 'excedente', at: [5, 7.8] }], points: [{ x: 5, y: 5, cls: 'pl-old', label: 'E', pos: 'e' }] })}` },
  });

  // ---------- Tema VI ----------
  add('elasticidad-precio',
    {
      exam: ['rec-dic-2024#2'], level: 1, title: 'Factores que afectan la elasticidad (recuperatorio dic. 2024)',
      prompt: '<p>¿Cuáles son los factores que afectan la elasticidad de un bien? Explique y justifique.</p>',
      solution: { explain: `${table(['Factor', 'La demanda es más elástica cuando…', 'Por qué', 'Ejemplo'], [
        ['Existencia de <strong>sustitutos</strong>', 'hay muchos y buenos sustitutos', 'Ante una suba, es fácil cambiarse a otro bien', 'Una marca de cerveza (elástica) frente a la sal (inelástica)'],
        ['<strong>Necesidad</strong> o lujo', 'es un bien prescindible o de lujo', 'Se puede dejar de comprar sin gran perjuicio', 'Viajes (elástica) frente a la insulina (inelástica)'],
        ['<strong>Peso en el presupuesto</strong>', 'representa una parte grande del gasto', 'Una suba pega fuerte en el bolsillo', 'Un auto frente a los fósforos'],
        ['<strong>Horizonte temporal</strong>', 'se considera un plazo largo', 'Con tiempo se cambian hábitos y aparecen alternativas', 'La nafta a largo plazo (otro auto, otro transporte)'],
        ['<strong>Adicción</strong>', 'el bien no genera adicción', 'La adicción hace al consumo casi insensible al precio', 'Cigarrillos: inelástica'],
        ['<strong>Amplitud del mercado</strong>', 'el bien se define de forma más concreta', 'Un bien específico tiene más sustitutos que una categoría', 'Naranjas (más elástica) frente a “fruta” (Blanco 3.7.1)'],
      ])}<p>Blanco resume: la demanda tiende a ser menos elástica cuantos menos sustitutos tenga el bien, menor sea su peso en el gasto, más corto sea el plazo y más general sea el bien (Blanco 3.6.6).</p>` },
    },
    {
      exam: ['1p-2022-civ#6'], level: 1, title: '“Tengo que conseguirlo a cualquier precio” (1er parcial Civil 2022)',
      prompt: '<p>Si un individuo afirma “tengo que conseguirlo a cualquier precio”, ¿cómo sería la curva de demanda? Grafique y explique. a) Normal. b) Paralela al eje de las x o de las cantidades. c) Elástica. d) Paralela al eje de las y o de los precios.</p>',
      solution: { explain: `<p><strong>d) Paralela al eje de los precios</strong> (vertical). Compra la misma cantidad sea cual sea el precio: la demanda es <strong>perfectamente inelástica</strong> (elasticidad cero). Ejemplo: la dosis de insulina de un diabético. b) sería lo contrario: perfectamente elástica (a un precio apenas mayor no compra nada).</p>
        ${chart({ x: [0, 10], y: [0, 10], h: 230, curves: [{ pts: [[5, 0.3], [5, 9.6]], cls: 'c-d', label: 'D: ε = 0' }], points: [{ x: 5, y: 3, cls: 'c-d', label: 'P₁' }, { x: 5, y: 8, cls: 'c-d', label: 'P₂' }] }, 'A P₁ o a P₂ compra la misma cantidad.')}` },
    },
  );
  add('elasticidad-ingreso-total', {
    exam: ['1p-2022-civ#8'], level: 1, title: 'El gasto aumenta cuando baja el precio (1er parcial Civil 2022)',
    prompt: '<p>Si el gasto (consumo) en un bien aumenta cuando baja su precio: a) la demanda del mismo es inelástica; b) la demanda es elástica; c) se trata de un bien inferior; d) se trata de un bien superior o normal; e) todo lo anterior es incorrecto.</p>',
    solution: { explain: '<p><strong>b)</strong>. El gasto de los consumidores es el ingreso de los vendedores: P · X. Si al bajar el precio el gasto sube, la cantidad aumentó proporcionalmente más de lo que bajó el precio: |E| > 1, demanda <strong>elástica</strong>. c) y d) no corresponden: normal o inferior se decide con la elasticidad renta, no con la reacción al precio del propio bien.</p>' },
  });
  add('elasticidad-parcial',
    {
      exam: ['1p-2023#6', 'rec-2024#4'], level: 2, title: 'La cantidad cae 30 % y el ingreso sube 15 % (parcial 2023 y recuperatorio 2024)',
      prompt: '<p>Un cambio en el precio causa que la cantidad demandada de un bien disminuya 30 %, mientras que los ingresos totales del bien aumentan 15 %. ¿La curva de la demanda es elástica o inelástica? Explique.</p>',
      solution: { explain: '<p><strong>Inelástica.</strong> Si la cantidad demandada cayó, el precio subió (ley de la demanda). Precio e ingreso subieron juntos: el aumento porcentual del precio superó la caída porcentual de la cantidad. Cuenta: 1,15 = (1 + %ΔP) · 0,70 → %ΔP = +64,3 %; E = 30 / 64,3 = <strong>0,47</strong> (con el método arco, 0,73). En ambos casos |E| < 1.</p><p>Ojo: no se multiplican los porcentajes (15 % × −30 %): se multiplican los factores (1,643 × 0,70 = 1,15). Ver la teoría de esta lección.</p>' },
    },
    {
      exam: ['1p-2025-t3#2', '1p-2025-b#2', '1p-2025-c#2'], level: 2, title: 'El gerente y la baja de precios (parciales 2025)',
      prompt: '<p>Si el gerente de una empresa propone una baja de los precios para aumentar las ventas, cuando la cantidad vendida aumenta un 20 % luego de que bajaron los precios un 25 %, ¿es la decisión correcta? Explique analítica y gráficamente. (Otra versión: el gerente propone una <em>suba</em> con los mismos datos. Otra: la baja es de 15 % y la cantidad sube 20 %.)</p>',
      solution: { explain: `<p><strong>Versión de la baja de 25 %</strong>: ingreso nuevo = 0,75 · 1,20 = 0,90 del anterior: <strong>cae 10 %</strong>. Elasticidad arco = (20/110) / (25/87,5) = 0,18 / 0,29 = <strong>0,64</strong> < 1: demanda <strong>inelástica</strong>. La baja <strong>no es correcta</strong> si “ventas” significa facturación: se venden más unidades pero se ingresa menos (y producirlas cuesta más).</p>
        <p><strong>Versión de la suba</strong>: con demanda inelástica, <strong>subir</strong> el precio aumenta el ingreso: la propuesta es <strong>correcta</strong>.</p>
        <p><strong>Versión de 15 %</strong>: 0,85 · 1,20 = 1,02: el ingreso <strong>sube 2 %</strong>; elasticidad arco = 0,18 / 0,16 = <strong>1,12</strong> > 1, elástica: la baja es <strong>correcta</strong> para el ingreso.</p>
        ${chart({ x: [0, 160], y: [0, 120], curves: [{ f: (x) => 150 - 0.5 * x, dom: [0, 160], cls: 'c-d', label: 'D (tramo inelástico)' }],
          areas: [{ pts: [[0, 0], [100, 0], [100, 100], [0, 100]], cls: 'a-warn' }, { pts: [[0, 0], [120, 0], [120, 75], [0, 75]], cls: 'a-it' }],
          points: [{ x: 100, y: 100, cls: 'pl-old', label: 'antes: IT = 100 · 100', pos: 'ne' }, { x: 120, y: 75, cls: 'c-eq', label: 'después: IT = 75 · 120', pos: 'ne' }] }, 'Gráfico de la versión del 25 %: con precio 100 y cantidad 100, la baja a 75 lleva la cantidad a 120. El rectángulo del ingreso se achica (10.000 a 9.000).')}
        <p>Para decidir sobre el <strong>beneficio</strong>, además, hay que mirar costos: producir 20 % más aumenta el costo, así que si el ingreso cae, el beneficio cae todavía más.</p>` },
    },
    {
      exam: ['1p-2025-t3#3', '1p-2025-b#3', '1p-2025-c#3'], level: 2, title: 'Cambios de demanda y oferta e ingresos (parciales 2025)',
      prompt: '<p>¿En qué casos un aumento de la demanda producirá un aumento en los ingresos? Explique analítica y gráficamente. (Otra versión: ¿en qué caso una disminución de la oferta producirá un aumento en los ingresos?)</p>',
      solution: { explain: '<p><strong>Aumento de la demanda</strong>: con una oferta de pendiente positiva, la demanda que se desplaza a la derecha sube el precio <em>y</em> la cantidad, así que el ingreso P · X <strong>aumenta siempre</strong>. La elasticidad de la oferta decide el reparto: si es inelástica, el aumento es sobre todo por precio; si es elástica, sobre todo por cantidad. Aun en los extremos el ingreso sube (oferta vertical: solo P; horizontal: solo X).</p><p><strong>Disminución de la oferta</strong>: el precio sube y la cantidad baja. El ingreso aumenta <strong>solo si la demanda es inelástica</strong>: el precio sube proporcionalmente más de lo que cae la cantidad (la sequía del TP 4). Con demanda elástica el ingreso cae.</p><p>Los dos gráficos están en la teoría de esta lección (caso 7).</p>' },
    },
    {
      exam: ['1p-2022-3k2#6', '1p-2024#4'], level: 2, title: '¿Pueden ser malas las buenas cosechas? (parciales 3K2 2022 y 2024)',
      prompt: '<p>¿Es posible que los años de buenas cosechas sean perjudiciales para los agricultores? ¿Qué condiciones deben darse para ello? ¿Se dan generalmente? Razone sus respuestas y dibuje el gráfico correspondiente.</p>',
      solution: { explain: '<p>Desarrollado en la teoría de esta lección (caso 8), con el gráfico. Resumen: <strong>sí</strong> (paradoja de la abundancia); condiciones: que la buena cosecha sea general, de modo que <strong>la oferta del mercado se desplace a la derecha</strong> y baje el precio, y que la <strong>demanda sea inelástica</strong>, para que la caída del precio supere en proporción al aumento de la cantidad y el ingreso total P · X caiga; <strong>generalmente sí</strong> se dan para los alimentos básicos, que son de primera necesidad y tienen pocos sustitutos.</p>' },
    },
    {
      exam: ['rec-dic-2024#1'], level: 2, title: 'Demanda rectilínea y máximo ingreso (recuperatorio dic. 2024)',
      prompt: '<p>Dada una curva de demanda rectilínea, ¿en qué punto los vendedores tendrán mayores ingresos? Grafique y justifique.</p>',
      solution: { explain: '<p>En el <strong>punto medio</strong> de la recta, donde la elasticidad vale 1. Con X = a − bP, IT = aP − bP² es máximo en P = a/2b (la mitad del precio máximo) y X = a/2 (la mitad de la cantidad máxima). Por encima del punto medio la demanda es elástica (bajar el precio sube el ingreso); por debajo, inelástica (subirlo sube el ingreso). Ejemplo: X = 150 − P → máximo en P = 75, X = 75, IT = 5.625. Gráfico y desarrollo en la teoría de esta lección (caso 3). Aclarar que es el máximo <em>ingreso</em>, no el máximo beneficio (que depende de los costos).</p>' },
    },
    {
      exam: ['recop#8'], level: 2, title: 'Xd = 150 − P: precios para cada elasticidad (Blanco 3.8.3)',
      prompt: '<p>La curva de demanda de un bien es X<sub>d</sub> = 150 − P. a) Calcule el precio para el que la elasticidad es 0,5. b) Calcule el precio para el que la elasticidad es 1. c) Calcule el precio para el que la elasticidad es 2.</p>',
      solution: { explain: `${eq(`ε = − ${frac('dX', 'dP')} · ${frac('P', 'X')} = ${frac('P', '150 − P')}`)}<p>a) P/(150 − P) = 0,5 → P = 75 − 0,5P → <strong>P = 50</strong>. b) P = 150 − P → <strong>P = 75</strong>. c) P = 300 − 2P → <strong>P = 100</strong>. La elasticidad crece al subir el precio por la recta.</p>` },
    },
  );
  add('elasticidad-cruzada-renta', {
    exam: ['1p-2022-civ#7'], level: 1, title: 'Elasticidad ingreso +2 y 1.000 unidades (1er parcial Civil 2022)',
    prompt: '<p>Un empresario que fabrica un producto cuya elasticidad ingreso es +2 está vendiendo 1.000 unidades mensuales. Si se espera que los ingresos de la comunidad aumenten un 3 %: a) las unidades vendidas mensuales disminuirán; b) no aumentarán; c) serán 964; d) serán 1.060.</p>',
    solution: { explain: '<p><strong>d) 1.060.</strong> %ΔX = E<sub>R</sub> · %ΔR = 2 · 3 % = 6 % → 1.000 · 1,06 = 1.060. Al ser E<sub>R</sub> > 1, es un bien de lujo: las ventas crecen más que proporcionalmente al ingreso.</p>' },
  });

  // ---------- Tema VII ----------
  add('productividades', {
    exam: ['1p-2022-3k2#1'], level: 1, title: 'La ley de rendimientos decrecientes (1er parcial 3K2 2022)',
    prompt: '<p>Explique conceptual y gráficamente la ley de rendimientos decrecientes.</p>',
    solution: { explain: `<p><strong>Concepto</strong> (Blanco): si se produce con cantidades fijas de un factor (por ejemplo, el capital de una fábrica) y se van añadiendo unidades sucesivas de otro factor (trabajo), llega un momento a partir del cual <strong>los incrementos de la producción son cada vez menores</strong>. Es una ley de <strong>corto plazo</strong> (hay un factor fijo). Ojo: no dice que la producción baje (eso ocurre recién cuando el PMg es negativo), sino que crece cada vez más despacio.</p>
      <p><strong>Por qué</strong>: cada trabajador nuevo tiene menos máquinas y espacio con qué trabajar. Ejemplo de Blanco 1.8.1 (lápices): con 1 a 10 trabajadores se producen 5, 11, 18, 26, 33, 39…; los aumentos son 6, 7, 8, 7, 6…: desde el quinto trabajador cada uno agrega menos.</p>
      ${chart({ x: [0, 12], y: [-200, 1100], xl: 'L', yl: 'X', curves: [{ f: (l) => 10 * l * l + 100 * l - l ** 3, dom: [0, 11.5], cls: 'c-pt', label: 'PT' }, { f: (l) => 5 * (20 * l + 100 - 3 * l * l), dom: [0, 11], cls: 'c-pmg', label: 'PMg (×5)' }], vlines: [{ x: 3.33, cls: 'pl-faint', label: 'desde acá decrecientes' }] }, 'X = 10L² + 100L − L³. Hasta L ≈ 3,3 el PMg crece; después decrece (rendimientos decrecientes): el PT sigue subiendo pero cada vez más lento, hasta su máximo en L = 10.')}
      <p>Consecuencias: hace que el PMe y el PMg terminen bajando (etapas II y III), que el costo marginal y el CVMe suban (CMg = w/PMg) y que la FPP sea cóncava.</p>` },
  });
  add('empresa-escala-beneficio',
    {
      exam: ['1p-2025-t3#4'], level: 2, title: 'Productividad, costos marginales y etapas (1er parcial 2025)',
      prompt: '<p>Explique analítica y gráficamente la relación entre productividad y costos marginales y detalle las distintas etapas de la productividad.</p>',
      solution: { explain: '<p><strong>Analíticamente</strong>: si el único factor variable es el trabajo con salario w, CMg = ΔCV/ΔX = w·ΔL/ΔX = <strong>w / PMg</strong> (y CVMe = w / PMe). La relación es <strong>inversa</strong>: cuando el PMg sube, el CMg baja; en el máximo del PMg, el CMg es mínimo; cuando el PMg baja (rendimientos decrecientes), el CMg sube.</p><p><strong>Etapas</strong>: I, desde L = 0 hasta el óptimo técnico (máximo del PMe, donde PMg = PMe): el PMe crece y al empresario le conviene seguir contratando. II, del óptimo técnico al máximo técnico (PT máximo, PMg = 0): PMe y PMg decrecen pero el PMg es positivo; es la etapa racional. III, después del máximo técnico: PMg negativo, el PT cae; nunca se produce ahí.</p><p>En costos: el mínimo del CMg está en el máximo del PMg; el mínimo del CVMe, en el óptimo técnico; en el máximo técnico el CMg tiende a infinito. Gráficos y tabla completa en la teoría de esta lección.</p>' },
    },
    {
      exam: ['1p-2025-b#4'], level: 2, title: 'Productividad media, costo total medio y óptimo técnico (1er parcial 2025)',
      prompt: '<p>Explique analítica y gráficamente la relación entre productividad media y costo total medio. ¿Qué es el óptimo técnico?</p>',
      solution: { explain: '<p>CTMe = CFMe + CVMe = CF/X + <strong>w/PMe</strong>. La parte variable del costo medio es la inversa del producto medio: mientras el PMe crece, el CVMe baja; en el máximo del PMe, el CVMe es mínimo; después, ambos se invierten.</p><p>El <strong>óptimo técnico</strong> es la cantidad de trabajo que hace <strong>máximo el producto medio</strong> (donde PMg = PMe). Ahí el <strong>CVMe es mínimo</strong>, pero el CTMe todavía baja, porque el costo fijo medio sigue cayendo: el mínimo del CTMe (óptimo de explotación, punto de nivelación) está a la derecha, donde el CMg lo corta. Solo coincidirían sin costos fijos.</p>' },
    },
  );

  // ---------- Tema VIII ----------
  add('maximo-beneficio', {
    exam: ['1p-2025-t3#5'], level: 2, title: 'El nivel de producción de máximo beneficio (1er parcial 2025)',
    prompt: '<p>¿Cuál es el nivel de producción de máximo beneficio de una empresa en un mercado competitivo? Explique analítica y gráficamente.</p>',
    solution: { explain: `<p>La empresa competitiva es precio-aceptante: su demanda es horizontal al precio de mercado y su ingreso marginal es igual al precio (IMg = P). Maximiza el beneficio produciendo donde <strong>IMg = CMg</strong>, es decir, <strong>P = CMg</strong>, en el tramo <strong>creciente</strong> del CMg (condición de segundo orden), y siempre que <strong>P ≥ mín CVMe</strong> (si no, cierra).</p>
      ${eq(`B = IT − CT &nbsp;⇒&nbsp; ${frac('dB', 'dX')} = P − CMg = 0 &nbsp;⇒&nbsp; P = CMg; &nbsp; ${frac('d²B', 'dX²')} = −${frac('dCMg', 'dX')} &lt; 0`)}
      <p>Si produce menos, el CMg es menor que el precio: una unidad más suma más ingreso que costo. Si produce más, el CMg supera al precio: la última unidad hace perder. Ejemplo con CT = 2X² + 6X + 8 y P = 22: 4X + 6 = 22 → X = 4; CTMe = 8 + 6 + 2 = 16; B = (22 − 16) · 4 = <strong>24</strong>.</p>
      ${chart({ x: [0, 6], y: [0, 32], xl: 'X empresa', curves: [{ f: (x) => 4 * x + 6, cls: 'c-cmg', label: 'CMg' }, { f: (x) => 2 * x + 6 + 8 / x, dom: [0.4, 6], cls: 'c-ctme', label: 'CTMe' }, { f: (x) => 2 * x + 6, cls: 'c-cvme', label: 'CVMe' }], hlines: [{ y: 22, cls: 'c-price', label: 'P = IMg = 22' }],
        areas: [{ pts: [[0, 16], [4, 16], [4, 22], [0, 22]], cls: 'a-ok', label: 'B = 24', at: [2, 18.5] }], points: [{ x: 4, y: 22, cls: 'c-eq', label: 'P = CMg', pos: 'e' }], guides: [{ x: 4, y: 22, xt: '4', yt: '' }] })}` },
  });
  add('nivelacion-parcial',
    {
      exam: ['1p-2024#5', 'rec-2024#3', 'rec-dic-2024#4', '2p-2024-6r1#5'], level: 2, title: 'Precio inferior al punto de nivelación: largo plazo (la más tomada)',
      prompt: '<p>En un mercado competitivo el precio es inferior al punto de nivelación. A largo plazo: a) saldrán empresas del mercado y el precio disminuirá; b) entrarán empresas en el mercado y el precio disminuirá; c) saldrán empresas del mercado y el precio aumentará; d) entrarán empresas en el mercado y el precio aumentará. Explique y grafique.</p>',
      solution: { explain: '<p><strong>c)</strong>. Desarrollo completo con los dos gráficos (mercado y empresa) en la teoría de esta lección. En cuatro pasos: 1) con P menor que el mínimo del CTMe las empresas tienen pérdidas económicas; 2) a corto plazo siguen produciendo si P cubre el CVMe; 3) a largo plazo, sin barreras, salen empresas: la oferta del mercado se desplaza a la izquierda y el precio sube; 4) la salida se detiene cuando P llega al mínimo del CTMe y el beneficio es normal. a) y b) están mal porque con menos empresas el precio no puede bajar; d), porque con pérdidas nadie entra.</p>' },
    },
    {
      exam: ['1p-2025-b#5'], level: 2, title: 'Precio inferior a la nivelación: ¿pérdidas? ¿cierran? (1er parcial 2025)',
      prompt: '<p>En un mercado competitivo en donde el precio es inferior al punto de nivelación, ¿a corto plazo las empresas tendrán beneficios o pérdidas? ¿Entonces las empresas cerrarán? Explique analítica y gráficamente.</p>',
      solution: { explain: '<p>A corto plazo tienen <strong>pérdidas</strong>: el precio es menor que el CTMe en cualquier nivel de producción, así que B = (P − CTMe) · X < 0. Pero <strong>no necesariamente cierran</strong>:</p><ul><li>Si <strong>mín CVMe ≤ P < mín CTMe</strong>, siguen produciendo: cubren todo el costo variable y parte del fijo, y pierden menos que cerrando (perderían el costo fijo entero). Ejemplo de la lección: P = 9 con CT = X² + 4X + 16 → pierde 9,75 produciendo y 16 cerrando.</li><li>Si <strong>P < mín CVMe</strong> (punto de cierre), cierran: ni siquiera cubren los costos variables.</li></ul><p>A <strong>largo plazo</strong>, con pérdidas, salen empresas y el precio sube hasta el punto de nivelación.</p>' },
    },
    {
      exam: ['1p-2025-c#5'], level: 2, title: 'Precio superior al punto de nivelación: largo plazo (1er parcial 2025)',
      prompt: '<p>En un mercado competitivo, en donde el precio es superior al punto de nivelación, ¿cuál es el comportamiento de las empresas a largo plazo? Explique y grafique.</p>',
      solution: { explain: '<p>Con P mayor que el mínimo del CTMe, las empresas obtienen <strong>beneficios extraordinarios</strong>: ganan más que en cualquier actividad alternativa. Como no hay barreras de entrada, <strong>entran empresas</strong> nuevas; la oferta del mercado se desplaza a la derecha y el <strong>precio baja</strong>. Cada empresa, sobre su CMg, reduce su producción. El proceso termina cuando el precio llega al <strong>mínimo del CTMe</strong>: beneficio normal y nadie quiere entrar ni salir. La cantidad del mercado es mayor, producida por más empresas. Es el gráfico de la lección con las flechas al revés (la oferta va hacia la derecha y el precio baja hasta la nivelación).</p>' },
    },
  );

  // ---------- Tema X ----------
  add('pib-y-enfoques', {
    exam: ['rec-dic-2024#7', '2p-2024-3k3#2'], level: 2, title: 'Defina el PIB, nominal y real, y sus enfoques (2do parcial 2024 y recuperatorio)',
    prompt: '<p>Defina PIB. Explique las diferencias entre PIB nominal y real. Explique los enfoques o criterios con los que se puede medir el PIB de un país.</p>',
    solution: { explain: `<p><strong>Definición</strong>: el PIB es el valor de mercado de todos los bienes y servicios <strong>finales</strong> producidos durante un período (en general un año) en el <strong>territorio</strong> de un país. Es una variable flujo; usa precios de mercado para poder sumar bienes distintos; excluye los intermedios para no contarlos dos veces; incluye lo producido en el país aunque los factores sean extranjeros.</p>
      <p><strong>Nominal y real</strong>: el nominal valora la producción de cada año a sus <strong>precios corrientes</strong> (Σ P<sub>t</sub>·q<sub>t</sub>) y puede crecer porque se produjo más o porque subieron los precios. El real la valora a <strong>precios de un año base</strong> (Σ P<sub>0</sub>·q<sub>t</sub>) y solo cambia si cambian las cantidades: es el que mide el crecimiento. El cociente nominal/real × 100 es el <strong>deflactor</strong>, una medida del nivel de precios.</p>
      <p><strong>Enfoques</strong>:</p>
      ${table(['Enfoque', 'Qué suma', 'Fórmula'], [['Producción (valor agregado)', 'El valor agregado de todas las empresas', 'Σ (producción − bienes intermedios)'], ['Gasto', 'El gasto en bienes finales', 'C + I + G + (X − M)'], ['Renta (ingreso)', 'Lo que cobran los factores', 'Salarios + alquileres + intereses + beneficios (+ impuestos indirectos netos y amortizaciones)']])}
      <p>Los tres dan el mismo valor porque lo que se produce se gasta, y lo que se gasta se reparte como rentas (flujo circular). Ejemplo de Microlandia (TP 6): valor agregado 50 + 50 + 50 = 150; rentas 60 + 30 + 30 + 30 = 150; y el gasto en el único bien final, el pan, también es 150.</p>` },
  });
  add('pib-a-fondo', {
    exam: ['2p-2024-3k3#1'], level: 1, title: 'V o F sobre el PIB (2do parcial 2024, 3K3)',
    prompt: '<p>Verdadero o falso (fundamente su respuesta): a) El PIB nominal sólo se incrementa cuando aumentan las cantidades físicas de bienes y servicios que produce un país. b) El Producto Interior Bruto incluye el valor de bienes de consumo y de bienes de inversión. c) El Producto Interior Bruto de un país puede obtenerse agregando el valor añadido de todas las empresas.</p>',
    solution: { explain: '<ul><li><strong>a) Falso</strong>: el PIB nominal valora la producción a precios corrientes, así que también aumenta si suben los precios, aunque las cantidades no cambien. El que solo crece con las cantidades es el real.</li><li><strong>b) Verdadero</strong>: por el lado del gasto, PIB = C + I + G + XN: incluye el consumo y la inversión (maquinaria, construcciones, existencias), siempre que sean bienes finales producidos en el período.</li><li><strong>c) Verdadero</strong>: es el enfoque de la producción. Sumar los valores añadidos (producción menos insumos comprados) evita contar dos veces los bienes intermedios y da el valor de la producción final.</li></ul>' },
  });

  // ---------- Tema XII ----------
  add('del-trueque-al-dinero', {
    exam: ['2p-2024-6r1#1', '2p-2025-b#1'], level: 1, title: 'Las funciones del dinero (2do parcial 2024 y otra versión)',
    prompt: '<p>Describa y explique las funciones del dinero.</p>',
    solution: { explain: `${table(['Función', 'Qué significa', 'Ejemplo y comentario'], [
      ['<strong>Medio de cambio</strong>', 'Es aceptado de forma generalizada en todas las transacciones: elimina la doble coincidencia de deseos del trueque', 'Pagar el colectivo o el almuerzo. Es la función que define al dinero'],
      ['<strong>Unidad de cuenta</strong>', 'Los precios se expresan en unidades de dinero, lo que permite comparar valores (Blanco 14.6.2)', 'El kilo de pan cuesta $2.000 y el de asado $12.000: el asado vale 6 kilos de pan'],
      ['<strong>Depósito de valor</strong>', 'Permite aplazar el consumo: guardar poder de compra para el futuro (Blanco 14.6.1)', 'Guardar el sueldo para el mes siguiente. Con inflación alta falla: el dinero pierde valor y se busca otro activo (el dólar)'],
    ])}<p>Para cumplirlas bien, el dinero debe ser durable, transportable, divisible, homogéneo y de oferta limitada. Hoy es <strong>fiduciario</strong>: vale por la confianza en quien lo emite, no por su valor intrínseco. Aclaración útil: dinero no es lo mismo que riqueza (una forma de mantenerla) ni que renta (el ingreso de un período).</p>` },
  });
  add('activos-y-demanda-dinero', {
    exam: ['2p-2024-3k3#4'], level: 1, title: 'V o F: activos líquidos y demanda de dinero (2do parcial 2024, 3K3)',
    prompt: '<p>Verdadero o falso (fundamente su respuesta): a) Los activos financieros más líquidos suelen ser, en media, los más rentables. b) La demanda de dinero es la cantidad de dinero que las personas desean tomar prestada.</p>',
    solution: { explain: '<ul><li><strong>a) Falso</strong> (Blanco 14.5.3): los activos más líquidos suelen ser los <strong>menos</strong> rentables. La liquidez se paga con rendimiento: el efectivo es el más líquido y no rinde nada; un plazo fijo rinde algo pero es menos líquido; una acción puede rendir más pero tiene más riesgo.</li><li><strong>b) Falso</strong> (Blanco 14.5.4): la demanda de dinero es la parte de la <strong>riqueza</strong> que las personas desean mantener en forma de dinero (por motivo transacción y por motivo especulativo), no lo que quieren pedir prestado. Su costo de oportunidad es la tasa de interés: si la tasa sube, se demanda menos dinero.</li></ul>' },
  });
  add('dinero-bancario',
    {
      exam: ['2p-2024-6r1#2', 'rec-dic-2024#5'], level: 1, title: '¿De qué depende la multiplicación de los depósitos? (2do parcial 2024 y recuperatorio)',
      prompt: '<p>¿De qué depende el proceso de multiplicación de los depósitos bancarios? Justifique su respuesta.</p>',
      solution: { explain: '<p>Depende del <strong>coeficiente de caja</strong> α (la parte de los depósitos que los bancos no prestan, fijada como mínimo por el Banco Central) y de la <strong>relación efectivo/depósitos</strong> e (la parte de su dinero que el público guarda en efectivo). El proceso es <strong>más intenso cuanto menores sean</strong> ambos. Justificación: en cada ronda, de lo que se recibe se deposita 1/(1 + e) y el banco presta (1 − α) de ese depósito; cada ronda es (1 − α)/(1 + e) de la anterior. Depósitos totales D = BM/(α + e) y oferta monetaria OM = (1 + e)/(α + e) · BM. Ejemplo: con α = 0,1 y e = 0,2 el multiplicador es 4; si α baja a 0,05, sube a 4,8. Si la gente desconfía de los bancos y retira efectivo (sube e), el multiplicador cae.</p>' },
    },
    {
      exam: ['2p-2024-6r1#3'], level: 1, title: 'La base monetaria aumentará si… (2do parcial 2024, 6R1)',
      prompt: '<p>La base monetaria (BM) aumentará si: a) se incrementa el coeficiente de caja; b) disminuye el coeficiente de caja; c) el Banco Central compra títulos de deuda pública; d) el Banco Central vende títulos de deuda pública. Justifique.</p>',
      solution: { explain: '<p><strong>c)</strong> (Blanco 14.6.5). Cuando el Banco Central compra títulos los paga con dinero nuevo: aumenta el efectivo o las reservas de los bancos, que son la base (BM = EMP + AC). a) y b) cambian el <strong>multiplicador</strong> y, con él, la oferta monetaria, pero no la base. d) la reduce: el Banco Central recoge dinero a cambio de los títulos.</p>' },
    },
    {
      exam: ['2p-2025#1', '2p-2025-b#2'], level: 3, title: 'El depósito de Jorge (2do parcial 2025 y otra versión)',
      prompt: '<p>En un país en el que el coeficiente de caja que se aplica al sistema bancario es del 10 %, Jorge tiene disponible $15.000.000 que lo deposita en su banco descontando el 20 %, que es la relación efectivo/depósito que las personas mantienen en forma de efectivo. Suponiendo que el banco continuó con el proceso de creación de dinero secundario: a) calcule, paso a paso, el dinero bancario creado; b) ¿qué pasará si el coeficiente de caja se reduce al 5 %? (Otra versión: coeficiente del 15 % y relación efectivo/depósitos del 25 %; luego el coeficiente baja al 10 %.)</p>',
      hints: ['De cada peso que llega se deposita 1/(1 + e).', 'Cada ronda es (1 − α)/(1 + e) de la anterior.'],
      solution: { explain: '<p>Resuelto ronda por ronda en la teoría de esta lección. Resultados:</p>' + table(['', 'α = 10 %, e = 20 %', 'α = 5 %, e = 20 %', 'α = 15 %, e = 25 %', 'α = 10 %, e = 25 %'], [['Primer depósito', '12.500.000', '12.500.000', '12.000.000', '12.000.000'], ['Proporción por ronda', '75 %', '79,2 %', '68 %', '72 %'], ['Depósitos totales', '50.000.000', '60.000.000', '37.500.000', '42.857.143'], ['Efectivo del público', '10.000.000', '12.000.000', '9.375.000', '10.714.286'], ['Oferta monetaria', '<strong>60.000.000</strong>', '<strong>72.000.000</strong>', '<strong>46.875.000</strong>', '<strong>53.571.429</strong>'], ['Multiplicador', '4', '4,8', '3,125', '3,571'], ['Dinero bancario creado (OM − BM)', '45.000.000', '57.000.000', '31.875.000', '38.571.429']]) + '<p>Conclusión de b): al bajar el coeficiente de caja los bancos prestan una parte mayor de cada depósito, el multiplicador sube y se crea más dinero con la misma base.</p>' },
    },
  );

  // ---------- Tema XIII ----------
  add('mercado-dinero-cuantitativa', {
    exam: ['2p-2025-b#5'], level: 1, title: 'Ecuación cuantitativa con M = 0,9 (2do parcial, otra versión)',
    prompt: '<p>Suponga que la oferta monetaria en el país X es de 0,900 billones de pesos, el PIB nominal es de 15 billones de pesos y el PIB real es de 5 billones de pesos. c) ¿Cuál es el nivel de precios? d) ¿Cuál es la velocidad del dinero?</p>',
    solution: { explain: '<p><strong>c)</strong> P = PIB nominal / PIB real = 15 / 5 = <strong>3</strong> (deflactor 300: los precios triplican los del año base).</p><p><strong>d)</strong> De M · V = P · Y: V = P · Y / M = 15 / 0,9 = <strong>16,67</strong>. Cada peso se usa unas 16,7 veces en el año para comprar la producción final.</p><p>(Las letras c y d siguen a las a y b del TP 6, ejercicio 2, del que está tomado.)</p>' },
  });
  add('politica-monetaria', {
    exam: ['rec-dic-2024#6', '2p-2025#2', '2p-2025-b#3'], level: 2, title: 'Instrumentos, tipos de política y consecuencias (2do parcial 2025 y recuperatorio)',
    prompt: '<p>¿Cuáles son los instrumentos del Banco Central para ejercer el control de la política monetaria? ¿Cuáles son los tipos de políticas monetarias que puede llevar a cabo el Banco Central y cuáles sus consecuencias en el corto plazo? (Recuperatorio: ¿cuáles son las herramientas para implementar una política monetaria expansiva y sus consecuencias en el corto plazo?)</p>',
    solution: { explain: '<p>La respuesta completa, con los gráficos, está al final de la teoría de esta lección (“La respuesta del parcial, en limpio”). Esquema: <strong>instrumentos</strong> (coeficiente de caja, operaciones de mercado abierto, facilidades permanentes y tasa de referencia, que actúan sobre la base o el multiplicador); <strong>tipos</strong> (expansiva y contractiva); <strong>consecuencias de corto plazo</strong> de la expansiva: baja la tasa de interés, sube la inversión, la demanda agregada, la producción y el empleo, y también los precios; de la contractiva, lo contrario. Para la versión del recuperatorio: herramientas expansivas = bajar el encaje, comprar títulos o divisas, prestar a los bancos con facilidades permanentes, bajar la tasa de referencia.</p>' },
  });

  // ---------- Tema XIV ----------
  add('inflacion-a-fondo',
    {
      exam: ['2p-2024-3k3#3'], level: 1, title: 'V o F sobre IPC e inflación (2do parcial 2024, 3K3)',
      prompt: '<p>Verdadero o falso (fundamente su respuesta): a) El IPC se calcula como una media ponderada del precio de todos los bienes. b) Si hay inflación, es imposible que descienda el precio de algún bien. c) Si el PIB nominal crece más que el PIB real, podemos afirmar que hay inflación.</p>',
      solution: { explain: '<ul><li><strong>a) Falso</strong>: es una media ponderada de los precios de los bienes y servicios de <strong>consumo final</strong> de la canasta de los hogares (ponderados según la ENGHo), no de todos los bienes: excluye intermedios y bienes de inversión.</li><li><strong>b) Falso</strong>: la inflación es la suba del nivel <strong>general</strong> de precios. Algunos precios pueden bajar (por ejemplo, la tecnología o un alimento de estación) mientras el promedio sube.</li><li><strong>c) Verdadero</strong>: si el nominal crece más que el real, el deflactor (nominal/real) sube: subió el nivel de precios de lo producido.</li></ul>' },
    },
    {
      exam: ['2p-2025#3', '2p-2025-b#4'], level: 2, title: 'La pregunta larga de inflación (2do parcial 2025 y otra versión)',
      prompt: '<p>¿Defina inflación, cuáles son las formas de calcularla? ¿Cuáles son las diferencias entre los distintos métodos de cálculo? ¿Cuáles son las causas y consecuencias de la inflación? ¿Quiénes son los ganadores y perdedores en los procesos inflacionarios?</p>',
      solution: { explain: '<p>La respuesta armada en seis partes está al final de la teoría de esta lección (“La respuesta del parcial, en limpio”), con la tabla IPC/deflactor. Puntos que no pueden faltar: la definición con sus tres rasgos (proceso, suba continuada, nivel general); la fórmula de la tasa con IPC y con deflactor; tres diferencias entre IPC y deflactor (consumo frente a toda la producción, importados, inversión, ponderaciones fijas o variables); las cuatro causas (demanda, costos, expectativas y emisión) con un gráfico; al menos cuatro consecuencias (redistribución acreedor-deudor, rentas fijas, recaudación, precios relativos, incertidumbre, inversión, impuesto inflacionario); y ganadores (deudores a tasa fija, el Estado) y perdedores (acreedores, asalariados y jubilados, ahorristas en efectivo).</p>' },
    },
  );

  // ---------- Tema XV ----------
  add('desigualdad-a-fondo', {
    exam: ['2p-2024-6r1#4', '2p-2025#4'], level: 2, title: 'Pobreza, umbrales, pobreza estructural y desigualdad (2do parcial 2024 y 2025)',
    prompt: '<p>Defina pobreza e indigencia. Explique cuáles son sus umbrales. ¿Qué es la pobreza estructural? ¿Qué es y cómo se mide la desigualdad?</p>',
    solution: { explain: '<p><strong>Indigencia</strong>: situación de los hogares cuyo ingreso no alcanza para comprar la Canasta Básica Alimentaria (CBA). <strong>Pobreza</strong>: la de los hogares cuyo ingreso no alcanza para la Canasta Básica Total (CBT = CBA más bienes y servicios no alimentarios). <strong>Umbrales</strong>: la línea de indigencia (valor de la CBA: cubre un mínimo de necesidades energéticas y proteicas según los hábitos de una población de referencia) y la línea de pobreza (valor de la CBT), ambas por adulto equivalente y actualizadas con los precios; los ingresos salen de la EPH. <strong>Pobreza estructural</strong>: carencias persistentes en las condiciones de vida (vivienda precaria, hacinamiento, falta de agua y servicios, chicos que no van a la escuela), que se miden con el método NBI; cambian lentamente, a diferencia de la pobreza por ingresos (coyuntural). <strong>Desigualdad</strong>: cómo se reparte el ingreso entre los hogares; se mide con la participación de cada quintil o decil, la relación entre el más rico y el más pobre, la curva de Lorenz y el coeficiente de Gini (0 igualdad, 1 máxima desigualdad). Desarrollo completo en la teoría de esta lección.</p>' },
  });
  add('lorenz-gini', {
    exam: ['rec-dic-2024#8'], level: 2, title: 'Pobreza e indigencia; Gini conceptual y gráficamente (recuperatorio dic. 2024)',
    prompt: '<p>Defina pobreza e indigencia. ¿Qué es el índice de Gini y cómo se calcula? Explique conceptual y gráficamente.</p>',
    solution: { explain: '<p><strong>Pobreza e indigencia</strong>: hogares cuyo ingreso no cubre la Canasta Básica Total o la Alimentaria, respectivamente (lección de canastas).</p><p><strong>Gini</strong>: mide la desigualdad en la distribución del ingreso. Gráficamente: se dibuja la curva de Lorenz (% acumulado de la población ordenada de más pobre a más rica en X, % acumulado del ingreso en Y) junto a la diagonal de igualdad perfecta. G = A / (A + B), donde A es el área entre la diagonal y la curva y A + B el triángulo bajo la diagonal. Va de 0 (igualdad perfecta: la curva coincide con la diagonal) a 1 (una persona se lleva todo).</p><p><strong>Cálculo</strong> con quintiles: G = 1 − Σ (X<sub>k</sub> − X<sub>k−1</sub>)(Y<sub>k</sub> + Y<sub>k−1</sub>). Con participaciones de 5, 10, 15, 22 y 48 %: Σ = 0,608 y G = <strong>0,392</strong> (tabla completa en la teoría de esta lección).</p>' },
  });
})();
