import type { World } from "../types";
import { isAlive, countLivingNeighbours } from "./cell";

describe("isAlive", () => {
  it("should detect living cells", () => {
    expect(isAlive(1)).toBe(true);
  });

  it("should detect dead cells", () => {
    expect(isAlive(0)).toBe(false);
  });
});

describe("countLivingNeighbours", () => {
  // prettier-ignore
  const world: World = [
    0, 1, 1, 0,
    1, 0, 0, 0,
    0, 0, 1, 1,
    0, 1, 0, 0
  ];

  it.each`
    cell  | expected
    ${0}  | ${2}
    ${3}  | ${1}
    ${12} | ${1}
    ${15} | ${2}
    ${2}  | ${1}
    ${7}  | ${3}
    ${14} | ${3}
  `(
    "should report $expected living neighbours for cell $cell",
    ({ cell, expected }) => {
      expect(countLivingNeighbours(cell, world)).toBe(expected);
    }
  );
});
