const questions = [ 
   
    {
    "title": "Escribir caracteres",
    "info_description": "Para escribir un carácter tenemos que apretar la tecla correspondiente del teclado.",
    "exe_description": "Haz click con el raton ne el cuadro de abajo, apretando las teclas de las letras correspondientes del teclado, para escribir la palabra:",
    "exe_test": "hola",
    "exe_input": "",
    },
    {
    "title": "Añadir texto",
    "info_description": "A un texto ya existente podemos pulsar con el raton para llevar el curso y añadir mas texto",
    "exe_description": "Haz click con el raton al en el cuadro de texto y cuando aparezca el curso completa las letras que faltan para que quede",
    "exe_test": "holacaracola",
    "exe_input": "hola",
    },
    {
    "title": "Borrar texto",
    "info_description": "Al pulsar la tecla de borrar, borra la letra anterior a la posicion del cursor.",
    "exe_description": "Haz click con el raton al en el cuadro de texto y borra la palabra que hay en el",
    "exe_test": "",
    "exe_input": "borrame",
    "exe_image": "images/teclado-del.png"
    },
    {
    "title": "Borrar texto",
    "info_description": "Al pulsar la tecla de borrar, borra la letra anterior a la posicion del cursor.",
    "exe_description": "Haz click con el raton al en el cuadro de texto y borra la parte final la palabra para que quede:",
    "exe_test": "saludos",
    "exe_input": "saludosXXX",
    "exe_image": "images/teclado-del.png"
    },
    {
        "title": "flechas y borrar",
        "info_description": "Las flechas de direccion nos deja desplazar el cursor por el texto para añadir o eliminar caracteres sin tener que borrar todo.",
        "exe_description": "Haz click con el raton al en el cuadro de texto y desplazate con las fechas antes de los 8 y borralos todos hasta que quede la palabra",
        "exe_test": "aprendiendo",
        "exe_input": "a8pr88end8i88end8o8",
        "exe_image": "images/teclado-f1-del.png"
    },
    {
        "title": "El espacio",
        "info_description": "El espacio nos permite separar palabras para ello usaremos la barra espaciadora.",
        "exe_description": "Escribe el texto que aparece a continuacion formado por varias palabras:",
        "exe_test": "hola como estas",
        "exe_input": "",
        "exe_image": "images/teclado-space.png"
    },
    {
        "title": "El espacio y flechas",
        "info_description": "Al igual que ocurria con el borrar podemos desplazar el cursor a la posicion donde necesitemos añadir un espacio.",
        "exe_description": "Añade los espacios a la frase para que quede de la siguiente manera:",
        "exe_test": "se lee mucho mejor con espacios",
        "exe_input": "seleemuchomejorconespacios",
        "exe_image": "images/teclado-f1-space.png"
    },
    {
        "title": "flechas y cambiar texto",
        "info_description": "Todos esto en realidad nos sirve para modificar texto sin tener que borrar todo y volver a escribir. Colocamos el curso en la posicion con las flechas y añadimos o borramos los caracteres que necesitamos.",
        "exe_description": "Cambia la frase del cuadro para que quede de la siguiente manera:",
        "exe_test": "me gusta mucho la clase de informática",
        "exe_input": "no me gusta la clase de informática",
        "exe_image": "images/teclado-f1-space.png"
    },
    {
        "title": "Las MAYUSCULAS",
        "info_description": "Cuando necesitemos escribir texto en mayusculas usaremos la tecla de bloqueo de mayusculas, con un a pulsacion todas las letras que escribamos a continuacion estaran en mayusculas y con otra pulsacion se desactiva y vuelve a escribir en minusculas.",
        "exe_description": "Escribe la frase que aparecen a continuacion tal como esta en mayusculas:",
        "exe_test": "YA SE ESCRIBIR MAYUSCULAS",
        "exe_input": "",
        "exe_image": "images/teclado-bloc-may.png"
    },
    {
        "title": "Las MAYUSCULAS",
        "info_description": "Cuando necesitemos escribir texto en mayusculas usaremos la tecla de bloqueo de mayusculas, con un a pulsacion todas las letras que escribamos a continuacion estaran en mayusculas y con otra pulsacion se desactiva y vuelve a escribir en minusculas.",
        "exe_description": "Escribe la frase que aparecen a continuacion alternando mayusculas y minusculas:",
        "exe_test": "minusculas y MAYUSCULAS",
        "exe_input": "",
        "exe_image": "images/teclado-bloc-may.png"
    },
    {
        "title": "Una Mayuscula",
        "info_description": "Cuando necesitemos escribir en un texto una sola mayuscula, por ejemplo en un nombre propio usaremos la tecla shift que tiene una doble flecha hacia arriba pulsada a la vez que la letra que queremos escribir en mayuscula.",
        "exe_description": "Escribe el siguiente texto pulsando la tecla shift:",
        "exe_test": "aAbBcCdD",
        "exe_input": "",
        "exe_image": "images/teclado-A.png"
    },
    {
        "title": "Una Mayuscula",
        "info_description": "Cuando necesitemos escribir en un texto una sola mayuscula, por ejemplo en un nombre propio usaremos la tecla shift que tiene una doble flecha hacia arriba pulsada a la vez que la letra que queremos escribir en mayuscula.",
        "exe_description": "Practica un poco mas con la tecla shift y escribe este texto:",
        "exe_test": "Para Esto Es Mejor Usar La Tecla Shift",
        "exe_input": "",
        "exe_image": "images/teclado-A.png"
    },
    {
        "title": "Una Mayuscula",
        "info_description": "Tambien podemos movernos con la flechas para borrar y cambiar alguna letra mayuscula que se nos ha olvidado, borrar la minuscula y escribir la mayuscula.",
        "exe_description": "Cambia las primeras letra de los nombre y apellidos para que este como la muestra",
        "exe_test": "Mahatma Gandhi",
        "exe_input": "mahatma gandhi",
        "exe_image": "images/teclado-A.png"
    },
    {
        "title": "Los numeros",
        "info_description": "Los numeros estan situados en la parte superior del teclado.",
        "exe_description": "Escribe los siguientes numeros, separados por espacio",
        "exe_test": "231 345 890",
        "exe_input": "",
        "exe_image": "images/teclado-num.png"
    },
    {
        "title": "Los numeros y comas",
        "info_description": "Los numeros en muchas ocasiones tambien se combinan con otros simbolo que hay en el teclado como el punto o la coma.",
        "exe_description": "Escribe los siguientes numeros, con punto y separados por comas",
        "exe_test": "1.200, 80.345, 231.890",
        "exe_input": "",
        "exe_image": "images/teclado-num-pc.png"
    },
    {
        "title": "Simbolos sobre los numeros",
        "info_description": "En las teclas de los numeros en su parte de arriba se encuentran una serie de simbolo, para escribirlos hay que pulsar la tecla shift (la flecha hueca hacia arriba) y el numero correspondiente.",
        "exe_description": "Escribe el simbolo de dolar",
        "exe_test": "$",
        "exe_input": "",
        "exe_image": "images/teclado-dolar.png"
    },
    {
        "title": "Simbolos",
        "info_description": "En las teclas de los numeros en su parte de arriba se encuentran una serie de simbolo, para escribirlos hay que pulsar la tecla shift (la flecha hueca hacia arriba) y el numero correspondiente.",
        "exe_description": "Escribe los siguientes simbolos",
        "exe_test": "$()=",
        "exe_input": "",
        "exe_image": "images/teclado-simbol.png"
    },
    {
        "title": "Operacion de multiplicacion",
        "info_description": "Lo normal es que escribamos los simbolo combinados con letras o numeros, recuerda la tecla shift que apunta hacia arriba y el simbolo que esta en la parte de arriba del numero",
        "exe_description": "Es simbolo de * representa la multiplicacion y / la division, escribe la siguiente formula",
        "exe_test": "(3*4)/2=6",
        "exe_input": "",
        "exe_image": "images/teclado-num-shift.png"
    },
    {
        "title": "Otros simbolos del teclado",
        "info_description": "En el teclado existen otros simbolo y usaremos la misma logica los que esta abajo aparece pulsando solo la tecla y lo que esta arriba la tecla shift u a la vez la tecla que queremos",
        "exe_description": "Practica con otras teclas que tiene simbolo, cada pareja de simbolo esta separada por un espacio",
        "exe_test": "<> ,; .:",
        "exe_input": "",
        "exe_image": "images/teclado-shift.png"
    },
    {
        "title": "simbolos con AltGr",
        "info_description": "En algunas teclas como en el 2, el 3 o la E existen un tercer simbolo que esta en la parte de abajo, a veces a la derecha, para imprimir este simbolo pulsaremos la tecla AltGr y a la vez la tecla del simbolo",
        "exe_description": "Practica y escribe esta direccion de correo electronico",
        "exe_test": "soy@manolog.es",
        "exe_input": "",
        "exe_image": "images/teclado-arroba.png"
    },
    {
        "title": "simbolos con AltGr",
        "info_description": "En algunas teclas como en el 2, el 3 o la E existen un tercer simbolo que esta en la parte de abajo, a veces a la derecha, para imprimir este simbolo pulsaremos la tecla AltGr y a la vez la tecla del simbolo",
        "exe_description": "Practica con otras teclas que tiene simbolo, los tres simbolo de cada tecla estan separados por un espacio",
        "exe_test": "\"2@ ·3# *+]",
        "exe_input": "",
        "exe_image": "images/teclado-simb-3.png"
    },
    {
        "title": "El acento",
        "info_description": "Cuando queremos escribir una vocal con acento primero escribimos el acento y luego la vocal, no a la vez una primero y otra despues",
        "exe_description": "Practica escribiendo todas las vocales acentuadas",
        "exe_test": "áéíóú",
        "exe_input": "",
        "exe_image": "images/teclado-Aacento.png"
    },
    {
        "title": "El acento",
        "info_description": "Cuando queremos escribir una vocal con acento primero escribimos el acento y luego la vocal, no a la vez una primero y otra despues",
        "exe_description": "Muevete con las flechas y corrige las palabras poniendole los acentos",
        "exe_test": "Camión, bárbaro, pirámide, código",
        "exe_input": "Camion, barbaro, piramide, codigo",
        "exe_image": "images/teclado-Aacento.png"
    },
    {
        "title": "Varias linea",
        "info_description": "Cuando necesitamos hacer un salto de linea usamos la tecla intro la mas grande del teclado,",
        "exe_description": "Escribe el siguiente texto tal y como esta en la muestra en dos lineas",
        "exe_test": `1 línea
2 línea`,
        "exe_input": "",
        "exe_image": "images/teclado-intro.png"
    },
    {
        "title": "Varias linea",
        "info_description": "Con las flechas verticales no podemos desplazar por un texto en vertical y añadir o eliminar lineas.",
        "exe_description": "Modifica el texto para que quede como la muestra",
        "exe_test": `1 línea

y

2 línea`,
        "exe_input": `1 línea
2 línea`,
        "exe_image": "images/teclado-f2-intro.png"
    },
    {
        "title": "Varias linea",
        "info_description": "Con las flechas verticales no podemos desplazar por un texto en vertical y añadir o eliminar lineas.",
        "exe_description": "Modifica el texto para que quede como la muestra",
        "exe_test": `Lunes
Martes
Miércoles
Jueves
Viernes`,
        "exe_input": `Lunes
Miércoles
Viernes`,
        "exe_image": "images/teclado-f2-intro.png"
    },
    {
        "title": "Varias linea",
        "info_description": "Con las flechas verticales no podemos desplazar por un texto en vertical y añadir o eliminar lineas.",
        "exe_description": "Modifica el texto para que quede como la muestra",
        "exe_test": `Lunes
Martes
Miércoles
Jueves
Viernes`,
        "exe_input": `Lunes
xxxxxx
Martes
Miércoles
xxxxxx
Jueves
Viernes`,
        "exe_image": "images/teclado-f2-intro.png"
    }, 
    {
    "title": "En hora Buena !!",
    "info_description": "Llegaste al final de estos ejercicio. Ahora se va ha hacer una segunda vuelta con la parte de informaci'on no visible para asentar el conocimiento.",
    "exe_description": "Escribe '2 Parte' para continuar. Y suerte",
    "exe_image": "",
    "exe_test": "2 Parte",

    "exe_input": "",
    },


    
     ]