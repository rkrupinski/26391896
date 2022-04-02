import { makeSize } from "./size";

describe("makeSize", () => {
  const errorMsg = "Size must be an integer greater or equal to 3";

  it("should throw when passed a float", () => {
    expect(() => makeSize(3.1)).toThrow(errorMsg);
  });

  it("should throw when passed a negative number", () => {
    expect(() => makeSize(-1)).toThrow(errorMsg);
  });

  it("should throw when passed a small positive integer", () => {
    expect(() => makeSize(2)).toThrow(errorMsg);
  });

  it("should produce size", () => {
    expect(makeSize(3)).toBe(3);
  });
});
