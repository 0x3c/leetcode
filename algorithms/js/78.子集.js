/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (74.48%)
 * Likes:    314
 * Dislikes: 0
 * Total Accepted:    32.4K
 * Total Submissions: 43.3K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 *
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 *
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
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
function backtract(index, curr, nums, list) {
  const len = nums.length;
  list.push(curr);
  if (index === len) return;
  for (let i = index; i < len; i++) {
    curr.push(nums[i]);
    backtract(i + 1, curr.slice(), nums, list);
    curr.pop();
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const results = [];
  backtract(0, [], nums, results);
  return results;
};
