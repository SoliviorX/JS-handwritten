Object.myAssign = function (target, ...source) {
  if (target === null || target === undefined) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  // target 如果不是对象，会先将它转为对象
  let ret = Object(target);
  source.forEach(function (obj) {
    if (obj != null) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          // 一维深拷贝，多维浅拷贝
          ret[key] = obj[key];
        }
      }
    }
  });
  return ret;
};
