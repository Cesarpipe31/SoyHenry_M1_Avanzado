// Implementa la clase LinkedList y la clase Node

function LinkedList() {
  
    }
    
    function Node(value){
  
  
    }

    /* ---------------------------------------------------------------*/
    // add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null

    LinkedList.prototype.add= function (){
     
     
     
     
     
     
     
     
     
     
     
      }
    /* ---------------------------------------------------------------*/
    // remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1 -- > 2
// remove():   Head --> 1 --> null // devuelve 2
// remove():   Head --> null // devuelve 1

      LinkedList.prototype.remove= function (){
      
      
      }
    /* -----------------------------------------------------------*/
    // search: Busca un valor dentro de la lista. 
    // Si lo encuentra, devuelve "found value"
    //Si no hubiera resultados, devuelve "not found".
    // Ej: Head --> 1 --> 2
    // search(2) // devuelve "found 2"
    // search(6) // devuelve "not found"

    LinkedList.prototype.search = function (){
      
      

    }

    /* -------------------------------------------------------- */

    // Size: retorna la cantidad de nodos de la lista
    // Ej: Head --> 1 --> 2
    // size() // devuelve 2 

    LinkedList.prototype.size = function () {
        var current = this.head;
        var count = 0;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }

    /* --------------------------------------------------------- */

    // Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no sean numeros por 'NotNumber' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Hola']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['NotNumber'] --> ['NotNumber] --> ['NotNumber'] y la función debería haber devuelto el valor 3

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
  }


/* ////////////////////////----- ----- --------/////////////////// */  

    // Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no sean numeros por 'NotNumber' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Hola']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['NotNumber'] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:
  }


  
