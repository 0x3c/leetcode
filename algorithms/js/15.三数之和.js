/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.90%)
 * Likes:    1413
 * Dislikes: 0
 * Total Accepted:    101.5K
 * Total Submissions: 421.6K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 *
 */

/**
 * 先排序, 确定中间数字, 根据结果调整两边数字
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let hash = {},
    len = nums.length;
  nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums[len - 1] < 0) return [];
  for (let i = 1; i < len - 1; i++) {
    let first = 0,
      last = len - 1;
    while (true) {
      if (first >= i || last <= i) break;
      let result = nums[first] + nums[i] + nums[last];
      if (result === 0) {
        const arr = [nums[first], nums[i], nums[last]];
        hash[arr.join(",")] = arr;
      }
      if (result <= 0) {
        // 中间数字可能对应多个两边数字, 使result=0时继续查找
        while (nums[first] === nums[++first]) {}
      } else if (result > 0) {
        while (nums[last] === nums[--last]) {}
      } else {
        break;
      }
    }
  }
  return Object.values(hash);
};
