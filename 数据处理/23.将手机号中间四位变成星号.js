let tel = 18877776666;
tel = "" + tel;
/**
 *  1. split + splice + join
 */
var ary = tel.split("");
ary.splice(3, 4, "****");
var tel1 = ary.join("");
console.log(tel1);

/**
 *  2. 字符串拼接
 */
var tel1 = tel.substr(0, 3) + "****" + tel.substr(7);
var tel1 = tel.substring(0, 3) + "****" + tel.substring(7);
console.log(tel1);

/**
 * 3. 字符串替换
 */
var tel1 = tel.replace(tel.substr(3, 4), "****");
var tel1 = tel.replace(tel.substring(3, 7), "****");
console.log(tel1);

/**
 * 4. 正则匹配替换
 */
var reg = /(\d{3})\d{4}(\d{4})/;
var tel1 = tel.replace(reg, "$1****$2");
console.log(tel1);
