const Stack = require("./stack");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  enqueue(element) {
    return this.first.push(element);
  }

  dequeue() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    let element = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return element;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    let element = this.second[this.second.length - 1];

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return element;
  }
}
