/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (60.33%)
 * Likes:    306
 * Dislikes: 0
 * Total Accepted:    65.3K
 * Total Submissions: 108.3K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 *
 * 示例 1:
 *
 * 输入: [3,2,3]
 * 输出: 3
 *
 * 示例 2:
 *
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 *
 *
 */

function countNum(nums, num, start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (num === nums[i]) count++;
  }
  return count;
}

function dfs(nums, start, end) {
  if (start === end) return nums[start];
  const mid = start + Math.floor((end - start) / 2);
  const left = dfs(nums, start, mid);
  const right = dfs(nums, mid + 1, end);
  if (left == right) return left;
  const leftCount = countNum(nums, left, start, end);
  const rightCount = countNum(nums, right, start, end);
  return leftCount > rightCount ? left : right;
}

var majorityElement = function(nums) {
  return dfs(nums, 0, nums.length - 1);
};
