import { useEffect, useRef } from "react";
/**
 *
 * @param handler Function to executed on outside click
 * @returns ref to be attached to the DOM element
 *
 */
const useOutsideClick = <T = any>(handler: () => void) => {
  if (!handler) {
    throw new Error("Handler must be provided as a function");
  }

  if (typeof handler !== "function") {
    throw new Error("Handler must be a function");
  }

  const ref = useRef<T>(null);

  useEffect(() => {
    const handleEvent = (event: MouseEvent) => {
      if (!(ref.current as any).contains(event.target)) {
        handler();
      }
    };
    window.addEventListener("mousedown", handleEvent);

    return () => {
      window.removeEventListener("mousedown", handleEvent);
    };
  }, []);

  return ref;
};

export default useOutsideClick;
