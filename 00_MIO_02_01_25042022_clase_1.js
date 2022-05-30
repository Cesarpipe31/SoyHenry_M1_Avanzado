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
  let newarray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 10) {
      newarray.unshift(array[i])
    }
  }
  return newarray
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
}

///////////////////////////////////////////////////////////////////////////////////////////////
//Ejercicio 5)
function elementoMenorYMayor(array) {
  // El Array recibido por props es un array que contienen numeros
  // Objetivo: retornar un array solamente con el elemento menor y mayor del array recibido
  // Ejemplo -
  // let array = [1, 2, 6, 4, 5]
  // --> [1, 6]
}

/* ******************************************************

Que pasaria si los array recibidos fuesen multidimensionales?

****************************************************** */
