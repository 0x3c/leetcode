type IntersectionFn = (nums1: number[], nums2: number[]) => number[];
interface IDict {
  [key: number]: number;
}
export const intersectionFn1: IntersectionFn = (nums1, nums2) => {
  let lp = 0,
    rp = 0;
  const dict: IDict = {};
  while (lp < nums1.length) {
    const lpv = nums1[lp];
    while (rp < nums2.length) {
      if (lpv === nums2[rp++]) {
        dict[lpv] = 1;
      }
    }
    rp = 0;
    lp++;
  }
  return Object.keys(dict).map(Number);
};
