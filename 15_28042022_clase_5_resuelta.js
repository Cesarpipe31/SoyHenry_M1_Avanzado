let array = [1 ,2, 3, 1, 2, 3, {"a":1}, {"a": 1}]
let demo = new Set (array)



/* ---------------------------------------------------------------------------------------------------- */

// Cola de banco

// First in First Out    

class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(el) {
        this.queue.push(el);
    }
    dequeue() {
        return this.queue.shift();
    }
    size() {
        return this.queue.length;

    }
}
    

  /*
  Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
  debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
  Ejemplo:
  - queueOne: [1,3,5]
  - queueTwo: [2,4,6]
  mergeQueues(queueOne, queueTwo) --> [1,2,3,4,5,6]
  IMPORTANTE: Lo que recibe NO son arreglos sino que son Queues.
  */
  var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:
    var newQueue = new Queue()

            // [1, 3, 5]           [2, 4, 6]                           ----> [3, 5]             [4, 6]
    while(queueOne.size() || queueTwo.size()){
        var one = queueOne.dequeue()      // one = 1
        var two = queueTwo.dequeue()       // two = 2
        one && newQueue.enqueue(one)      // newQueue = [1]
        two && newQueue.enqueue(two)      // newQueue = [1, 2]
    }

    return newQueue
  }
/*
  // &&
v    v    v  --> 2do elemento
v    f     f
f   v      f
f   f      f
  
  // ||
  v    v    v  --> 1 elemento
v    f     v
f   v      v
f   f      f


  */
  

/* -----------------------------------------------------------*/

//Realiza una funcion que filtre los numeros del array recibido y arme una queue con el resto de los elementos
//Ejemplo
// let array = [1, "a", 2, "b", [1, 2, 3]]
// filtraQueue(array)
// -> ["a", "b", [1, 2, 3]]

function filtraQueue (arg) {
    var queue = new Queue()
    for (i = 0; i < arg.length; i++){
        if (typeof arg[i] !== "number"){
            queue.enqueue(arg[i])
        }
    }
    return queue

}




  /* -----------------------------------------------------------------------------------------------------------------*/
 // Last in First Out

  function Stack(){
    this.stack = [];
  }
  
  Stack.prototype.push = function(el){
     this.stack.push(el)
  
  };
  
  Stack.prototype.pop = function(){
      return this.stack.pop()
    
  };
  
  Stack.prototype.size = function () {
      return this.stack.length
    
  };

  /* ************************************************************************************************* */
  /*
  Desarrolla una funcion que al recibir un string, evalue si la cantidad de parentesis estan balanceados
  Debes usar metodos de STACK

  ej. parentesisBalanceaDOS("(hola (que (tal)))") --> Todo esta ok
  ej. parentesisBalanceaDOS("(hola (que (tal)") --> Hay uno o mas paréntesis desbalanceados
  */

  function parentesisBalanceaDOS (str) {
      var stack = new Stack()
      var stack2 = new Stack()
     for (let i = 0; i < str.length; i ++){
         // ( h o l a  ( q u e ( t a l ) ) )
        //                                  i                         
        if (str[i] === "(") {
            stack.push(str[i])
        }
 // stack = []
       
        else if (str[i] === ")"){
            stack2.push(str[i])
        }
     }
     if (stack.size() !== stack2.size()) return "Hay uno o mas parentesis desbalanceados"
     else return "Todo esta ok"
  }

    // Ejercicio extra. Cuantos parentesis hay de diferencia?

/* --------------------------------------------------------------------------------*/

/*
Desarrolla una funcion que filtre lo que que le indiquemos, utilizando metodos de STACK
Atencion, en este caso, usemos WHILE en lugar de FOR

Ejemplo
let str = "Hermosa Heroina Habla Hiriendo Halcones"
filtrado(str)    // H
-> "ermosa eroina abla iriendo alcones"
*/

function filtrado() {
}


/* -------------------------------------------------------------------------------------------------------*/
// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras
 
// Salida: 
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA 
//   Mar Azulado oro : raM odaluzA oro


function efectoEspejo(str){  
    //tu codigo aqui
    
    };









