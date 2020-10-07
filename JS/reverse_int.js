//method 1
function reverse_int1(number) {
  let reversed = number
    .toString()
    .split("")
    .reverse()
    .join("");

  if (number < 0) return parseInt(reversed) * -1;

  return parseInt(reversed);
}

//method 2
function reverse_int2(number) {
  return (
    parseInt(
      number
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(number)
  );
}
