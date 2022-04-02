import type { World } from "./types";
import { rootReducer } from "./reducer";
import { worldTick } from "./actions";

describe("rootReducer", () => {
  it("should handle actions of type world/tick", () => {
    // prettier-ignore
    const world: World = [
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
      0, 1, 1, 1, 0,
      0, 0, 0, 0, 0,
      0, 0, 0, 0, 0,
    ];

    // prettier-ignore
    const expected: World = [
      0, 0, 0, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 0, 0, 0,
    ];

    expect(rootReducer({ world }, worldTick())).toStrictEqual({
      world: expected,
    });
  });
});
