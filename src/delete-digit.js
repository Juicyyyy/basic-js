const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  res = [];
  n1 = "" + n;
  len = n1.length;
  for(i=0; i<len; i++){
    str = n1.slice(0, i) + n1.slice(i+1);
    res.push(str);
  }
  res.sort((a, b) => a - b);
  return Number(res[res.length - 1]);
}

module.exports = {
  deleteDigit
};
