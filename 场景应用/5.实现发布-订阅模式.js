/**
 * 发布订阅中心
 */
class PubSub {
  messages = {};
  listeners = {};
  // 发布消息（type为消息类型），此时还没有通知订阅者
  publish(type, content) {
    const existContent = this.messages[type];
    if (!existContent) {
      this.messages[type] = [];
    }
    this.messages[type].push(content);
  }
  // 更新、删除消息
  delMessage(type, content, newContent) {
    if (!this.messages[type] || !content) return;
    const index = this.messages[type].findIndex(
      (message) => message === content
    );
    if (index === -1) {
      return new Error("并未发布该消息");
    }
    this.messages[type].splice(index, 1, newContent);
    if (this.messages[type].length === 0) {
      delete this.messages[type];
    }
  }

  // 订阅消息
  subscribe(type, cb) {
    const existListener = this.listeners[type];
    if (!existListener) {
      this.listeners[type] = [];
    }
    this.listeners[type].push(cb);
  }
  // 退订
  unsubscribe(type, cb) {
    if (!this.listeners[type]) {
      return new Error("无此类消息");
    }
    if (!cb) {
      delete this.listeners[type];
    } else {
      const index = this.listeners[type].findIndex((el) => el === cb);
      if (index === -1) {
        return new Error("未该绑定事件");
      }
      this.listeners[type].splice(index, 1);
      if (this.listeners[type].length === 0) {
        delete this.listeners[type];
      }
    }
  }

  // 发布不同类型的消息给订阅者
  notify(type) {
    const messages = this.messages[type];
    const subscribers = this.listeners[type] || [];
    subscribers.forEach((cb) => cb(messages));
  }
}
/**
 * 发布者
 */
class Publisher {
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }
  publish(type, content) {
    this.context.publish(type, content);
  }
}
/**
 * 订阅者
 */
class Subscriber {
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }
  subscribe(type, cb) {
    this.context.subscribe(type, cb);
  }
}
/**
 * 使用
 */
// 定义不同的消息类型
const TYPE_A = "music";
const TYPE_B = "movie";
const TYPE_C = "novel";
// 创建发布订阅中心
const pubsub = new PubSub();
// 创建发布者，并发布不同的消息
const publisherA = new Publisher("publisherA", pubsub);
publisherA.publish(TYPE_A, "we are young");
publisherA.publish(TYPE_B, "the silicon valley");
const publisherB = new Publisher("publisherB", pubsub);
publisherB.publish(TYPE_A, "stronger");
const publisherC = new Publisher("publisherC", pubsub);
publisherC.publish(TYPE_C, "a brief history of time");
// 创建订阅者，订阅不同类型的消息
const subscriberA = new Subscriber("subscriberA", pubsub);
subscriberA.subscribe(TYPE_A, (res) => {
  console.log("subscriberA received", res);
});
const subscriberB = new Subscriber("subscriberB", pubsub);
subscriberB.subscribe(TYPE_C, (res) => {
  console.log("subscriberB received", res);
});
const subscriberC = new Subscriber("subscriberC", pubsub);
subscriberC.subscribe(TYPE_B, (res) => {
  console.log("subscriberC received", res);
});
// 派发不同的消息给订阅者
pubsub.notify(TYPE_A);
pubsub.notify(TYPE_B);
pubsub.notify(TYPE_C);
