const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function printMatrix(arr) {
  let m = arr.length,
    n = arr[0].length;
  let res = [];
  /**
   * 从第1行、第一列开始打印：
   * i=0,j=0 ——> i=1,j=-1(退出循环)
   * i=0,j=1 ——> i=1,j=0 ——> i=2,j=-1(退出循环)
   * i=0,j=2 ——> i=1,j=1 ——> i=2,j=0 ——> i=3,j=-1(退出循环)
   * i=0,j=3(退出循环，k 必须 < n)
   */
  for (let k = 0; k < n; k++) {
    for (let i = 0, j = k; i < m && j >= 0; i++, j--) {
      res.push(arr[i][j]);
    }
  }
  /**
   * 从第二行、最后一列开始打印：
   * i=1,j=2 ——> i=2,j=1 ——> i=3,j=0(退出循环)
   * i=2,j=2 ——> i=3,j=1(退出循环)
   * i=3,j=2(退出循环，k必须 < m)
   */
  for (let k = 1; k < m; k++) {
    for (let i = k, j = n - 1; i < m && j >= 0; i++, j--) {
      res.push(arr[i][j]);
    }
  }
  return res;
}
console.log(printMatrix(arr)); // [1, 2, 4, 3, 5, 7, 6, 8, 9];
