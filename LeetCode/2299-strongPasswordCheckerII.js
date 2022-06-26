// https://leetcode.com/problems/strong-password-checker-ii/

// 2299. Strong Password Checker II

// A password is said to be strong if it satisfies all the following criteria:

// It has at least 8 characters.
// It contains at least one lowercase letter.
// It contains at least one uppercase letter.
// It contains at least one digit.
// It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
// It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
// Given a string password, return true if it is a strong password. Otherwise, return false.

// Example 1:

// Input: password = "IloveLe3tcode!"
// Output: true
// Explanation: The password meets all the requirements. Therefore, we return true.
// Example 2:

// Input: password = "Me+You--IsMyDream"
// Output: false
// Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.
// Example 3:

// Input: password = "1aB!"
// Output: false
// Explanation: The password does not meet the length requirement. Therefore, we return false.

// Constraints:

// 1 <= password.length <= 100
// password consists of letters, digits, and special characters: "!@#$%^&*()-+".

/**
 * @param {string} password
 * @return {boolean}
 */

var strongPasswordCheckerII = function (password) {
  // Check for length;
  if (password.length < 8) return false;
  let digit = false;
  let specialChar = false;
  let lowerCase = false;
  let upperCase = false;

  for (let i = 0; i < password.length; i++) {
    if (password[i] == password[i + 1]) {
      return false;
    }
    if (digit == false) {
      if (
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(password[i])
      ) {
        digit = true;
      }
    }
    if (specialChar == false) {
      if (
        ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"].includes(
          password[i]
        )
      ) {
        specialChar = true;
      }
    }
    let charCode = password[i].charCodeAt(0);
    if (lowerCase == false) {
      if (charCode >= 97 && charCode <= 122) {
        lowerCase = true;
      }
    }

    if (upperCase == false) {
      if (charCode >= 65 && charCode <= 90) {
        upperCase = true;
      }
    }
  }

  return digit && specialChar && lowerCase && upperCase;
};

console.log(strongPasswordCheckerII("IloveLe3tcode!"));
console.log(strongPasswordCheckerII("Me+You--@IsMyDream"));
console.log(strongPasswordCheckerII("helflodewr34t45y532"));
console.log(strongPasswordCheckerII("A"));
