/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

/**
 * using memo
 * @param {number} N
 * @param {number[]} memo
 * @return {number}
 */
var fib = function(N, memo = [0, 1]) {
  if (N >= memo.length) {
    memo.push(fib(N - 1, memo) + fib(N - 2, memo));
  }
  return memo[N];
};
// @lc code=start
/**
 * 自底向上
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  const memo = [0, 1];
  let i = 1;
  while (++i < N + 1) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[N];
};
// @lc code=end
