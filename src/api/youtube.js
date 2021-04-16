import axios from "axios";

const URL = "https://www.googleapis.com/youtube/v3";
const KEY = "AIzaSyCshtUyMgrQ3QjhfQfHOeigO_sZdG_GBlk";

export const requestGetVideoList = async () => {
    const config = {
        params: {
            key: KEY,
            part: "id,snippet,contentDetails,statistics,player",
            chart: "mostPopular",
            maxResults: 1,
        },
    };

    const response = await axios.get(`${URL}/videos`, config);

    return response;
};

export const requestGetChannelPicture = async (channelId) => {
    const config = {
        params: {
            key: KEY,
            part: "snippet",
            id: channelId,
        },
    };

    const response = await axios.get(`${URL}/channels`, config);

    return response;
};
