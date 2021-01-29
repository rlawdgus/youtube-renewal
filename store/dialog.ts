import { createAction, handleActions } from "redux-actions";

const OPEN = "dialog/OPEN" as const;
const CLOSE = "dialog/CLOSE" as const;

export const dialogOpen = createAction(
    OPEN,
    (title: string, description: any) => ({ title, description })
);
export const dialogClose = createAction(CLOSE);

type DialogActions =
    | ReturnType<typeof dialogOpen>
    | ReturnType<typeof dialogClose>;

interface DialogState {
    open: boolean;
    title: string;
    description: any;
}

const initialState: DialogState = {
    open: false,
    title: "",
    description: "",
};

const dialog = handleActions(
    {
        [OPEN]: (state: DialogState, action: DialogActions) => {
            const { title, description } = action.payload;

            return {
                ...state,
                open: true,
                title,
                description,
            };
        },
        [CLOSE]: (state: DialogState) => ({
            ...state,
            open: false,
        }),
    },
    initialState
);

export default dialog;
