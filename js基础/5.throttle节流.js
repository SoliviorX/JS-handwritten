/**
 * 函数节流：指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。
 * 实现思路：利用闭包，只有当执行事件的时间与起始时间的间隔大于指定时间时，才会执行事件。
 */
function throttle(fn, delay) {
  // 起始时间
  let curTime = Date.now();

  return function () {
    let context = this,
      args = arguments,
      nowTime = Date.now(); // 触发事件时的时间

    // 只有当两次时间间隔超过了指定时间的情况下，才会执行函数。
    if (nowTime - curTime >= delay) {
      curTime = Date.now(); // 重新设置起始时间
      return fn.apply(context, args);
    }
  };
}

/**
 * 测试
 */
function fn1(text) {
  console.log(text);
}
let throttledFn1 = throttle(fn1, 2000);
// 在创建了节流函数后立刻执行了 throttledFn1(1)，间隔小于2s，所以不会执行；在3s后手动执行throttledFn1(2)，间隔大于2s，会打印出2
throttledFn1(1);
setTimeout(() => {
  throttledFn1(2);
}, 3000);
