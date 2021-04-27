import { requestGetNextVideoList } from "../api/youtube";

export const useNextVideoList = async (nextPageToken) => {
    const result = await requestGetNextVideoList(nextPageToken);

    return [result.data.items, result.data.nextPageToken];
};
