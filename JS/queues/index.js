const Queue = require("./queue");

function weave(queue1, queue2) {
  let newQueue = new Queue();

  while (queue1.peek() || queue2.peek()) {
    if (queue1.peek()) {
      newQueue.add(queue1.remove());
    }

    if (queue2.peek()) {
      newQueue.add(queue2.remove());
    }
  }

  return newQueue;
}

const queue1 = new Queue();
const queue2 = new Queue();

queue1.add(1);
queue1.add(3);
queue1.add(5);
queue2.add(2);
queue2.add(4);
queue2.add(6);

console.log(weave(queue1, queue2));
