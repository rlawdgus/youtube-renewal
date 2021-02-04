import { createAction, handleActions } from "redux-actions";

const UPDATE_CATEGORY = "category/UPDATE_CATEGORY" as const;

export const updateCategory = createAction(UPDATE_CATEGORY, (category: number) => ({
    category,
}));

type CategoryActions = ReturnType<typeof updateCategory>;

interface CategoryState {
    category: number;
}

const initialState: CategoryState = {
    category: Math.floor(Math.random() * 31),
};

const category = handleActions(
    {
        [UPDATE_CATEGORY]: (state: CategoryState, action: CategoryActions) => ({
            ...state,
            ...action.payload,
        }),
    },
    initialState
);

export default category
