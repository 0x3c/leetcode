/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 *
 * https://leetcode-cn.com/problems/subsets-ii/description/
 *
 * algorithms
 * Medium (56.51%)
 * Likes:    118
 * Dislikes: 0
 * Total Accepted:    11.8K
 * Total Submissions: 20.9K
 * Testcase Example:  '[1,2,2]'
 *
 * 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 *
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 *
 * 输入: [1,2,2]
 * 输出:
 * [
 * ⁠ [2],
 * ⁠ [1],
 * ⁠ [1,2,2],
 * ⁠ [2,2],
 * ⁠ [1,2],
 * ⁠ []
 * ]
 *
 */
/**
 * 增加去重条件, 重复元素只能顺序组合
 * 若元素与上个元素相同, 切上个元素未被使用, 则组合是非顺序的, 需排除该分支
 * @param {number} index
 * @param {number[]} curr
 * @param {number[]} nums
 * @param {number[]} list
 * @param {boolean[]} used
 */
function backtract(index, curr, nums, list, used) {
  const len = nums.length;
  list.push(curr);
  if (index === len) return;
  for (let i = index; i < len; i++) {
    if (used[i]) continue;
    if (nums[i] === nums[i - 1] && !used[i - 1]) continue;
    used[i] = true;
    curr.push(nums[i]);
    backtract(i + 1, curr.slice(), nums, list, used);
    curr.pop();
    used[i] = false;
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const results = [],
    used = Array.from({ length: nums.length }, Boolean);
  nums = nums.sort((a, b) => a - b);
  backtract(0, [], nums, results, used);
  return results;
};
