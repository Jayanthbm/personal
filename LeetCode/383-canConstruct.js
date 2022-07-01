// https://leetcode.com/problems/ransom-note/

// 383. Ransom Note

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
  let tmp = magazine.split("");
  for (i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    const check = tmp.indexOf(char);
    if (check == -1) {
      return false;
    } else {
      tmp.splice(check, 1);
    }
  }
  return tmp.length >= 0;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
console.log(canConstruct("aa", "aabb"));
console.log(canConstruct("aa", "aabbb"));
console.log(canConstruct("aa", "aabbbb"));
