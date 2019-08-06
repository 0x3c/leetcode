type MergeIntervalsFn = (intervals: number[][]) => number[][];

const mergeIntervalsFn: MergeIntervalsFn = intervals => {
  const results: number[][] = [];

  if (!intervals.length) {
    return results;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  let start = intervals[0][0];
  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > end) {
      results.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
      continue;
    }
    if (intervals[i][1] > end) {
      end = intervals[i][1];
    }
  }
  if (!results[results.length - 1] || results[results.length - 1][1] !== end) {
    results.push([start, end]);
  }
  return results;
};
