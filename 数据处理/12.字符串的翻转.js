/**
 * 1. 可以将字符串的翻转方法定义在原型上（实际上字符串原型不存在翻转方法）
 * 2. 先将字符串分割成数组，然后使用数组的reverse()方法翻转数组，最后将数组拼接成字符串
 */
String.prototype._reverse = function (a) {
  return a.split("").reverse().join("");
};
var strObj = new String();
var res = strObj._reverse("hello");
console.log(res);
