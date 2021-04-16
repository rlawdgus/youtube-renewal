import { useCallback, useEffect, useState } from "react";

import { requestGetChannelPicture } from "../api/youtube";

export const useChannelPicture = (channelId) => {
    const [channelPicture, setChannelPicture] = useState();

    const getChannelPicture = useCallback(async (channelId) => {
        const result = await requestGetChannelPicture(channelId);

        if (result.status === 200) {
            setChannelPicture(
                result.data.items[0].snippet.thumbnails.default.url
            );
        }
    }, []);

    useEffect(() => {
        getChannelPicture(channelId);
    }, []);

    return [channelPicture];
};
