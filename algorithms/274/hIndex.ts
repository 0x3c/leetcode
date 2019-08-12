type HIndexFn = (citations: number[]) => number;
/**
 * @param {number[]} citations
 * @return {number}
 */
export const hIndex: HIndexFn = citations => {
  const len = citations.length;
  if (len === 1) {
    return citations[0] > 0 ? 1 : 0;
  }
  citations.sort((a, b) => b - a);
  if (citations[0] === 0) {
    return 0;
  }
  const index = citations.findIndex((a, idx) => idx + 1 > a);
  if (citations[len - 1] >= len) {
    return len;
  }
  if (index > 0) {
    return index;
  }
  return 0;
};
