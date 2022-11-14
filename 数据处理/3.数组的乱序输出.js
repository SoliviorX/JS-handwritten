var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < arr.length; i++) {
  /**
   * 生成一个随机索引值：
   * Math.random() 取值区间为 [0,1)
   * Math.round() 是浮点数四舍五入后取整
   * 所以randomIndex在遍历的时候，依次的取值空间为：[0,9]、[1,9]、[2,9]...
   */
  const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
  // 交换两个元素的位置
  [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
}
console.log(arr);

/**
 * 方式二：倒序遍历
 */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let length = arr.length,
  randomIndex,
  temp;
while (length) {
  randomIndex = Math.floor(Math.random() * length--);
  [arr[length], arr[randomIndex]] = [arr[randomIndex], arr[length]];
  // 或采用临时变量：
  // temp = arr[length];
  // arr[length] = arr[randomIndex];
  // arr[randomIndex] = temp;
}
console.log(arr);
