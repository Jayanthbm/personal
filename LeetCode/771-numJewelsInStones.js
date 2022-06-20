// 771. Jewels and Stones
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  // Method 1: Using Includes Method
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      count++;
    }
  }
  return count;

  // Method 2: Using RegExp
  let reg = new RegExp(`[${jewels}]`, 'g');
  return stones.match(reg) ? stones.match(reg).length : 0;

  // Method 3: Using Array.prototype.filter
  return stones.split('').filter((stone) => jewels.includes(stone)).length;

  // Method 4: Using Array.prototype.reduce
  return stones.split('').reduce((acc, stone) => {
    return jewels.includes(stone) ? acc + 1 : acc;
  }, 0);

  // Method 5: Using hash table
  let dict = {};
  let result = 0;
  for (i = 0; i < jewels.length; i++) {
    if (!dict[jewels[i]]) {
      dict[jewels[i]] = true;
    }
  }
  for (j = 0; j < stones.length; j++) {
    if (dict[stones[j]]) {
      result += 1;
    }
  }
  return result;
};
console.time('numJewelsInStones');
console.log(numJewelsInStones('aA', 'aAAbbbb'));
console.log(numJewelsInStones('z', 'ZZ'));
console.timeEnd('numJewelsInStones');
