/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (57.47%)
 * Likes:    83
 * Dislikes: 0
 * Total Accepted:    22.7K
 * Total Submissions: 39.4K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 *
 *
 *
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 *
 * 输入: 3
 * 输出: [1,3,3,1]
 *
 *
 * 进阶：
 *
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 *
 */
/**
 * @description 顺序计算一行的每个元素, 构成该元素的上级元素会被修改。需要逆序计算当前位置的元素。
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const results = [1];
  for (let i = 1; i < rowIndex + 1; i++) {
    for (let j = i; j > 0; j--) {
      results[j] = (results[j] || 0) + results[j - 1];
    }
  }
  return results;
};
