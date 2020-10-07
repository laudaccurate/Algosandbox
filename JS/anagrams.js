//method 1
function anagrams(strA, strB) {
  let aCharMap = buildCharMap(strA);
  let bCharMap = buildCharMap(strB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length)
    return false;

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) return false;
  }
  return true;
}

function buildCharMap(str) {
  let charMap = {};

  for (let char of str.replace(/[^\w]/g, "")) {
    charMap[char] = charMap[char] + 1 || 1;
    // charMap[char] += charMap[char] ? charMap[char] : 1;
  }

  return charMap;
}

// method 2
function anagrams2(strA, strB) {
  return cleanString(strA) === cleanString(strB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .split("")
    .sort()
    .join("");
}

console.log(anagrams2("rail safety", "fairy tales"));
