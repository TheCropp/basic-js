const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var number = 0;
  var obj = '^^'
  var i = matrix.length;
    while (i--) {
      var j = matrix[i].length;
        while (j--) {
        if (matrix[i][j] === obj) {
            number++;
        }
      }
    }
    return number;
};
