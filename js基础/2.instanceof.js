// 思路：判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置
/**
 * 实现
 */
function myInstanceof(left, right) {
  // left 为实例对象，right为构造函数
  // 左侧实例 left 必须是一个object类型，且不为nul
  if (typeof left !== "object" || left === null) return false;
  let proto = Object.getPrototypeOf(left); // 获取实例对象的原型
  let prototype = right.prototype; // 获取构造函数的 prototype 对象

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

/**
 * 测试
 */
let left1 = new String("zifuchuan");
let left2 = "sdhakdsjh";
let right1 = Number;
let right2 = String;
console.log(myInstanceof(left1, right1));
console.log(myInstanceof(left1, right2));
console.log(myInstanceof(left2, right2));
