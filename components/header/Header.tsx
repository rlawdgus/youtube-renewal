import React from "react";
import Link from "next/link";

import Nav from "../nav/Nav";

import Path from "../../path";

import styles from "./Header.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

interface HeaderProps {
    name: string;
    logo?: string;
}

const Header: React.FC<HeaderProps> = ({ name, logo }) => {
    return (
        <header className={cx("header")}>
            <div className={cx("logo-container")}>
                <Link href={`${Path.main.index}`}>
                    <a>
                        <div className={cx("logo")}>
                            <img src={`/${logo}`} alt="" />
                        </div>
                        {name}
                    </a>
                </Link>
            </div>
            <Nav />
        </header>
    );
};

export default Header;
