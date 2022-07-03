// https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/

// 2259. Remove Digit From Number to Maximize Result

// You are given a string number representing a positive integer and a character digit.

// Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized. The test cases are generated such that digit occurs at least once in number.

// Example 1:

// Input: number = "123", digit = "3"
// Output: "12"
// Explanation: There is only one '3' in "123". After removing '3', the result is "12".
// Example 2:

// Input: number = "1231", digit = "1"
// Output: "231"
// Explanation: We can remove the first '1' to get "231" or remove the second '1' to get "123".
// Since 231 > 123, we return "231".
// Example 3:

// Input: number = "551", digit = "5"
// Output: "51"
// Explanation: We can remove either the first or second '5' from "551".
// Both result in the string "51".

// Constraints:

// 2 <= number.length <= 100
// number consists of digits from '1' to '9'.
// digit is a digit from '1' to '9'.
// digit occurs at least once in number.

/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */

var removeDigit = function (number, digit) {
  let max = "";
  for (let i = 0; i < number.length; i++) {
    let tmp = [...number];
    if (number[i] === digit) {
      tmp.splice(i, 1).join("");
      let upd = tmp.join("");
      if (upd > max) max = upd;
    }
  }
  return max;
};

console.log(removeDigit("123", "3"));
console.log(removeDigit("1231", "1"));
console.log(removeDigit("551", "5"));
console.log(removeDigit("133235", "3"));
console.log(
  removeDigit(
    "2998589353917872714814599237991174513476623756395992135212546127959342974628712329595771672911914471",
    "3"
  )
);
