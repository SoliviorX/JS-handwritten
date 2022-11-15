function findAllInputElement(element) {
  const rec = function (element, arr) {
    if (element.nodeName.toUpperCase() === "INPUT") {
      arr.push(element);
    }
    let children = element.childNodes;
    // 遍历 + 递归
    children.forEach((element) => {
      rec(element, arr);
    });
    return arr;
  };
  return rec(element, []);
}
