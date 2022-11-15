/**
 * 1. push定义在Array.prototype上
 * 2. push可以同时传入多个参数
 * 3. push结束返回数组的长度
 */
let arr = [];
Array.prototype.push = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
};
