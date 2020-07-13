/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 *
 * https://leetcode-cn.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (46.60%)
 * Likes:    109
 * Dislikes: 0
 * Total Accepted:    12.1K
 * Total Submissions: 25.9K
 * Testcase Example:  '3\n3'
 *
 * 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
 *
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 *
 *
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 *
 *
 * 给定 n 和 k，返回第 k 个排列。
 *
 * 说明：
 *
 *
 * 给定 n 的范围是 [1, 9]。
 * 给定 k 的范围是[1,  n!]。
 *
 *
 * 示例 1:
 *
 * 输入: n = 3, k = 3
 * 输出: "213"
 *
 *
 * 示例 2:
 *
 * 输入: n = 4, k = 9
 * 输出: "2314"
 *
 *
 */
/**
 * @description n 取值[1,9], 内置n!阶乘
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  const facs = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  let str = "";
  k -= 1;
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = n; i > 0; i--) {
    const n = facs[i - 1];
    const idx = Math.floor(k / n);
    str += arr[idx] ? arr.splice(idx, 1) : arr.pop();
    k = k % n;
  }
  return str;
};
