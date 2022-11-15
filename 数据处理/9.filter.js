/**
 * 1. filter 定义在Array.prototype上
 * 2. filter 的参数必须是一个函数
 * 3. filter 本质是数组遍历
 * 4. 遍历过程中，将符合条件的元素 push 到新数组中
 */
Array.prototype._filter = function (fn) {
  if (typeof fn !== "function") {
    throw Error("参数必须是一个函数");
  }
  const res = [];
  for (let i = 0, len = this.length; i < len; i++) {
    fn(this[i]) && res.push(this[i]);
  }
  return res;
};
