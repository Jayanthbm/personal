// 7. Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reverse = 0;
  while (x != 0) {
    let lastDigit = x % 10;
    reverse = reverse * 10 + lastDigit;
    x = (x - lastDigit) / 10;

    if (reverse < -2147483648 || reverse > 2147483647) {
      return 0;
    }
  }

  return reverse;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
