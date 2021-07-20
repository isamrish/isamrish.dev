import { useEffect , useState } from "react";

export const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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