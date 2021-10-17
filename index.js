console.log("Teorema de Pitágoras:");
//a^2 + b^2 = c^2
//c = raíz de(a^2 + b^2)
function pitagoras(a,b){
    a2 = Math.pow(a,2);
    b2 = Math.pow(b,2);

    suma = a2+b2;

    resultado = Math.sqrt(suma)

    console.log("La hipotenusa tiene un valor de " + resultado)
}
//acá van los catetos
pitagoras(20,21);

console.log();

console.log("Función General de las ecuaciones Cuadráticas:");
//ax^2 + bx + c = 0
function ecuacionCuardatica(a,b,c){
    //antes del +-
    antes = -b;

    //raiz cuadrada
    radicando = Math.pow(b,2) - 4 * a * c;
    raiz = Math.sqrt(radicando);

    //denominador
    denominador = 2 * a;

    //resultados finales
    resultado1 = (antes + raiz) / denominador;
    resultado2 = (antes - raiz) / denominador;

    //excepción
    if (a == 0) {
        console.log("x1 es Nulo");
        console.log("x2 es Nulo");
        console.log();
        console.log("!!!!!!ERROR!!!!!!");
        console.log('"a" no puede valer 0');
    }else{
        console.log("x1 es " + resultado1);
        console.log("x2 es " + resultado2);
    }
}
//asignar los valores de a,b y c
ecuacionCuardatica(1,-5,-84);