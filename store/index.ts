import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
import videos from "./videos";
import dialog from "./dialog";

const rootReducer = combineReducers({
    videos,
    dialog,
});

export function* rootSaga() {
    yield all([]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
