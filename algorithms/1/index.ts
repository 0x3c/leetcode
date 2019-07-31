type TwoSumFn = (nums: number[], target: number) => number[];

export const twoSumFn: TwoSumFn = (nums, target) => {
  let lp = 0,
    rp = 0;
  while (lp < nums.length - 1) {
    while (++rp < nums.length) {
      if (nums[lp] + nums[rp] === target) {
        return [lp, rp];
      }
    }
    rp = ++lp;
  }
  throw new Error("no result");
};

const result = twoSumFn([2, 7, 11, 15], 18);
console.log(result);
