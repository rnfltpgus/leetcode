/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x.length === 0) return;
  
  const reverseNumver = x.toString().split('').reverse().join('');
  
  return (x == reverseNumver ? true : false);
};