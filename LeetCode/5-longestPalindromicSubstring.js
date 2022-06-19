// 5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // Method 1 - Brute Force (Using 2 for loops)
  // Error: Time Limit Exceeded
  // let dict = {};
  // let max = 0;
  // for (i = 0; i < s.length; i++) {
  //   for (j = 1; j < s.length + 1; j++) {
  //     let tString = s.substring(i, j);
  //     if (tString.length > max) {
  //       if (tString == tString.split('').reverse().join('')) {
  //         dict[tString.length] = tString;
  //         max = tString.length;
  //       }
  //     }
  //   }
  // }
  // return dict[max];

  // Method 2

  let result = '';
  for (let i = 0; i < s.length; i++) {
    let forOdd = getPalindrome(s, i, i);
    let forEven = getPalindrome(s, i, i + 1);
    if (forOdd.length > result.length) {
      result = forOdd;
    }
    if (forEven.length > result.length) {
      result = forEven;
    }
  }
  return result;
  function getPalindrome(s, left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('abc'));
console.log(longestPalindrome('abcdefg'));
console.log(longestPalindrome('abcdefghijklmnopqrstuvwxyz'));
console.log(
  longestPalindrome(
    'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
  )
);
console.log(
  longestPalindrome(
    'jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel'
  )
);
