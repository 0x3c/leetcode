/**
 * 11. Container With Most Water
 * https://leetcode-cn.com/problems/container-with-most-water/
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  let lp = 0,
    rp = height.length - 1,
    max = 0;
  while (lp < rp) {
    max = Math.max(max, Math.min(height[lp], height[rp]) * (rp - lp));
    if (height[lp] < height[rp]) {
      lp++;
    } else {
      rp--;
    }
  }
  return max;
};
