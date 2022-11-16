function findMostWord(article) {
  if (!article) return;
  article = article.trim().toLowerCase();
  // 将所有单词放入数组中
  let wordList = article.match(/[a-z]+/g),
    visited = [],
    maxNum = 0,
    maxWord = "";
  // 将article拼接成用空格隔开的形式，方便后续通过match判断单词出现次数
  article = " " + wordList.join("  ") + " ";
  console.log(article);
  // 遍历判断单词出现次数
  wordList.forEach(function (item) {
    // 访问过的单词不再重复判断
    if (visited.indexOf(item) < 0) {
      visited.push(item);
      let word = new RegExp(" " + item + " ", "g"),
        num = article.match(word).length;
      if (num > maxNum) {
        maxNum = num;
        maxWord = item;
      }
    }
  });
  return maxWord + "  " + maxNum;
}
console.log(findMostWord("hello hello haha haha, he he he")); // he 3
