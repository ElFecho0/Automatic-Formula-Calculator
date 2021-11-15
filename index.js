function pitagorasA(c,b){
    console.log("Teorema de Pitágoras: Hipotenusa");
    //a^2 + b^2 = c^2
    //a = sqrt(c^2 - b^2)

    resultado = Math.sqrt(Math.pow(c,2) - Math.pow(b,2));

    console.log("La hipotenusa tiene un valor de " + resultado)
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function pitagorasB(c,a){
    console.log("Teorema de Pitágoras: Hipotenusa");
    //a^2 + b^2 = c^2
    //b = sqrt(c^2 - a^2)

    resultado = Math.sqrt(Math.pow(c,2) - Math.pow(a,2));

    console.log("La hipotenusa tiene un valor de " + resultado)
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function pitagorasC(a,b){
    console.log("Teorema de Pitágoras: Hipotenusa");
    //a^2 + b^2 = c^2
    //c = sqrt(a^2 + b^2)

    resultado = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    console.log("La hipotenusa tiene un valor de " + resultado)
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function ecuacionCuardatica(a,b,c){
    console.log("Función General de las ecuaciones Cuadráticas:");
    //ax^2 + bx + c = 0
    // -b +- sqrt(b^2 -4ac)/2a

    //raiz cuadrada
    raiz = Math.sqrt(Math.pow(b,2) - 4 * a * c);

    //resultados finales
    resultado1 = (-b + raiz) / 2 * a;
    resultado2 = (-b - raiz) / 2 * a;

    //excepción
    if (a == 0) {
        console.log("!!!!!!ERROR!!!!!!");
        console.log('"a" no puede valer 0');
    }else{
        console.log("x1 es " + resultado1);
        console.log("x2 es " + resultado2);
    }
}

//acá van los catetos

//           c,b
//pitagorasA(3,4);

//           c,a
//pitagorasB(3,4);

//           a,b
//pitagorasC(3,4);

//asignar los valores de a,b y c
//ecuacionCuardatica(1,-7,-18);