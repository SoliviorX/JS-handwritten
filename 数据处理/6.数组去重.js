const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
/**
 * 1. 使用 Set
 */
Array.from(new Set(array));

/**
 * 2. 对象键值 + 遍历
 *  a. 使用对象键值存储数组元素
 *  b. 遍历数组，判断对象中是否已经存在键值；如果不存在，则将键值设为数组元素，将数组元素push到result中
 */
function uniqueArray(array) {
  let map = {};
  let res = [];
  for (var i = 0; i < array.length; i++) {
    if (!map.hasOwnProperty([array[i]])) {
      map[array[i]] = 1;
      res.push(array[i]);
    }
  }
  return res;
}
