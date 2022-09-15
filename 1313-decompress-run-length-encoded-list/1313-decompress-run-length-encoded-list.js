/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  const result = [];
  
  for(let i = 0; i < nums.length; i = i + 2){
    let temp = new Array(nums[i]).fill(nums[i + 1]);
    
    result.push(...temp);
  }
  
  return result;
};
