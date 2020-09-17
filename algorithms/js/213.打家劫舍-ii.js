/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length;
  if (!len) return 0;
  if (len === 1) return nums[0];
  const dp1 = Array.from({ length: len + 1 }, () => 0);
  const dp2 = Array.from({ length: len + 1 }, () => 0);
  dp1[1] = nums[0];
  for (let i = 2; i <= len; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + nums[i - 1]);
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i - 1]);
  }
  return Math.max(dp1[len - 1], dp2[len]);
};
// @lc code=end
