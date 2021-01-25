import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
import video, { videoSaga } from "./video";

const rootReducer = combineReducers({
    video,
});

export function* rootSaga() {
    yield all([videoSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
