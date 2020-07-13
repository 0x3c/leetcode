/*
 * @lc app=leetcode.cn id=1016 lang=javascript
 *
 * [1016] 子串能表示从 1 到 N 数字的二进制串
 *
 * https://leetcode-cn.com/problems/binary-string-with-substrings-representing-1-to-n/description/
 *
 * algorithms
 * Medium (53.11%)
 * Likes:    6
 * Dislikes: 0
 * Total Accepted:    1K
 * Total Submissions: 1.9K
 * Testcase Example:  '"0110"\n3'
 *
 * 给定一个二进制字符串 S（一个仅由若干 '0' 和 '1' 构成的字符串）和一个正整数 N，如果对于从 1 到 N 的每个整数 X，其二进制表示都是 S
 * 的子串，就返回 true，否则返回 false。
 *
 *
 *
 * 示例 1：
 *
 * 输入：S = "0110", N = 3
 * 输出：true
 *
 *
 * 示例 2：
 *
 * 输入：S = "0110", N = 4
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= S.length <= 1000
 * 1 <= N <= 10^9
 *
 *
 */
/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
var queryString = function(S, N) {
  for (let i = 1; i < N + 1; i++) {
    let bins = "" + (i & 1),
      tmp = i >> 1;
    while (tmp) {
      bins = (tmp & 1) + bins;
      tmp >>= 1;
    }
    if (!S.includes(bins)) return false;
  }
  return true;
};
