import { useEffect } from "react";
import { KeyValue } from "./types";

/**
 *
 * @param key Key to be tracked
 * @param handler Function to be executed on Key press
 */

const useIsKeyPressed = (key: KeyValue, handler: () => void) => {
  useEffect(() => {
    const handlerFunc = (event: KeyboardEvent) => {
      if (event.key === key) {
        handler();
      }
    };
    window.addEventListener("keydown", handlerFunc);
    return () => {
      window.removeEventListener("keydown", handlerFunc);
    };
  }, []);
};

export default useIsKeyPressed;
