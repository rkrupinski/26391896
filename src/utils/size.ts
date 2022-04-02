import type { Size } from "../types";

export const makeSize = (candidate: number): Size => {
  if (Number.isInteger(candidate) && candidate >= 3) return candidate as any;
  throw new Error("Size must be an integer greater or equal to 3");
};
