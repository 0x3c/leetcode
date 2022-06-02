/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const ret = [];
  for (let i = 0; i < s.length; i) {
    let start = i;
    while (i < s.length && s[i] != " ") i++;
    for (let k = i - 1; k >= start; k--) {
      ret.push(s[k]);
    }
    while (i < s.length && s[i] == " ") {
      ret.push(" ");
      i++;
    }
  }
  return ret.join("");
};
// @lc code=end
