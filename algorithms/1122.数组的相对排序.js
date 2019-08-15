/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 *
 * https://leetcode-cn.com/problems/relative-sort-array/description/
 *
 * algorithms
 * Easy (61.06%)
 * Likes:    5
 * Dislikes: 0
 * Total Accepted:    2.7K
 * Total Submissions: 4.4K
 * Testcase Example:  '[2,3,1,3,2,4,6,7,9,2,19]\n[2,1,4,3,9,6]'
 *
 * 给你两个数组，arr1 和 arr2，
 *
 *
 * arr2 中的元素各不相同
 * arr2 中的每个元素都出现在 arr1 中
 *
 *
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1
 * 的末尾。
 *
 *
 *
 * 示例：
 *
 * 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * 输出：[2,2,2,1,4,3,3,9,6,7,19]
 *
 *
 *
 *
 * 提示：
 *
 *
 * arr1.length, arr2.length <= 1000
 * 0 <= arr1[i], arr2[i] <= 1000
 * arr2 中的元素 arr2[i] 各不相同
 * arr2 中的每个元素 arr2[i] 都出现在 arr1 中
 *
 *
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray1 = function(arr1, arr2) {
  const dict = {},
    end = [],
    res = [];
  for (let i = 0; i < arr1.length; i++) {
    const n = arr1[i];
    if (~arr2.findIndex(x => x === n)) {
      if (dict[n]) {
        dict[n]++;
      } else {
        dict[n] = 1;
      }
    } else {
      end.push(n);
    }
  }
  for (const n of arr2) {
    if (dict[n]) {
      for (let i = 0; i < dict[n]; i++) {
        res.push(n);
      }
    }
  }
  return [...res, ...end.sort((a, b) => a - b)];
};

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let lp = 0,
    rp = 0,
    res2 = [];
  const res1 = [];

  while (rp < arr2.length) {
    while (lp < arr1.length) {
      if (arr1[lp] === arr2[rp]) {
        res1.push(arr1[lp]);
      }
      lp++;
    }
    rp++;
    lp = 0;
  }
  res2 = arr1.filter(n => !arr2.includes(n)).sort((a, b) => a - b);
  return [...res1, ...res2];
};
