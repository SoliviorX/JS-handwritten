function getType(value) {
  // 1. 判断数据是 null 的情况
  if (value === null) {
    return value + ""; // 转化成字符串的 'null'
  }
  // 2. 判断数据是object类型且不为null的情况
  if (typeof value === "object") {
    let type = Object.prototype.toString.call(value).split(" ")[1].split("");
    type.pop();
    return type.join("").toLowerCase();
  } else {
    // 3. 判断数据是基本数据类型的情况和函数的情况
    return typeof value;
  }
}
