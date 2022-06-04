/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const sLen = s.length,
    pLen = p.length;
  const ret = [];
  if (sLen < pLen) {
    return ret;
  }

  const count = Array.from({ length: 26 }, () => 0),
    tempCount = Array.from({ length: 26 }, () => 0);
  for (let i = 0; i < p.length; i++) {
    count[p.charCodeAt(i) - 97]++;
    tempCount[s.charCodeAt(i) - 97]++;
  }
  if (isEqualArray(count, tempCount)) {
    ret.push(0);
  }
  let start = 1;
  while (start <= sLen - pLen) {
    tempCount[s.charCodeAt(start - 1) - 97]--;
    tempCount[s.charCodeAt(start + pLen - 1) - 97]++;
    if (isEqualArray(count, tempCount)) {
      ret.push(start);
    }
    start++;
  }
  return ret;
};
function isEqualArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
// @lc code=end
