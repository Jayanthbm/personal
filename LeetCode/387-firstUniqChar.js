// 387. First Unique Character in a String
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // Method 1 : Using dictonary
  let dict = {};
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]]) {
      dict[s[i]] = dict[s[i]] + 1;
    } else {
      dict[s[i]] = 1;
    }
  }
  for (let j = 0; j < s.length; j++) {
    if (dict[s[j]] == 1) {
      return j;
    }
  }
  return -1;

  // Method 2 : Using indexOf and lastIndexOf

  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
console.log(firstUniqChar('leetcode'));
