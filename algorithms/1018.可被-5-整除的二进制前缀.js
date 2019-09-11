/*
 * @lc app=leetcode.cn id=1018 lang=javascript
 *
 * [1018] 可被 5 整除的二进制前缀
 *
 * https://leetcode-cn.com/problems/binary-prefix-divisible-by-5/description/
 *
 * algorithms
 * Easy (41.46%)
 * Likes:    22
 * Dislikes: 0
 * Total Accepted:    3.6K
 * Total Submissions: 8.8K
 * Testcase Example:  '[0,1,1]'
 *
 * 给定由若干 0 和 1 组成的数组 A。我们定义 N_i：从 A[0] 到 A[i] 的第 i
 * 个子数组被解释为一个二进制数（从最高有效位到最低有效位）。
 *
 * 返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。
 *
 *
 *
 * 示例 1：
 *
 * 输入：[0,1,1]
 * 输出：[true,false,false]
 * 解释：
 * 输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真。
 *
 *
 * 示例 2：
 *
 * 输入：[1,1,1]
 * 输出：[false,false,false]
 *
 *
 * 示例 3：
 *
 * 输入：[0,1,1,1,1,1]
 * 输出：[true,false,false,false,true,false]
 *
 *
 * 示例 4：
 *
 * 输入：[1,1,1,0,1]
 * 输出：[false,false,false,false,false]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= A.length <= 30000
 * A[i] 为 0 或 1
 *
 *
 */
/**
 * 最大数为 2**30000-1, 在 js 中不能表示
 * 能被5整除的数，乘2一样能被5整除
 * 如 153 = 30 * 5 + 3,
 * 153 * 2 = 30 * 5 * 2 + 3 * 2
 * 故整除部分可省去, 保留余数即可。
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
  let prefix = 0;
  const res = [];
  for (let i = 0; i < A.length; i++) {
    prefix = prefix * 2 + +A[i];
    prefix = prefix % 5;
    res.push(!prefix);
  }
  return res;
};
