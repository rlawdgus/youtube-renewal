import axios from "axios";

const KEY: string = "AIzaSyCshtUyMgrQ3QjhfQfHOeigO_sZdG_GBlk";
const API: string = "https://www.googleapis.com/youtube/v3/";

export const getRecentlyVideos = async () => {
    const URL: string = `${API}videos`;
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
