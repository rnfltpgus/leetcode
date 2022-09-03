/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  if (sentences.length === 0) {
    return 0;      
  }
  
  let largeNumber = sentences[0].split(" ").length;

  for (let i = 1; i < sentences.length; i++) {
    let currentNumber = sentences[i].split(" ").length;
    largeNumber = Math.max(currentNumber, largeNumber);
  }

  return largeNumber;
};