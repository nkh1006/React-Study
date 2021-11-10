import React from "react";
// import { useCountRender } from "./useCountRender";

export const Hello = React.memo(({ increment }) => {

  // useCountRender();

  return (
    <button onClick={() => increment(5)}>Hello</button>
  )
});