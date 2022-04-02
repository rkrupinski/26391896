export const worldTick = () => ({ type: "world/tick" } as const);

export const actions = {
  worldTick,
};

export type Action = ReturnType<typeof actions[keyof typeof actions]>;
