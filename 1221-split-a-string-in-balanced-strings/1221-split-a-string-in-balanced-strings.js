/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let result = 0;
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      balance++;
    } else if (s[i] ==='L') {
      balance--;
    }
 
    if (balance === 0) {
      result++;
    }  
  }
  
  return result;
};