import { useEffect, useState } from "react";

export const useWindowSize = () => {
    if (process.browser) {
        const [windowSize, setWindowSize] = useState({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        const resize = () => {
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
    } else return null;
};
