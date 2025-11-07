// For loop: print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("For loop number:", i);
}

// While loop: print numbers 1 to 5
let j = 1;
while (j <= 5) {
  console.log("While loop number:", j);
  j++;
}

// Demonstrate break: stop loop when i equals 3
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Breaking at", i);
    break;  // exit the loop completely
  }
  console.log("Loop before break:", i);
}

// Demonstrate continue: skip number 3
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping", i);
    continue;  // skip the rest of this iteration
  }
  console.log("Loop with continue:", i);
}
