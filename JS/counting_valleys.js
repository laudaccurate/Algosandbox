// Given Gary's sequence of up and down steps during his last hike, find and print
// the number of valleys he walked through.

// For example, if Gary's path is , he first enters a valley  units deep. Then he
// climbs out an up onto a mountain  units high. Finally, he returns to sea level
// and ends his hike.

function countingValleys(n, s) {
  let valley_count = 0;
  let altitude = 0;
  for (let i = 0; i < n; i++) {
    altitude += s[i] === "D" ? -1 : 1;
    if (altitude < 0) {
      for (let j = i + 1; j < n; j++) {
        altitude += s[j] === "D" ? -1 : 1;
        if (altitude == 0) {
          valley_count += 1;
          i = j;
          break;
        }
      }
    }
  }
  console.log(valley_count);
  return valley_count;
}

function countingValleys_2(n, s) {
  let valley_count = 0;
  let altitude = 0;

  for (let step of s) {
    if (altitude === -1 && step === "U") valley_count += 1;

    altitude += step === "U" ? 1 : -1;
  }

  console.log(valley_count);
  return valley_count;
}

countingValleys_2(12, "DDUUDDUDUUUD");
