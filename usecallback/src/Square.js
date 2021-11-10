import React from "react";
import { useCountRender } from "./useCountRender";

export const Square = React.memo(({ n, increment }) => {

  useCountRender();

  return (
    <button onClick={() => increment(n)}>{n}</button>
  )
});