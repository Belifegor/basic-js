const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const frequencyMap1 = {};
  const frequencyMap2 = {};

  for (const char of s1) {
    frequencyMap1[char] = (frequencyMap1[char] || 0) + 1;
  }

  for (const char of s2) {
    frequencyMap2[char] = (frequencyMap2[char] || 0) + 1;
  }

  let commonCount = 0;

  for (const char in frequencyMap1) {
    if (frequencyMap2[char]) {
      commonCount += Math.min(frequencyMap1[char], frequencyMap2[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
