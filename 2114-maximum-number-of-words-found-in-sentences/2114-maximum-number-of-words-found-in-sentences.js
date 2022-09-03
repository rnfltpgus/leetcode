/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  let largeNumber = sentences[0].split(" ").length;

  for (let i = 1; i < sentences.length; i++) {
    let currentNumber = sentences[i].split(" ").length;
    largeNumber = Math.max(currentNumber, largeNumber);
  }

  return largeNumber;
};