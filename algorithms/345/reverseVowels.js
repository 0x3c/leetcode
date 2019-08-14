/**
 * 345. Reverse Vowels of a String
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/
 * 一共N个元音字符, 第 1 <-> N, 2 <-> N-1, ... 互换
 */

/**
 * @description 双指针
 * @param {string} s
 * @return {string}
 */
const reverseVowels = s => {
  const arr = s.split("");
  const vowels = ["a", "e", "o", "i", "u", "A", "E", "O", "I", "U"];
  let lp = 0,
    rp = s.length - 1;
  while (lp < rp) {
    if (!~vowels.indexOf(arr[lp])) {
      lp++;
      continue;
    }
    if (!~vowels.indexOf(arr[rp])) {
      rp--;
      continue;
    }
    const tmp = arr[lp];
    arr[lp] = arr[rp];
    arr[rp] = tmp;
    lp++;
    rp--;
  }
  return arr.join("");
};
