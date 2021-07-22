import { useEffect , useState } from "react";

export const useScreenWidth = () => {
   // TODO: fix it for mobile
    const [screenWidth, setScreenWidth] = useState(800);

    useEffect(() => {
        if(typeof window !== undefined) {
            const handleScreenWidth = () => {
                setScreenWidth(window.innerWidth);
            }
            window.addEventListener('load', handleScreenWidth);
            window.addEventListener('resize', handleScreenWidth);

            return () => {
                window.removeEventListener('load', handleScreenWidth);
                window.removeEventListener('resize', handleScreenWidth);
            }
        }

    }, []);

    return { screenWidth }

}