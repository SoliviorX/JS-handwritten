/**
 * 核心思路
1. 接收一个 Promise 实例的数组
2. 这个方法返回一个新的 promise 对象
3. 遍历传入的参数，用Promise.resolve()将参数"包一层"，使其变成一个promise对象
4. 参数所有回调成功才是成功，返回值数组与参数顺序一致
5. 参数数组其中一个失败，则触发失败状态，第一个触发失败的 Promise 错误信息作为 Promise.all 的错误信息。
 */
MyPromise.all = function (promises) {
  // 2. 这个方法返回一个新的 promise 对象
  return new MyPromise(function (resolve, reject) {
    // 1. 接收一个 Promise 实例的数组
    if (!Array.isArray(promises)) {
      throw new TypeError(`argument must be a array`);
    }
    var resolvedCounter = 0;
    var promiseNum = promises.length;
    var resolvedResult = [];
    for (let i = 0; i < promiseNum; i++) {
      // 3. 遍历传入的参数，用Promise.resolve()将参数"包一层"，使其变成一个promise对象
      Promise.resolve(promises[i]).then(
        (value) => {
          resolvedCounter++;
          resolvedResult[i] = value;
          if (resolvedCounter == promiseNum) {
            return resolve(resolvedResult);
          }
        },
        (error) => {
          return reject(error);
        }
      );
    }
  });
};
