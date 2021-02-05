import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { dialogClose } from "../../store/dialog";

import style from "./Dialog.module.scss";
import classnames from "classnames/bind";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const cx = classnames.bind(style);

const Dialog: React.FC = () => {
    const dialog = useSelector((state: any) => state.dialog);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(dialogClose());
    };

    return (
        <Modal
            open={dialog.open}
            onClose={onClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={dialog.open}>
                <div className={cx("modal-wrapper")}>
                    <h2 id="transition-modal-title">{dialog.title}</h2>
                    <p id="transition-modal-description">
                        {dialog.description}
                    </p>
                </div>
            </Fade>
        </Modal>
    );
};

export default Dialog;
