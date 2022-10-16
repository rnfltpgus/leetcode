
/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  return n * (n % 2 + 1);
};