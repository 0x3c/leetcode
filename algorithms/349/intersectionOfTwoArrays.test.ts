import { intersectionFn1 } from "./intersectionOfTwoArrays";

test("Intersection of Two Arrays", () => {
  expect(intersectionFn1([1, 2, 2, 1], [2, 2]).sort()).toEqual([2].sort());

  expect(intersectionFn1([4, 9, 5], [9, 4, 9, 8, 4]).sort()).toEqual(
    [9, 4].sort()
  );
});
