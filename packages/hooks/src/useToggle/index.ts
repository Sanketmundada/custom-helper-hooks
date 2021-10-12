import { useState } from "react";

/**
 *
 * @param init boolean
 * @returns Object {state, toggle, setTrue, setFalse}
 * @default init false
 */

const useToggle = (init = false) => {
  const [state, setState] = useState<boolean>(init);

  if (typeof init !== "boolean") {
    throw new Error("Initial value must be boolean");
  }

  const toggle = () => setState((prev) => !prev);

  const setTrue = () => setState(true);
  const setFalse = () => setState(false);

  return {
    state,
    toggle,
    setTrue,
    setFalse,
  };
};

export default useToggle;
