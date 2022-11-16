function jsonp({ url, params, callbackName }) {
  //定义一个函数拼接url字符串：url、params参数及callBack
  function getUrl() {
    // 遍历params对象中的键值对，拼接到callbackName前面
    let dataSrc = "";
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        dataSrc += `${key}=${params[key]}&`;
      }
    }
    // 拼接callback
    dataSrc += `callBack=${callbackName}`;
    // 拼接url
    return `${url}?${dataSrc}`;
  }

  return new Promise((resolve, reject) => {
    // 首先创建一个script标签
    var scriptEle = document.createElement("script");
    // 修改script标签的src属性
    scriptEle.src = getUrl;
    // 把节点放到文档中
    document.body.appendChild(scriptEle);
    // 处理回调函数
    window[callbackName] = (data) => {
      resolve(data);
      // 删除script标签
      document.removeChild(scriptEle);
    };
  });
}
