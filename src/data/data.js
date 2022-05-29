export const gramatica = {
  simboloTitulo: "SIMBOLO",
  simboloTexto: `Es una entidad abstracta, que no se va a definir. Normalmente los símbolos son letras (a,b,c,…z), dígitos (0,1,2…9) y otros caracteres (+,*,/,-,?...).
  Un símbolo también puede estar formado por varias letras o caracteres, como las palabras reservadas de un lenguaje de programación son símbolos de dicho lenguaje. Ejemplo:
  -   a,b,c,#,+,-,*, then, begin, end, else, …`,
  vocabularioTitulo: "VOCABULARIO O ALFABETO",
  vocabularioTexto: `Un vocabulario o alfabeto es un conjunto finito de símbolos, no vacío. Para definir que un símbolo a pertenece a un alfabeto V, se utiliza la siguiente notación aÃŽV.
  Los alfabetos se definen por enumeración de los símbolos que contienen, podemos ver los siguientes ejemplos:
  ·   V1={A,B,C,D,E,F,…..,X,Y,Z}
  ·   V2={a,b,c,d,0,1,2,3,4,*,#,+}
  ·   V3={0,1}
  ·   V4={if, then, begin, end, else, a,b,;,=,>}
  ·   También se pueden definir las tablas ASCII y EBCDIC como los alfabetos de distintos ordenadores`,
  cadenaTitulo: "CADENA",
  cadenaTexto: `Una cadena es una secuencia finita de símbolos de un determinado alfabeto.
  Ejm. Tomando en cuenta los alfabetos o vocabularios definidos anteriormente, podemos decir que:
  abcb es una cadena del alfabeto V2
  a+2*b es una cadena del alfabeto V2
  000111 es una cadena del alfabeto V3
  If a>b then b=a; es una cadena del alfabeto V4`,
  longitudTitulo: "LONGITUD DE CADENA",
  longitudTexto: `La longitud de una cadena consiste en el número de símbolos pertenecientes a la cadena. Ejm. Tomando en cuenta los ejemplos de cadena podemos decir que:
  ·   |abcb| es de longitud 4
  ·   |a + 2*b| es de longitud  5
  ·   |000111| es de longitud  6
  ·   |if a>b then a=b;| es de longitud  9`,
  cadenaVaciaTitulo: "CADENA VACÍA",
  cadenaVaciaTexto: `Se denomina cadena vacía, que no tiene símbolos y se denota con l, por lo que su longitud es :
  | l | ® 0`,
  concatenacionCadenasTitulo: "CONCATENACIÓN DE CADENAS",
  concatenacionCadenasTexto: `Sean A y B dos cadenas cualesquiera, se denomina concatenación de A y B a una nueva cadena AB constituida por los símbolos de la cadena A seguidos por los de la cadena B.
  El elemento neutro de la concatenación es l:
  A l =  lA = A`,
  universoDelDiscursoTitulo: "UNIVERSO DEL DISCURSO",
  universoDelDiscursoTexto: `El conjunto de todas las cadenas que se pueden formar con los símbolos de un alfabeto, se denomina universo del discurso V y se representa por W(V). Evidentemente W(V) es un conjunto infinito. La cadena vacía pertenece a W(V).Ejm:
  Sea un alfabeto con una sola letra V={a}, entonces el universo del discurso es:
  W(V) = {l, a, aa, aaa, aaaa, ….}
  que contiene infinitas cadenas.`,
  gramaticaTitulo: "GRAMÁTICA",
  gramaticaTexto: `Veamos algunos conceptos que nos ayuden a formular el concepto de gramática:
  (Del lat. grammatĭca, y este del gr. γραμματική). f. Ciencia que estudia los elementos de una lengua y sus combinaciones. Arte de hablar y escribir correctamente una lengua. Estudio de una lengua regido por el principio de que todos sus elementos mantienen entre sí relaciones sistemáticas. La que trata de formular una serie de reglas capaces de generar o producir todas las oraciones posibles y aceptables de un idioma o lenguaje
  
  Una definición un tanto técnica: " La gramática es un ente formal para especificar, de una manera finita, el conjunto de cadenas de símbolos que constituyen un lenguaje" . La gramática genera o describe un lenguaje.`,
  automataTitulo: "AUTÓMATA",
  automataTexto: `(Del latin. automăta, t. f. de -tus, y este del gr. αὐτόματος, espontáneo). m.Instrumento o aparato que encierra dentro de sí el mecanismo que le imprime determinados movimientos o respuestas. Máquina que imita la figura y los movimientos de un ser animado. Microsoft® Encarta® 2007. © 1993-2006 Microsoft Corporation. Reservados todos los derechos.
  En el caso de los Procesadores de Lenguaje un autómata es una construcción lógica que recibe como entrada una cadena de símbolos y produce una salida indicando si dicha cadena pertenece o no a un determinado lenguaje.`,
  lenguajeTitulo: "LENGUAJE",
  lenguajeTexto: `Conjunto de sonidos articulados con que el hombre manifiesta lo que piensa o siente. Sistema de comunicación verbal. Manera de expresarse. Conjunto de señales que dan a entender algo. El lenguaje de los ojos, el de las flores. En Informática Conjunto de signos y reglas que permite la comunicación con un ordenador.
  Podemos expresarlo de manera más sencilla como un conjunto de palabras ó cadenas de símbolos (palabras, oraciones, textos o frases) de un determinado alfabeto.`,
};

