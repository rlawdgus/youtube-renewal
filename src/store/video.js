import { createAction, handleActions } from "redux-actions";

const STORE_VIDEO = "video/STORE_VIDEO";

export const storeVideo = createAction(STORE_VIDEO);

const initialState = {};

const video = handleActions(
    {
        [STORE_VIDEO]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
    },
    initialState
);

export default video;
