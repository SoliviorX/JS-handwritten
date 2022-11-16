/**
 * 思路：让新实例的原型等于父类的实例
 */
// 父构造函数
function SupperFunction(flag1) {
  this.flag1 = flag1;
}
// 父实例
var superInstance = new SupperFunction(true);

// 子构造函数
function SubFunction(flag2) {
  this.flag2 = flag2;
}
// 子继承父
SubFunction.prototype = superInstance;

// 子构造函数的实例
var subInstance = new SubFunction(false);
// 子实例调用自己和父的属性
subInstance.flag1; // true
subInstance.flag2; // false
