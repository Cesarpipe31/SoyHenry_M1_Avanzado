class Libro {
    constructor(titulo, autor, traducciones) {
      // El constructor de la clase Libro recibe titulo (string), autor (string), traducciones (array de objetos)
      // Inicializar las propiedades del libro con los valores recibidos como argumento
      // Tu código aca:
      
      this.titulo= titulo,
      this.autor=autor,
      this.traducciones=[]

      
    }

    getTitulo() {
      // este método debe retornar el titulo del libro.
      // Tu código aca:
      return this.titulo
    }

    getAutor() {
      // El método debe retornar nombre y apellido del autor
      // Tu código aca:
      return this.autor
    }

    addTraduccion(idioma, editorial) {
      // El método recibe un string 'idioma' y un string 'editorial' y debe agregar un objeto:
      // { idioma: idioma, editorial: editorial} al arreglo de traducciones del libro.
      // No debe retornar nada.
      // Tu código aca:
      this.traducciones.push({idioma, editorial})
    }

    getTraducciones() {
      // El método debe retornar un arreglo con sólo los idiomas del arreglo de traducciones del libro.
      // Ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getTraducciones() debería devolver ['inglés', 'castellano']
      // Tu código aca:
   //  let traducciones=[];
   //  this.traducciones.forEach(element => {
   //    traducciones.push(element.idioma)
   //  });
      return this.traducciones
    }

    getAlcance() {
      // El metodo debe retornar la cantidad de idiomas en la que esta traducido el libro.
      // Dato: no se repiten ni los idiomas ni las editoriales
      // ej:
      // Suponiendo que el libro tiene estas traducciones: [{idioma: 'inglés', editorial: 'Scholastic'}, {idioma: 'castellano', editorial: 'Santillana'}]
      // libro.getAlcance() deberia devolver 2
      // Tu código aca:
      let idiomas=new Set(this.getTraducciones())
      return idiomas.size

    }
  }

  // Ahora con funcion y prototype.

  var Libro = function (titulo, autor, traducciones) {
            
    this.titulo= titulo,
    this.autor=autor,
    this.traducciones=[]
  }

  Libro.prototype.addTraduccion = function (idioma, editorial){
    this.traducciones.push({idioma, editorial})
  }

  var libroPrueba = new Libro ("I, Robot", "Isaac Asimov")

  libroPrueba.addTraduccion("español", "santillana")
  libroPrueba.addTraduccion("aleman", "santillana")

// libroPrueba
// Libro {titulo: 'I, Robot', autor: 'Isaac Asimov', traducciones: Array(2)}
// autor: "Isaac Asimov"
// titulo: "I, Robot"
// traducciones: Array(2)
// 0: {idioma: 'español', editorial: 'santillana'}
// 1: {idioma: 'aleman', editorial: 'santillana'}
// length: 2

// Hacer el camino para llegar a aleman. 

/****************************************************************************************************** */

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
    
    let propiedades= Object.keys(objeto.staff)
    //console.log(propiedades)
    let arr=[]
    propiedades.forEach(elem=>{
     // console.log(objeto.staff[elem])
      arr.push(`The ${elem} is ${objeto.staff[elem].name}`)
    })
    return arr
  };

  
  
    // Otro objeto:
 
 const hogwartsII = {
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
 
  
  const printStaffArray = function (objeto) {
    // Retornar un arreglo que contenga los strings indicando el titulo y nombre de cada miembro del staff
    // de esta forma "The headmaster is Albus Percival Wulfric Brian Dumbledore" 
    // el arreglo debe mantener el orden que posee el staff del objeto.
    
    let props= Object.keys(objeto.staff[0])
    let arr=[]
    props.forEach(elem=>{
      arr.push(`The ${elem} is ${objeto.staff[0][elem].name}`)
    })
    return arr
}


/* **************************************************************************************************************************** */

// Ultimo ejercicio
// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados (Atencion: excepto que esten adentro de un array, esas propiedades no se cuentan)

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



var countProps = function(obj) {
    var count = 0;
    for(var property in obj) {
      count++;
      if(typeof obj[property] === 'object' && !Array.isArray(obj[property])) {
        count = count + countProps(obj[property]);
      }
    }
    return count;
  }

  

/**************************************************************************************** */

// Preparandonos para recursividad
// Objetivo: Realizar una funcion que devuelva "Par" si el numero es par o "Impar" caso contrario, pero utilizando recursividad en lugar de %

//Ejemplo 
// parImpar(20)
// "Par"

let parImpar = () => {
}
