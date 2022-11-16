/**
 * 斐波那契数：F(0)=0，F(1)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 2，n ∈ N*）
 */
// 1. 递归
function fibonacci1(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fn(n - 2) + fn(n - 1);
}

// 2. 遍历计算出所有值（后一项等于前两项之和），取n对应的的值
function fibonacci2(n) {
  const arr = [0, 1, 1];
  const arrLen = arr.length;

  if (n < arrLen) {
    return arr[n];
  }

  // 遍历 + 数组元素相加
  for (let i = arrLen; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[arr.length - 1];
}

// 3. 非递归
function fibonacci3(n) {
  const arr = [0, 1, 1];
  const arrLen = arr.length;
  if (n < arrLen) {
    return arr[n];
  }

  let pre1 = 1;
  let pre2 = 1;
  let current = 1;
  // 遍历 + 数字叠加计算
  for (let i = 2; i < n; i++) {
    pre1 = pre2;
    pre2 = current;
    current = pre1 + pre2;
  }

  return current;
}
console.log(fibonacci3(6));
