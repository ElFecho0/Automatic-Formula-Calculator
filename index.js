function pitagorasA(c,b){
    console.log("Teorema de Pitágoras: Cateto a");
    //a^2 + b^2 = c^2
    //a = √(c^2 - b^2)
    SubRadical = Math.pow(c,2) - Math.pow(b,2);
    raiz = Math.sqrt(SubRadical);
    if (Math.floor(raiz) == raiz) {
        //raiz exacta
        console.log("Cateto a = " + raiz);
    }else{
        //irracional a √x
        console.log("Cateto a = √" + SubRadical);
    }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function pitagorasB(c,a){
    console.log("Teorema de Pitágoras: Cateto b");
    //a^2 + b^2 = c^2
    //b = √(c^2 - a^2)
    SubRadical = Math.pow(c,2) - Math.pow(a,2);
    raiz = Math.sqrt(SubRadical);
    if (Math.floor(raiz) == raiz) {
        //raiz exacta
        console.log("Cateto b = " + raiz);
    }else{
        //irracional a √x
        console.log("Cateto b = √" + SubRadical);
    }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function pitagorasC(a,b){
    console.log("Teorema de Pitágoras: Hipotenusa");
    //a^2 + b^2 = c^2
    //c = √(a^2 + b^2)
    SubRadical = Math.pow(a,2) + Math.pow(b,2);
    raiz = Math.sqrt(SubRadical);
    if (Math.floor(raiz) == raiz) {
        //raiz exacta
        console.log("Hipotenusa = " + raiz);
    }else{
        //irracional a √x
        console.log("Hipotenusa = √" + SubRadical);
    }
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function ecuacionCuardatica(a,b,c){
    console.log("Función General de las ecuaciones Cuadráticas:");
    console.log("");
    //ax^2 + bx + c = 0

    //excepción 1: a = 0
    if (a == 0) {
        console.log("ERROR");
        console.log('"a" no puede ser 0');
    }
    
    //excepción 1.1: b = 0
    else if (b == 0){
        //x = +- √(-c / a)

        //excepción 2: si el cuociente es numero entero, no tocar, de otra manera convertir a fracción
        if (Math.floor(c / a) == c / a){
            //2.1: fracción entera
            frac = -(c / a);
            frac2 = Math.sqrt(frac);

            //excepción 3: determinar si las soluciones son o no Reales
            if (frac < 0) {
                //3.1: Soluciónes no reales
                console.log("Las soluciónes de x no son Reales");
            }else if (frac >= 0){
                //Soluciónes reales
                //excepción 4: si la raiz es exacta, no tocar, de otra manera pasar de decimal infinito a √x
                if (Math.floor(frac2) == frac2) {
                    //4.1: fracción entera y raiz exacta
                    console.log("x1 = " + "+" + frac2);
                    console.log("x2 = " + "-" + frac2);
                }else{
                    //4.2: fracción entera y decimal infinito a √x
                    console.log("x1 = " + "+√" + frac);
                    console.log("x2 = " + "-√" + frac);
                }
            }
        }else{
            //2.2: converción de decimal a fracción
            frac = "-" + c + "/" + a;
            fracFix = -(c / a);

            //excepción 3: determinar si las soluciones son o no Reales
            if (fracFix < 0) {
                //3.1: Soluciónes no reales
                console.log("Las soluciónes de x no son Reales");
            }else if (fracFix >= 0){
                //Soluciónes reales
                //saltamos la excepción 4 por ende √x
                console.log("x1 = " + "+√" + frac);
                console.log("x2 = " + "-√" + frac);
            }
        }
    }

    //excepción 1.2: c = 0
    else if (c == 0) {
        //x1 = 0
        //x2 = -b / a

        //excepción 2: si el cuociente es numero entero, no tocar, de otra manera convertir a fracción
        if (Math.floor(b / a) == b / a) {
            //2.1: fracción entera
            frac = -(b / a);

            console.log("x1 = 0");
            console.log("x1 = " + frac);
        }else{
            //2.2: converción de decimal a fracción
            frac = "-" + b + "/" + a;

            console.log("x1 = 0");
            console.log("x1 = " + frac);
        }
    }

    //excepción 1.3: b = 0 y c = 0
    else if (b == 0 && c == 0) {
        console.log("x = 0");
    }

    //default: ecuación completa
    else{
        // -b +- √(b^2 -4ac)/2a

        //SubRadical = Cantidad Subradical
        SubRadical = Math.pow(b,2) - 4 * a * c;
        raiz = Math.sqrt(SubRadical);

        //excepción 2: determinar si las soluciones son o no Reales
        if (SubRadical < 0){
            //2.1: Soluciónes no reales
            console.log("Las soluciónes de x no son Reales");
        }else if (SubRadical >= 0){
            //2.2: Soluciónes reales
            //excepción 3: si la raiz es exacta, no tocar, de otra manera pasar de decimal infinito a √x
            if (Math.floor(raiz) == raiz){
                //3.1: raiz exacta
                //excepción 4: si el cuociente es numero entero, no tocar, de otra manera convertir a fracción
                if(Math.floor((-b + raiz) / (2 * a)) == (-b + raiz) / (2 * a) && 
                Math.floor((-b - raiz) / (2 * a)) == (-b - raiz) / (2 * a)){
                    //4.1: raiz exacta y fracción entera
                    //excepción 5: si las soluciones son iguales, ahorremos espacio
                    if ((-b + raiz) / (2 * a) == (-b - raiz) / (2 * a)){
                        console.log("x1 = x2 = " + (-b + raiz) / (2 * a));
                    }else{
                        console.log("x1 = " + (-b + raiz) / (2 * a));
                        console.log("x2 = " + (-b - raiz) / (2 * a));
                    }
                }else if (Math.floor((-b + raiz) / (2 * a)) != (-b + raiz) / (2 * a) ||
                Math.floor((-b - raiz) / (2 * a)) != (-b - raiz) / (2 * a)){
                    //4.2: raiz exacta y converción de decimal a fracción
                    //saltamos la excepción 5
                    console.log("x1 = " + (-b + raiz) + "/" + (2 * a));
                    console.log("x2 = " + (-b - raiz) + "/" + (2 * a));
                }
            }else{
                //3.2 numero irracional a √x
                //saltamos la excepción 4
                //saltamos la excepción 5
                console.log("x1 = " + "(" + -b + " +√" + SubRadical + ")" + "/" + (2 * a));
                console.log("x2 = " + "(" + -b + " -√" + SubRadical + ")" + "/" + (2 * a));
            }
        }
    }
}

//acá van los catetos

//           c,b
//pitagorasA(5,4);

//           c,a
//pitagorasB(3,4);

//           a,b
//pitagorasC(3,4);

//asignar los valores de a,b y c
//ecuacionCuardatica(4,-6,2);