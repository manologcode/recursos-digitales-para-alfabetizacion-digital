const questions = [ 
   
    {
    "title": "Escribir caracteres",
    "info_description": "Para escribir una letra tenemos que apretar la tecla correspondiente del teclado.",
    "exe_description": "Haz click con el raton en el cuadro de abajo, apretando las teclas de las letras correspondientes del teclado, para escribir la palabra:",
    "exe_test": "hola",
    "exe_input": "",
    },
    {
    "title": "Añadir texto",
    "info_description": "A un texto ya existente podemos pulsar con el raton para llevar el curso al final y añadir mas texto",
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
    "info_description": "Cada pulsacion nos borra una letra, la anterior a la posicion del raton, podemos borrar solo parte de una palabra.",
    "exe_description": "Haz click con el raton al en el cuadro de texto y borra la parte final la palabra para que quede:",
    "exe_test": "saludos",
    "exe_input": "saludosXXX",
    "exe_image": "images/teclado-del.png"
    },
    {
        "title": "Flechas y borrar",
        "info_description": "Las flechas de direccion nos deja desplazar el cursor por el texto para añadir o eliminar caracteres sin tener que borrar todo.",
        "exe_description": "Haz click con el raton al en el cuadro de texto y desplazate con las fechas antes de los 8 y borralos todos hasta que quede la palabra",
        "exe_test": "aprendiendo",
        "exe_input": "a8pr8endiend8o",
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
        "exe_test": "mejor con espacios",
        "exe_input": "mejorconespacios",
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
        "info_description": "recuerda con una pulsacion activamos y con otra desactivamos el bloqueo de mayusculas.",
        "exe_description": "Escribe la frase que aparecen a continuacion alternando mayusculas y minusculas:",
        "exe_test": "MAYUSCULAS y minusculas",
        "exe_input": "",
        "exe_image": "images/teclado-bloc-may.png"
    },
    {
        "title": "Una Mayuscula",
        "info_description": "Cuando necesitemos escribir en un texto una sola mayuscula, por ejemplo en un nombre propio usaremos la tecla Shift(flecha hueca hacia arriba), pulsada la tecla Shift y sin soltar esta la letra que queremos escribir en mayuscula.<br><br> La tecla shift o Mayus se encuentra dos veces en el teclado para cuando se escribe con dos manos servir de apoyo a la derecha y a la izquierda",
        "exe_description": "Escribe el siguiente texto pulsando la tecla shift:",
        "exe_test": "aAbB",
        "exe_input": "",
        "exe_image": "images/teclado-A.png"
    },
    {
        "title": "Una Mayuscula",
        "info_description": "Para frase con una letra mayusculas sueltas la tecla shift( flecha hueca hacia arriba) nos permite escribir más rápido que con el bloqueo de mayusculas.",
        "exe_description": "Practica un poco mas con la tecla shift y escribe este texto:",
        "exe_test": "Usar La Tecla Shift",
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
        "exe_description": "Escribe los siguientes numeros",
        "exe_test": "231",
        "exe_input": "",
        "exe_image": "images/teclado-num.png"
    },
    {
        "title": "Los numeros y comas",
        "info_description": "Los numeros en muchas ocasiones tambien se combinan con otros simbolo que hay en el teclado como el punto o la coma.",
        "exe_description": "Escribe los siguientes numeros, con punto y separados por coma y espacio",
        "exe_test": "1.200, 80.345",
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
        "title": "Otros simbolos del teclado",
        "info_description": "En el teclado existen otros simbolo y usaremos la misma logica los que esta abajo aparece pulsando solo la tecla y lo que esta arriba la tecla shift u a la vez la tecla que queremos",
        "exe_description": "Practica con otras de mayor y menor que, escribe en el orden que aparecen",
        "exe_test": "><",
        "exe_input": "",
        "exe_image": "images/teclado-shift.png"
    },
    {
        "title": "simbolos con AltGr",
        "info_description": "En algunas teclas como en el 2 existe un tercer simbolo que esta en la parte de abajo, a veces a la derecha, para imprimir este simbolo pulsaremos la tecla AltGr y a la vez la tecla del simbolo",
        "exe_description": "Practica la arroba, escribe el texto tal y como se muestra",
        "exe_test": "arroba@",
        "exe_input": "",
        "exe_image": "images/teclado-arroba.png"
    },
    {
        "title": "simbolos con AltGr",
        "info_description": "En algunas teclas como en el 2, el 3 o la E existen un tercer simbolo que esta en la parte de abajo, a veces a la derecha, para imprimir este simbolo pulsaremos la tecla AltGr y a la vez la tecla del simbolo",
        "exe_description": "Practica con otras teclas que tiene simbolo, escribe estos tres simbolo",
        "exe_test": "@#€",
        "exe_input": "",
        "exe_image": "images/teclado-simb-3.png"
    },
    {
        "title": "El acento",
        "info_description": "Cuando queremos escribir una vocal con acento primero escribimos el acento y luego la vocal, no a la vez una primero y otra despues",
        "exe_description": "Practica escribiendo todas las vocales acentuadas",
        "exe_test": "áé",
        "exe_input": "",
        "exe_image": "images/teclado-Aacento.png"
    },
    {
        "title": "El acento",
        "info_description": "Recuerda NO apretamos las teclas a la vez, primero escribimos el acento y luego la vocal.",
        "exe_description": "Muevete con las flechas y corrige la palabra poniendole el acento",
        "exe_test": "Camión",
        "exe_input": "Camion",
        "exe_image": "images/teclado-Aacento.png"
    },
    {
        "title": "El acento",
        "info_description": "Como antes con las flechas situamos el cursor delante de la letra, la borramos y la escribimos con acento, recuerda acento primero el acento y luego la vocal.",
        "exe_description": "Muevete con las flechas y corrige las palabras poniendoles el acento",
        "exe_test": "bárbaro, código",
        "exe_input": "barbaro, codigo",
        "exe_image": "images/teclado-Aacento.png"
    },
    {
        "title": "Varias linea",
        "info_description": "Cuando necesitamos hacer un salto de linea usamos la tecla Intro la mas grande del teclado,",
        "exe_description": "Escribe el siguiente texto tal y como esta en la muestra en dos lineas",
        "exe_test": `1 linea
2 linea`,
        "exe_input": "",
        "exe_image": "images/teclado-intro.png"
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