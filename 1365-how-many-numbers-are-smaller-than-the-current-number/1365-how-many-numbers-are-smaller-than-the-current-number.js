/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  if (nums.length === 0) {
    return;      
  }
  
  return nums.map((n) => nums.reduce((a, b) => a + (n > b ? 1 : 0), 0));
};
