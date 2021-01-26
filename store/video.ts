import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";

import { getRecentlyVideos } from "../api/youtube";

const GET_VIDEO = "video/GET_VIDEO" as const;
const GET_VIDEO_SUCCESS = "video/GET_VIDEO_SUCCESS" as const;
const GET_VIDEO_FAILURE = "video/GET_VIDEO_FAILURE" as const;

const INIT_VIDEO = "video/INIT_VIDEO" as const;
const INIT_VIDEO_SUCCESS = "video/INIT_VIDEO_SUCCESS" as const;
const INIT_VIDEO_FAILURE = "video/INIT_VIDEO_FAILURE" as const;

export const getVideo = createAction(GET_VIDEO, () => undefined);
export const initVideo = createAction(INIT_VIDEO, (list: any) => list);

type VideoAction = ReturnType<typeof getVideo> | ReturnType<typeof initVideo>;

function* getVideoSaga(action: VideoAction) {
    console.log(action);
    //yield loading
    try {
        const response = yield call(getRecentlyVideos);
        const { status, data } = response;

        if (status === 200) {
            yield put({ type: GET_VIDEO_SUCCESS, payload: data });
        }
    } catch (e) {
        yield put({ type: GET_VIDEO_FAILURE, payload: e, error: true });
    }
    //yield loading
}

function* initVideoSaga(action: VideoAction) {
    //yield loading
    try {
        yield put({ type: INIT_VIDEO_SUCCESS, payload: action.payload });
    } catch (e) {
        yield put({ type: INIT_VIDEO_FAILURE, payload: e, error: true });
    }
    //yield loading
}

export function* videoSaga() {
    yield takeLatest(GET_VIDEO, getVideoSaga);
    yield takeLatest(INIT_VIDEO, initVideoSaga);
}

const initState: any[] = [];

const video = handleActions(
    {
        [GET_VIDEO_SUCCESS]: (state: any, action: VideoAction) => ({
            ...state,
            ...action.payload,
        }),
        [INIT_VIDEO_SUCCESS]: (state: any, action: VideoAction) => ({
            state,
            ...action.payload,
        }),
    },
    initState
);

export default video;
