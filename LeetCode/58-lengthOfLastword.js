// 58. Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // Method 1 using trim ,split and length
  let tstring = s.trim().split(' ');
  return tstring[tstring.length - 1].length;

  // Method 2 using regex
  return (s.match(/(\w+)\s*$/) || [, ''])[1].length;

  // Method 3 using for loop
  let len = 0;
  let hasStarted = false;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') hasStarted = true;
    if (hasStarted) {
      if (s[i] === ' ') break;
      len++;
    }
  }
  return len;
};
