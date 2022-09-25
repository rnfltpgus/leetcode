/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  const result = new Array(encoded.length).fill(0);
  
  result[0] = first;
  
  for(let i = 0; i < encoded.length; i++){
    result[i + 1] = encoded[i]^result[i];
  }

  return result;
};
