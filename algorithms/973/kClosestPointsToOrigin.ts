type kClosestPointsToOrigin = (pointers: number[][], K: number) => number[][];

export const kClosest: kClosestPointsToOrigin = (points, K) => {
  const getDistance = ([x, y]: number[]): number[] => [x, y, x * x + y * y];
  const arrs = [],
    resules = [];
  for (let i = 0; i < points.length; i++) {
    arrs[i] = getDistance(points[i]);
  }
  arrs.sort((a, b) => a[2] - b[2]);
  let j = 0;
  while (j < K) {
    resules.push(arrs[j].slice(0, 2));
    j++;
  }
  return resules;
};
