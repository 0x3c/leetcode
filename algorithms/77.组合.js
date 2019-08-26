/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (69.86%)
 * Likes:    151
 * Dislikes: 0
 * Total Accepted:    17.2K
 * Total Submissions: 24.7K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 *
 * 示例:
 *
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 *
 */

/**
 *
 * @param {number} i
 * @param {number[]} curr
 * @param {number} n
 * @param {number} k
 * @param {number[]} list
 */
function backtrack(i, curr, n, k, list) {
  if (curr.length === k) return list.push(curr);
  for (i; i < n + 1; i++) {
    curr.push(i);
    backtrack(i + 1, curr.slice(), n, k, list);
    curr.pop();
  }
}
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const results = [];
  backtrack(1, [], n, k, results);
  return results;
};