export const gramaticaLibre = {
  titulo: "Gramáticas Libres De Contexto (GLC)",
  texto: `Gramáticas Libres de Contexto (GLC), o de tipo 2: las reglas son de la forma X → α, donde X es una variable y α es una cadena que puede contener variables y constantes. Estas gramáticas producen los lenguajes Libres de Contexto (abreviado “LLC”)
  Capturan la noción de constituyente sintáctico y la noción de orden.
  Herramienta formal que puede ser vista tanto desde un punto de vista generador como estructurador.`,
};

export const arbolDerivacion = {
  titulo: "Árboles de Derivación",
  texto: `Es una representación gráfica (en forma de árbol invertido) de un proceso de derivación en una gramática. Se define el árbol de derivación como sigue:
  la raíz del árbol será el símbolo inicial de la gramática
  los nodo interiores del árbol están etiquetados por los símbolos no terminales
  las hojas están etiquetadas por símbolos terminales
  si un nodo interior etiquetado por A, posee como hijos los nodos etiquetados por X1,X2, …Xn , entonces A→ X1,X2, …Xn es una producción de la gramática, en donde Xi , representa símbolo terminal o no terminal.`,
};

export const formasChomsky = {
  titulo: "Formas Normales de Chomsky",
  texto: `Una gramática formal está en Forma normal de Chomsky si todas sus reglas de producción son de alguna de las siguientes formas:
  A → BC o
  A → a o
  donde A, B y C son símbolos no terminales (o variables) y α es un símbolo terminal.
  Todo lenguaje independiente del contexto que no posee a la cadena vacía, es expresable por medio de una gramática en forma normal de Chomsky (GFNCH) y recíprocamente. Además, dada una gramática independiente del contexto, es posible algorítmicamente producir una GFNCH equivalente, es decir, que genera el mismo lenguaje.`,
};

export const diagramaSintaxis = {
  titulo: "Diagramas de Sintaxis",
  texto: `Los diagramas sintácticos, de sintaxis o diagramas del ferrocarril son una forma de representar una gramática libre de contexto. Representan una alternativa gráfica para la Forma de Backus-Naur (BNF, por sus siglas en inglés) o la Forma Extendida de Backus-Naur (EBNF, por sus siglas en ingles).
  Los diagramas de ferrocarril son más comprensibles para la mayoría de la gente. Alguna parte de la popularidad del formato de intercambio de datos JSON se debe a su representación en los diagramas de ferrocarril.`,
};
