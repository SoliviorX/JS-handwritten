// apply 和 call 唯一的区别就是apply传入的第二个参数是一个数组。
Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let result = null;
  context = context || window;
  context.fn = this;
  if (arguments[1]) {
    // apply传入的参数是一个数组
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};
