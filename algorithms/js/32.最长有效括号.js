/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (27.90%)
 * Likes:    305
 * Dislikes: 0
 * Total Accepted:    17.6K
 * Total Submissions: 62.7K
 * Testcase Example:  '"(()"'
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 *
 * 示例 1:
 *
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 *
 *
 * 示例 2:
 *
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 *
 *
 */
/**
 * @description 双重循环
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const len = s.length;
  let max = 0;
  if (len < 2) return 0;
  if (s === "()") return 2;
  for (let i = 0; i < len - Math.max(max, 1); i++) {
    const queue = [];
    if (s[i] === "(") queue.push(s[i]);
    else continue;
    for (let j = i + 1; j < len; j++) {
      if (s[j] === "(") queue.push(s[j]);
      else if (s[j] === ")" && queue[queue.length - 1] === "(") queue.pop();
      else queue.push(s[j]);
      if (!queue.length) max = Math.max(max, j - i + 1);
    }
  }
  return max;
};
