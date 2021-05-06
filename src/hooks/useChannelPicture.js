import { useCallback, useEffect, useState } from "react";

import { requestGetChannelPicture } from "../api/youtube";

export const useChannelPicture = (channelId) => {
    const [channelInfo, setChannelIinfo] = useState({
        channelPicture: "",
        subscriberCount: "",
    });

    const getChannelPicture = useCallback(async (channelId) => {
        const result = await requestGetChannelPicture(channelId);

        if (result.status === 200) {
            setChannelIinfo({
                channelPicture:
                    result.data.items[0].snippet.thumbnails.default.url,
                subscriberCount:
                    result.data.items[0].statistics.subscriberCount,
            });
        }
    }, []);

    useEffect(() => {
        getChannelPicture(channelId);
    }, []);

    return [channelInfo];
};
