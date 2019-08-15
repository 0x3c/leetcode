/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (65.08%)
 * Likes:    120
 * Dislikes: 0
 * Total Accepted:    28.7K
 * Total Submissions: 44.2K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 * 示例 1:
 *
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2]
 *
 *
 * 示例 2:
 *
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [9,4]
 *
 * 说明:
 *
 *
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let lp = 0,
    rp = 0;
  const dict = {};
  while (lp < nums1.length) {
    const lpv = nums1[lp];
    while (rp < nums2.length) {
      if (lpv === nums2[rp++]) {
        dict[lpv] = 1;
      }
    }
    rp = 0;
    lp++;
  }
  return Object.keys(dict).map(Number);
};
