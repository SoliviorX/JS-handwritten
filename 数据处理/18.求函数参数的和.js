function sum() {
  let sum = 0;
  Array.prototype.forEach.call(arguments, function (item) {
    sum += item * 1;
  });
  return sum;
}

// 使用 ES6 扩展运算符
function sum(...nums) {
  let sum = 0;
  nums.forEach(function (item) {
    sum += item * 1;
  });
  return sum;
}
