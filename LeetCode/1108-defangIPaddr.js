// 1108. Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// Constraints:

// The given address is a valid IPv4 address.

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  //Method 1: Using RegExp
  return address.replace(/\./g, '[.]');
  //Method 2: Using String.split
  let result = [];
  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      result.push('[.]');
    } else {
      result.push(address[i]);
    }
  }
  return result.join('');

  //Method 3: Using String.replaceAll
  return address.replaceAll('.', '[.]');
};

console.log(defangIPaddr('1.1.1.1'));
console.log(defangIPaddr('255.100.50.0'));
