// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  /** Solution 1 **/

  if (s.length !== t.length) {
    return false;
  }
  let SLIST = {};
  let TLIST = {};
  for (let i = 0; i < s.length; i++) {
    SLIST[s[i]] = SLIST[s[i]] ? SLIST[s[i]] + 1 : 1;
    TLIST[t[i]] = TLIST[t[i]] ? TLIST[t[i]] + 1 : 1;
  }
  for (const key in SLIST) {
    if (SLIST[key] == undefined || TLIST[key] == undefined) {
      return false;
    }
    if (SLIST[key] !== TLIST[key]) {
      return false;
    }
  }
  return true;

  /** Solution 2 **/

  return JSON.stringify(s.split('').sort()) ===
    JSON.stringify(t.split('').sort())
    ? true
    : false;

};
