import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { useChannelPicture } from "../hooks/useChannelPicture";

import { storeVideoId } from "../store/video";

import {
    durationFormatter,
    viewFormatter,
    publishedAtFormatter,
} from "../lib/formatter";

import "../stylesheets/Card.scss";

const Card = ({ video }) => {
    const [channelPicture] = useChannelPicture(video.snippet.channelId);

    const dispatch = useDispatch();
    const storing = useCallback((videoId) => {
        dispatch(storeVideoId(videoId));
    }, []);

    return (
        <div className="card">
            <div className="card-thumbnail" onClick={() => storing(video.id)}>
                <img src={video.snippet.thumbnails.high.url} alt="" />
                <span>{durationFormatter(video.contentDetails.duration)}</span>
            </div>
            <div className="card-title">
                <img src={channelPicture} alt="" />
                <div
                    className="card-title-wrapper"
                    onClick={() => storing(video.id)}
                >
                    <h2>{video.snippet.title}</h2>
                    <h3>{video.snippet.channelTitle}</h3>
                    <h3>
                        {viewFormatter(video.statistics.viewCount)}·
                        {publishedAtFormatter(video.snippet.publishedAt)}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Card);
