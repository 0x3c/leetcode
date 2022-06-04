/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const hash = {},
    used = new Array(256);
  for (let i = 0; i < s.length; i++) {
    if (
      (!hash[s[i]] && used[t.charCodeAt(i)]) ||
      (hash[s[i]] && hash[s[i]] != t[i])
    ) {
      return false;
    }
    hash[s[i]] = t[i];
    used[t.charCodeAt(i)] = true;
  }
  return true;
};
// @lc code=end
