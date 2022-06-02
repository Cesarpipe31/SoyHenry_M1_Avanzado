//////////////////////////// ARRAYS //////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 1

function invertirOrden(array) {
    // Objetivo : invertir el orden de los elementos del array que se recibe por parametro
   // Desafio --> En caso de que el elemento sea de mas de 1 digito, el mismo NO debera ser devuelto en el nuevo array
    // y no vale usar el metodo "reverse" 

    // Ejemplo: 
    // let array = [1, 2, 30, 4, 5, 60]
    // --> [5, 4, 2, 1]
    
    let nuevoArray = [];

 //  for (let i = 0; i < array.length; i++){
 //      if (array[i] < 10) {
 //          nuevoArray.unshift(array[i])
 //      }
 //  }

    array.forEach(el => {
        if (el < 10) {
            nuevoArray.unshift(el)
        }
    })
    return nuevoArray
}

///////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 2

function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Objetivo: devolver UN SOLO array que solo contenga elementos de tipo number
    // Desafio: Hay que sumar los elementos de cada sub array que contenga dos elementos o mas, devolviendo la suma del mismo como 1 solo elemento
    // Pero si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.

    // Ejemplo
    //let array = [1, [2, 3], 4]
    // --> [1, 5, 4]

    let nuevoArray = []

    array.forEach (el => {
        if (Array.isArray(el)){
            let contador = 0;
            el.forEach(e => {
                contador += e
            })
            nuevoArray.push(contador)
        }
        else {
            nuevoArray.push(el)
        }
    })
    return nuevoArray

}

///////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 3

function mismoValorMismosElementos(numero, divisor) {
    // Objetivo: Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false

    //Ejemplo:
// mismoValorMismosElementos(10, 2)       // 5
// (2) [5, 5]
// mismoValorMismosElementos(10, 5)
// (5) [2, 2, 2, 2, 2]

let nuevoArray = []

if (numero % divisor !== 0) return false; 

let resultado = numero / divisor

for (let i = 0; i < divisor; i++){
nuevoArray.push(resultado)
}

return nuevoArray

}


///////////////////////////////////////////////////////////////////////////////////////////////////////
//ejercicio 4

function numeroEnComun(array1, array2) {
    // Objetivo: Buscar y retornar el valor en comun entre los dos array's que recibe la funcion por parametro
    
    //Ejemplo:
    //let a1 = [1, 2, 3]
    //let a2 = [3, 4, 5]
    //numeroEnComun(a1, a2)
    // --> 3

    for(let i=0; i<array1.length; i++){
        if(array2.includes(array1[i])){
            return array1[i]
        }
    }

}


///////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 5)
function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Objetivo: retornar un array solamente con el elemento menor y mayor del array recibido

// Ejemplo - 
// let array = [1, 2, 6, 4, 5]
// --> [1, 6]

let nuevoArray = []
let resultMenor = array.reduce((acc,elem)=>elem<acc? acc=elem : acc);
let resultMayor = array.reduce((acc,elem)=>elem>acc? acc=elem : acc);
nuevoArray.push(resultMenor, resultMayor)
return nuevoArray


};

/* ******************************************************

Que pasaria si los array recibidos fuesen multidimensionales?

****************************************************** */