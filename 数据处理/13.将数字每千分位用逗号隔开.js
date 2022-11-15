/**
 * 1. 使用 number.toLocaleString()
 */
// 默认情况：将整数部分每千分位用逗号隔开，最多保留3位小数
number.toLocaleString();
// 通过 option 配置 number 长度
number.toLocaleString(undefined, {
  useGrouping: true / false, // 是否使用分隔符，默认为true
  minimumIntegerDigits: n, // 整数部分最小长度，不够的话从前面补0
  minimumFractionDigits: n, // 小数部分最小长度
  maximumFractionDigits: n, // 小数部分最小长度
  minimumSignificantDigits: n, // 有效数字最小长度
  maximumSignificantDigits: n, // 有效数字最大长度
});

/**
 *  2. 手动实现
 */
let format = (n) => {
  let num = n.toString(); // 转成字符串
  let decimals = "";
  let len;
  // 判断是否有小数
  if (num.indexOf(".") > -1) {
    decimals = num.split(".")[1];
    len = num.split(".")[0].length;
  } else {
    len = num.length;
  }
  // 数字长度小于3，不用处理
  if (len <= 3) {
    return num;
  } else {
    let temp = "";
    // % 取余
    let remainder = len % 3;
    decimals ? (temp = "." + decimals) : temp;
    if (remainder > 0) {
      // 不是3的整数倍
      return (
        num.slice(0, remainder) +
        "," +
        num.slice(remainder, len).match(/\d{3}/g).join(",") +
        temp
      );
    } else {
      // 是3的整数倍
      return num.slice(0, len).match(/\d{3}/g).join(",") + temp;
    }
  }
};
format(12323.323);
