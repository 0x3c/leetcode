/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let last = nums.length - 1;
  while (last) {
    let canArrived = false;
    for (let i = last - 1; i >= 0; i--) {
      if (i + nums[i] >= last) {
        last = i;
        canArrived = true;
        break;
      }
    }

    if (!canArrived) {
      return false;
    }
  }
  return true;
};
// @lc code=end
