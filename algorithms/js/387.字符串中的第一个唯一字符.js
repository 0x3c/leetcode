/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const count = new Array(26);
  for (let i = 0; i < s.length; i++) {
    const idx = s.charCodeAt(i) - 97;
    count[idx] = (count[idx] ?? 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (count[s.charCodeAt(i) - 97] == 1) {
      return i;
    }
  }
  return -1;
};
// @lc code=end
