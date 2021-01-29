import { combineReducers } from "redux";
import { all } from "@redux-saga/core/effects";
import dialog from './dialog'

const rootReducer = combineReducers({
    dialog
});

export function* rootSaga() {
    yield all([]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
