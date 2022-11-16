/**
 * 问题描述：有30个小孩儿，编号从1-30，围成一圈依此报数 1、2、3；数到 3 的小孩儿退出这个圈，然后下一个小孩重新报数 1、2、3；问最后剩下的那个小孩儿的编号是多少?
 * @param {小孩数量} num
 * @param {所剔除的报数} count
 * @returns
 */
function childNum(num, count) {
  let allplayer = [];
  // 将所有小孩按编号放入数组中
  for (let i = 0; i < num; i++) {
    allplayer[i] = i + 1;
  }

  let exitCount = 0; // 离开人数
  let counter = 0; // 记录报数
  let curIndex = 0; // 当前下标

  // 当只剩下一个小孩时退出循环：exitCount = 28 时进入循环，结束循环时exitCount=29，此时正好剩下一个人，退出循环
  while (exitCount < num - 1) {
    // 跳过值为0的小孩，值不为0的小孩才进行报数
    if (allplayer[curIndex] !== 0) counter++;

    // 当报数为3时，将该位置的小孩的值设为0；并重置counter为0，下次循环才会重新从1开始报数；
    if (counter == count) {
      allplayer[curIndex] = 0;
      counter = 0;
      exitCount++;
    }
    curIndex++;

    // 所有小孩都报过数了，进入下一轮循环
    if (curIndex == num) {
      curIndex = 0;
    }
  }
  // 挑选出值不为0的小孩的编号
  for (i = 0; i < num; i++) {
    if (allplayer[i] !== 0) {
      return allplayer[i];
    }
  }
}
console.log(childNum(30, 4));
