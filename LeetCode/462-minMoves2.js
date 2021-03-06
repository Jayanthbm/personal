// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/

// 462. Minimum Moves to Equal Array Elements II
// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment or decrement an element of the array by 1.

// Test cases are designed so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [1,2,3]
// Output: 2
// Explanation:
// Only two moves are needed (remember each move increments or decrements one element):
// [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
// Example 2:

// Input: nums = [1,10,2,9]
// Output: 16

// Constraints:

// n == nums.length
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  // Method 1 : Without sorting
  let result = undefined;
  for (let i = 0; i < nums.length; i++) {
    count = findCount(nums, i);
    if (result == undefined) {
      result = count;
    } else {
      result = Math.min(count, result);
    }
  }
  return result;

  function findCount(nums, i) {
    let count = 0;
    let valueToReach = nums[i];
    for (let k = 0; k < nums.length; k++) {
      if (k !== i) {
        count = count + Math.abs(valueToReach - nums[k]);
      }
    }
    return count;
  }

  // Method 2 : With sorting
  nums.sort((a, b) => a - b); //! sort the array
  mid = nums[Math.floor(nums.length / 2)]; //! get the middle element
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const need_to_get = mid - nums[i]; //! get the difference between the middle element and the current element
    count += Math.abs(need_to_get);
  }
  return count;
};

console.log(minMoves2([1, 2, 3]));
console.log(minMoves2([1, 10, 2, 9]));
