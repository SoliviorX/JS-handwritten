/**
 * Promise特点
    1，创建时需要传递一个函数，否则会报错
    2，会给传入的函数设置两个回调函数
    3，刚创建的Promise对象状态是pending
    4，状态一旦发生改变就不可再次改变
    5，可以通过then来监听状态的改变
      5.1，如果创建监听时，状态已经改变，立即执行监听回调
      5.2，如果创建监听时，状态未改变，会等状态改变后执行
      5.3，同一promise对象可以添加多个then监听，状态改变时按照注册顺序依次执行
 */
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(handle) {
    // 3，刚创建的Promise对象状态是pending
    this.status = PENDING;
    // 成功回调的值
    this.value = undefined;
    // 失败回调的值
    this.reason = undefined;
    // 注册的成功回调
    this.onResolvedCallbacks = [];
    // 注册的失败回调
    this.onRejectedCallbacks = [];
    // 1，创建时需要传递一个函数，否则会报错
    if (!this._isFunction(handle)) {
      throw new Error("请传入一个函数");
    }
    // 2，会给传入的函数设置两个回调函数
    handle(this._resolve.bind(this), this._reject.bind(this));
  }
  _resolve(value) {
    // 4，状态一旦发生改变就不可再次改变
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      // 5.3，同一promise对象可以添加多个then监听，状态改变时按照注册顺序依次执行
      this.onResolvedCallbacks.forEach((fn) => fn(this.value));
    }
  }
  _reject(reason) {
    // 4，状态一旦发生改变就不可再次改变
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      // 5.3，同一promise对象可以添加多个then监听，状态改变时按照注册顺序依次执行
      this.onRejectedCallbacks.forEach((fn) => fn(this.reason));
    }
  }
  then(onResolved, onRejected) {
    // 判断有没有传入成功的回调
    if (this._isFunction(onResolved)) {
      // 5.1，如果创建监听时，状态已经改变，立即执行监听回调
      if (this.status === FULFILLED) {
        onResolved(this.value);
      }
    }
    // 判断有没有传入失败的回调
    if (this._isFunction(onRejected)) {
      // 5.1，如果创建监听时，状态已经改变，立即执行监听回调
      if (this.status === REJECTED) {
        onRejected(this.reason);
      }
    }
    // 5.2，如果创建监听时，状态未改变，会等状态改变后执行
    if (this.status === PENDING) {
      if (this._isFunction(onResolved)) {
        this.onResolvedCallbacks.push(onResolved);
      }
      if (this._isFunction(onRejected)) {
        this.onRejectedCallbacks.push(onRejected);
      }
    }
  }
  _isFunction(fn) {
    return typeof fn === "function";
  }
}
