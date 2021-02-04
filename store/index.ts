import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
import videos from "./videos";
import dialog from "./dialog";
import category from "./category";

const rootReducer = combineReducers({
    videos,
    dialog,
    category,
});

export function* rootSaga() {
    yield all([]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
