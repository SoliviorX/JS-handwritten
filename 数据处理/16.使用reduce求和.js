/**
 * 一维数组求和
 */
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr1.reduce((prev, cur) => {
  return prev + cur;
}, 0);

/**
 * 多维数组求和
 */
let arr2 = [1, 2, 3, [[4, 5], 6], 7, 8, 9];
arr2.flat(Infinity).reduce((prev, cur) => {
  return prev + cur;
}, 0);

/**
 * 对象数组求和
 */
let arr3 = [{ a: 9, b: 3, c: 4 }, { a: 1, b: 3 }, { a: 3 }];
arr3.reduce((prev, cur) => {
  return prev + cur["a"];
}, 0);
