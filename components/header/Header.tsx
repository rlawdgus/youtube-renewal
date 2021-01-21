import React from "react";
import Link from "next/link";

import Path from '../../path'

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
            <Link href={`${Path.main.index}`}>
                <a>
                    <div className={cx("logo")}>
                        <img src={`/${logo}`} alt="" />
                    </div>
                    {name}
                </a>
            </Link>
        </header>
    );
};

export default Header;
