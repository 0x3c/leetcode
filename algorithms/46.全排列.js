/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (71.17%)
 * Likes:    354
 * Dislikes: 0
 * Total Accepted:    39.7K
 * Total Submissions: 55.7K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 *
 * 示例:
 *
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 *
 */

/**
 *
 * @param {number[]} list
 * @param {number[]} temps
 * @param {number[]} nums
 */
function backtrack(list, temps, nums) {
  if (!nums.length) return list.push(temps);
  for (let i = 0; i < nums.length; i++) {
    backtrack(list, [...temps, nums[i]], nums.filter((_, idx) => i !== idx));
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const results = [];
  backtrack(results, [], nums);
  return results;
};
