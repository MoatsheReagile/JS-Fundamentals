const arg = process.argv[2];
const times = parseInt(arg, 10);

if (!arg || isNaN(times)) {
  console.log("Missing number of occurrences");
} else if (times > 0) {
  for (let i = 0; i < times; i++) {
    console.log("C is fun");
  }
}
// If times is zero or negative, print nothing (do nothing)
