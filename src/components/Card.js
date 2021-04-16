import { useChannelPicture } from "../hooks/useChannelPicture";

import {
    durationFormatter,
    viewFormatter,
    publishedAtFormatter,
} from "../lib/formatter";

import "../stylesheets/Card.scss";

const Card = ({ video }) => {
    const [channelPicture] = useChannelPicture(video.snippet.channelId);

    return (
        <div className="card">
            <div className="card-thumbnail">
                <img src={video.snippet.thumbnails.high.url} alt="" />
                <span>{durationFormatter(video.contentDetails.duration)}</span>
            </div>
            <div className="card-title">
                <img src={channelPicture} alt="" />
                <div className="card-title-wrapper">
                    <h2>{video.snippet.title}</h2>
                    <h3>{video.snippet.channelTitle}</h3>
                    <h3>
                        {viewFormatter(video.statistics.viewCount)}·
                        {publishedAtFormatter(video.snippet.publishedAt)}
                    </h3>
                </div>
            </div>
            {console.log(video)}
        </div>
    );
};

export default Card;
