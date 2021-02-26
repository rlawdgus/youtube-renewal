import { useEffect, useState } from "react";

export type Window = {
    width: number;
    height: number;
};

const useWindowSize = () => {
    if (process.browser) {
        const [windowSize, setWindowSize] = useState<Window>({
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
    } else {
        return null;
    }
};

export default useWindowSize;
