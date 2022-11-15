/**
 * 1. map 定义在Array.prototype上
 * 2. map 的参数必须是一个函数
 * 3. map 本质是数组遍历
 * 4. 遍历过程中修改数组元素，返回新数组
 */
Array.prototype._map = function (fn) {
  if (typeof fn !== "function") {
    throw Error("参数必须是一个函数");
  }
  const res = [];
  for (let i = 0, len = this.length; i < len; i++) {
    res.push(fn(this[i]));
  }
  return res;
};
