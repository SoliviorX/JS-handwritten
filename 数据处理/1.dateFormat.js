/**
 * 实现思路：
1. 获取 date实例对象中的年、月、日
2. 替换掉 format 规则中的 yyyy、MM、dd
 */
const dateFormat = (dateInput, format) => {
  var day = dateInput.getDate();
  // dateInput.getMonth() 的值为 0-11，所以需要 +1
  var month = dateInput.getMonth() + 1;
  var year = dateInput.getFullYear();
  format = format.replace(/yyyy/, year);
  format = format.replace(/MM/, month);
  format = format.replace(/dd/, day);
  console.log(format);
  return format;
};

dateFormat(new Date("2020-12-01"), "yyyy/MM/dd"); // 2020/12/01
dateFormat(new Date("2020-04-01"), "yyyy/MM/dd"); // 2020/04/01
dateFormat(new Date("2020-04-01"), "yyyy年MM月dd日"); // 2020年04月01日
