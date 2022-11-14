/**
 * 思路：
 * （1）首先创建了一个新的空对象
 * （2）设置原型，将对象的原型设置为函数的 prototype 对象。
 * （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
 * （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
 */
/**
 * 实现
 */
function _new() {
  let constructor = Array.prototype.shift.call(arguments); // 获取构造函数
  // 构造函数的类型必须是 function
  if (typeof constructor !== "function") {
    console.error("type error");
    return;
  }
  // 1&&2. 新建一个空对象，对象的原型为构造函数的 prototype 对象
  let newObject = Object.create(constructor.prototype);
  // 3. 将 this 指向新建对象，并执行构造函数函数
  let result = constructor.apply(newObject, arguments);
  // 判断返回对象
  let flag =
    result && (typeof result === "object" || typeof result === "function");
  // 4. 判断返回结果
  return flag ? result : newObject;
}

/**
 * 测试
 */
function Person1(firtName, lastName) {
  this.firtName = firtName;
  this.lastName = lastName;
  // 当构造函数返回值是一个obj类型时，new创建的就是这个返回的obj
  return {
    fullName: `${this.firtName} ${this.lastName}`,
  };
}
function Person2(firtName, lastName) {
  this.firtName = firtName;
  this.lastName = lastName;
  // 当构造函数返回值是一个基本数据类时，new创建的是继承自构造函数的子类（经过了apply绑定和执行）
  return "基本数据类型";
}
const tb = new Person1("Chen", "Tianbao");
console.log(tb);
const tb2 = _new(Person1, "Chen", "Tianbao");
console.log(tb2);
const tb3 = new Person2("Chen", "Tianbao");
console.log(tb);
const tb4 = _new(Person2, "Chen", "Tianbao");
console.log(tb2);
