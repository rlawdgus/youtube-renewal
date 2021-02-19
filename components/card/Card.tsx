import React from "react";

import style from "./Card.module.scss";
import classnames from "classnames/bind";
import { AccountCircle } from "@material-ui/icons";

const cx = classnames.bind(style);

interface CardProps {
    thumbnail: string;
}

const Card: React.FC<CardProps> = ({ thumbnail }) => {
    console.log(thumbnail);
    return (
        <div className={cx("card")}>
            <div
                className={cx("thumbnail")}
                style={{ backgroundImage: `url(${thumbnail})` }}
            >
                <span className={cx("running-time")}>3:15</span>
            </div>
            <div className={cx("title-wrapper")}>
                <AccountCircle
                    style={{ width: "36px", height: "36px", color: "white" }}
                />
                <div className={cx("title-area")}>
                    <div className={cx("title")}>
                        Titleaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </div>
                    <div className={cx("channel")}>Channel</div>
                    <div className={cx("info")}>1일전 1만회</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
