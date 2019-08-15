/**
 * 7. Reverse Integer
 * https://leetcode-cn.com/problems/reverse-integer/
 */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  let base = x < 0 ? -1 : 1;
  const n =
    base *
    (base * x)
      .toString()
      .split("")
      .reverse()
      .join("");
  if (n >= -(2 ** 31) && n <= 2 ** 31 - 1) {
    return n;
  }
  return 0;
};
