import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";

const rootReducer = combineReducers({
});

export function* rootSaga() {
    yield all([]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
