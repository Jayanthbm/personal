// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = '';
  if (!strs.length) return '';
  for (let i = 0; i < strs[0].length; i++) {
    let tc = 0;
    for (j = 1; j < strs.length; j++) {
      if (strs[j][i] == strs[0][i]) {
        tc++;
      }
    }
    if (tc == strs.length - 1) {
      result = result + strs[0][i];
    } else {
      break;
    }
  }
  return result;
};
