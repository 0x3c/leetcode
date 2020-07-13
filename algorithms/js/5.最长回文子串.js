/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.53%)
 * Likes:    1145
 * Dislikes: 0
 * Total Accepted:    90.6K
 * Total Submissions: 340K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */
/**
 * @description 遍历每个点, 假定其为中心点, 寻找该中心点最大回文串
 *              1. 中心点为一个
 *              2. 中心点为两个
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length;
  let res = "",
    max = 0;
  for (let i = 0; i < len; i++) {
    let dist = 1,
      delta;
    // condition 1
    while (i - dist > -1 && i + dist < len && s[i - dist] === s[i + dist]) {
      dist++;
    }
    dist--;
    delta = 2 * dist + 1;
    if (delta > max) {
      max = delta;
      res = s.substring(i - dist, i + dist + 1);
    }
    // condition 2
    if (s[i] === s[i + 1]) {
      dist = 1;
      while (
        i - dist > -1 &&
        i + 1 + dist < len &&
        s[i - dist] === s[i + 1 + dist]
      ) {
        dist++;
      }
      dist--;
      delta = 2 * dist + 2;
      if (delta > max) {
        max = delta;
        res = s.substring(i - dist, i + dist + 1 + 1);
      }
    }
  }
  return res;
};
