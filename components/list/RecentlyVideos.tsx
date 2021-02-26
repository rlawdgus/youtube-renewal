import React from "react";

import Card from "../card/Card";

import { Video } from "../../lib/interfaces";

import style from "./RecentlyVideos.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(style);

interface VideosProps {
    videos: any[];
}

const Videos: React.FC<VideosProps> = ({ videos }) => {
    return (
        <main className={cx("main")}>
            <h1>Recently</h1>
            <div className={cx("flex-wrapper")}>
                {videos.map((item: any) => {
                    const video: Video = {
                        id: item.id,
                        title: item.snippet.title,
                        thumbnail: item.snippet.thumbnails.high.url,
                        duration: item.contentDetails.duration,
                        channelId: item.snippet.channelId,
                        channelTitle: item.snippet.channelTitle,
                        viewCount: item.statistics.viewCount,
                        publishedAt: item.snippet.publishedAt,
                    };

                    return <Card video={video} key={item.id} />;
                })}
            </div>
        </main>
    );
};

export default Videos;
