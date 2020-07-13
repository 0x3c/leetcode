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
 * @param {number} index
 * @param {number[]} curr
 * @param {number[]} nums
 * @param {number[]} list
 */
function backtrack(index, curr, nums, list) {
  const len = nums.length;
  if (curr.length === len) return list.push(curr);
  for (let i = index; i < len; i++) {
    curr.push(nums[i]);
    const temps = nums.slice();
    temps[i] = temps[index];
    temps[index] = nums[i];
    // 每递归一次, index + 1, 数组前 index 为已使用过的元素
    backtrack(index + 1, curr.slice(), temps, list);
    curr.pop();
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const results = [];
  backtrack(0, [], nums, results);
  return results;
};
