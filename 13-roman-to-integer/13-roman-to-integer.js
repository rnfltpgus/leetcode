/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const nums = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  
  let acc = 0;
  
  if (s.length === 0) {
    return;  
  }
  
  for (let i = 0; i < s.length; i++) {
    if (nums[s[i]] < nums[s[i + 1]]) {
      acc -= nums[s[i]];
    } else {
      acc += nums[s[i]];
    }
  }
  
  return acc;
};