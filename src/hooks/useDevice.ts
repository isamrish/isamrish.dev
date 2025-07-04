import { useEffect, useState } from "react";
import { useScreenWidth } from "./useScreenWidth";

type deviceType = "mobile" | "tablet" | "desktop" | null;

export const useDevice = () => {
  const [device, setDevice] = useState<deviceType>(null);
  const screen = useScreenWidth();

  useEffect(() => {
    if (screen?.screenWidth != null) {
      const screenWidth = Number(screen.screenWidth);
      if (screenWidth < 768) {
        setDevice("mobile");
      } else if (screenWidth >= 768 && screenWidth < 1140) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    }
  }, [screen?.screenWidth]);

  return { device };
};