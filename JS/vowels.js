// method 1
function find_vowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowel_count = 0;

  str.split("").forEach(char => {
    if (vowels.includes(char)) vowel_count++;
  });

  return vowel_count;
}

function find_vowels_2(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  return str.split("").reduce((count, char) => {
    return (count += vowels.includes(char) ? 1 : 0);
  }, 0);
}

console.log(find_vowels_2("aei"));
