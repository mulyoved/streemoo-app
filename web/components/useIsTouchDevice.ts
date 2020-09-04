import { useEffect, useState } from "react";

function is_touch_enabled() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

export default function useIsTouchDevice() {
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    setTouch(is_touch_enabled());
  }, []);

  return touch;
}
