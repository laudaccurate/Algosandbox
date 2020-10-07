// method 1
function chunk(array, size) {
  let chunks = [];

  for (let element of array) {
    let last = chunks[chunks.length - 1];

    if (!last || last.length === size) {
      chunks.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunks;
}

// method 2
function chunk2(array, size) {
  const chunks = [];
  let index = 0;

  while (index < array.length) {
    chunks.push(array.slice(index, index + size));
    index += size;
  }
  return chunks;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 3));
