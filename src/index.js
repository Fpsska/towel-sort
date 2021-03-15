module.exports = function towelSort(matrix) {

  if (!matrix || matrix.length == 0) return [];

  let array = [];

  for (let i = 0; i < matrix.length; i++) {

    if (i == 0 || i % 2 === 0) {

      matrix[i].sort((a, b) => a - b);

    } else matrix[i].sort((a, b) => b - a);

    matrix[i].forEach((value) => array.push(value));
  }

  return array;

};
