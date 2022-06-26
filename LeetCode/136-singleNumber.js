// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.



// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1


// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums){
  // Method 1: Using a hash table
   let  dict={};
    for(let i=0;i<nums.length;i++){
        if(dict[nums[i]]){
           delete dict[nums[i]]
        }else{
            dict[nums[i]] = true;
        }
    }

  	return Object.keys(dict)[0];


  // Method 2 : Using XOR
  let result = 0;
  for(let i = 0; i < nums.length; i++){
    result ^= nums[i];
  }
  return result;

  // Method 3: Using bit manipulation and array.reduce
  return nums.reduce((acc, cur) => acc ^= cur, 0);
}

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));