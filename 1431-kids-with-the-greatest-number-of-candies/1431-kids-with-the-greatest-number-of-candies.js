/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = candies.reduce(function(a, b) {
    return Math.max(a, b);
  });
  
  return candies.map(x => x + extraCandies >= max)     
};