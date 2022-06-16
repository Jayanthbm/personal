// 28. Implement strStr()
// Implement strStr().

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // Method 1 using while loop
  if (needle.length === 0) return 0;
  if (haystack.length < needle.length) return -1;
  let i = 0;
  while (haystack.length) {
    let tstring = haystack.substring(0, needle.length);
    if (tstring == needle) {
      return i;
    }
    haystack = haystack.substring(1);
    i++;
  }
  return -1;

  // Method 2 using indexOf
  return haystack.indexOf(needle);
};
