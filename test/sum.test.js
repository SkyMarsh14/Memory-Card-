import { sum } from "../src/util.js/sum";

it("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
