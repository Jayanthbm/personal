// 665. Non-decreasing Array
// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

// Example 1:

// Input: nums = [4,2,3]
// Output: true
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
// Example 2:

// Input: nums = [4,2,1]
// Output: false
// Explanation: You can't get a non-decreasing array by modify at most one element.

// Constraints:

// n == nums.length
// 1 <= n <= 104
// -105 <= nums[i] <= 105
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let tmp = [...nums];
    if (i == nums.length - 1) {
      tmp[i] = nums[i - 1] + 1;
    } else {
      tmp[i] = nums[i + 1];
    }
    increasing = isIncreasing(tmp);
    if (increasing) {
      return true;
    }
  }
  return false;

  function isIncreasing(nums) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) return false;
    }
    return true;
  }
};

console.log(checkPossibility([4, 2, 3]));
console.log(checkPossibility(4, 2, 1));
console.log(checkPossibility([-1, 4, 2, 3]));
console.log(checkPossibility([1, 1, 1]));
console.log(checkPossibility([1, 4, 1, 2]));
