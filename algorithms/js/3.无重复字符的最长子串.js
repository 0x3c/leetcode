/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (30.79%)
 * Likes:    2214
 * Dislikes: 0
 * Total Accepted:    183.9K
 * Total Submissions: 595.7K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 示例 1:
 *
 * 输入: "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s.length) return 0;
  let lp = 0,
    rp = 0,
    max = 0;
  const len = s.length;

  while (rp < len) {
    const idx = s.substring(lp, rp).indexOf(s[rp]);
    if (~idx) {
      lp = lp + idx + 1;
    } else {
      max = Math.max(max, rp - lp + 1);
    }
    rp++;
  }
  return max;
};

// use hash
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let len = 0,
    set = new Set();
  for (let i = 0, j = 0; i < s.length; i++) {
    for (; j < s.length; j++) {
      if (set.has(s[j])) break;
      set.add(s[j]);
    }
    set.delete(s[i]);
    len = j - i > len ? j - i : len;
  }
  return len;
};
// @lc code=end
