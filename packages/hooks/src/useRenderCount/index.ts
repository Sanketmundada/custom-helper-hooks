import { useEffect, useRef } from "react";

/**
 *
 * @param screen screen name
 */

const useRenderCount = (screen: string) => {
  if (!screen) {
    throw new Error("Screen name is Required");
  }

  if (typeof screen !== "string") {
    throw new Error("Screen name must be a string");
  }

  const ref = useRef(0);

  useEffect(() => {
    console.log(`${screen} render count : `, ++ref.current);
  });
  // Why ?
  //console.log(`${screen} render count : `, ++ref.current);
};

export default useRenderCount;
