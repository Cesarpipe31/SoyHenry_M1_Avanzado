//////////////////////////// RECURSIVIDAD //////////////////////////////////////////////////////////////////////////////

// Ejercicio 1
// Objetivo: Realizar una funcion que devuelva "Par" si el numero es par o "Impar" caso contrario, pero utilizando recursividad en lugar de %

//Ejemplo 
// parImpar(20)
// "Par"

let parImpar = (num) => {
    if (num < 0) return "De 0 para arriba"
  else if (num === 0) {
    return "Par"
  } else if (num === 1) {
    return "Impar"
  } else {
    return parImpar(num - 2)
  }
  
  }
  console.log(parImpar(7))
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // Ejercicio 2
  // Objetivo: Realizar un contador decreciente hasta llegar a 1, que arranque del numero que se le pasa por parametro
  // Desafio: Devolver los numeros en un array
  
  // Ejemplo 
  // restar(8)
  // (8)  [8, 7, 6, 5, 4, 3, 2, 1]
  
  let nuevoArray = [] 
  
  function restar(n) {
    if (n === 0) return nuevoArray
    nuevoArray.push(n)
    return restar(n-1)
  
  }
  
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // Ejercicio 3
  
  //Objetivo: Realizar una funcion que invierta el orden del string recibido
  // Ejemplo: reverse("hola susuna")
  // --> 'anusus aloh'
  
  function reverse(str) {
  if (str.length === 1) return str
  return reverse(str.slice(1)) + str[0]
    }
  
  // "hola"
  //  0123
  //   1----
  //   "ola" + "h"------->
  /*                   "ola"
                        012
                         "la"  + "o"  ----------->
                                                  "la"
                                                    "a" + "l"
                                                    --------"a"
                                                    "a+ l + o + h"*/
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // Ultimo ejercicio
  
     // Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
  // número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
  // El array será recibido por parámetro.
  // Ejemplo:
  //    const array = [1, [2, [3,4]], [5,6], 7];
  //    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
  
  var countArray = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])) {
            sum = sum + countArray(array[i]);
        } else {
            sum = sum + array[i]
        }
  }
  return sum
  }