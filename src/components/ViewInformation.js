import Like from "../components/Like";

// import { useChannelPicture } from "../hooks/useChannelPicture";

import {
    numberFormatter,
    countFormatter,
    publishedAtFormatter,
} from "../lib/formatter";

const ViewInforamtion = ({ video }) => {
    // console.log(video);
    // const [channelInfo] = useChannelPicture(video.snippet.channelId);

    return (
        <div className="view-information">
            {video.snippet.tags !== undefined && (
                <div className="view-information-tag">
                    {video.snippet.tags.map((tag) => `#${tag} `)}
                </div>
            )}
            <div className="view-information-title">{video.snippet.title}</div>
            <div className="view-information-statistic-wrapper">
                <div className="view-information-statistic">
                    {`조회수 ${numberFormatter(
                        video.statistics.viewCount
                    )}회 · ${publishedAtFormatter(video.snippet.publishedAt)}`}
                </div>
                <div className="view-information-like">
                    <div className="statistic-like">
                        <Like />
                        {countFormatter(video.statistics.likeCount)}
                    </div>
                    <div className="statistic-dislike">
                        <Like />
                        {countFormatter(video.statistics.dislikeCount)}
                    </div>
                </div>
            </div>
            {/* <div className="view-information-description-wrapper">
                <img src={channelInfo.channelPicture} alt="" />
                <div className="view-information-description">
                    <h2>{video.snippet.channelTitle}</h2>
                    <h3>{`구독자 ${countFormatter(
                        channelInfo.subscriberCount
                    )}명`}</h3>
                    <i>{video.snippet.description}</i>
                </div>
            </div> */}
        </div>
    );
};

export default ViewInforamtion;
