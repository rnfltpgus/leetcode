/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const absCondition1 = Math.abs(arr[i]-arr[j]) <= a;
        const absCondition2 = Math.abs(arr[j]-arr[k]) <= b;
        const absCondition3 = Math.abs(arr[i]-arr[k]) <= c;
        
        if (absCondition1 && absCondition2 && absCondition3){
          result.push([arr[i],arr[j],arr[k]]);      
        } 
      }
    }
  }
  
  return result.length; 
};
