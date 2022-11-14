// 定义一个异步方法
const getData = () =>
  new Promise((resolve) => setTimeout(() => resolve("data"), 1000));
// 1. 创建 async 函数
async function test() {
  const data = await getData();
  console.log("data: ", data);
  const data2 = await getData();
  console.log("data2: ", data2);
  return "success";
}
test().then((res) => console.log(res));

// 2. Babel会把上述的async函数解析成Generator，然后使用 asyncToGenerator 执行 Generator
var test = asyncToGenerator(function* testG() {
  // await被编译成了yield
  const data = yield getData();
  console.log("data: ", data);
  const data2 = yield getData();
  console.log("data2: ", data2);
  return "success";
});
test().then((res) => console.log(res));

/**
 * 【核心方法】asyncToGenerator 接受一个 generator函数，返回一个promise
 */
function asyncToGenerator(generatorFunc) {
  // async函数本质还是返回一个函数
  return function () {
    // 先调用generator函数，生成迭代器
    const gen = generatorFunc.apply(this, arguments);
    // async 函数返回一个 Promise
    return new Promise((resolve, reject) => {
      // arg 参数是用来把 promise.resolve 出来的值交给上一个 yield
      function step(key, arg) {
        let generatorResult;
        // 使用try-catch捕获yield后面的语句的错误
        try {
          generatorResult = gen[key](arg);
        } catch (error) {
          return reject(error);
        }
        const { value, done } = generatorResult;
        if (done) {
          // generator函数有return返回值时，value为该返回值；否则done为true时的value为undefined
          return resolve(value);
        } else {
          // 当 done 为 false 时，递归调用 gen.next(arg)
          return Promise.resolve(value).then(
            // 将上一次next的执行结果传入下一次的next中，所以可以获取到 yield 的值
            (val) => step("next", val),
            (err) => step("throw", err)
          );
        }
      }
      step("next");
    });
  };
}
