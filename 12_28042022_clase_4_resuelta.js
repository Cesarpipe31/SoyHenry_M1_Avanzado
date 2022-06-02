/*
Crear una funcion saludar que pueda fijar cada vez que la guardo en una variable distintos saludos.
Recibira en la funcion interna el nombre a quien tiene que saludar y retornara el saludo correspondiente seguido por el nombre al ser invocada
*/
function saludar(saludo){
    return function (nombre){
        return (saludo + " " + nombre)
    }
}

/*---------------------------------------------------*/

/* 
Crear una funcion contador que debe incrementar de a uno cada vez que invoco la funcion.
Adicionalmente agregarle una funcion que cuando pasen 8 seg incremente el contador a 100.

*/
function contador () {
    let contador = 0
    setTimeout(function () {
     contador = 100
    }, 8000
    )
    return function incrementar () {
     contador = contador + 1
     return contador
   }
}
function contador () {
    let contador = 0
 //  setTimeout(function () {
 //   contador = 100
 //  }, 8000)
return {
    incrementar: function () {
    contador = contador + 1
    return contador
  },
  decrementar: function() {
      contador = contador -1
      return contador
  },
  obtenerValor : function() {
      return contador
  }
}
}
/*---------------------------------------------------*/
/*
  Retorna una funcion que cuando sea invocada retorne 
un valor creciente.
 el primer valor debe ser el que se le pase por 
parametro a la funcion global.
 
 ejemplo: const Pepe = creciendo(20);
 Pepe(); // "El proximo año va a tener 21"
 Pepe(); // "El proximo año va a tener 22"
*/
function creciendo(n) {
    var actualCount = n;
    return function () {
      actualCount++;
      return "El proximo año va a tener " + actualCount
    }
    }

        /*---------------------------------------------------*/
   // Retorna una funcion que cuando sea invocada con un valor mayor a 50 retorne un valor decreciente,
   // pero si el valor es menor o igual que 50 retorne un valor creciente 
   // el primer valor debe ser el que se le pase por parametro a la funcion global.
   // ejemplo: const newCounter = arribaArbajo(49);
   // newCounter(); // 50
   // newCounter(); // 51
   // newCounter(); // 52
   // newCounter(); // 53
 // ejemplo: const newCounter = arribaArbajo(52)
// newCounter(); // 51
// newCounter(); // 50
// newCounter(); // 49

function arribaAbajo(n) {

    var actualCount = n;
    if (n < 10){ 
        return function () {
        actualCount++;
        return actualCount
      }}
    if (n > 10 ){
        return function () {
            actualCount--;
            return actualCount
    }
}        
    }

    /*---------------------------------------------------*/

// Implementar la funcion closureSum que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    return function(num) {
      return multiplier * num;
    }
  }

    /*---------------------------------------------------*/

    function cacheFunction(cb) {
        // Usa closures para crear un caché para la función cb.
        // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
        // cuando la función que hayas retornado es invocada de nuevo, debería guardar el argumento y el resultado de la invocacion
        // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se había invocado anterioremente, no deberia invocar de nuevo a cb
        // debería retornar el resultado (previamente guardado)
        // Ejemplo:
        // cb -> function(x) { return x * x; }
        // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
        // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
        // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
        // usá hasOwnProperty!
        var cache = {};
        return function (arg) {
          if (cache.hasOwnProperty(arg)) {
            return cache[arg];
          } else {
            cache[arg] = cb(arg)
            return cache[arg];
          }
        }
      }
    ///////////////// TIPO CHECK /////////////////////////////////////////////////////////////////////////

// Desarrollar la función closureDetect que recibe como parámetro:
//  - Un array (symptoms) que va a contener en cada posición un string representando un
//    síntoma médico de alguna enfermedad
//  - Un número (min) que va a indicar la cantidad mínima de síntomas que debe tener un
//    paciente para considerar que posee la enfermedad
// Ejemplos:
//   var symptoms = ['fever', 'dry cough', 'tiredness', 'sore throat', 'diarrhoea', 'loss of taste', 'loss of smell'];
//   var covidDetector = closureDetect(symptoms, 3);
//
//   var personOne = {
//     name: 'Franco',
//     age: 26,
//     symptoms: ['fever', 'congestion', 'loss of taste', 'tiredness']
//   }
//
//   var personTwo = {
//     name: 'Toni',
//     age: 30,
//     symptoms: ['congestion', 'tiredness']
//   }
//
//   covidDetector(personOne); --> true
//   covidDetector(personTwo); --> false
//  [Observar los tests para otros casos]

function closureDetect(symptoms, min) {
    // Tu código aca:
    var iguales=0;
    function sintomasPersona (person) {
      
    for(var i=0;i<symptoms.length;i++) {
      for(var j=0;j<person.symptoms.length;j++) {
          if(symptoms[i] == person.symptoms [j])
              iguales++;
        console.log(iguales)
      }
  }
      if (iguales >= min) return true;
    else return false
  }
  return sintomasPersona
  }
  
