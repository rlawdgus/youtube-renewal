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

import styles from "./Card.module.scss";
import classnames from "classnames/bind";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const cx = classnames.bind(styles);

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
            <div className={cx("thumb-wrapper")}>
                <Link href={`${Path.main.watch}?video_id=${video.id}`}>
                    <a>
                        <img src={video.thumbnail} alt="" />
                        <span className={cx("running-time")}>
                            {durationFormatter(video.duration)}
                        </span>
                    </a>
                </Link>
            </div>
            <div className={cx("title-wrapper")}>
                <div className={cx("profile")}>
                    <Link
                        href={`${Path.main.channel}?channel_id=${video.channelId}`}
                    >
                        <a>
                            {profile === undefined ? (
                                <AccountCircleIcon style={{ fontSize: 40 }} />
                            ) : (
                                <img src={profile} alt="" />
                            )}
                        </a>
                    </Link>
                </div>
                <div className={cx("title-area")}>
                    <Link href={`${Path.main.watch}?video_id=${video.id}`}>
                        <a>
                            <div className={cx("title")}>{video.title}</div>
                            <div className={cx("channel-name")}>
                                {video.channelTitle}
                            </div>
                            <div className={cx("info")}>{`${viewFormatter(
                                video.viewCount
                            )} · ${publishedAtFormatter(
                                video.publishedAt
                            )}`}</div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
