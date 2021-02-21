import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";

import { getProfilePicture } from "../../api/youtube";

import { Video } from "../../lib/interfaces";
import {
    viewFormatter,
    durationFormatter,
    publishedAtFormatter,
} from "../../lib/formatter";

import Path from "../../path";

import style from "./Card.module.scss";
import classnames from "classnames/bind";
import { AccountCircle } from "@material-ui/icons";

const cx = classnames.bind(style);

interface CardProps {
    video: Video;
}

const Card: React.FC<CardProps> = ({ video }) => {
    const [profile, setProfile] = useState<string>();
    const callGetProfilePicture = useCallback(async () => {
        //loading-on
        try {
            const response = await getProfilePicture(video.channelId);

            if (response.status === 200) {
                setProfile(
                    response.data.items[0].snippet.thumbnails.default.url
                );
            }
        } catch (e) {
            console.log(e);
        }
        //loading-off
    }, []);

    useEffect(() => {
        callGetProfilePicture();
    }, []);

    return (
        <div className={cx("card")}>
            <Link href={`${Path.main.watch}?video_id=${video.id}`}>
                <a>
                    <div
                        className={cx("thumbnail")}
                        style={{ backgroundImage: `url(${video.thumbnail})` }}
                    >
                        <span className={cx("running-time")}>
                            {durationFormatter(video.duration)}
                        </span>
                    </div>
                </a>
            </Link>
            <div className={cx("title-wrapper")}>
                <Link
                    href={`${Path.main.channel}?channel_id=${video.channelId}`}
                >
                    <a className={cx("profile")}>
                        {profile === undefined ? (
                            <AccountCircle
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    color: "white",
                                }}
                            />
                        ) : (
                            <img src={profile} alt="" />
                        )}
                    </a>
                </Link>
                <Link href={`${Path.main.watch}?video_id=${video.id}`}>
                    <a>
                        <div className={cx("title-area")}>
                            <div className={cx("title")}>{video.title}</div>
                            <div className={cx("channel")}>
                                {video.channelTitle}
                            </div>
                            <div className={cx("info")}>{`${viewFormatter(
                                video.viewCount
                            )} · ${publishedAtFormatter(
                                video.publishedAt
                            )}`}</div>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Card;
