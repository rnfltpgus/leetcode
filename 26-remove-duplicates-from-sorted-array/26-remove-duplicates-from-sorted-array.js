/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) { 
  if (nums.length === 0) {
    return;
  }
  
  nums.splice(0, nums.length, ...(new Set(nums)));
};