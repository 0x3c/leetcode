/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  strs.forEach((str) => {
    const key = str
      .split("")
      .sort((a, b) => a.charCodeAt() - b.charCodeAt())
      .join("");
    map.set(key, map.has(key) ? [...map.get(key), str] : [str]);
  });
  return [...map.values()];
};
// @lc code=end
