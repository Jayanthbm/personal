// 2309. Greatest English Letter in Upper and Lower Case
// Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

// An English letter b is greater than another letter a if b appears after a in the English alphabet

// Example 1:

// Input: s = "lEeTcOdE"
// Output: "E"
// Explanation:
// The letter 'E' is the only letter to appear in both lower and upper case.
// Example 2:

// Input: s = "arRAzFif"
// Output: "R"
// Explanation:
// The letter 'R' is the greatest letter to appear in both lower and upper case.
// Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' or 'A'.
// Example 3:

// Input: s = "AbCdEfGhIjK"
// Output: ""
// Explanation:
// There is no letter that appears in both lower and upper case.

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase and uppercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let max = 0;
  let uppercaseDict = {};
  let lowercaseDict = {};
  for (i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) < 96) {
      if (uppercaseDict[s[i]]) {
        if (lowercaseDict[s[i].toLowerCase()]) {
          max = max > s.charCodeAt(i) ? max : s.charCodeAt(i);
        }
      } else {
        uppercaseDict[s[i]] = true;
        if (lowercaseDict[s[i].toLowerCase()]) {
          max = max > s.charCodeAt(i) ? max : s.charCodeAt(i);
        }
      }
    } else {
      if (lowercaseDict[s[i]]) {
        if (uppercaseDict[s[i].toUpperCase()]) {
          max =
            max > s[i].toUpperCase().charCodeAt(0)
              ? max
              : s[i].toUpperCase().charCodeAt(0);
        }
      } else {
        lowercaseDict[s[i]] = true;
        if (uppercaseDict[s[i].toUpperCase()]) {
          max =
            max > s[i].toUpperCase().charCodeAt(0)
              ? max
              : s[i].toUpperCase().charCodeAt(0);
        }
      }
    }
  }
  return max == 0 ? '' : String.fromCharCode(max);
};

console.log(greatestLetter('lEeTcOdE'));
console.log(greatestLetter('arRAzFif'));
console.log(greatestLetter('AbCdEfGhIjK'));
