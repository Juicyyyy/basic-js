const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  arr = [];
  k = 0;
  for (i = 0; i < str.length; i++) {
    k++;
    if (str[i] !== str[i+1]) {
      arr.push([k, str[i]]);
      k = 0;
    } 
  }
  result = arr.flat().join('').replace(/[1]/g,'');
  return result;
}

module.exports = {
  encodeLine
};
