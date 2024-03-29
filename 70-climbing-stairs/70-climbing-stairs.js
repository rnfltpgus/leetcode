/**
 * @param {number} n
 * @return {number}
 */
const cache = {
  "0": 1,
  "1": 1,
};

var climbStairs = function(n) {
    if (n < 3) {
      return n;
    }
  
    let arr = [1, 2];
  
    for (let i = 2; i < n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  
    return arr[arr.length - 1];
};