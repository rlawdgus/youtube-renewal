import { useCallback, useRef } from "react";

import { useNextVideoList } from "../hooks/useNextVideoList";

export const useLastCard = (videoList, setVideoList, nextPageToken) => {
    const getNextVideoList = async () => {
        const [nextVideoList, newNextPageToken] = await useNextVideoList(
            nextPageToken.current
        );

        setVideoList(videoList.concat(nextVideoList));
        nextPageToken.current = newNextPageToken;
    };

    const observer = useRef();
    const lastCard = useCallback((node) => {
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                getNextVideoList();
            }
        });

        if (node) observer.current.observe(node);
    });

    return [lastCard];
};
