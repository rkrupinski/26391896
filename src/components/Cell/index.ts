import styled from "@emotion/styled";

export const CellComponent = styled("div", {
  shouldForwardProp: (prop) => prop !== "alive",
})<{ alive: boolean }>(({ alive }) => ({
  background: alive ? "black" : "transparent",
  width: 10,
  height: 10,
}));
