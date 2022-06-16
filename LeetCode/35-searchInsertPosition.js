// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // Method 1 using binary search
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;

  // Method 2 using for loop and indexOf

  // First search element is there or not
  let i = nums.indexOf(target);
  if (i != -1) return i;

  if (nums[nums.length - 1] < target) return nums.length;

  let tindex = 0;
  let tvalue = nums[0];
  for (let j = 0; j < nums.length; j++) {
    if (tvalue < target) {
      tvalue = nums[j];
      tindex = j;
    }
  }
  return tindex;
};
