//https://www.cs.usfca.edu/~galles/visualization/BST.html

// Realizar la clase BinarySearchTree, con un value, un right y un left
// tree = bst {value : 2, right : null, left : null}


function BinarySearchTree(value) {
  this.value = value,
  this.right = null,
  this.left = null
    }
/********************************************************************* */
// Agrega a su prototipo el metodo insert
// Agregara un nuevo bst donde corresponda
// tree = bst {value : 2, right : null, left : null}
// tree.insert(3)
// tree = bst {value : 2, right : bst {value: 3, right: null, left: null}, left : null}

BinarySearchTree.prototype.insert = function (value) {
   if (this.value === value) return "No acepto valores repetidos"
   if (this.value > value) {    
     if (!this.left) this.left = new BinarySearchTree(value)   
     else this.left.insert(value)
      }
    else if (this.value < value) {
      if (!this.right) this.right = new BinarySearchTree(value)
      else this.right.insert(value)
    }
  }

  /********************************************************************* */
 // Agrega a su prototipo el metodo size
 // Devolvera el numero de nodos
 // Ej. tree --> 2 --> 3 --> 4 --> 5
 // tree.size() --> 4

      BinarySearchTree.prototype.size = function () {
        if (!this.left && !this.right) return 1;
        if (!this.left && this.right) return 1 + this.right.size();
        if (this.left && !this.right) return 1 + this.left.size();
        if (this.left && this.right) return 1 + this.left.size() +this.right.size()
      }

  /********************************************************************* */
// Agrega a su prototipo el metodo contains
// Consulta si tiene un nodo con x valor, si lo tiene responde true, sino false
// Ej. tree --> 2 --> 3 --> 4 --> 5
// tree.contains(2) --> true
// tree.contains(9) --> false

      BinarySearchTree.prototype.contains = function(value) {
        if (value === this.value) return true
        else if (value > this.value){
          if (!this.right) return false
          return this.right.contains(value)
        }
        else if (value < this.value) {
          if (!this.left) return false
          return this.left.contains(value)
        }
      }
  
   /* -------------------------------------------------------------- */
   // Agrega a su prototipo el método sum 
// Debe retornar la suma total de los valores dentro de cada nodo del arbol
// Ej. tree --> 2 --> 3 --> 4 --> 5
 // Devuelve 14

BinarySearchTree.prototype.sum = function() {
  if (!this.left && !this.right) return this.value;
  if (!this.left && this.right) return this.value + this.right.sum();
  if (this.left && !this.right) return this.value + this.left.sum();
  return this.value + this.left.sum() + this.right.sum()
  }

    
  /* -------------------------------------------------------------- */
  // Agrega el metodo breadthFirstForEach
  // Debe ejecutar la funcion que se le indique por cb
  // siguiendo el orden por nivel
  // VER TEST
  testArray =[]
  var cb = function(val){ 
    testArray.push(val)
  }; 

  /*  
                       0
                     /  \
                    -1   5
                    /    / \
                  -2    3    7
                        \
                        4

           testArray = [0, -1, 5, -2, 3, 7, 4]
                       [0, -1, 5, -2, 3, 7, 4]
            */

  BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = [] ) {
      if (this.left) array.push(this.left)                // array = [-1]                                           array = [5, -2]   array = [-2, 3]
      if (this.right) array.push(this.right)              // array = [-1, 5]                                                           array = [-2, 3, 7]
      cb(this.value)                                       // cb(0)

      if(array.length > 0) array.shift().breadthFirstForEach(cb, array)                   // -1    // cb, [5]       //5  -> cb [-2]


    }
    


/*--------------------------------------------------------------------*/
