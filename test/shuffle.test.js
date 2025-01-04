import shuffle from "../src/util.js/shuffule";

describe("shuffle", () => {
  test("returns an array with the same elements in a random order", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(result).toHaveLength(input.length); // Check the length
    expect(result).not.toEqual(input); // The order should be different most of the time
    expect(result.sort()).toEqual(input.sort()); // Check the contents (ignoring order)
  });

  test("does not modify the original array", () => {
    const input = [1, 2, 3];
    const inputCopy = [...input];
    shuffle(inputCopy);
    expect(inputCopy).toEqual(input); // The original array remains unchanged
  });

  test("handles an empty array", () => {
    const input = [];
    const result = shuffle(input);
    expect(result).toEqual([]); // Should return an empty array
  });

  test("handles an array with one element", () => {
    const input = [42];
    const result = shuffle(input);
    expect(result).toEqual([42]); // Should return the same single-element array
  });

  test("randomness produces different orders", () => {
    const input = [1, 2, 3, 4, 5];
    const result1 = shuffle([...input]);
    const result2 = shuffle([...input]);
    // Randomness makes it unlikely (but not impossible) that the results are identical
    expect(result1).not.toEqual(result2);
  });
  test("check if the returned array and the original array shares the same elements.", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(result).toEqual(expect.arrayContaining(input));
  });
});
