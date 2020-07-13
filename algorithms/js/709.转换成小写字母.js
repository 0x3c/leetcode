/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 *
 * https://leetcode-cn.com/problems/to-lower-case/description/
 *
 * algorithms
 * Easy (74.26%)
 * Likes:    96
 * Dislikes: 0
 * Total Accepted:    28.8K
 * Total Submissions: 38.6K
 * Testcase Example:  '"Hello"'
 *
 * 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: "Hello"
 * 输出: "hello"
 *
 * 示例 2：
 *
 *
 * 输入: "here"
 * 输出: "here"
 *
 * 示例 3：
 *
 *
 * 输入: "LOVELY"
 * 输出: "lovely"
 *
 *
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  var res = "";
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    res += String.fromCharCode(
      charCode <= 90 && charCode >= 65 ? charCode + 32 : charCode
    );
  }
  return res;
};
// @lc code=end
