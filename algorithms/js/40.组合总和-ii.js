/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 *
 * https://leetcode-cn.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (56.24%)
 * Likes:    136
 * Dislikes: 0
 * Total Accepted:    19.8K
 * Total Submissions: 35.1K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 *
 * candidates 中的每个数字在每个组合中只能使用一次。
 *
 * 说明：
 *
 *
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合。
 *
 *
 * 示例 1:
 *
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 所求解集为:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 *
 *
 * 示例 2:
 *
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 所求解集为:
 * [
 * [1,2,2],
 * [5]
 * ]
 *
 */

/**
 *
 * @param {number} index
 * @param {number[]} curr
 * @param {number[]} nums
 * @param {number} t
 * @param {number[]} list
 */
function backtrack(index, curr, nums, t, list) {
  if (t < 0) return;
  if (t === 0) return list.push(curr);
  for (let i = index; i < nums.length; i++) {
    if (nums[i - 1] === nums[i] && i > index) continue; // 重复元素只递归第一个, 避免产生重复结果
    curr.push(nums[i]);
    backtrack(i + 1, curr.slice(), nums, t - nums[i], list);
    curr.pop();
  }
}
/**
 * @description 排序, 递归查找
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const nums = candidates.sort((a, b) => a - b);
  const results = [];
  backtrack(0, [], nums, target, results);
  return results;
};
