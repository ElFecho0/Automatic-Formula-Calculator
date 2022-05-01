function pitagorasA(c,b){
    console.log("Teorema de Pitágoras: Cateto A");
    //a^2 + b^2 = c^2
    //a = √(c^2 - b^2)

    resultado = Math.sqrt(Math.pow(c,2) - Math.pow(b,2));

    console.log("La hipotenusa tiene un valor de " + resultado)
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function pitagorasB(c,a){
    console.log("Teorema de Pitágoras: Cateto B");
    //a^2 + b^2 = c^2
    //b = √(c^2 - a^2)

    resultado = Math.sqrt(Math.pow(c,2) - Math.pow(a,2));

    console.log("La hipotenusa tiene un valor de " + resultado)
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function pitagorasC(a,b){
    console.log("Teorema de Pitágoras: Hipotenusa");
    //a^2 + b^2 = c^2
    //c = √(a^2 + b^2)

    resultado = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    console.log("La hipotenusa tiene un valor de " + resultado)
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function ecuacionCuardatica(a,b,c){
    console.log("Función General de las ecuaciones Cuadráticas:");
    console.log("");
    //ax^2 + bx + c = 0

    //excepción 1: a = 0
    if (a == 0) {
        console.log("!!!!!!ERROR!!!!!!");
        console.log('"a" no puede valer 0');
    }
    //excepción 1.1: b = 0
    else if (b == 0){
        //x = +- √(-c / a)

        //excepción 2: convertir de decimal en fracción
        if (Math.floor(c / a) == c / a){
            //2.1: fracción entera
            frac = -(c / a);
            frac2 = Math.sqrt(frac);

            //excepción 3: determinar si las soluciones son o no Reales
            if (frac < 0) {
                console.log("Las soluciónes de x no son Reales");
            }else if (frac >= 0){
                //excepción 4: convertir irracionales a √x
                if (Math.floor(frac2) == frac2) {
                    //4.1: fracción entera y raiz exacta

                    ResultadoFinal1 = "+" + frac2;
                    ResultadoFinal2 = "-" + frac2;

                    console.log("x1 = " + ResultadoFinal1);
                    console.log("x2 = " + ResultadoFinal2);
                }else{
                    //4.2: fracción entera y numero irracional a √x
                }
            }
        }else{
            //2.2: converción de decimal a fracción
            frac = "-" + c + "/" + a;
            fracFix = -(c / a);

            //excepción 3: determinar si las soluciones son o no Reales
            if (fracFix < 0) {
                console.log("Las soluciónes de x no son Reales");
            }else if (fracFix >= 0){
                //saltamos la excepción 4 por ende √x
                ResultadoFinal1 = "+" + "√" + frac;
                ResultadoFinal2 = "-" + "√" + frac;

                console.log("x1 = " + ResultadoFinal1);
                console.log("x2 = " + ResultadoFinal2);
            }
        }
    }
    //excepción 1.2: b = 0
    else if (c == 0) {
        //x1 = 0
        //x2 = -b / a

        //excepción 2: convertir de decimal en fracción
        if (Math.floor(b / a) == b / a) {
            //2.1: fracción entera
            frac = -(b / a);

            ResultadoFinal1 = 0;
            ResultadoFinal2 = frac;

            console.log("x1 = " + ResultadoFinal1);
            console.log("x1 = " + ResultadoFinal2);
        }else{
            //2.2: converción de decimal a fracción
            frac = "-" + b + "/" + a;

            ResultadoFinal1 = 0;
            ResultadoFinal2 = frac;

            console.log("x1 = " + ResultadoFinal1);
            console.log("x1 = " + ResultadoFinal2);
        }
    }
    //excepción 1.3: b = 0 y c = 0
    else if (b == 0 && c == 0) {
        console.log("x1 = x2 = 0");
    }
    //default: ecuación completa
    else{
        // -b +- √(b^2 -4ac)/2a

        //raiz cuadrada
        raiz1 = Math.pow(b,2) - 4 * a * c;
        raiz2 = Math.sqrt(raiz1);

        //excepción 2: determinar si las soluciones son o no Reales
        if (raiz1 < 0){
            console.log("Las soluciónes de x no son Reales");
        }else if (raiz >= 0){
            //excepción 3: convertir irracionales a √x
            if (Math.floor(raiz2) == raiz2){
                //3.1: raiz exacta
                PreResultado1 = (-b + raiz2);
                PreResultado2 = (-b - raiz2);

                //excepción 4: convertir de decimal en fracción
                if(Math.floor(PreResultado1 / (2 * a)) == PreResultado1 / (2 * a) &&
                Math.floor(PreResultado2 / (2 * a)) == PreResultado2 / (2 * a)){
                    //4.1: raiz exacta y fracción entera
                    ResultadoFinal1 = PreResultado1 / (2 * a);
                    ResultadoFinal2 = PreResultado2 / (2 * a);

                    console.log("x1 = " + ResultadoFinal1);
                    console.log("x2 = " + ResultadoFinal2);
                }else if (Math.floor(PreResultado1 / (2 * a)) != PreResultado1 / (2 * a) ||
                Math.floor(PreResultado2 / (2 * a)) != PreResultado2 / (2 * a)){
                    //4.2: raiz exacta y converción de decimal a fracción
                    ResultadoFinal1 = PreResultado1 + "/" + (2 * a);
                    ResultadoFinal2 = PreResultado2 + "/" + (2 * a);

                    //excepción 5: si las soluciones son iguales, ahorremos espacio
                    if (ResultadoFinal1 == ResultadoFinal2){
                        console.log("x1 = x2 = " + ResultadoFinal1);
                    }else{
                        console.log("x1 = " + ResultadoFinal1);
                        console.log("x2 = " + ResultadoFinal2);
                    }
                }
            }else{
                //3.2 numero irracional a √x
                raiz3 = "√" + raiz1;

                PreResultado1 = "(" + -b + " + " + raiz3 + ")";
                PreResultado2 = "(" + -b + " - " + raiz3 + ")";

                //saltamos la excepción 4
                ResultadoFinal1 = PreResultado1 + "/" + (2 * a);
                ResultadoFinal2 = PreResultado2 + "/" + (2 * a);

                //excepción 5: si las soluciones son iguales, ahorremos espacio
                if (ResultadoFinal1 == ResultadoFinal2){
                    console.log("x1 = x2 = " + ResultadoFinal1);
                }else{
                    console.log("x1 = " + ResultadoFinal1);
                    console.log("x2 = " + ResultadoFinal2);
                }
            }
        }
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
ecuacionCuardatica(1,1,1);