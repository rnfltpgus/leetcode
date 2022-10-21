/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  const target = [];

  const result = nums.forEach((el, elindex) => {
    let temp = index[elindex];
    
    target.splice(temp, 0, el);
  })

  return target;
};
