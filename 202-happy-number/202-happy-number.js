/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n.length === 0) {
    return;   
  }
  
  const store = {};

  while(!store[n] && n!=1){
    store[n] = n; 
    n.toString().split("").forEach(function(v,i){
      if(i == 0) n = 0;
        n += v*v;
      })
    n = parseInt(n);
  }

  return n == 1;
};
