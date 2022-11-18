// Creamos una función para validar si un año es bisiesto
let n = 0
let m = 0
function isLeapYear(n,m){

    n = Math.round(n)
    m = Math.round(m)

    if (isNaN(n) || isNaN(m)){
        console.log(`Entrada no válida, ${n} o ${m} No es un número`);
    
    }
    else if (n < 2001){
        console.log(`Entrada no válida, ${n} es menor que 2001`);
    }
    else if (m > 2500){
        console.log(`Entrada no válida, ${n} o ${m} es mayor que 2500`);
    }
    else if (n >= 2001 && n <=2500){
        let cantidadBisiestos 
    }


}

console.log(isLeapYear(2532, 2432.3));