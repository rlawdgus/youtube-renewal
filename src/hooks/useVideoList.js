import { useCallback, useEffect, useState } from "react";

import { requestGetVideoList } from "../api/youtube";

export const useVideoList = () => {
    const [videoList, setVideoList] = useState([]);

    const getVideoList = useCallback(async () => {
        const result = await requestGetVideoList();

        if (result.status === 200) {
            setVideoList(result.data.items);
        }
    }, []);

    useEffect(() => {
        getVideoList();
    }, []);

    return [videoList];
};
