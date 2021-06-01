import { useCallback, useEffect, useState } from "react";

import { requestGetComments } from "../api/youtube";

export const useComments = (videoId) => {
    const [comments, setComments] = useState();

    const getComments = useCallback(async () => {
        const result = await requestGetComments(videoId);

        if (result.status === 200) {
            console.log(result);
            setComments(result.data);
        }
    }, []);

    useEffect(() => {
        getComments();
    }, []);

    return [comments];
};
