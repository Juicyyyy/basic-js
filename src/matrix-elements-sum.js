const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  sum = 0;
  sum2 = 0;
  sum3 = 0;

  if((matrix[0].length === 1)&&(matrix[1] === undefined)){
    return Number(matrix[0]);
  }

  for(i=0; i<matrix[0].length; i++){
    sum += matrix[0][i] + matrix[1][i] + matrix[2][i];

    if(matrix[0][i] === 0){
      sum2 += matrix[1][i];
    }
    if(matrix[1][i] === 0){
      sum3 += matrix[2][i];
    }
  }
  sum = sum - sum2 - sum3;
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
