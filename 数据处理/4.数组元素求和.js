/**
 * 一维数组求和
 */
// 使用reduce
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = arr.reduce((total, i) => (total += i), 0);
console.log(sum);

// 或使用递归
let arr = [1, 2, 3, 4, 5, 6];
function add(arr) {
  if (arr.length == 1) return arr[0];
  return arr[0] + add(arr.slice(1));
}
console.log(add(arr));

/**
 * 多维数组求和：先将多维数组转化为一维数组
 */
let arr = [1, 2, 3, [[4, 5], 6], 7, 8, 9];
let sum = arr
  .toString()
  .split(",")
  .reduce((total, i) => (total += Number(i)), 0);
console.log(sum);

/**
 * 使用一种方法同时实现一维、多维数组求和
 */
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, [[4, 5], 6], 7, 8, 9];
function getSum(arr) {
  let sum = arr.reduce((total, i) => {
    // return (total += i);
    if (typeof i === "number") {
      return (total += i);
    } else {
      // 递归
      return (total += getSum(i));
    }
  }, 0);
  return sum;
}
console.log(getSum(arr1));
console.log(getSum(arr2));
