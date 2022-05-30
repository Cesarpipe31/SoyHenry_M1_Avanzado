function countArray1(array) {
  // Solución con reduce

  return array.reduce(
    (sum, el) => (sum += Array.isArray(el) ? countArray(el) : el)
  );
}

function countArray2(array) {
  // Solución más larga

  var suma = 0;

  array.forEach((el) => {
    if (Array.isArray(el)) {
      suma += countArray(el);
    } else suma += el;
  });

  return suma;
}

function countProps(obj) {
  // var total = 0
  var total = Object.keys(obj).length;

  for (let prop in obj) {
    if (typeof obj[prop] === "object" && !Array.isArray(obj[prop])) {
      total += countProps(obj[prop]);
    }
    // total += 1;
  }

  return total;
}

LinkedList.prototype.changeNotNumbers = function () {
  let count = 0,
    current = this.head;

  while (current) {
    if (Number.isNaN(Number(current.value))) {
      current.value = "Kiricocho";
      count++;
    }
    current = current.next;
  }

  return count;
};

var mergeQueues = function (queueOne, queueTwo) {
  let newQueue = new Queue();

  while (queueOne.size() && queueTwo.size()) {
    newQueue.enqueue(queueOne.dequeue());
    newQueue.enqueue(queueTwo.dequeue());
  }

  while (queueOne.size()) {
    newQueue.enqueue(queueOne.dequeue());
  }

  while (queueTwo.size()) {
    newQueue.enqueue(queueTwo.dequeue());
  }
  return newQueue;
};

var closureMult = function (multiplier) {
  return function (num) {
    return num * multiplier;
  };
};

BinarySearchTree.prototype.sum = function () {
  let sum = this.value;

  if (this.right) {
    sum += this.right.sum();
  }
  if (this.left) {
    sum += this.left.sum();
  }

  return sum;
};
