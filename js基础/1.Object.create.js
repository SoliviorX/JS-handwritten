// 思路：将传入的对象作为原型
/**
 * 实现
 */
function create(obj) {
  function fn() {}
  fn.prototype = obj;
  return new fn();
}
/**
 * 测试
 */
let obj = {
  name: "parent",
};
let a = create(obj);
console.log(Object.getPrototypeOf(a));
