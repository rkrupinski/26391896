import type { Reducer } from "redux";

import type { World, Cell } from "./types";
import type { Action } from "./actions";
import type { State } from "./state";
import { initialState } from "./state";
import { isAlive, countLivingNeighbours } from "./utils";

const reduceLivingCell = (livingNeighbours: number): Cell =>
  livingNeighbours < 2 || livingNeighbours > 3 ? 0 : 1;

const reduceDeadCell = (livingNeighbours: number): Cell =>
  livingNeighbours === 3 ? 1 : 0;

const reduceCell = (cell: Cell, index: number, world: World): Cell =>
  (isAlive(cell) ? reduceLivingCell : reduceDeadCell)(
    countLivingNeighbours(index, world)
  );

export const rootReducer: Reducer<State, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "world/tick":
      return {
        ...state,
        world: state.world.map(reduceCell),
      };

    default:
      return state;
  }
};
