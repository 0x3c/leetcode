type RelativeSortArrayFn = (arr1: number[], arr2: number[]) => number[];

export const relativeSortArrayFn1: RelativeSortArrayFn = (arr1, arr2) => {
  let lp = 0,
    rp = 0,
    res2 = [];
  const res1 = [];

  while (rp < arr2.length) {
    while (lp < arr1.length) {
      if (arr1[lp] === arr2[rp]) {
        res1.push(arr1[lp]);
      }
      lp++;
    }
    rp++;
    lp = 0;
  }
  res2 = arr1.filter(n => !arr2.includes(n)).sort((a, b) => a - b);
  return [...res1, ...res2];
};

export const relativeSortArrayFn2: RelativeSortArrayFn = (arr1, arr2) => {
  const dict: { [key: number]: number } = {},
    end = [],
    res = [];
  for (let i = 0; i < arr1.length; i++) {
    const n = arr1[i];
    if (~arr2.findIndex(x => x === n)) {
      if (dict[n]) {
        dict[n]++;
      } else {
        dict[n] = 1;
      }
    } else {
      end.push(n);
    }
  }
  for (const n of arr2) {
    if (dict[n]) {
      for (let i = 0; i < dict[n]; i++) {
        res.push(n);
      }
    }
  }
  return [...res, ...end.sort((a, b) => a - b)];
};
