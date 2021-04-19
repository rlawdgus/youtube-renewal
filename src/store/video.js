import { createAction, handleActions } from "redux-actions";

const VIDEO_ID = "video/VIDEO_ID";

export const storeVideoId = createAction(VIDEO_ID);

const initialState = {
    id: "",
};

const video = handleActions(
    {
        [VIDEO_ID]: (state, action) => ({
            ...state,
            id: action.payload,
        }),
    },
    initialState
);

export default video;
