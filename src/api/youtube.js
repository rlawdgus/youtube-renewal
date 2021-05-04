import axios from "axios";

const URL = "https://www.googleapis.com/youtube/v3";
const KEY = "AIzaSyCshtUyMgrQ3QjhfQfHOeigO_sZdG_GBlk";

export const requestGetVideoList = async () => {
    const config = {
        params: {
            key: KEY,
            part: "id,snippet,contentDetails,statistics",
            chart: "mostPopular",
            maxResults: 12,
        },
    };

    const response = await axios.get(`${URL}/videos`, config);

    return response;
};

export const requestGetNextVideoList = async (token) => {
    const config = {
        params: {
            key: KEY,
            part: "id,snippet,contentDetails,statistics",
            chart: "mostPopular",
            maxResults: 12,
            pageToken: token,
        },
    };

    const response = await axios.get(`${URL}/videos`, config);

    return response;
};

export const requestGetChannelPicture = async (channelId) => {
    const config = {
        params: {
            key: KEY,
            part: "snippet,statistics",
            id: channelId,
        },
    };

    const response = await axios.get(`${URL}/channels`, config);

    return response;
};

export const requestGetComments = async (videoId) => {
    const config = {
        params: {
            key: KEY,
            part: "id,replies,snippet",
            videoId: videoId,
        },
    };

    const response = await axios.get(`${URL}/commentThreads`, config);

    return response;
};
