/* Banco de preguntas de Blanco, "Economía: teoría y práctica": los verdadero/falso (X.5) y "sólo una respuesta es cierta" (X.6)
   de los capítulos que entran, con las soluciones del final del libro. Los parciales copian muchas de estas preguntas textuales.
   Se agregan al final del cuestionario de cada lección (así no cambian los ids de las preguntas que ya existían). */
(() => {
  const { LESSONS } = window.GUIDE;
  const add = (id, ...qs) => {
    const l = LESSONS.find((x) => x.id === id);
    if (!l) throw new Error(`Lección inexistente: ${id}`);
    l.quiz = [...(l.quiz || []), ...qs];
  };
  // Verdadero o falso: v = true si la afirmación es verdadera
  const vf = (src, q, v, e, exam) => ({ q, o: ['Verdadero', 'Falso'], a: v ? 0 : 1, e, src: `Blanco ${src}`, ...(exam ? { exam } : {}) });
  // Sólo una respuesta es cierta: a = índice de la correcta (0 = a)
  const mc = (src, q, o, a, e, exam) => ({ q, o, a, e, src: `Blanco ${src}`, ...(exam ? { exam } : {}) });

  // ---------- Capítulo 1 ----------
  add('que-es-la-economia',
    vf('1.5.1', 'Los conocimientos que desarrolla la economía no se consideran definitivos: están sometidos constantemente a la crítica y contrastados con la realidad.', true, 'Es el método científico: las teorías que la realidad contradice se abandonan.'),
    vf('1.5.2', 'Si de un año a otro suben los salarios y también los precios, puede afirmarse que lo primero causó lo segundo.', false, 'Que dos hechos ocurran a la vez no implica causalidad: habría que aislar el efecto de otras variables.'),
    vf('1.5.3', '“Un aumento del salario mínimo puede dar lugar a un aumento del desempleo” es una afirmación de economía normativa.', false, 'Es positiva: describe un efecto que se puede contrastar, no dice qué debe hacerse.'),
    vf('1.5.7', 'La economía considera que, para decidir, los individuos sopesan las ventajas y desventajas de cada opción y eligen la que consideran mejor.', true, 'Es el supuesto de racionalidad.'),
    mc('1.6.1', 'En economía, un modelo es…', ['un método matemático para procesar datos', 'un caso que debe imitarse por sus virtudes', 'una técnica para medir conceptos', 'una representación simplificada de la realidad'], 3, 'Las simplificaciones explícitas son los supuestos.'),
  );
  add('recursos-y-factores',
    vf('1.5.4', 'La tecnología pone el límite a las cantidades máximas de producto que pueden obtenerse con cada combinación de factores.', true, 'Es lo que define la función de producción y la FPP.'),
    vf('1.5.5', 'Se puede aplazar el consumo en el tiempo, pero nunca adelantar.', false, 'Pidiendo prestado se puede adelantar el consumo (desahorrar).'),
    vf('1.5.6', 'La riqueza de una persona está constituida por sus ingresos: salarios, intereses que cobra, etc.', false, 'Eso es la renta. La riqueza es lo acumulado con el ahorro.'),
    mc('1.6.4', 'Se llama “capital” en economía…', ['al dinero', 'a los factores que suministra la naturaleza', 'a los factores productivos que han sido producidos por otros factores', 'a los recursos económicos primordiales'], 2, 'Máquinas, edificios, herramientas.'),
  );
  add('fallos-de-mercado',
    vf('1.5.13', 'Un precio es la relación a la que se intercambian dos cosas entre sí.', true, 'En dinero es un precio absoluto; en otro bien, relativo.'),
    vf('1.5.15', 'Si un vendedor tiene capacidad para fijar el precio del producto que vende, se produce un fallo de mercado.', true, 'Falta la competencia perfecta.'),
    mc('1.6.10', 'El sistema de mercado se basa en…', ['el papel del Estado', 'el mecanismo de autoridad', 'el intercambio voluntario', 'las ineficiencias de la producción'], 2, 'Nadie obliga a nadie a comprar o vender.'),
    mc('1.6.11', 'Se dice que hay un incentivo cuando…', ['se obliga a actuar en un sentido', 'se castiga por actuar en un sentido', 'se prohíbe actuar en un sentido', 'se premia por actuar en un sentido'], 3, 'Los incentivos son premios; los desincentivos, castigos.'),
  );
  add('sistemas-y-estado',
    vf('1.5.12', 'En un sistema de mercado, los precios transmiten la información de unos agentes a otros.', true, 'Sobre los deseos de los consumidores y las condiciones de producción.'),
  );
  add('escasez-y-eleccion',
    mc('1.6.2', 'La necesidad de elegir es consecuencia de…', ['el costo de oportunidad', 'la escasez', 'la ineficiencia', 'los precios'], 1, 'Si no hubiera escasez no habría que elegir.'),
    mc('1.6.3', 'El costo de oportunidad es consecuencia de…', ['la elección', 'la existencia de bienes libres', 'el desarrollo tecnológico', 'la existencia del mercado'], 0, 'Escasez → elección → costo de oportunidad.'),
  );
  add('frontera-posibilidades',
    vf('1.5.8', 'La ley de rendimientos decrecientes sostiene que, al añadir unidades de un factor variable a uno fijo, llega un momento en que la producción comienza a descender.', false, 'La producción sigue creciendo, pero a un ritmo menor.'),
    vf('1.5.10', 'Cuando un país se sitúa sobre su FPP está utilizando todos sus recursos con la mejor tecnología disponible.', true, 'Por eso los puntos de la frontera son eficientes.'),
    mc('1.6.5', 'Se produce con eficiencia cuando…', ['no hay escasez', 'no es posible aumentar la producción de un bien sin disminuir la de otro', 'es posible aumentar la producción de todos los bienes', 'el costo de oportunidad es constante'], 1, 'Es estar sobre la frontera.'),
    mc('1.6.7', 'La forma cóncava de la FPP puede deberse a…', ['la ley de rendimientos decrecientes', 'la existencia de un costo de oportunidad', 'la escasez', 'la eficiencia en la producción'], 0, 'Hace creciente el costo de oportunidad (TP 2, ejercicio 6).'),
  );
  add('crecimiento-fpp',
    vf('1.5.9', 'Se produce una mejora tecnológica en un bien cuando después del cambio hacen falta menos recursos para producir la misma cantidad.', true, 'Por eso los recursos liberados pueden ir al otro bien.'),
    vf('1.5.11', 'Cuando disminuye el desempleo en un país, la FPP se desplaza hacia la derecha.', false, 'La economía se acerca a su frontera, que no se mueve.'),
    mc('1.6.6', 'La FPP se desplaza hacia el origen cuando…', ['la sociedad no utiliza todos los recursos', 'mejora la tecnología de uno de los bienes', 'aumentan los recursos productivos', 'disminuyen los recursos productivos'], 3, 'a) es un punto interior, no un desplazamiento.'),
  );
  add('mercado-competencia',
    mc('1.6.9', 'Un precio relativo es…', ['el que es caro o barato según el dinero que llevemos', 'el número de pesos que vale un bien', 'el número de unidades de un bien que se intercambian por una unidad de otro', 'el que satisface a todos los consumidores'], 2, 'Un kilo de asado = 6 kilos de pan.'),
  );

  // ---------- Capítulo 2 ----------
  add('la-demanda',
    vf('2.5.1', 'La curva de demanda indica las cantidades que los consumidores compran a cada nivel de precios.', false, 'Indica las cantidades que están <em>dispuestos</em> a comprar: es una curva de intenciones.'),
    vf('2.5.3', 'Si el bien X es inferior, al incrementarse la renta su curva de demanda se desplaza hacia la izquierda.', true, 'Con más renta se consume menos de un bien inferior.'),
    vf('2.5.4', 'Si disminuye el precio de la nafta, la curva de demanda de automóviles se desplaza hacia la izquierda.', false, 'Son complementarios: se desplaza a la derecha.'),
    vf('2.5.5', 'Si aumenta el precio de un sustituto, la demanda del bien en cuestión se desplaza hacia la izquierda.', false, 'Se desplaza a la derecha: se pasan a este bien.'),
    vf('2.5.14', 'Los bienes complementarios son los que pueden satisfacer por separado la misma necesidad.', false, 'Esos son los sustitutivos. Los complementarios se usan juntos.'),
    mc('2.6.1', 'La diferencia entre una función de demanda genérica y una curva de demanda es que…', ['la curva se grafica y la función es una ecuación', 'no hay diferencia', 'la curva es una función con todas las variables constantes salvo el precio del bien', 'la función es individual y la curva colectiva'], 2, 'Ceteris paribus.'),
    mc('2.6.2', 'Al aumentar la renta de los consumidores, la curva de demanda del bien X…', ['se desplaza a la derecha si el bien es normal', 'se desplaza a la derecha si el bien es inferior', 'se desplaza a la derecha si el bien es sustitutivo', 'se desplaza a la derecha si el bien es complementario'], 0, 'Tomada en el 1er parcial 3K2 2022.', ['1p-2022-3k2#3']),
  );
  add('la-oferta',
    vf('2.5.2', 'La función de oferta y la curva de oferta son el mismo concepto: una se expresa con una fórmula y la otra con un gráfico.', false, 'La curva es la función con todo constante excepto el precio del propio bien.'),
    vf('2.5.7', 'Al aumentar los costos de producción, la curva de oferta de un bien se desplaza hacia la izquierda.', true, 'A cada precio se ofrece menos.'),
    mc('2.6.4', 'Al aumentar los costos de producción de un bien, la curva de oferta…', ['se desplaza a la derecha', 'se desplaza a la izquierda', 'gira sobre su punto medio', 'no se desplaza'], 1, 'Producir cuesta más.'),
  );
  add('equilibrio',
    vf('1.5.14', 'Un mercado se encuentra en equilibrio cuando su precio lleva mucho tiempo sin variar.', false, 'Está en equilibrio cuando coinciden las cantidades que se desean comprar y vender.'),
    mc('2.6.5', 'Un precio es de equilibrio cuando a ese precio…', ['lo comprado coincide con lo vendido', 'no es ni muy barato ni muy caro', 'se forman colas', 'no existe exceso de oferta ni de demanda'], 3, 'Lo comprado y lo vendido coinciden siempre.'),
    mc('2.6.7', 'Si se incrementa la renta y el bien X es normal, la variación del equilibrio se caracteriza por…', ['un aumento de la cantidad y del precio', 'una disminución de la cantidad y del precio', 'un aumento de la cantidad y una baja del precio', 'una suba del precio y una baja de la cantidad'], 0, 'La demanda se desplaza a la derecha. Tomada en el 1er parcial 2023.', ['1p-2023#5']),
  );
  add('movimientos-desplazamientos',
    vf('2.5.10', 'Una mejora tecnológica aumenta la cantidad y el precio de equilibrio.', false, 'Aumenta la cantidad y baja el precio.'),
    vf('2.5.11', 'Al aumentar el precio de un bien, su curva de oferta se desplaza hacia la izquierda.', false, 'Es un movimiento a lo largo de la curva.'),
    mc('2.6.3', 'Al incrementarse el precio de un bien X, su curva de demanda…', ['se desplaza a la derecha', 'se desplaza a la izquierda', 'gira sobre su punto medio', 'no se desplaza'], 3, 'Cambia la cantidad demandada.'),
    mc('2.6.10', 'Si aumenta el precio de la materia prima de un bien, en el equilibrio…', ['aumentan cantidad y precio', 'disminuyen cantidad y precio', 'sube la cantidad y baja el precio', 'sube el precio y baja la cantidad'], 3, 'La oferta se desplaza a la izquierda.'),
  );
  add('precios-maximos',
    vf('2.5.8', 'Si se establece un precio máximo inferior al de equilibrio, aparecerá escasez.', true, 'Xd > Xo.'),
    vf('2.5.13', 'Si la cantidad demandada es superior a la ofrecida y el precio no puede variar, los consumidores comprarán una cantidad equivalente a la ofrecida.', true, 'Manda el lado corto del mercado.'),
    mc('2.6.11', 'Si se establece un precio máximo inferior al de equilibrio…', ['la cantidad ofrecida superará a la demandada', 'la ofrecida coincidirá con la demandada', 'la vendida superará a la comprada', 'la vendida coincidirá con la comprada'], 3, 'Compras y ventas coinciden siempre.'),
  );
  add('precios-minimos',
    vf('2.5.9', 'Si se establece un precio mínimo inferior al de equilibrio, aparecerá un excedente.', false, 'No tiene efecto: el mercado sigue en su equilibrio.'),
    mc('2.6.9', 'Si se establece un precio mínimo superior al de equilibrio…', ['se producirá un exceso de oferta', 'se producirá un exceso de demanda', 'se alcanzará un equilibrio económico', 'los productores venderán lo que estaban dispuestos a ese precio'], 0, 'Excedente.'),
  );
  add('impuestos-excedentes',
    vf('2.5.12', 'Si se introduce un impuesto fijo sobre las ventas, la curva de oferta se desplaza hacia arriba en la cuantía del impuesto.', true, 'Para el vendedor es un costo más por unidad.'),
    vf('2.5.15', 'La carga de un impuesto sobre las ventas siempre recae completamente sobre los consumidores.', false, 'En general se reparte entre productores y consumidores.'),
    vf('3.5.12', 'Con demanda inelástica y oferta elástica, la carga de un impuesto recae mayoritariamente sobre los compradores.', true, 'Paga más el lado menos elástico.'),
    mc('2.6.12', 'Si se introduce un impuesto sobre las ventas…', ['la cantidad aumenta y los vendedores reciben un precio neto menor', 'la cantidad aumenta y reciben uno mayor', 'la cantidad disminuye y los vendedores reciben un precio neto menor que el de equilibrio inicial', 'la cantidad disminuye y reciben uno mayor'], 2, 'Los compradores pagan más y los vendedores reciben menos.'),
  );

  // ---------- Capítulo 3 ----------
  add('elasticidad-precio',
    vf('3.5.1', 'La elasticidad precio mide las unidades en que disminuye la cantidad demandada cuando el precio sube un centavo.', false, 'Mide la variación porcentual de la cantidad cuando el precio sube 1 %.'),
    vf('3.5.2', 'Si la elasticidad de la demanda vale 1, al aumentar el precio un 4 % la cantidad demandada se reduce un 1 %.', false, 'Se reduce un 4 %.'),
    vf('3.5.3', 'Si al aumentar el precio la cantidad demandada desciende, la demanda es elástica.', false, 'Tiene que descender en un porcentaje mayor que la suba del precio.'),
    vf('3.5.4', 'Si al aumentar el precio un 2 % la cantidad demandada cae un 1 %, la elasticidad vale 0,5.', true, '1 / 2.'),
    vf('3.5.8', 'En una curva de demanda rectilínea la elasticidad precio es la misma en todos los puntos.', false, 'Es mayor en los precios altos.'),
    vf('3.5.10', 'La demanda suele ser tanto más elástica cuantos más y mejores sustitutos tenga el bien.', true, 'Es fácil cambiarse.'),
    vf('3.5.11', 'Si al subir un peso el precio de dos frutas, la cantidad de la primera cae 300 t y la de la segunda 200 t, la demanda de la primera es más elástica.', false, 'No se puede saber sin las variaciones porcentuales.'),
    vf('3.5.13', 'Cuando la variación del precio es grande, lo más correcto es calcular la elasticidad arco.', true, 'Evita depender del punto de partida.'),
    vf('3.5.14', 'Si la elasticidad precio es 0,9, la demanda es elástica.', false, 'Es inelástica: menor que 1.'),
    mc('3.6.1', 'La elasticidad de la demanda con respecto a su precio mide…', ['la variación en unidades cuando el precio sube un peso', 'la variación porcentual cuando el precio sube un peso', 'la variación en unidades cuando el precio sube 1 %', 'la variación porcentual de la cantidad cuando el precio sube 1 %'], 3, 'Todo en porcentajes.'),
    mc('3.6.2', 'Si al bajar el precio un 2 % la cantidad demandada sube 1 %, la elasticidad vale…', ['4', '2', '1', '0,5'], 3, '1 / 2.'),
    mc('3.6.3', 'Si la elasticidad es 0,5 y el precio sube 2 %, la cantidad demandada disminuye…', ['0,5 %', '1 %', '2 %', '4 %'], 1, '0,5 · 2 %.'),
    mc('3.6.6', 'La demanda tenderá a ser menos elástica…', ['cuantos menos sustitutos tenga el bien', 'cuanto mayor sea su peso en el gasto', 'cuanto más largo sea el plazo', 'cuanto más concreto sea el bien'], 0, 'Las otras tres la hacen más elástica.'),
    mc('3.6.12', 'Cuando la curva de demanda es vertical, su elasticidad es…', ['cero', 'uno', 'infinito', 'creciente a lo largo de la curva'], 0, 'Perfectamente inelástica.'),
  );
  add('elasticidad-ingreso-total',
    vf('3.5.6', 'Al disminuir el precio de un bien, los ingresos de los productores aumentan si la demanda es elástica.', true, 'La cantidad sube más que proporcionalmente.'),
  );
  add('elasticidad-cruzada-renta',
    vf('3.5.5', 'Si la elasticidad renta vale 1,5, el bien es de lujo.', true, 'Mayor que 1.'),
    vf('3.5.7', 'Si la elasticidad cruzada de dos bienes es negativa, son sustitutivos.', false, 'Son complementarios.'),
    vf('3.5.9', 'Si la elasticidad de X respecto del precio de Y es −3, ambos bienes son inferiores.', false, 'La cruzada solo dice si son sustitutos, complementarios o independientes.'),
    mc('3.6.7', 'Si al disminuir la renta 1 % la cantidad demandada cae 2 %…', ['la demanda es inelástica', 'la elasticidad renta es −2', 'la elasticidad cruzada es −2', 'la elasticidad renta es 2'], 3, 'Las dos variables se mueven en el mismo sentido.'),
    mc('3.6.8', 'Si la elasticidad renta es −2, el bien es…', ['inferior', 'sustitutivo', 'de primera necesidad', 'de lujo'], 0, 'Negativa.'),
    mc('3.6.9', 'La elasticidad cruzada permite clasificar los bienes como…', ['sustitutivos o complementarios', 'elásticos o inelásticos', 'inferiores o normales', 'de necesidad o de lujo'], 0, 'Las demás son otras elasticidades.'),
    mc('3.6.10', 'Si la elasticidad cruzada de X respecto del precio de Y es −0,25, ambos bienes son…', ['inferiores', 'sustitutivos', 'complementarios', 'de lujo'], 2, 'Negativa.'),
  );
  add('elasticidad-oferta',
    vf('3.5.15', 'Tanto la oferta como la demanda son más elásticas en el corto que en el largo plazo.', false, 'Son más elásticas a largo plazo.'),
    mc('3.6.11', 'Si el precio sube 3 % y la cantidad ofrecida sube 6 %, la elasticidad de la oferta es…', ['0,5', '2', '3', '6'], 1, '6 / 3.'),
  );

  // ---------- Capítulo 5 ----------
  add('funcion-produccion',
    vf('5.5.1', 'En el corto plazo todos los factores productivos son variables.', false, 'El corto plazo se caracteriza por tener algún factor fijo.'),
    vf('5.5.5', 'La eficiencia técnica es producir con el mínimo costo posible dados los precios de los factores.', false, 'Esa es la eficiencia económica.'),
    vf('5.5.6', 'Producir con eficiencia técnica implica obtener el máximo nivel de producción usando la mínima cantidad de factores.', true, 'No desperdiciar recursos.'),
    vf('5.5.7', 'Un avance tecnológico en una empresa implicaría un cambio de su función de producción.', true, 'La función representa la tecnología.'),
    vf('5.5.15', 'La eficiencia económica es producir la cantidad máxima posible dada la tecnología y los factores.', false, 'Esa es la eficiencia técnica.'),
    mc('5.6.1', 'La función de producción relaciona…', ['la cantidad producida con los costos', 'la cantidad producida con el precio de los factores', 'la cantidad producida con la cantidad de factores utilizados', 'la cantidad producida con el precio de venta'], 2, 'Es una relación física.'),
    mc('5.6.2', 'El corto y el largo plazo se diferencian porque…', ['en el corto todos los factores son variables', 'en el corto la empresa no puede variar su producción', 'en el largo todos son variables y en el corto todos fijos', 'en el corto solo se modifican algunos factores y en el largo todos'], 3, 'Algún factor fijo a corto plazo.'),
    mc('5.6.3', 'La función de producción se modifica cuando…', ['cambia la cantidad de factores', 'varía la tecnología', 'se consigue la eficiencia técnica', 'cambian los precios de los factores'], 1, 'Cambiar factores es moverse sobre la función.'),
  );
  add('productividades',
    vf('5.5.8', 'La ley de rendimientos decrecientes implica que las unidades adicionales de factor variable aportan cada vez más al producto total.', false, 'Aportan cada vez menos.'),
    vf('5.5.9', 'El óptimo técnico es aquel en que coinciden la productividad media y la marginal.', true, 'Es el máximo del PMe.'),
    mc('5.6.6', 'El trabajo tiene productividad marginal decreciente cuando…', ['cada trabajador aporta más que el anterior', 'cada trabajador aporta menos que el siguiente', 'para cada unidad adicional hacen falta menos trabajadores', 'para cada unidad adicional hacen falta más trabajadores'], 3, 'Cada trabajador aporta menos.'),
    mc('5.6.7', 'Cuando la productividad media es creciente…', ['la marginal es siempre decreciente', 'la marginal es mayor que la media', 'la marginal es menor que la media', 'la marginal es igual a la media'], 1, 'Un aporte mayor que el promedio lo sube.'),
    mc('5.6.8', 'La ley de rendimientos decrecientes sostiene que, al aumentar el trabajo con los demás factores fijos…', ['la producción comienza a decrecer', 'la rentabilidad decrece', 'la producción se incrementa cada vez en menor medida', 'la empresa produce cada vez a menor costo'], 2, 'Crece, pero cada vez menos.'),
  );
  add('costos-corto-plazo',
    vf('5.5.2', 'Los costos de una empresa dependen de los precios de los factores pero no del nivel de producción.', false, 'También dependen de las cantidades de factores, que cambian con la producción.'),
    vf('5.5.3', 'Si los costos medios crecen, es porque los costos marginales son mayores que los medios.', true, 'La última unidad cuesta más que el promedio.'),
    vf('5.5.4', 'Los costos variables son siempre los asociados al factor trabajo.', false, 'También materias primas, energía, etc.'),
    vf('5.5.10', 'El costo fijo medio es siempre el mismo, sin importar el nivel de producción.', false, 'El fijo es constante; el fijo medio baja al producir más.'),
  );
  add('costos-explicitos-implicitos',
    vf('5.5.12', 'Para la economía, el verdadero costo de un recurso es su costo de oportunidad.', true, 'El valor de su mejor uso alternativo.'),
  );
  add('productividad-y-costos',
    vf('5.5.14', 'Si la productividad media del trabajo es decreciente, el costo medio a corto plazo es decreciente.', false, 'Es creciente: CVMe = w/PMe.'),
    mc('5.6.12', 'A corto plazo puede afirmarse que…', ['cuando la productividad marginal aumenta, el costo marginal disminuye', 'cuando la productividad media disminuye, el CVMe disminuye', 'cuando la productividad marginal disminuye, el costo marginal disminuye', 'cuando la productividad media aumenta, el CVMe aumenta'], 0, 'CMg = w/PMg.'),
  );
  add('empresa-escala-beneficio',
    vf('5.5.13', 'La economía considera que el objetivo fundamental de la empresa es la maximización del beneficio.', true, 'Es el supuesto del modelo.'),
  );

  // ---------- Capítulo 6 ----------
  add('mercado-competencia',
    vf('6.5.5', 'Un mercado competitivo se caracteriza por la venta de productos diferenciados.', false, 'Los productos son idénticos (homogéneos).'),
    vf('6.5.8', 'Un mercado es competitivo cuando las empresas compiten para vender más barato que las demás.', false, 'Es competitivo cuando nadie puede influir en el precio.'),
    mc('6.6.9', '¿Cuál de estas características NO se verifica en un mercado competitivo?', ['el número de empresas es muy elevado', 'no hay barreras de entrada', 'ninguna empresa puede afectar el precio', 'el producto es heterogéneo'], 3, 'Es homogéneo.'),
  );
  add('maximo-beneficio',
    vf('6.5.1', 'Para obtener beneficios máximos, la empresa competitiva hace máxima la diferencia entre precio y costo marginal.', false, 'Produce donde el precio iguala al costo marginal.'),
    vf('6.5.2', 'En competencia perfecta el ingreso marginal coincide siempre con el precio de la última unidad vendida.', true, 'IMg = P.'),
    vf('6.5.3', 'Las empresas competitivas que maximizan beneficios producen donde se igualan el costo marginal y el ingreso marginal.', true, 'Con CMg creciente.'),
    vf('6.5.4', 'Si el costo es CT = X² + X + 1, la curva de oferta de la empresa es Xo = 2X + 1.', false, 'P = CMg = 2X + 1 → Xo = 0,5P − 0,5.'),
    vf('6.5.6', 'En un mercado competitivo, precio y costo marginal son dos conceptos idénticos.', false, 'El precio lo fija el mercado; el CMg depende de la tecnología. Solo se igualan en el óptimo.'),
    vf('6.5.14', 'Si suben en la misma proporción el precio del producto y el de todos los factores, la empresa competitiva no cambia su producción.', true, 'Su CMg sube en la misma proporción que el precio.'),
    mc('6.6.2', 'Una empresa competitiva con CMg creciente produce donde el precio es menor que el CMg. Para maximizar el beneficio…', ['aumentará la producción', 'disminuirá la producción', 'venderá más caro', 'venderá más barato'], 1, 'La última unidad cuesta más de lo que se cobra.'),
    mc('6.6.6', 'La curva de oferta de la empresa competitiva a corto plazo es…', ['toda la curva de costo marginal', 'el tramo creciente del CMg', 'el tramo creciente del CMg por encima del CVMe', 'el tramo creciente del CMg por encima del CTMe'], 2, 'Debajo del mínimo del CVMe cierra.'),
    mc('6.6.7', 'La curva de demanda que enfrenta la empresa competitiva es…', ['decreciente', 'horizontal', 'vertical', 'creciente'], 1, 'Es precio-aceptante.'),
  );
  add('beneficios-y-cierre',
    vf('6.5.9', 'La empresa competitiva cierra cuando los ingresos son inferiores a los costos variables.', true, 'Las pérdidas superarían al costo fijo (TP 5, ejercicio 13).'),
    vf('6.5.15', 'Cuando el beneficio económico es máximo, nunca puede ser negativo.', false, 'A corto plazo puede ser positivo, nulo o negativo: la menor pérdida.'),
    mc('6.6.8', 'En un mercado competitivo aparecerán beneficios extraordinarios si…', ['el precio supera al CVMe', 'el precio supera al ingreso medio', 'el precio supera al costo total medio', 'el precio supera al costo marginal'], 2, 'P > CTMe.'),
    mc('6.6.10', 'Beneficios económicos nulos implican que…', ['la empresa cerrará a corto plazo', 'la empresa obtiene la misma rentabilidad que en cualquier otra actividad', 'no cubre sus costos variables', 'cerrará a largo plazo'], 1, 'Beneficio normal.'),
  );
  add('largo-plazo',
    vf('6.5.7', 'La empresa competitiva que obtenga beneficios económicos nulos acabará cerrando a largo plazo.', false, 'Gana lo mismo que en cualquier otra actividad.'),
    vf('6.5.10', 'A largo plazo, el precio en un mercado competitivo tiende al mínimo del costo variable medio.', false, 'Tiende al mínimo del costo total medio.'),
    vf('6.5.11', 'En un mercado competitivo, cualquier empresa que lo desee puede entrar.', true, 'No hay barreras.'),
    vf('6.5.12', 'Para que entren empresas a un sector no basta con beneficios positivos: tienen que ser muy elevados.', false, 'Alcanza con que sean positivos.'),
    vf('6.5.13', 'Si un mercado competitivo en equilibrio de largo plazo enfrenta una caída de la demanda, a largo plazo solo se reduce el precio y la cantidad se mantiene.', false, 'A largo plazo se reduce la cantidad y el precio vuelve a su nivel.'),
  );

  // ---------- Capítulo 7 ----------
  add('bienestar',
    vf('7.5.1', 'La economía del bienestar realiza juicios de tipo normativo.', true, 'Evalúa si un resultado es deseable.'),
    vf('7.5.3', 'Entre dos personas que compran el mismo auto por el mismo precio, obtiene más excedente quien estaba dispuesta a pagar más.', true, 'El excedente es disposición a pagar menos precio.'),
    vf('7.5.5', 'Al aumentar el precio se incrementa el excedente del consumidor.', false, 'Disminuye.'),
    vf('7.5.6', 'Al aumentar el precio se incrementa el excedente del productor.', true, 'Cobra más por cada unidad.'),
    vf('7.5.7', 'El excedente del productor puede calcularse siempre como el beneficio de las empresas.', false, 'Es el beneficio más el costo fijo.'),
    mc('7.6.2', 'El excedente del productor de una unidad es…', ['el precio menos lo que cuesta almacenarla', 'el precio que recibe menos el costo marginal', 'el precio menos el costo medio', 'el beneficio que obtiene'], 1, 'Área entre el precio y la oferta.'),
    mc('7.6.4', 'El excedente del consumidor se mide en…', ['unidades de producto', 'unidades monetarias', 'número de consumidores', 'no tiene unidad'], 1, 'Pesos o euros.'),
    mc('7.6.7', 'El excedente total es…', ['EP − EC', 'EC − EP', 'la suma de EP y EC', 'solo el EC'], 2, 'Mide el bienestar del mercado.'),
  );

  // ---------- Capítulo 10 ----------
  add('pib-y-enfoques',
    vf('10.5.5', 'Los productos intermedios son los que se fabrican con una tecnología que no es de última generación.', false, 'Son los que unas empresas compran a otras para usarlos en la producción.'),
    vf('10.5.10', 'Las transferencias son pagos del Estado que reciben los individuos sin obligación de contraprestación.', true, 'Por eso no entran en G.'),
    mc('10.6.1', 'El Producto Interior Bruto se mide en…', ['toneladas', 'pesos o cualquier otra moneda', 'unidades de producto', 'porcentajes (es un índice)'], 1, 'Valor de mercado.'),
    mc('10.6.5', 'El valor añadido de una empresa es el valor de su producción menos…', ['los impuestos indirectos', 'la inversión', 'el valor de los productos intermedios', 'las amortizaciones'], 2, 'Evita la doble contabilización.'),
  );
  add('pib-nominal-real',
    vf('10.5.4', 'Para valorar el crecimiento de un país es más adecuado usar la tasa de crecimiento del PIB real que la del nominal.', true, 'El nominal mezcla precios.'),
    vf('10.5.6', 'El PIB per cápita es el cociente entre el PIB y la población activa.', false, 'Se divide por la población total.'),
    mc('10.6.2', 'El PIB nominal se diferencia del real en que…', ['uno es el planeado y otro el producido', 'el primero se mide a precios corrientes y el segundo a precios constantes', 'el primero incluye impuestos indirectos', 'el segundo solo incluye mercancías'], 1, 'Precios del año o del año base.'),
  );
  add('pnb-criticas-idh',
    vf('10.5.7', 'La renta nacional es una magnitud que se mide a precios de mercado.', false, 'Se mide a costo de los factores.'),
    vf('10.5.12', 'Valorar a costo de los factores supone medir a precios de mercado y deducir los impuestos indirectos netos de subvenciones.', true, 'Así se pasa del PNN a la RN.'),
    vf('10.5.13', 'Si al PIB le restamos los impuestos directos, se obtiene el Producto Interior Neto.', false, 'Para el neto se resta la depreciación.'),
  );
  add('pib-a-fondo',
    mc('10.6.7', 'La renta disponible se obtiene a partir de la renta personal…', ['sumando el ahorro de las familias', 'restando el ahorro', 'sumando los impuestos directos', 'restando los impuestos directos sobre las personas'], 3, 'RD = RP − impuestos directos.'),
    mc('10.6.8', '¿Cuál de estas partidas NO forma parte de la renta personal?', ['las transferencias a las familias', 'los intereses de la deuda pública', 'los beneficios no distribuidos por las empresas', 'los impuestos directos'], 2, 'Quedan en la empresa.'),
  );

  // ---------- Capítulo 11 ----------
  add('inflacion-medicion',
    vf('11.5.3', 'El valor del IPC es siempre el mismo con independencia del año que se tome como base.', false, 'Cambia con el año base; lo comparable son las variaciones.'),
    vf('11.5.6', 'Tanto el IPC como el deflactor del PIB se miden en pesos u otra unidad monetaria.', false, 'Son índices, sin unidades monetarias.'),
    mc('11.6.1', 'El IPC fue 200 un año y 220 el siguiente. La inflación fue de…', ['5 %', '10 %', '20 %', '40 %'], 1, '(220 − 200)/200.'),
    mc('11.6.2', 'El IPC se calcula como…', ['la media aritmética de los precios de los bienes de consumo finales', 'la media aritmética de todos los bienes', 'la media ponderada de todos los bienes', 'la media ponderada de los precios de los bienes de consumo finales'], 3, 'Ponderada según el gasto de la familia media.'),
    mc('11.6.12', 'Si el IPC aumenta, podemos afirmar que…', ['la inflación aumenta', 'hay deflación', 'la inflación disminuye', 'hay inflación'], 3, 'Puede haber inflación decreciente.'),
  );
  add('pib-nominal-real',
    mc('11.6.4', 'Un año el PIB real valía 1.000 y el nominal 900. El deflactor es…', ['900/1.000 × 100 = 90', '1.000/900 × 100 = 111', '1.000 − 900 = 100', '(1.000 − 900)/900 × 100 = 11'], 0, 'Nominal sobre real. Menor que 100: los precios bajaron respecto del año base.'),
  );
  add('poder-adquisitivo',
    vf('11.5.11', 'El tipo de interés real es el tipo de interés nominal más la tasa de inflación.', false, 'Es el nominal menos la inflación.'),
    vf('11.5.12', 'Para obtener magnitudes reales se divide la magnitud nominal por el índice de precios del año correspondiente.', true, 'Y se multiplica por 100.'),
    vf('11.5.13', 'Si hay inflación, con una determinada cantidad de dinero se puede comprar cada vez menos.', true, 'Pierde poder adquisitivo.'),
    mc('11.6.11', 'El salario medio pasó de 20.000 a 21.000 y el IPC de 400 a 420. El salario real del segundo año se calcula como…', ['21.000/20.000 × 100', '21.000/420 × 100', '(21.000 − 20.000)/20.000 × 100', '(21.000 − 20.000)/(420 − 400) × 100'], 1, 'Nominal sobre el índice.'),
  );
  add('inflacion-a-fondo',
    vf('11.5.14', 'El índice de Laspeyres encadenado usa ponderaciones fijas del año base.', false, 'Permite que las ponderaciones cambien cada año.'),
    vf('11.5.15', 'El deflactor del PIB incluye los precios de los bienes de capital producidos en el país.', true, 'Abarca toda la producción final.'),
  );

  // ---------- Capítulo 14 ----------
  add('del-trueque-al-dinero',
    vf('14.5.2', 'Hoy en día, el dinero tiene valor porque está respaldado por el oro.', false, 'Es fiduciario: vale por la confianza.'),
    vf('14.5.9', 'El dinero mercancía es el que se usa para comprar mercancías al contado.', false, 'Es aquel cuyo valor intrínseco coincide con su valor como dinero.'),
    mc('14.6.1', 'Que el dinero sirva como depósito de valor significa que…', ['se puede depositar en un banco y obtener rentabilidad', 'se puede aplazar el consumo guardando dinero', 'los billetes se canjean por oro', 'tener dinero es lo más importante'], 1, 'Mantiene poder de compra en el tiempo.'),
    mc('14.6.2', 'Que el dinero sea la unidad de cuenta significa que…', ['la mayor parte del dinero está en los bancos', 'siempre hay moneda fraccionaria suficiente', 'los precios se expresan en unidades de dinero', 'se acepta en todo intercambio'], 2, 'La d) es medio de cambio.'),
  );
  add('activos-y-demanda-dinero',
    vf('14.5.1', 'Se puede ser muy rico sin tener dinero.', true, 'La riqueza puede estar en otros activos.'),
    vf('14.5.3', 'Los activos financieros más líquidos suelen ser, en media, los más rentables.', false, 'Suelen ser los menos rentables. Tomada en el 2do parcial 2024.', ['2p-2024-3k3#4']),
    vf('14.5.4', 'La demanda de dinero es la cantidad de dinero que las personas desean tomar prestada.', false, 'Es la parte de la riqueza que se desea mantener en dinero. Tomada en el 2do parcial 2024.', ['2p-2024-3k3#4']),
    mc('14.6.12', 'El costo de oportunidad de mantener dinero es…', ['el valor de los bienes que no se compran', 'nulo', 'el tipo de interés de los activos alternativos', 'la cantidad de oro a la que equivale'], 2, 'Lo que rendiría un bono.'),
  );
  add('base-y-oferta-monetaria',
    mc('14.6.3', 'La base monetaria está compuesta por…', ['los activos de caja de los bancos y el efectivo en manos de los particulares', 'los activos de caja y los depósitos', 'el efectivo de los particulares y sus depósitos', 'los depósitos y los créditos'], 0, 'BM = AC + EMP.'),
    mc('14.6.4', 'La oferta monetaria está compuesta por…', ['los activos de caja y los depósitos', 'los activos de caja y el efectivo de los particulares', 'los depósitos y los créditos', 'el efectivo en manos de los particulares y los depósitos'], 3, 'OM = EMP + D.'),
  );
  add('dinero-bancario',
    vf('14.5.5', 'Si todos los clientes de un banco quisieran liquidar sus depósitos a la vez, el banco no tendría billetes suficientes.', true, 'Presta la mayor parte de lo que recibe.'),
    vf('14.5.10', 'Cuando el Banco Central vende activos financieros a los bancos, el multiplicador monetario se reduce.', false, 'Se reduce la base; el multiplicador no cambia.'),
  );
})();
