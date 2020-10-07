// method 1
function capitalize(sentence) {
  let words = [];

  for (let word of sentence.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

// method 2
function capitalize2(sentence) {
  let capitalized = sentence[0].toUpperCase();

  for (let i = 1; i < sentence.length; i++) {
    capitalized +=
      sentence[i - 1] === " " ? sentence[i].toUpperCase() : sentence[i];
  }

  return capitalized;
}

console.log(capitalize2("the quick brown fox jumps over the lazy dog"));
