/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (39.21%)
 * Likes:    973
 * Dislikes: 0
 * Total Accepted:    106.6K
 * Total Submissions: 271.8K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 *
 * 有效字符串需满足：
 *
 *
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 *
 *
 * 注意空字符串可被认为是有效字符串。
 *
 * 示例 1:
 *
 * 输入: "()"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "()[]{}"
 * 输出: true
 *
 *
 * 示例 3:
 *
 * 输入: "(]"
 * 输出: false
 *
 *
 * 示例 4:
 *
 * 输入: "([)]"
 * 输出: false
 *
 *
 * 示例 5:
 *
 * 输入: "{[]}"
 * 输出: true
 *
 */
/**
 * @description 右括号匹配的一定是盏顶的元素
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
    "[": "]",
    "(": ")",
    "{": "}"
  };
  const queue = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      queue.push(s[i]);
      continue;
    }
    if (map[queue[queue.length - 1]] === s[i]) {
      queue.pop();
      continue;
    }
    return false;
  }
  if (queue.length) return false;
  return true;
};
