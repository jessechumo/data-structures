// A queue is a linear data structure in which elements are inserted at the rear of the queue and are removed from the front of the queue.
// Inserting an element is known as enqueue while remoning is to dequeue.
// A queue works based on the first in, first out principle (FIFO).
// The operation of getting an element at the front of the queue  is known as peek.
// Queues are FIFO while stacks are LIFO.

// Implementation using array.
function Queue() {
    this.elements = [];
 }

 // Adding an element to the queue.
 Queue.prototype.enqueue = function (e) {
    this.elements.push(e);
 };

 // Removing an element from the front of the queue
Queue.prototype.dequeue = function () {
    return this.elements.shift();
};

// check if the queue is empty
Queue.prototype.isEmpty = function () {
    return this.elements.length == 0;
};

// Access the element at the front of the queue without modifying it.
Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
};

//Querying the length of the queue
Queue.prototype.length = function() {
    return this.elements.length;
}


// Creating a new queue from the existing queue
let Queue2 = new Queue();
for (let i = 1; i <= 7; i++) {
    Queue2.enqueue(i);
  }

  // dequeue all elements
while (!Queue2.isEmpty()) {
    console.log(Queue2.dequeue());
}