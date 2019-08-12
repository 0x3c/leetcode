/**
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/submissions/
 */

type removeDuplicatesFn = (nums: number[]) => number;

const removeDuplicates: removeDuplicatesFn = nums => {
  const map: { [k: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      nums.splice(i, 1);
      i--;
    } else {
      map[nums[i]] = 1;
    }
  }
  return nums.length;
};
