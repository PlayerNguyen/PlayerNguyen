import { useEffect, useState } from "react";

export function useMouseDown() {
  const [isMouseDown, setMouseDown] = useState<boolean>(false);

  useEffect(() => {
    const downListener = () => {
      setMouseDown(true);
    };

    const upListener = () => {
      setMouseDown(false);
    };

    document.addEventListener("mousedown", downListener);
    document.addEventListener("mouseup", upListener);

    return () => {
      document.removeEventListener("mousedown", downListener);
      document.removeEventListener("mouseup", upListener);
    };
  }, []);

  return [isMouseDown];
}
