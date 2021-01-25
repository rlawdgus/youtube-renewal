import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";

import { getRecentlyVideos } from "../api/youtube";

const GET_VIDEO = "video/GET_VIDEO" as const;
const GET_VIDEO_SUCCESS = "video/GET_VIDEO_SUCCESS" as const;
const GET_VIDEO_FAILURE = "video/GET_VIDEO_FAILURE" as const;

const getVideo = createAction(GET_VIDEO, () => undefined);

type VideoAction = ReturnType<typeof getVideo>;

function* getVideoSaga() {
    //yield loading
    try {
        const response = yield call(getRecentlyVideos);
        const { status, data } = response;

        if (status === 200) {
            yield put({ type: GET_VIDEO_SUCCESS, payload: data });
        }
    } catch (e) {
        yield put({ type: GET_VIDEO_FAILURE, payload: e });
    }
    //yield loading
}

export function* videoSaga() {
    yield takeLatest(GET_VIDEO, getVideoSaga);
}

const initState: any[] = [];

const video = handleActions(
    {
        [GET_VIDEO_SUCCESS]: (state: any, action: VideoAction) => ({
            ...state,
            ...action.payload,
        }),
    },
    initState
);

export default video;
