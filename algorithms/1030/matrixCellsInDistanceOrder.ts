type AllCellsDistOrder = (
  R: number,
  C: number,
  r0: number,
  c0: number
) => number[][];

export const allCellsDistOrderFn1: AllCellsDistOrder = (R, C, r0, c0) => {
  let results = Array.from({ length: R * C }, (_, idx) => [
    Math.floor(idx / C),
    idx % C,
    Math.abs(Math.floor(idx / C) - r0) + Math.abs((idx % C) - c0)
  ]);
  results = results.sort((a, b) => a[2] - b[2]).map(a => [a[0], a[1]]);
  return results;
};
