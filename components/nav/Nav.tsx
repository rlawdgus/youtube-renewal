import React from "react";

import InputBox from "../input/InputBox";

import useInput from "../../hooks/useInput";

import styles from "./Nav.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const Nav: React.FC = () => {
    const [search, onChangeSearch] = useInput();

    return (
        <nav className={cx("nav")}>
            <InputBox
                value={search}
                onChange={onChangeSearch}
                placeholder={"search"}
            />
        </nav>
    );
};

export default Nav;
