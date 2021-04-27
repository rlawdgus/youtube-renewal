import { useCallback, useEffect, useRef, useState } from "react";

import { requestGetVideoList } from "../api/youtube";

export const useVideoList = () => {
    const [videoList, setVideoList] = useState([]);
    const nextPageToken = useRef();

    const getVideoList = useCallback(async () => {
        const result = await requestGetVideoList();

        if (result.status === 200) {
            setVideoList(result.data.items);
            nextPageToken.current = result.data.nextPageToken;
        }
    }, []);

    useEffect(() => {
        getVideoList();
    }, []);

    return [videoList, setVideoList, nextPageToken];
};
