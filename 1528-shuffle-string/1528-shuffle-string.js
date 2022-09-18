/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  if (indices.length === 0) {
    return;
  }
  
  let sorted = ''
  
  for (i = 0; i < indices.length; i++) {
    for (j = 0; j < indices.length; j++) {
      if(indices[j] === i) {
        sorted += s[j];
      }
    }
  }
  
  return sorted;    
};