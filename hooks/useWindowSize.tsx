import { useEffect, useState } from "react";

type window = {
    width: number;
    height: number;
};

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<window>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const resize = (): void => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener("resize", resize);

        resize();

        return () => window.removeEventListener("resize", resize);
    }, []);

    return windowSize;
};

export default useWindowSize;
