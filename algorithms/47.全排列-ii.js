/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (53.67%)
 * Likes:    146
 * Dislikes: 0
 * Total Accepted:    19.7K
 * Total Submissions: 36.6K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 *
 * 示例:
 *
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
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
var permuteUnique = function(nums) {
  let results = [];
  nums = nums.sort((a, b) => a - b);
  backtrack(results, [], nums);
  results = results.map(arr => arr.join(","));
  return Array.from(new Set(results)).map(str => str.split(","));
};
