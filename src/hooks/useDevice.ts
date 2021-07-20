import { useEffect, useState } from "react";
import { useScreenWidth } from "./useScreenWidth";

type deviceType = "mobile" | "tablet" | "desktop";

export const useDevice = () => {
    const [device, setDevice] = useState<deviceType>(null);
    const screen = useScreenWidth();

    useEffect(() =>{
        if(screen.screenWidth < 768) {
            setDevice("mobile");
        } else if(screen.screenWidth >= 768 && screen.screenWidth < 1140) {
            setDevice("tablet");
        } else {
            setDevice("desktop");
        }
    }, [screen.screenWidth]);

    return { device }
}