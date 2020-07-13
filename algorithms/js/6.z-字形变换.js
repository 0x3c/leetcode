/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 *
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (44.22%)
 * Likes:    363
 * Dislikes: 0
 * Total Accepted:    49.1K
 * Total Submissions: 110.9K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 *
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 *
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 *
 *
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 *
 * 请你实现这个将字符串进行指定行数变换的函数：
 *
 * string convert(string s, int numRows);
 *
 * 示例 1:
 *
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 *
 *
 * 示例 2:
 *
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 *
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 *
 */
/**
 * @description rows 大于2时, rows*rows+2 为一个周期, 分为两段分别处理
 *              index(从1开始) mod rows > rows 和 index(从1开始) mod rows <= rows
 * @param {string} s
 * @param {number} rows
 * @return {string}
 */
var convert = function(s, rows) {
  if (rows === 1 || s.length === 1) return s;
  const fx = (x, n) => (x > n - 1 ? n - ((x + 1) % n) - 1 : x);
  let arr = Array.from({ length: rows }, () => []);
  for (let i = 0; i < s.length; i++) {
    arr[fx(i % (rows * 2 - 2), rows)].push(s[i]);
  }
  let results = "";
  arr.forEach(ar => (results += ar.join("")));
  return results;
};
