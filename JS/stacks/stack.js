// A stack is a data structure for storing a list of elements such that the last
// element that is added is the first to be removed. ie. there is only one entry
// and exit point. We us array's push and pop methods.

class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    return this.elements.push(element);
  }

  pop() {
    return this.elements.pop();
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }
}
