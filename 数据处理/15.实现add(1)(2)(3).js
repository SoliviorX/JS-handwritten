/**
 *  1）粗暴版：仅使用函数柯里化
 */
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add(1)(2)(3)); // 6

/**
 * 2) 形参个数固定：函数柯里化 + 递归
 */
var add = function (m) {
  // 以每次只传一个参数为例
  var temp = function (n) {
    return add(m + n);
  };
  temp.toString = function () {
    return m;
  };
  return temp;
};
console.log(add(3)(4)(5).valueOf().toString()); // 12
// + 操作符会进行隐式类型转换，对象转换成原始数据类型的规则：先调用valueOf，再调用toString
console.log(add(3)(6)(9)(25) + add(3)(4)(5)); // 55

/**
 * 3) 形参个数不固定：闭包 + 函数柯里化 + 递归
 */
function add(...args) {
  //求和
  return args.reduce((a, b) => a + b);
}
function currying(fn) {
  let args = [];
  return function temp(...newArgs) {
    if (newArgs.length) {
      // 将所有参数拼接成一个数组
      args = [...args, ...newArgs];
      return temp;
    } else {
      let val = fn.apply(this, args);
      args = []; //保证再次调用时清空
      return val;
    }
  };
}
let addCurry = currying(add);
console.log(addCurry(1)(2)(3)(4, 5)()); //15
console.log(addCurry(1)(2)(3, 4, 5)()); //15
console.log(addCurry(1)(2, 3, 4, 5)()); //15
