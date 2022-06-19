// 258. Add Digits
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0

// Constraints:

// 0 <= num <= 231 - 1

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  // Method 1: using recursion
  if (num < 10) {
    return num;
  } else {
    let sum = 0;
    while (num > 0) {
      sum = sum + (num % 10);
      num = parseInt(num / 10);
    }
    return addDigits(sum);
  }
};

console.log(addDigits(38));
console.log(addDigits(0));
console.log(addDigits(1));
