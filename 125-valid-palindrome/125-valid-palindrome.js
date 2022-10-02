/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const regex = /[^a-z0-9]/g;
  const lowerS = s.toLowerCase().replace(regex, '');

  return lowerS === lowerS.split('').reverse().join('');
};
