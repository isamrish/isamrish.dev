import { useEffect , useState } from "react";

export const useScreenWidth = () => {
   if(typeof window !== undefined) {
        const [screenWidth, setScreenWidth] = useState<Number | null>(null);
        useEffect(() => {
            const handleScreenWidth = () => {
                setScreenWidth(window.innerWidth);
            }
            window.addEventListener('load', handleScreenWidth);
            window.addEventListener('resize', handleScreenWidth);

            return () => {
                window.removeEventListener('load', handleScreenWidth);
                window.removeEventListener('resize', handleScreenWidth);
            }
        }, []);
        return { screenWidth }
    }
}