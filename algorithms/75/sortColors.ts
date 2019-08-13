/**
 * 75. Sort Colors
 * https://leetcode-cn.com/problems/sort-colors/submissions/
 * 排序题, 不能使用自带排序, 手写排序算法
 */

type SortColorFn = (nums: number[]) => void;

const sortColors: SortColorFn = nums => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        const tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
      }
    }
  }
};
