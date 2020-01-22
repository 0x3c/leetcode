/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 *
 * https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/description/
 *
 * algorithms
 * Easy (46.30%)
 * Likes:    26
 * Dislikes: 0
 * Total Accepted:    3.8K
 * Total Submissions: 7.8K
 * Testcase Example:  '"ABCABC"\n"ABC"'
 *
 * 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。
 *
 * 返回字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。
 *
 *
 *
 * 示例 1：
 *
 * 输入：str1 = "ABCABC", str2 = "ABC"
 * 输出："ABC"
 *
 *
 * 示例 2：
 *
 * 输入：str1 = "ABABAB", str2 = "ABAB"
 * 输出："AB"
 *
 *
 * 示例 3：
 *
 * 输入：str1 = "LEET", str2 = "CODE"
 * 输出：""
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= str1.length <= 1000
 * 1 <= str2.length <= 1000
 * str1[i] 和 str2[i] 为大写英文字母
 *
 *
 */

// @lc code=start
/**
 *
 * @param {string} dividend 被除数
 * @param {string} divisor 除数
 * @returns {boolean}
 */
function isDivisible(dividend, divisor) {
  let len = divisor.length;
  let pointer = 0;
  while (pointer < dividend.length) {
    if (dividend.substr(pointer, len) === divisor) {
      pointer += len;
      continue;
    }
    return false;
  }
  return true;
}
/**
 *
 * @param {string} dividend  被除数
 * @returns {string[]} 公因子数组
 */
function getFactors(dividend) {
  const factors = [];
  let i = 0;
  let factor = dividend[0];
  while (factor !== dividend) {
    if (factor[0] !== dividend[i + 1]) {
      i++;
      factor += dividend[i];
      continue;
    } else if (isDivisible(dividend, factor)) {
      factors.push(factor);
    }
    i++;
    factor += dividend[i];
  }
  factors.push(factor);
  return factors;
}
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  const factors1 = getFactors(str1);
  let factor = factors1.pop();
  while (factor) {
    if (isDivisible(str2, factor)) {
      return factor;
    }
    factor = factors1.pop();
  }
  return "";
};
// @lc code=end
