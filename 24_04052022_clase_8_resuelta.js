function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:                                                // array = [2, 1, 3, 4]
    for (var i = 0; i < array.length; i++){                        // i = 0
        for (var j = 0; j < array.length - i -1 ; j++){           // j = 0                   // j = 1      
            if (array[j] > array[j+1]){                           // if 2 > 1               // if 2 > 3
                //swap
                var aux = array[j]                              // aux = 2
                array[j] = array[j+1]                           // array[j] = 1
                array[j+1]= aux                                 // array[j+1] = 2
            }
        }
    }
    return array
  }
  
    /*-----------------------------  ---------------------------------------------------------------*/


  function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:                                           array = [3, 1, 2, 4]   --> [1, 3, 2, 4]
    for (let i = 0; i<array.length; i++){                  // i=0                      i=1
        let min = i                                        // min = 0                   
        for (let j = i +1; j < array.length; j++){          // j = 1
            if (array[j] < array[min]){                     // if 1 < 3
                min = j                                     // min = 1
            }

        }
        if ( i !== min){                                  // if 0 !== 1
            var aux = array[i]                              // aux = 3
            array[i] = array[min]                           // array[0] = 1
            array[min] = aux                                //array[1]= 3
        }
    }                                                       // [1, 3, 2, 4]
    return array
    
  }
  
    /*-----------------------------  ---------------------------------------------------------------*/


  function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:                                        
  }
  
  /*-----------------------------  ---------------------------------------------------------------*/

  function quickSort(array) {
    // Implementar el método conocido como quickSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:

    if(array.length <=1) return array

    var pivote = array[Math.floor(Math.random() * array.length)]       //3
    var menores = []
    var mayores = []
    var iguales = []

    for (var i = 0; i <array.length; i++){                          // [2, 5, 4, 1, 3]
        if (array[i] < pivote){                                             
            menores.push(array[i])                               // menores = [2, 1]
        } else if (array[i] > pivote){
            mayores.push(array[i])                                  //mayores = [5, 4]
        } else {
            iguales.push(array[i])
        }
    }

    return quickSort(menores).concat(iguales).concat(quickSort(mayores))

  }


  /*-----------------------------  ---------------------------------------------------------------*/

  // Ordená un arreglo de objetos usando un bubble sort pero con algunas particularidades.
// Además del arreglo a ordenar (array) la función va a recibir como parámetro una función
// que va a ser quien va a determinar si un elemento es "mayor" al otro para determinar su
// posición final    ----> cb -----> caja sorpresa!!

// Ejemplo:
// var array = [
//   {name: 'Franco', age: 26, height: 1.85},
//   {name: 'Toni', age: 30, height: 1.75},
//   {name: 'Mati', age: 25, height: 1.77},
//   {name: 'Leo', age: 40, height: 1.83}
// ]
//
// orderFunction(array[0], array[1]) --> ** Devolvera 1 si están bien ordenados o -1 si hay que intercambiarlos **
// Suponiendo que la orderFunction devuelve -1 si la edad del segundo elemento es menor que la del primero
// specialSort(array, orderFunction) --> Retornaría el siguiente array:
// [
//   {name: 'Mati', age: 25, height: 1.77},
//   {name: 'Franco', age: 26, height: 1.85},
//   {name: 'Toni', age: 30, height: 1.75},
//   {name: 'Leo', age: 40, height: 1.83}
// ]

var specialSort = function(array, cb) {
for (var i = 1; i < array.length; i++){
    for (var j = 0; j < array.length - i; j++){
        if (cb(array[j], array[j+1]) === -1){         // j > j+1 --> -1    // j < j+1 --> 1
            var aux = array[j]           
            array[j] = array[j+1]        
            array[j+1]= aux              
        }
    }
}
return array
}

