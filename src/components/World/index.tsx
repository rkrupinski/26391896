import * as React from "react";
import styled from "@emotion/styled";

import type { Size } from "../../types";
import { isAlive, makeSize } from "../../utils";
import { useSelector } from "../../store";
import { CellComponent } from "../Cell";

export const Wrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "size",
})<{ size: Size }>(({ size }) => ({
  display: "flex",
  flexWrap: "wrap",
  width: size * 10,
}));

export const WorldComponent: React.FC = () => {
  const cells = useSelector(({ world }) => world);

  const size = React.useMemo(() => makeSize(Math.sqrt(cells.length)), [cells]);

  return (
    <Wrapper size={size}>
      {cells.map((c, i) => (
        // I'm using index as key here with full responsibility :)
        <CellComponent key={i} alive={isAlive(c)} />
      ))}
    </Wrapper>
  );
};
