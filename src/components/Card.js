import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useChannelPicture } from "../hooks/useChannelPicture";

import { storeVideo } from "../store/video";

import {
    durationFormatter,
    countFormatter,
    beforeFormatter,
} from "../lib/formatter";

import "../stylesheets/Card.scss";

const Card = ({ video, lastCard }) => {
    const [channelInfo] = useChannelPicture(video.snippet.channelId);

    const dispatch = useDispatch();
    const storing = useCallback(() => {
        dispatch(
            storeVideo({
                ...video,
                ...channelInfo,
            })
        );
    }, [channelInfo]);

    return (
        <div className="card" ref={lastCard}>
            <div className="card-thumbnail" onClick={() => storing(video)}>
                <img src={video.snippet.thumbnails.high.url} alt="" />
                <span>{durationFormatter(video.contentDetails.duration)}</span>
            </div>
            <div className="card-title">
                <img src={channelInfo.channelPicture} alt="" />
                <div className="card-title-wrapper" onClick={() => storing()}>
                    <h2>{video.snippet.title}</h2>
                    <h3>{video.snippet.channelTitle}</h3>
                    <h3>
                        {`조회수 ${countFormatter(
                            video.statistics.viewCount
                        )}회`}{" "}
                        · {beforeFormatter(video.snippet.publishedAt)}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Card);
