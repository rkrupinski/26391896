import { LIFE_LIKELIHOOD } from "../constants";
import type { Size, World } from "../types";

export const makeWorld = (size: Size): World =>
  Array.from({ length: size ** 2 }, () =>
    Math.random() <= LIFE_LIKELIHOOD ? 1 : 0
  );
