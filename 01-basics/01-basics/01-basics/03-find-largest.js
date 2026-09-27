// Problem #03 — Find Largest Number

// তিনটি number-এর মধ্যে সবচেয়ে বড় number বের করো।

// Input: 10, 25, 15
// Output: 25

// Solution:

function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }

  if (b >= a && b >= c) {
    return b;
  }

  return c;
}

console.log(findLargest(10, 25, 15));