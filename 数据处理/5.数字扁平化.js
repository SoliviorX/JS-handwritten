let arr = [1, [2, [3, 4]]];
/**
 * 1. toString + split
 */
function flatten(arr) {
  return arr.toString().split(",");
}

/**
 * 2. 扩展运算符 + 循环 + some（只要有 1 个元素通过了被提供的函数测试，就返回true）
 */
function flatten(arr) {
  // 通过遍历将所有层级都展开
  while (arr.some((item) => Array.isArray(item))) {
    // 只能展开一层
    arr = [].concat(...arr);
  }
  return arr;
}

/**
 *  3. 遍历 + 递归实现
 */
function flatten(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // 递归
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

/**
 * 4. reduce 函数迭代（本质还是遍历+递归）
 */
function flatten(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? flatten(next) : next);
  }, []);
}

/**
 * 5. ES6 中的 flat：arr.flat(depth)
 * depth为数组的展开深度，默认为1；
 * 如果层数不确定，参数可以传进 Infinity，代表不论多少层都要展开（即展开为一维数组）。
 */
let arr = [1, [2, [3, 4]]];
function flatten(arr) {
  return arr.flat(Infinity);
}
console.log(flatten(arr));

/**
 * 6. 正则和 JSON 方法
 */
function flatten(arr) {
  let str = JSON.stringify(arr);
  // 将 '['、']' 全部删掉
  str = str.replace(/(\[|\])/g, "");
  // 在前后添加括号
  str = "[" + str + "]";
  return JSON.parse(str);
}
