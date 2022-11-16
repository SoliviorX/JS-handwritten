class EventCenter {
  // 1. 定义事件容器，用来存储事件数组
  handlers = {};

  // 2. 订阅事件：添加事件方法，参数为：事件名、事件的回调函数
  on(type, handler) {
    // 创建新数组容器
    if (!this.handlers[type]) {
      this.handlers[type] = [];
    }
    // 存入事件的回调函数（同一个事件可能对应多个回调函数）
    this.handlers[type].push(handler);
  }

  // 3. 只订阅一次
  once(type, callback) {
    const actual = (...args) => {
      callback(...args);
      this.off(type, actual);
    };
    this.on(type, actual);
  }

  // 3. 发布消息：触发事件，参数为：事件名、消息
  emit(type, params) {
    // 若没有注册该事件则抛出错误
    if (!this.handlers[type]) {
      return new Error("该事件未注册");
    }
    // 触发事件对应的所有回调函数
    this.handlers[type].forEach((handler) => {
      handler(...params);
    });
  }

  // 4. 取消订阅：事件移除，参数为：事件名、要删除的回调函数，若无第二个参数则删除该事件的订阅和发布
  off(type, handler) {
    if (!this.handlers[type]) {
      return new Error("事件无效");
    }
    if (!handler) {
      // 移除事件
      delete this.handlers[type];
    } else {
      const index = this.handlers[type].findIndex((el) => el === handler);
      if (index === -1) {
        return new Error("无该绑定事件");
      }
      // 移除事件
      this.handlers[type].splice(index, 1);
      // 如果 handlers[type] 中没有事件了，则删除handlers[type]
      if (this.handlers[type].length === 0) {
        delete this.handlers[type];
      }
    }
  }
}
// 创建事件中心
const bus = new EventCenter();
// 订阅
bus.on("click", (...params) => {
  console.log("绑定click事件", params);
});
// 发布
bus.emit("click", [1, 2]);
// 退订
bus.off("click");
