// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

// 1941. Check if All Characters Have Equal Number of Occurrences

// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).


// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {boolean}
 */
 var areOccurrencesEqual = function(s) {
    let result = true;
	let hash = {};
	for (let i = 0; i < s.length; i++){
		if (hash[s[i]]) {
			hash[s[i]] = hash[s[i]] + 1;
		} else {
			hash[s[i]] = 1;
		}
	}
	let tmpArray = Object.values(hash);
	for (j = 1; j <tmpArray.length; j++){
		if (tmpArray[j] !== tmpArray[j - 1]) {
			return false;
		}
	}
	return result;
};