// 通知者
class Notifier {
  // 观察者列表
  observerList = [];
  // 添加观察者
  addObserver(obj) {
    this.observerList.push(obj);
  }
  // 删除观察者
  removeObserver(obj) {
    // 找到删除对象的索引
    let index = this.observerList.findIndex((o) => {
      return o === obj;
    });
    if (index >= 0) {
      this.observerList.splice(index, 1);
    }
  }
  // 通知每个观察者
  notify() {
    this.observerList.forEach((obj) => {
      obj.update();
    });
  }
}
// 观察者
class Observer {
  constructor(name, notifier) {
    this.name = name;
    // 观察者可主动申请加入被观察者的列表
    if (notifier) {
      notifier.addObserver(this);
    }
  }
  update() {
    console.log(this.name, "收到通知");
  }
}
// 测试
let notifier = new Notifier();
let observer1 = new Observer("张三");
let observer2 = new Observer("李四", notifier);
notifier.addObserver(observer1);
notifier.removeObserver(observer1);
notifier.notify();
