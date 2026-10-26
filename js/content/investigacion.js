/* Puntos de investigación de los TP (noticias, informes y datos que hay que buscar y analizar), desarrollados con los datos
   de las fuentes citadas. Se agregan al final de los ejercicios de la lección del tema. research: true los marca y los lista en #/cuadros. */
(() => {
  const { LESSONS, h } = window.GUIDE;
  const { chart, table, note, num } = h;
  const add = (id, ex) => {
    const l = LESSONS.find((x) => x.id === id);
    if (!l) throw new Error(`Lección inexistente: ${id}`);
    l.exercises = [...(l.exercises || []), { research: true, ...ex }];
  };
  const src = (t, url) => `<a href="${url}" target="_blank" rel="noopener">${t}</a>`;
  const SRC = {
    indec: src('INDEC, Utilización de la capacidad instalada en la industria, agosto de 2026 (15/10/2026)', 'https://www.indec.gob.ar/uploads/informesdeprensa/capacidad_10_263AAA0A2B86.pdf'),
    perfil: src('Perfil, “Cayó el uso de la capacidad instalada de la industria” (20/02/2026)', 'https://www.perfil.com/noticias/reperfilar/cayo-el-uso-de-la-capacidad-instalada-de-la-industria.phtml'),
    molinos: src('iProfesional, balance 2025 de Molinos presentado a la CNV', 'https://www.iprofesional.com/negocios/449870-gigante-alimenticia-de-los-perez-companc-acumula-millonarias-perdidas-inicio-de-2026'),
    cronista: src('El Cronista, “Con mejoras en el último trimestre, Molinos cerró 2025 con pérdidas de $ 41.000 millones” (11/03/2026)', 'https://www.cronista.com/tema/molinos-rio-de-la-plata/'),
    cepal: src('CEPAL, Panorama Social de América Latina y el Caribe 2024', 'https://www.cepal.org/es/publicaciones/80858-panorama-social-america-latina-caribe-2024-desafios-la-proteccion-social'),
    voz: src('Vozpópuli, “Barcelona se afianza como capital más cara para alquilar tras dos años con los precios intervenidos” (11/03/2026)', 'https://www.vozpopuli.com/espana/cataluna/barcelona-se-afianza-como-capital-mas-cara-para-alquilar-tras-dos-anos-con-los-precios-intervenidos.html'),
  };
  const how = note(`<p><strong>Cómo se corrige un punto de investigación.</strong> 1) Identificar el dato o la frase concreta de la fuente (transcripta y citada, con link). 2) Nombrar el concepto de la materia con su definición de la bibliografía (los <a href="#/cuadros">cuadros de Blanco</a> son la definición que se espera). 3) Explicar el mecanismo: qué causa qué, idealmente con la gráfica del tema. 4) Opinar separando lo positivo (lo que pasa) de lo normativo (lo que debería hacerse).</p>`, 'exam');

  // ---------- TP 1, ejercicio 1: conceptos con la actualidad ----------
  add('que-es-la-economia', {
    official: '1.1', level: 2, title: 'Los conceptos básicos en la actualidad',
    prompt: '<p>Utilizando la actualidad de Argentina, latinoamericana o global, a través de fuentes verificables (noticias, bibliografía, sitios específicos), explique: ¿qué es la economía?; ¿cuáles son los problemas básicos de la economía en Argentina?; ¿cuáles son los factores de la producción?; ¿cuál es el rol del Estado en una economía mixta?; ¿qué es capital humano?; ¿qué es economía normativa y economía positiva? En cada caso transcriba el párrafo seleccionado asociado al concepto e indique la fuente (y el link si es web).</p>',
    hints: ['Para cada punto: definición del libro + un hecho actual que la ilustre + la cita con link.', 'Los problemas básicos son las tres preguntas: qué, cómo y para quién producir. Buscá un dato argentino para cada una.', 'Para positiva/normativa, buscá en una misma nota una frase que describa un hecho y otra que diga qué debería hacerse.'],
    solution: { explain: `
      <p>Este es un <strong>modelo</strong>: las fuentes están verificadas, pero el TP pide que cada uno elija y transcriba sus propios párrafos. Lo que no puede faltar en cada punto es la definición, el hecho actual y la cita.</p>
      ${table(['Concepto', 'Definición (bibliografía)', 'Hecho actual que lo ilustra'], [
        ['Qué es la economía', 'Ciencia social que estudia cómo individuos y sociedad eligen asignar recursos escasos con usos alternativos (Blanco, cap. 1).', `Molinos Río de la Plata tuvo que elegir qué marcas sostener y cuánto invertir con ventas en baja: el balance 2025 cuenta un programa de reducción de costos, una nueva segmentación de negocios y marcas, y más de $20.000 millones invertidos en procesos, logística y tecnología (${SRC.molinos}).`],
        ['Problemas básicos en Argentina', '¿Qué producir?, ¿cómo producirlo?, ¿para quién producirlo? (Blanco, cap. 1, cuadro “Tres preguntas fundamentales”).', `<strong>Qué y cómo</strong>: en agosto de 2026 la industria usó el 58,5 % de su capacidad instalada y la metalmecánica (sin automotrices) solo el 35,9 %: hay recursos ociosos (${SRC.indec}). <strong>Para quién</strong>: la distribución; la CEPAL ubica a la región entre las más desiguales del mundo (${SRC.cepal}).`],
        ['Factores de la producción', 'Tierra (recursos naturales), trabajo (recursos humanos) y capital (maquinaria, instalaciones), combinados con una tecnología.', 'La capacidad instalada del INDEC mide justamente el uso del factor capital de la industria: plantas y máquinas que existen pero no se usan del todo.'],
        ['Rol del Estado en una economía mixta', 'Predomina el mercado, pero el Estado interviene para corregir fallos del mercado, redistribuir y estabilizar (Blanco, cap. 1).', `Ejemplo global: Cataluña topeó los alquileres hace dos años (intervención para buscar equidad). La nota muestra el costo: la oferta de alquiler cayó un 28 % (${SRC.voz}). En Argentina, la política monetaria del BCRA contra la inflación es la función de estabilización.`],
        ['Capital humano', 'Conocimientos, destrezas y cualificaciones que la educación crea en las personas y que se usan después en la producción (Blanco, cap. 1, “¿Cuál es el enfoque económico de la educación?”).', 'Estudiar ingeniería en la UTN: la matrícula es gratuita, pero el costo de oportunidad (el salario que se resigna) es alto. Se invierte hoy para tener ingresos mayores en el futuro (TP 1, ejercicio 7).'],
        ['Economía positiva y normativa', 'Positiva: describe la realidad tal cual es, se puede contrastar. Normativa: dice cómo debería ser, depende de juicios de valor.', `En la misma nota de Vozpópuli: “la oferta de alquiler cae un 28 %” es <strong>positiva</strong>; la Cámara de la Propiedad sostiene que la situación “sólo se revertiría con medidas efectivas”, que es <strong>normativa</strong> (${SRC.voz}).`],
      ])}
      ${note('Al transcribir, poné el párrafo entre comillas, el medio, la fecha y el link. Un dato sin fuente no suma en la corrección.', 'tip')}` },
  });

  // ---------- TP 1, ejercicio 3: Molinos ----------
  const pRel = (1.154 / 1.316 - 1) * 100;
  add('costos-explicitos-implicitos', {
    official: '1.3', level: 2, title: 'Molinos cerró 2025 con pérdidas',
    prompt: `<p>Analice la noticia del diario El Cronista del 11 de marzo de 2026 “Con mejoras en el último trimestre, Molinos cerró 2025 con pérdidas de $ 41.000 millones” y describa qué conceptos vistos en la asignatura se reflejan en la nota. Dé su opinión.</p>`,
    hints: ['¿La pérdida es contable o económica? ¿Cómo sería el beneficio económico?', 'Compará cuánto subieron sus precios con la inflación del año: ¿qué pasó con el precio relativo?', '¿Por qué bajó el volumen vendido? Pensá en la renta real de los consumidores.'],
    solution: { explain: `
      <p><strong>Los datos del balance</strong> (${SRC.cronista}; detalle en ${SRC.molinos}):</p>
      ${table(['Dato 2025', 'Valor'], [['Resultado neto', 'pérdida de $40.713 millones (en 2024: ganancia de $42.999 millones)'], ['Ingresos netos', '$951.943 millones'], ['Resultado operativo', 'pérdida de $19.480 millones; el 4.º trimestre cerró con ganancia operativa de $4.092 millones'], ['Volumen entregado', 'cerca de 6,5 % a 7 % menos que en 2024'], ['Precios de sus productos', '+15,4 % promedio, contra una inflación de 31,6 % (INDEC)'], ['Inversión', 'más de $20.000 millones en procesos, logística y tecnología']])}
      <p><strong>Conceptos que aparecen:</strong></p>
      <ul>
        <li><strong>Beneficio contable y económico</strong> (Tema III). La pérdida que informa el balance es contable: ingresos menos costos explícitos. El beneficio económico resta además los costos implícitos (lo que el capital de los accionistas rendiría en su mejor alternativa), así que es <em>todavía más negativo</em>. Los recursos de la empresa rinden menos que en otro uso.</li>
        <li><strong>Demanda y renta</strong> (Tema IV). La nota atribuye la caída de volumen a la retracción del consumo: con la renta real en baja, la demanda de bienes normales se desplaza a la izquierda. Además, los supermercados redujeron inventarios.</li>
        <li><strong>Precios nominales y relativos</strong> (Temas II y XIV). Sus precios subieron 15,4 % con una inflación del 31,6 %: en términos reales cayeron ${num(Math.abs(pRel), 1)} % (1,154 / 1,316 − 1). Con el IPC subiendo más que sus precios, los ingresos crecen en pesos pero caen en poder adquisitivo, mientras sus costos acompañan la inflación.</li>
        <li><strong>Elasticidad</strong> (Tema VI). La empresa no pudo trasladar la inflación a precios: si subía más, perdía todavía más volumen frente a segundas marcas (sustitutos cercanos, demanda elástica de cada marca).</li>
        <li><strong>Costos y eficiencia</strong> (Tema VII). La respuesta fue bajar costos medios: compras más eficientes, logística más barata, reorganizar marcas. La mejora del último trimestre (ganancia operativa) muestra el efecto.</li>
        <li><strong>Inversión y bienes de capital</strong> (Tema II). Los $20.000 millones son inversión: se resigna rentabilidad hoy para producir más barato mañana.</li>
        <li><strong>Escasez y elección</strong>. Con recursos limitados, la empresa elige qué marcas y mercados sostener; las exportaciones crecieron y amortiguaron la caída interna.</li>
      </ul>
      <p><strong>Opinión (ejemplo).</strong> El balance refleja más el contexto de consumo que un problema propio de la empresa: una firma líder que vende 7 % menos y no puede subir precios al ritmo de la inflación pierde aunque sea eficiente. La mejora del cuarto trimestre indica que el ajuste de costos funciona, pero la recuperación depende de que se recupere la renta real de los consumidores. Ojo: esa frase es normativa y discutible; los datos de la tabla son positivos.</p>
      ${how}` },
  });

  // ---------- TP 2, ejercicios 7 y 8: capacidad instalada ----------
  const G = [55.0, 58.6, 54.4, 58.6, 58.8, 58.9, 58.4, 59.6, 61.4, 60.9, 57.7, 53.8, 53.9, 54.6, 59.8, 59.9, 58.3, 59.1, 58.2, 58.5];
  const M = [38.1, 44.0, 42.8, 49.3, 46.0, 45.9, 49.0, 44.6, 44.2, 48.2, 39.9, 38.9, 31.4, 33.9, 40.0, 42.7, 38.7, 41.5, 38.3, 35.9];
  const A = [34.8, 54.6, 48.9, 56.8, 56.8, 52.0, 44.1, 53.3, 57.1, 56.1, 46.3, 31.2, 24.0, 38.9, 49.6, 46.5, 45.5, 45.5, 39.0, 46.2];
  const avg = (s, a, b) => s.slice(a, b).reduce((x, y) => x + y, 0) / (b - a);
  const pts = (s) => s.map((v, i) => [i + 1, v]);
  // 1-8 = ene-ago 2025, 13-20 = ene-ago 2026
  const ytd = { g: [avg(G, 0, 8), avg(G, 12, 20)], m: [avg(M, 0, 8), avg(M, 12, 20)], a: [avg(A, 0, 8), avg(A, 12, 20)] };
  console.assert(Math.abs(ytd.g[0] - 57.7875) < 1e-9 && Math.abs(ytd.m[1] - 37.8) < 1e-9, 'promedios UCII');

  add('crecimiento-fpp', {
    official: '2.7', level: 2, title: 'Cayó el uso de la capacidad instalada',
    prompt: '<p>Lea la noticia “Cayó el uso de la capacidad instalada de la industria” y analícela en el contexto del práctico (frontera de posibilidades de producción).</p>',
    hints: ['Capacidad instalada sin usar = factores ociosos. ¿Dónde queda la economía respecto de la FPP?', '¿Se desplaza la frontera cuando se usan recursos que estaban ociosos?'],
    solution: { explain: `
      <p><strong>El dato.</strong> En diciembre de 2025 la industria usó el <strong>53,8 %</strong> de su capacidad instalada, el nivel más bajo desde marzo de 2024 (53,2 %). Por bloques, la industria automotriz quedó en 31,2 % y la refinación de petróleo en 87,1 % (${SRC.perfil}; serie en ${SRC.indec}).</p>
      <p><strong>Lectura con la FPP.</strong> Que casi la mitad de las plantas y máquinas esté parada significa que el factor <strong>capital</strong> (y el trabajo asociado) está <strong>desempleado</strong>. La economía produce en un punto <strong>interior</strong> de su frontera: es una situación <strong>ineficiente</strong>, porque podría producir más de todos los bienes sin resignar nada.</p>
      ${chart({ x: [0, 120], y: [0, 120], xl: 'Bienes industriales', yl: 'Otros bienes', alt: 'FPP con un punto interior que se aleja de la frontera cuando cae el uso de la capacidad',
        curves: [{ f: (x) => 100 * Math.sqrt(Math.max(0, 1 - (x / 100) ** 2)), dom: [0, 100], cls: 'c-fpp', label: 'FPP' }],
        points: [{ x: 60, y: 80, label: 'F (frontera)', cls: 'c-ok' }, { x: 45, y: 62, label: 'A: 61 %', cls: 'c-warn', pos: 'w' }, { x: 36, y: 52, label: 'B: 53,8 %', cls: 'c-err', pos: 'sw' }],
        arrows: [{ from: [45, 62], to: [37.5, 53.5], cls: 'c-err' }] },
      'Al caer el uso de la capacidad, la economía se aleja de la frontera (de A a B). La FPP no se mueve: los recursos siguen existiendo, solo que no se usan.')}
      <ul>
        <li><strong>La FPP no se desplaza</strong>: las fábricas siguen ahí. Lo que cambia es el punto elegido (Blanco: la frontera no se mueve cuando se usan, o se dejan de usar, recursos que ya existían).</li>
        <li><strong>Recuperarse no es crecer</strong>: volver a usar la capacidad ociosa lleva a la economía hacia la frontera sin necesidad de inversión. Crecer, es decir correr la frontera hacia afuera, requiere más factores (inversión en capital) o mejor tecnología.</li>
        <li><strong>Costo de oportunidad casi nulo</strong>: mientras haya recursos ociosos, producir más de un bien no exige resignar el otro. Sobre la frontera, sí.</li>
        <li><strong>Causas</strong>: caída de la demanda (consumo e inversión) y de algunas ramas puntuales (automotriz, maquinaria agrícola). Es la cara productiva de la recesión: menos producción, menos empleo.</li>
      </ul>
      ${how}` },
  });

  add('crecimiento-fpp', {
    official: '2.8', level: 3, title: 'Los datos del INDEC: nivel general y metalmecánica',
    prompt: '<p>Analice los datos del INDEC y su evolución asociados a la utilización de la capacidad instalada en la industria y explique su comportamiento a nivel general y de la metalmecánica excluida la industria automotriz, a través de la página del INDEC.</p>',
    hints: ['En la página del INDEC: Estadísticas → Economía → Industria manufacturera → Utilización de la capacidad instalada. El informe trae un cuadro con la serie y otro por bloques.', 'Compará el mismo mes de dos años (interanual) y los promedios del año, no un mes suelto: la serie tiene estacionalidad (enero y diciembre siempre son bajos por vacaciones).'],
    solution: { explain: `
      <p><strong>Fuente:</strong> ${SRC.indec}. Último dato publicado: agosto de 2026.</p>
      ${chart({ x: [0, 21], y: [0, 70], xl: 'Mes (1 = ene-25, 13 = ene-26)', yl: '%', alt: 'Utilización de la capacidad instalada enero 2025 a agosto 2026: nivel general, metalmecánica y automotriz',
        curves: [{ pts: pts(G), cls: 'c-ok', label: 'Nivel general' }, { pts: pts(A), cls: 'c-warn', label: 'Automotriz', dash: true }, { pts: pts(M), cls: 'c-err', label: 'Metalmecánica s/ autos' }],
        vlines: [{ x: 12.5, cls: 'c-ctrl', label: '2026' }],
        points: [{ x: 20, y: 58.5, cls: 'c-ok', r: 3.5 }, { x: 20, y: 35.9, cls: 'c-err', r: 3.5 }] },
      'Utilización de la capacidad instalada (UCII), enero 2025 a agosto 2026. Datos: INDEC.')}
      ${table(['', 'Ago-2025', 'Ago-2026', 'Promedio ene-ago 2025', 'Promedio ene-ago 2026'], [
        ['Nivel general', '59,6 %', '58,5 %', `${num(ytd.g[0], 1)} %`, `${num(ytd.g[1], 1)} %`],
        ['Metalmecánica excepto automotores', '44,6 %', '35,9 %', `${num(ytd.m[0], 1)} %`, `${num(ytd.m[1], 1)} %`],
        ['Industria automotriz', '53,3 %', '46,2 %', `${num(ytd.a[0], 1)} %`, `${num(ytd.a[1], 1)} %`],
      ])}
      <p><strong>Nivel general.</strong> La industria usa algo menos del 60 % de su capacidad: hay más de un 40 % ocioso de manera persistente. En 2025 osciló entre 54 % y 61 % (máximo en septiembre, 61,4 %), cayó a fin de año (53,8 % en diciembre) y arrancó 2026 en mínimos (53,9 % en enero). Desde marzo se recuperó a 58–60 %, y el promedio de enero a agosto quedó prácticamente igual que el de 2025 (${num(ytd.g[1], 1)} % contra ${num(ytd.g[0], 1)} %): estancamiento, no crecimiento. Detrás del promedio hay sectores muy distintos: refinación de petróleo (88,8 %), metálicas básicas (70,1 %) y alimentos (66,4 %) arriba; automotriz (46,2 %), textiles (44,6 %) y metalmecánica abajo.</p>
      <p><strong>Metalmecánica excepto automotores.</strong> Es el bloque con <strong>menor</strong> uso de capacidad de toda la industria: 35,9 % en agosto de 2026, contra 44,6 % un año antes. Su promedio enero-agosto bajó de ${num(ytd.m[0], 1)} % a ${num(ytd.m[1], 1)} %. El INDEC lo explica por la menor producción de <strong>maquinaria agropecuaria</strong> (−37,9 % interanual) y de <strong>aparatos de uso doméstico</strong> (−28,0 %).</p>
      <p><strong>Interpretación con la materia.</strong></p>
      <ul>
        <li>Lo que fabrica la metalmecánica son en buena parte <strong>bienes de capital</strong> (maquinaria) y <strong>bienes durables</strong> (heladeras, lavarropas). Su demanda es muy sensible al ciclo: las empresas y el campo postergan la inversión y las familias postergan los durables cuando caen los ingresos o suben las tasas. Por eso cae mucho más que el promedio.</li>
        <li>Con la FPP: un uso de 36 % es un punto muy adentro de la frontera para ese sector. Y como lo que no se produce son bienes de capital, también se frena el <strong>crecimiento futuro</strong>: menos inversión hoy es una frontera que se corre menos mañana.</li>
        <li>La competencia de productos importados puede reducir la producción local de durables: la demanda de esos bienes no desaparece, pero la abastecen otros.</li>
      </ul>
      ${note('Para el parcial: “capacidad instalada ociosa” = recursos desempleados = punto interior de la FPP = ineficiencia. Volver a usarla no desplaza la frontera.', 'exam')}` },
  });

  // ---------- TP 6, ejercicio 7: la pobreza en América Latina (CEPAL 2024) ----------
  add('lorenz-gini', {
    official: '6.7', level: 2, title: 'La pobreza en América Latina según la CEPAL',
    prompt: '<p>Lea el informe “La pobreza en América Latina en el informe de la CEPAL 2024” (NODAL) y exprese su opinión vinculándolo con la temática desarrollada en clases.</p>',
    hints: ['Separá lo que dice el informe (datos) de tu opinión.', 'Vinculá con: líneas de pobreza e indigencia, desigualdad (Gini), crecimiento del PIB, inflación y el rol redistributivo del Estado.'],
    solution: { explain: `
      <p><strong>Lo que dice el informe</strong> (${SRC.cepal}, presentado el 12 de noviembre de 2024; su tema central es la protección social no contributiva):</p>
      ${table(['Indicador', 'Dato'], [['Pobreza en América Latina, 2023', '27,3 % de la población (1,5 puntos menos que en 2022)'], ['Pobreza extrema, 2023', '10,6 %'], ['Proyección de pobreza, 2024', '26,8 %, el nivel más bajo desde 1990'], ['Largo plazo', 'de 51,2 % (1990) a 27,7 % (2014); después la baja se frenó y la pandemia la revirtió'], ['Causas señaladas', 'baja capacidad de crecimiento de las economías, alta desigualdad, baja movilidad social y débil cohesión social']])}
      <p><strong>Vínculo con la materia.</strong></p>
      <ul>
        <li><strong>Pobreza por ingresos</strong> (Tema XV): la CEPAL mide como el INDEC, comparando el ingreso del hogar con el costo de una canasta. Pobreza extrema equivale a nuestra indigencia (no cubre la canasta alimentaria); pobreza, a no cubrir la canasta total.</li>
        <li><strong>Desigualdad</strong>: América Latina es una de las regiones más desiguales del mundo; su curva de Lorenz está lejos de la diagonal y sus Gini rondan 0,45. Con mucha desigualdad, el mismo crecimiento reduce menos la pobreza porque una parte menor llega a los quintiles bajos.</li>
        <li><strong>Crecimiento</strong> (Tema X): crecer (correr la FPP, más PIB per cápita) es necesario pero no suficiente. El informe culpa justamente al bajo crecimiento de la región de la reducción lenta de la pobreza.</li>
        <li><strong>Inflación</strong> (Tema XIV): golpea más a los pobres, que cobran ingresos fijos en pesos y no pueden protegerse comprando activos. Por eso la pobreza argentina sube en los años de inflación alta.</li>
        <li><strong>Rol del Estado</strong> (Tema II): la protección social no contributiva (transferencias que no exigen aportes previos, como la AUH en Argentina) es la función de <strong>redistribución</strong> de la economía mixta. Su límite es la disyuntiva entre equidad y eficiencia que plantea Blanco.</li>
      </ul>
      <p><strong>Opinión (ejemplo).</strong> La mejora hasta los niveles más bajos desde 1990 es una buena noticia, pero 1 de cada 4 latinoamericanos sigue siendo pobre y la caída depende de que la región crezca y de que ese crecimiento se distribuya. Las transferencias alivian la pobreza en el corto plazo; reducirla de forma duradera exige empleo formal, educación (capital humano) y estabilidad de precios.</p>
      ${how}` },
  });
})();
