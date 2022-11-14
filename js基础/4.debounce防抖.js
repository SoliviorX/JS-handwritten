/**
 * 防抖：指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。
 * 思路：利用闭包，当存在timer时清空timer，并重新设置timer
 */
/**
 * 实现
 */
function debounce(fn, wait) {
  let timer = null;
  // 创建闭包
  return function () {
    let context = this,
      args = arguments;
    // 如果此时存在定时器的话，则取消之前的定时器重新记时
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 设置定时器，使事件间隔指定事件后执行
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  };
}

/**
 * 测试
 */
function fn1(text) {
  console.log(text);
}
let debouncedFn1 = debounce(fn1, 2000);
// 2s内连续执行了三次fn1，前两次的定时器会被清除，只会执行最后一次的定时器，在2s后打印出3
debouncedFn1(1);
debouncedFn1(2);
debouncedFn1(3);
