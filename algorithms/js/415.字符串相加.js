/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (50.13%)
 * Likes:    228
 * Dislikes: 0
 * Total Accepted:    59.9K
 * Total Submissions: 116.2K
 * Testcase Example:  '"0"\n"0"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 *
 * 注意：
 *
 *
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 *
 *
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let carry = 0;
  const len1 = num1.length;
  const len2 = num2.length;
  let result = "";
  let i = 0;
  for (; i < Math.min(len1, len2); i++) {
    const sum = Number(num1[len1 - i - 1]) + Number(num2[len2 - i - 1]) + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }
  const maxNum = len1 > len2 ? num1 : num2;
  for (; i < maxNum.length; i++) {
    const sum = Number(maxNum[maxNum.length - i - 1]) + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }
  return carry ? carry + result : result;
};
// @lc code=end
