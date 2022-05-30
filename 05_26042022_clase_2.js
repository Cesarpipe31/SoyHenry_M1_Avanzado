class Libro {
    constructor(titulo, autor, traducciones) {
      // El constructor de la clase Libro recibe titulo (string), autor (string), traducciones (array de objetos)
      // Inicializar las propiedades del libro con los valores recibidos como argumento
      // Tu código aca:
     
     
     
      
    }

    getTitulo() {
      // este método debe retornar el titulo del libro.
      // Tu código aca:
      

    }

    getAutor() {
      // El método debe retornar nombre y apellido del autor
      // Tu código aca:
    
    }

    addTraduccion(idioma, editorial) {
      // El método recibe un string 'idioma' y un string 'editorial' y debe agregar un objeto:
      // { idioma: idioma, editorial: editorial} al arreglo de traducciones del libro.
      // No debe retornar nada.
      // Tu código aca:
      

    
    }

    getTraducciones() {
      // El método debe retornar un arreglo con sólo los idiomas del arreglo de traducciones del libro.
      // Ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getTraducciones() debería devolver ['inglés', 'castellano']
      // Tu código aca:
      
      //return this.traducciones

    }

  //  getAlcance() {
      // El metodo debe retornar la cantidad de idiomas en la que esta traducido el libro.
      // Dato: no se repiten ni los idiomas ni las editoriales
      // ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getAlcance() deberia devolver 2
      // Tu código aca:
          
  //  }
  }

  // Ahora con funcion y prototype.



  /**********************************************************************************************************************/

   //Objeto de ejemplo:
 const hogwarts = {
   staff: {
     headmaster: {
       name: "Albus Percival Wulfric Brian Dumbledore",
     },
     keeperOfKeys: {
       name: "Rubeus Hagrid",
     },
    potionsMaster: {
       name: "Severus Snape",
     },
   },
 };

 const printStaff = function (objeto) {
    // Retornar un arreglo que contenga los strings indicando el titulo y nombre de cada miembro del staff
    // de esta forma "The headmaster is Albus Percival Wulfric Brian Dumbledore" 
    // el arreglo debe mantener el orden que posee el staff del objeto.
    
    // "The [propiedad] is [name]"
    // "The " + propiedad + " is " + name 
    // `The ${propiedad} is ${name}`

  };

  // Otro objeto:
 /*  
 const hogwartsEnArray = {
      staff: [{          
     headmaster: {
     name: "Albus Percival Wulfric Brian Dumbledore",
   },
      keeperOfKeys: {
     name: "Rubeus Hagrid",
   },
  potionsMaster: {
     name: "Severus Snape",
      }
    }]
  }
*/

/************************************************************************************/

// Ultimo ejercicio de objetos
// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: '10',
//     a3: {a3a: '10', a3b: '10', a3c: {a3c1: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Duda']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, y a3 tiene otras 3.
// Propiedades: a, a1, a2, a3, a3a, a3b, a3c, a3c1, b, c --> 10 en total


var countProps = function() {

}

////que pasa con hogwartEnArray?

/**************************************************************************************** */

// Preparandonos para recursividad

// Objetivo: Realizar una funcion que devuelva "Par" si el numero es par o "Impar" caso contrario, pero utilizando recursividad en lugar de %

//Ejemplo 
// parImpar(20)
// "Par"

let parImpar = () => {
}

 