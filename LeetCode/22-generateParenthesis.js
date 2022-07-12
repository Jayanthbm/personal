// https://leetcode.com/problems/generate-parentheses/

// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

// Constraints:

// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var ans = [];
  function generate(path, stack, n) {
    if (n == 0 && stack == 0) {
      ans.push(path);
      return;
    }

    if (n > 0) {
      generate(path + "(", stack + 1, n - 1);
    }
    if (stack > 0) {
      generate(path + ")", stack - 1, n);
    }
  }
  generate("", 0, n);
  return ans;
};

console.log(generateParenthesis(3));
