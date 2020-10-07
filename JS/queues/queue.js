// A Queue is an ordered list of items arranged such that the first item that is
// the first item to be removed. ie. literally queue(first come,first serve).
// The items are added at one end and removed at the other end. We use array's
// push() and shift() methods to enqueue and dequeue a queue respectively.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.push(record);
  }

  remove() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }
}

module.exports = Queue;
