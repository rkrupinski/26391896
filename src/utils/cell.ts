import type { Cell, World } from "../types";
import { makeSize } from "./size";

export const isAlive = (cell: Cell) => cell === 1;

export const countLivingNeighbours = (index: number, world: World) => {
  const size = makeSize(Math.sqrt(world.length));
  const i = index % size;
  const j = Math.floor(index / size);
  const coords = [];

  if (i > 0) coords.push(index - 1);
  if (i < size - 1) coords.push(index + 1);
  if (j > 0) coords.push(index - size);
  if (j < size - 1) coords.push(index + size);

  if (i > 0 && j > 0) coords.push(index - size - 1);
  if (i < size - 1 && j > 0) coords.push(index - size + 1);
  if (i > 0 && j < size - 1) coords.push(index + size - 1);
  if (i < size - 1 && j < size - 1) coords.push(index + size + 1);

  return coords.reduce(
    (acc, curr) => (isAlive(world[curr]) ? acc + 1 : acc),
    0
  );
};
