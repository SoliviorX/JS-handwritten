/**
 * 大数相加：
 * 问题描述：一旦数字超过 Number.MAX_SAFE_INTEGER 数字会被立即转换为科学计数法，并且数字精度相比以前将会有误差，使用 + 是无法达到预期效果
 * 实现：
 * 1. 首先用字符串的方式来保存大数，这样数字在数学表示上就不会发生变化
 * 2. 初始化 res，temp 来保存中间的计算结果；并将两个字符串转化为数组，以便进行每一位的加法运算
 * 3. 将两个数组的对应的位进行相加，两个数相加的结果可能大于10，所以可能要进位；对10进行取余操作，将结果保存在当前位
 * 4. 判断当前位是否大于9，也就是是否会进位，若是则将temp赋值为true，因为在加法运算中，true会自动隐式转化为1，以便于下一次相加
 * 5. 重复上述操作，直至计算结束
 */
function sumBigNumber(a, b) {
  let res = "";
  let temp = 0;
  a = a.split("");
  b = b.split("");

  while (a.length || b.length || temp) {
    temp += ~~a.pop() + ~~b.pop(); // ~~ 是将字符串转化为数字
    res = (temp % 10) + res;
    temp = temp > 9; // true 在进行数学运算时会被转化为1，false 在进行数学运算时会被转化为0
  }
  return res.replace(/^0+/, ""); // 去掉前置0，并返回
}
sumBigNumber(String(number1), String(number2));
