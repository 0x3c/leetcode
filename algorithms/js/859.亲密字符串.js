/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 *
 * https://leetcode-cn.com/problems/buddy-strings/description/
 *
 * algorithms
 * Easy (26.29%)
 * Likes:    54
 * Dislikes: 0
 * Total Accepted:    5.7K
 * Total Submissions: 21.4K
 * Testcase Example:  '"ab"\n"ba"'
 *
 * 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false
 * 。
 *
 *
 *
 * 示例 1：
 *
 * 输入： A = "ab", B = "ba"
 * 输出： true
 *
 *
 * 示例 2：
 *
 * 输入： A = "ab", B = "ab"
 * 输出： false
 *
 *
 * 示例 3:
 *
 * 输入： A = "aa", B = "aa"
 * 输出： true
 *
 *
 * 示例 4：
 *
 * 输入： A = "aaaaaaabc", B = "aaaaaaacb"
 * 输出： true
 *
 *
 * 示例 5：
 *
 * 输入： A = "", B = "aa"
 * 输出： false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= A.length <= 20000
 * 0 <= B.length <= 20000
 * A 和 B 仅由小写字母构成。
 *
 *
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A.length !== B.length) return false;
  let i = -1,
    repeated = false;
  const arr = [],
    hashmap = {};
  while (++i < A.length) {
    !hashmap[A[i]] ? (hashmap[A[i]] = 1) : (repeated = true);
    if (A[i] !== B[i]) {
      if (arr.length === 2) return false;
      arr.push(i);
    }
  }
  if (!arr.length) return repeated;
  const [x, y] = arr;
  return A[x] === B[y] && A[y] === B[x];
};
