/**
 * 1. 无序二维数组查找目标值
 */
const disOrder2DArr = [
  ["一月", 1],
  ["二月", 2],
  ["三月", 3],
];
var findElementIn2DArray = function (matrix, target) {
  if (matrix == null || matrix.length == 0) {
    return false;
  }
  let row = 0;
  let columnEnd = matrix[0].length - 1; // 从列的末尾往前查找
  let column = columnEnd;
  while (row < matrix.length) {
    if (matrix[row][column] === target) {
      return true;
    } else if (matrix[row][column] !== target) {
      column--;
      if (column < 0) {
        column = columnEnd;
        row++;
      }
    }
  }
  return false;
};
console.log(findElementIn2DArray(disOrder2DArr, "四月"));

/**
 * 2. 有序二维数组查找目标值
 */
const order2DArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var findNumberIn2DArray = function (matrix, target) {
  if (matrix == null || matrix.length == 0) {
    return false;
  }
  let row = 0;
  let column = matrix[0].length - 1;
  while (row < matrix.length && column >= 0) {
    if (matrix[row][column] == target) {
      return true;
      // 因为是有序的，所以可以通过比较大小来进入下一次循环
    } else if (matrix[row][column] > target) {
      column--;
    } else {
      row++;
    }
  }
  return false;
};
console.log(findNumberIn2DArray(order2DArr, 10));
