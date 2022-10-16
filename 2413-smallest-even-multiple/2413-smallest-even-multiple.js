
/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  if (n === 0) return;
  
  return n * (n % 2 + 1);
};