// bind的传参和call类似，传入多个参数，但它支持柯里化式传参
Function.prototype.myBind = function () {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let outContext = arguments[0];
  let outArgs = [...arguments].slice(1),
    fn = this;
  // 返回一个函数
  return function () {
    // 判断bind返回的该函数是否作为构造函数被使用
    const isNew = typeof new.target !== "undefined";
    const inArgs = Array.from(arguments);
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      // this为构造函数的实例对象
      isNew ? this : outContext,
      // 函数柯里化传参时，将参数拼接成一个数组
      outArgs.concat(inArgs)
    );
  };
};

/**
 * 测试：bind修改的this指向是否可以通过再次bind修改？是否可以通过new修改？
 */
