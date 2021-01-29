import { useDispatch } from "react-redux";

import { dialogOpen } from "../store/dialog";

const useDialog = () => {
    const dispatch = useDispatch();

    const openDialog = (title: string, description: any) => {
        dispatch(dialogOpen(title, description));
    };

    return openDialog;
};

export default useDialog;
