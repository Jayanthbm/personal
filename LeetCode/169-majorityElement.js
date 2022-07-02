// https://leetcode.com/problems/majority-element/

// 169. Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // Method1 :Using HashMap

  let hash = {};
  let max = 0;
  let element = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      let tmp = hash[nums[i]] + 1;
      hash[nums[i]] = tmp;
      if (tmp > max) {
        max = tmp;
        element = nums[i];
      }
    } else {
      hash[nums[i]] = 1;
    }
  }
  return element;

  // Method2 :Using Moore's Voting Algorithm
  let majority = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      majority = nums[i];
      count = 1;
    }
  }
  return majority;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
