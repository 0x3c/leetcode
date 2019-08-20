/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (34.40%)
 * Likes:    660
 * Dislikes: 0
 * Total Accepted:    109.9K
 * Total Submissions: 318.8K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let len = 0;
  const num = strs.length;
  if (!num) {
    return "";
  }
  const size = strs[0].length;
  if (num === 1) {
    return strs[0];
  }
  for (let i = 0; i < size; i++) {
    let j = 0;
    while (
      j < num - 1 &&
      strs[j].substr(0, i + 1) === strs[j + 1].substr(0, i + 1)
    ) {
      j++;
    }
    if (j < num - 1) {
      break;
    }
    len = i + 1;
  }
  return strs[0].substr(0, len);
};
