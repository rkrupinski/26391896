import { makeSize } from ".";
import { makeWorld } from "./world";
import { LIFE_LIKELIHOOD } from "../constants";

describe("makeWorld", () => {
  afterEach(() => jest.clearAllMocks());

  it("should generate a random world of a given size", () => {
    const below = LIFE_LIKELIHOOD - Number.EPSILON;
    const above = LIFE_LIKELIHOOD + Number.EPSILON;

    let even = false;

    jest.spyOn(Math, "random").mockImplementation(() => {
      even = !even;
      return even ? below : above;
    });

    expect(makeWorld(makeSize(3))).toStrictEqual([1, 0, 1, 0, 1, 0, 1, 0, 1]);
  });
});
