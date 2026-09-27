// Problem #02 — Even or Odd
// Input: 7
// Output: Odd

// Input: 12
// Output: Even

// Solution:

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  }

  return "Odd";
}

console.log(checkEvenOdd(7));
console.log(checkEvenOdd(12));