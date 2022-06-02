/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const arr = s.split("");
  const len = s.length;
  for (let i = 0; i * 2 * k < len; i++) {
    const start = i * 2 * k;
    let end = start + k - 1;
    if (len - start < k) {
      end = len - 1;
    }
    reverse(arr, start, end);
  }
  return arr.join("");
};
function reverse(arr, start, end) {
  while (start < end) {
    const tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
    start++;
    end--;
  }
}
// @lc code=end
