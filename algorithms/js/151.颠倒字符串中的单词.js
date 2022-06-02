/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = split(s);
  reverse(arr);
  return join(arr, " ");
};

function split(str) {
  const arr = [];
  const len = str.length;
  for (let start = 0; start < len; start) {
    while (start < len && str[start] == " ") {
      start++;
    }
    let end = start;
    while (end < len && str[end] != " ") {
      end++;
    }
    if (start < len) {
      arr.push(str.slice(start, end));
    }
    start = end;
  }
  return arr;
}
function join(arr, separator) {
  let ret = "";
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      ret += separator;
    }
    ret += arr[i];
  }
  return ret;
}
function reverse(arr) {
  for (let start = 0, end = arr.length - 1; start < end; start++, end--) {
    const tmp = arr[start];
    arr[start] = arr[end];
    arr[end] = tmp;
  }
}
// @lc code=end
