// https://www.hackerrank.com/challenges/two-strings/problem

// Two Strings

// Given two strings, determine if they share a common substring. A substring may be as small as one character.

// Example

// These share the common substring .

// These do not share a substring.

// Function Description

// Complete the function twoStrings in the editor below.

// twoStrings has the following parameter(s):

// string s1: a string
// string s2: another string
// Returns

// string: either YES or NO
// Input Format

// The first line contains a single integer , the number of test cases.

// The following  pairs of lines are as follows:

// The first line contains string .
// The second line contains string .
// Constraints

//  and  consist of characters in the range ascii[a-z].
// Output Format

// For each pair of strings, return YES or NO.

// Sample Input

// 2
// hello
// world
// hi
// world
// Sample Output

// YES
// NO
// Explanation

// We have  pairs to check:

// , . The substrings  and  are common to both strings.
// , .  and  share no common substrings.

function twoStrings(s1, s2) {
  // Using Set
  let s1Set = new Set(s1);
  let s2Set = new Set(s2);
  let common = new Set([...s1Set].filter((x) => s2Set.has(x)));
  return common.size > 0 ? "YES" : "NO";

  // Using hashmap
  let substringMap = {};

  for (let i = 0; i < s1.length; i++) {
    substringMap[s1[i]] = true;
  }
  for (let j = 0; j < s2.length; j++) {
    if (substringMap[s2[j]]) {
      return "YES";
    }
  }

  return "NO";
}

console.log(twoStrings("wouldyoulikefries", "abcabcabcabcabcabc"));
console.log(twoStrings("abc", "xyz"));
console.log(twoStrings("hello", "world"));
console.log(twoStrings("hi", "world"));
console.log(twoStrings("hello", "wouldyoulikefries"));
console.log(twoStrings("abcabcabcabcabcabc", "xyzxyzxyzxyzxyzxyz"));
