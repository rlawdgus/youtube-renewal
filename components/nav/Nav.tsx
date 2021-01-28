import React from "react";

import styles from "./Nav.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const Nav: React.FC = () => {
    return <nav className={cx("nav")}>Nav</nav>;
};

export default Nav;
