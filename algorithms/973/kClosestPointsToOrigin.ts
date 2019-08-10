type kClosestPointsToOrigin = (pointers: number[][], K: number) => number[][];

const getDist = ([x, y]: number[]) => x * x + y * y;
export const kClosest: kClosestPointsToOrigin = (points, K) => {
  return points.sort((a, b) => getDist(a) - getDist(b)).slice(0, K);
};
