/**
 * @param {字符串} s
 * @param {重复次数} n
 * @returns 新字符串
 */
// 1. new Array() +  arr.join()
function repeat1(s, n) {
  return new Array(n + 1).join(s);
}
// 2. new Array() + arr.fill() + arr.join()
function repeat2(s, n) {
  return new Array(n).fill(s).join("");
}
// 3. 使用递归concat
function repeat3(s, n) {
  return n > 0 ? s.concat(repeat(s, --n)) : "";
}
