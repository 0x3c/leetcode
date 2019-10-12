/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 *
 * https://leetcode-cn.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Easy (31.34%)
 * Likes:    72
 * Dislikes: 0
 * Total Accepted:    9K
 * Total Submissions: 28.5K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c。
 *
 * 示例1:
 *
 *
 * 输入: 5
 * 输出: True
 * 解释: 1 * 1 + 2 * 2 = 5
 *
 *
 *
 *
 * 示例2:
 *
 *
 * 输入: 3
 * 输出: False
 *
 *
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  var a = 0,
    sqr = 0;
  while ((sqr = a ** 2) <= c) {
    if (Number.isInteger(Math.sqrt(c - sqr))) return true;
    a++;
  }
  return false;
};
// @lc code=end
