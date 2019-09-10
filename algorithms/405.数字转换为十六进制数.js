/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 *
 * https://leetcode-cn.com/problems/convert-a-number-to-hexadecimal/description/
 *
 * algorithms
 * Easy (47.02%)
 * Likes:    35
 * Dislikes: 0
 * Total Accepted:    5K
 * Total Submissions: 10.5K
 * Testcase Example:  '26'
 *
 * 给定一个整数，编写一个算法将这个数转换为十六进制数。对于负整数，我们通常使用 补码运算 方法。
 *
 * 注意:
 *
 *
 * 十六进制中所有字母(a-f)都必须是小写。
 *
 * 十六进制字符串中不能包含多余的前导零。如果要转化的数为0，那么以单个字符'0'来表示；对于其他情况，十六进制字符串中的第一个字符将不会是0字符。
 * 给定的数确保在32位有符号整数范围内。
 * 不能使用任何由库提供的将数字直接转换或格式化为十六进制的方法。
 *
 *
 * 示例 1：
 *
 *
 * 输入:
 * 26
 *
 * 输出:
 * "1a"
 *
 *
 * 示例 2：
 *
 *
 * 输入:
 * -1
 *
 * 输出:
 * "ffffffff"
 *
 *
 */

/**
 * 由低位到高位算出对应的16进制
 * 无符号右移
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (!num) return "0";
  let res = "";
  const map = n => {
    if (n < 10) return n;
    switch (n) {
      case 10:
        return "a";
      case 11:
        return "b";
      case 12:
        return "c";
      case 13:
        return "d";
      case 14:
        return "e";
      case 15:
        return "f";
    }
  };
  while (num) {
    res = map(num & 0xf) + res;
    num = num >>> 4;
  }
  return res;
};
