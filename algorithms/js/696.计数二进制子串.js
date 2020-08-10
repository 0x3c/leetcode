/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
  if (!s.length) return 0;
  let before = 0,
    cur = 0,
    c = s[0],
    res = 0;
  for (let i of s) {
    if (i === c) {
      cur++;
    } else {
      if (before !== 0) res += Math.min(before, cur);
      before = cur;
      cur = 1;
      c = i;
    }
  }
  res += Math.min(before, cur);
  return res;
};
// @lc code=end
