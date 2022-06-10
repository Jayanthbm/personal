// 9. Palindrome Number
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // Method 1: Convert to string and check if it is palindrome
  return x.toString() == x.toString().split('').reverse().join('');

  // Method 2: Check if x is palindrome by reversing the number without converting to string

  let reversedNum = 0;
  if (x < 0 || (x > 0 && x % 10 == 0)) {
    return false;
  }
  while (x > reversedNum) {
    reversedNum = reversedNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x == reversedNum || x == Math.floor(reversedNum / 10);
};
