import axios from "axios";

import Path from "../path";

const KEY: string = "AIzaSyCshtUyMgrQ3QjhfQfHOeigO_sZdG_GBlk";

export const getRecentlyVideos = async () => {
    const URL: string = `${Path.api}/videos`;
    const config = {
        params: {
            key: KEY,
            part: "id,snippet,contentDetails,statistics",
            chart: "mostPopular",
            maxResults: 7,
        },
    };

    const response = await axios.get(URL, config);

    return response;
};

export const getProfilePicture = async (channelID: string) => {
    const URL: string = `${Path.api}/channels`;
    const config = {
        params: {
            key: KEY,
            part: "snippet",
            id: channelID,
        },
    };

    const response = await axios.get(URL, config);

    return response;
};
