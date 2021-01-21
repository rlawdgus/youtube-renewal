import axios from "axios";

import Path from '../path'

const KEY: string = "AIzaSyCshtUyMgrQ3QjhfQfHOeigO_sZdG_GBlk";

export const getRecentlyVideos = async () => {
    const URL: string = `${Path.api}/videos`;
    const config = {
        params: {
            key: KEY,
            part: "id,snippet,contentDetails,statistics",
            chart: "mostPopular",
            maxResults: 20,
        },
    };

    const response = await axios.get(URL, config);

    return response;
};
