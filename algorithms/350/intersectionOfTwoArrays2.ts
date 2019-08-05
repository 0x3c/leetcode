type IntersectionOfTwoArraysFn = (nums1: number[], numss: number[]) => number[];

export const intersectionOfTwoArraysFn: IntersectionOfTwoArraysFn = (nums1, nums2) => {
  const results = [];
  let lp = 0,
    rp = 0;
  //   sort
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  while (lp < nums1.length && rp < nums2.length) {
    if (nums1[lp] < nums2[rp]) {
      lp++;
      continue;
    }
    if (nums1[lp] > nums2[rp]) {
      rp++;
      continue;
    }
    if (nums1[lp] === nums2[rp]) {
      results.push(nums2[rp]);
      lp++;
      rp++;
      continue;
    }
  }
  return results;
};
