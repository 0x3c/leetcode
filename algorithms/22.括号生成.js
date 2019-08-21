/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (71.47%)
 * Likes:    481
 * Dislikes: 0
 * Total Accepted:    35.9K
 * Total Submissions: 50.2K
 * Testcase Example:  '3'
 *
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 *
 * 例如，给出 n = 3，生成结果为：
 *
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 *
 *
 */
/**
 * @description 递归
 *              前 n 个一定是左括号 >= 右括号
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (!n) return [""];
  const results = [];
  const fn = (left, right, str) => {
    if (!left && !right) return results.push(str);
    if (left) fn(left - 1, right, str + "(");
    if (left < right) fn(left, right - 1, str + ")");
  };
  fn(n, n, "");
  return results;
};
