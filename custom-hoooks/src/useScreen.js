import { useState, useEffect } from "react";

export default function useScreen() {
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    checkScrennSize();
    window.addEventListener("resize", checkScrennSize());
    return () => {
      window.removeEventListener("resize");
    }
  }, []);

  const checkScrennSize = () => {
    if (window.innerWidth > 992) return setScreenSize("Large");
    if (window.innerWidth < 992 && window.innerWidth > 600) return setScreenSize("Medium");
    if (window.innerWidth < 600) return setScreenSize("Small");
  }

  return screenSize;
}