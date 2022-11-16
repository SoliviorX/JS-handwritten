/**
 * 问题描述：红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次；如何让三个灯不断交替重复亮灯？
 */
/**
 * 1. 用 callback 实现
 */
const task = (timer, light, callback) => {
  setTimeout(() => {
    if (light === "red") {
      red();
    } else if (light === "green") {
      green();
    } else if (light === "yellow") {
      yellow();
    }
    callback();
  }, timer);
};
const step = () => {
  task(3000, "red", () => {
    task(2000, "green", () => {
      // 递归执行 step 实现 循环亮灯
      task(1000, "yellow", step);
    });
  });
};
step();

/**
 * 2. 用 promise 实现
 */
const task = (timer, light) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === "red") {
        red();
      } else if (light === "green") {
        green();
      } else if (light === "yellow") {
        yellow();
      }
      resolve();
    }, timer);
  });
const step = () => {
  task(3000, "red")
    .then(() => task(2000, "green"))
    .then(() => task(2100, "yellow"))
    .then(step);
};
step();

/**
 * 3. 用 async/await 实现
 */
const taskRunner = async () => {
  await task(3000, "red");
  await task(2000, "green");
  await task(2100, "yellow");
  taskRunner();
};
taskRunner();
