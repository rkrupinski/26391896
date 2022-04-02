import { WORLD_SIZE } from "./constants";
import { makeSize, makeWorld } from "./utils";
import type { World } from "./types";

export type State = {
  world: World;
};

export const initialState: State = {
  world: makeWorld(makeSize(WORLD_SIZE)),
};
