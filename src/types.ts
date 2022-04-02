export type Size = number & {
  __brand: "size";
};

export type Cell = 0 | 1;

export type World = Cell[];
