/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (63.55%)
 * Likes:    186
 * Dislikes: 0
 * Total Accepted:    35.6K
 * Total Submissions: 55.8K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 *
 *
 *
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 *
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 *
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const results = [];
  for (let i = 0; i < numRows; i++) {
    const arr = [];
    for (let idx = 0; idx < i + 1; idx++) {
      idx === 0 && arr.push(1);
      idx === i && i !== 0 && arr.push(1);
      idx > 0 &&
        idx !== i &&
        arr.push(results[i - 1][idx - 1] + results[i - 1][idx]);
    }
    results.push(arr);
  }
  return results;
};
