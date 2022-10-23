/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {   
  let realHash = new Map();
  let total = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (realHash[nums[i]]) {
      realHash[nums[i]]++;
    } else {
      realHash[nums[i]] = 1;
    }
  }
  
  for (const [key, value] of Object.entries(realHash)) {
    if (value === 1) {
      total += Number(key);
    }
  }
  
  return total;
};
