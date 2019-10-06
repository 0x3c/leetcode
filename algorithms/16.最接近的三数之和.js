/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * https://leetcode-cn.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (41.64%)
 * Likes:    271
 * Dislikes: 0
 * Total Accepted:    46.7K
 * Total Submissions: 112.1K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target
 * 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 *
 * 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
 *
 * 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 *
 *
 */

// @lc code=start
/**
 * 参考三数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let min = Number.MAX_VALUE,
    len = nums.length,
    result = [];

  nums.sort((a, b) => a - b);
  for (let i = 1; i < len - 1; i++) {
    let first = 0,
      last = len - 1;
    while (true) {
      if (first >= i || last <= i) break;
      const val = nums[i] + nums[first] + nums[last] - target;
      if (Math.abs(val) < min) {
        min = Math.abs(val);
        result = [nums[first], nums[i], nums[last]];
      }
      if (first < i && val <= 0) {
        first++;
      } else if (last > i && val > 0) {
        last--;
      } else {
        break;
      }
    }
  }
  return result.reduce((acc, a) => acc + a, 0);
};
// @lc code=end
