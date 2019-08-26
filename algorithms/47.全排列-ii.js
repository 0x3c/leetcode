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
 * @param {number} index
 * @param {number[]} curr
 * @param {number[]} nums
 * @param {number[]} list
 * @param {number[][]} used
 */
function backtrack(index, curr, nums, list, used) {
  const len = nums.length;
  if (index === len) return list.push(curr);
  for (let i = 0; i < len; i++) {
    if (used[i]) continue;
    // 去重, 重复元素选取必须从前到后, 若上一个重复元素未使用则跳过
    if (nums[i] === nums[i - 1] && i > 0 && !used[i - 1]) continue;
    used[i] = true;
    curr.push(nums[i]);
    // 每递归一次, 记录当前已使用的元素索引
    backtrack(index + 1, curr.slice(), nums, list, used);
    curr.pop();
    used[i] = false;
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let results = [];
  const used = Array.from({ length: nums.length }, Boolean);
  nums = nums.sort((a, b) => a - b);
  backtrack(0, [], nums, results, used);
  return results;
};
