// 1480. Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function (nums) {
  //Method 1 With 2 Loops

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      result[i] = nums[i];
    } else {
      let tmp = 0;
      for (let j = 0; j < i + 1; j++) {
        tmp = tmp + nums[j];
      }
      result[i] = tmp;
    }
  }
  return result;

  //Method 2 With 1 for Loop

  let tsum = 0;
  for (let i = 0; i < nums.length; i++) {
    tsum += nums[i];
    nums[i] = tsum;
  }
  return nums;

  //Method 3 With using reduce

  return nums.reduce((acc, curr, index) => {
    if (index === 0) {
      acc.push(curr);
    } else {
      acc.push(acc[index - 1] + curr);
    }
    return acc;
  }, []);

  //Method 4 With using map

  let val = 0;
  let sum = nums.map((res) => {
    return (val = res + val);
  });
  return sum;
};

console.log(runningSum([1, 2, 3, 4]));
