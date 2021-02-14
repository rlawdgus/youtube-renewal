import { createAction, handleActions } from "redux-actions";

const STORE_VIDEO = "videos/STORE_VIDEO" as const;

export const storeVideo = createAction(STORE_VIDEO, (videos: any[]) => videos);

type VideoAction = ReturnType<typeof storeVideo>;

interface VideoState {
    videos: any[];
}

const initialState: VideoState = {
    videos: [],
};

const videos = handleActions(
    {
        [STORE_VIDEO]: (state: VideoState, action: VideoAction) => ({
            ...state,
            videos: action.payload,
        }),
    },
    initialState
);

export default videos;
