import Like from "../components/Like";

import {
    numberFormatter,
    countFormatter,
    publishedAtFormatter,
} from "../lib/formatter";

const ViewInforamtion = ({ video }) => {
    return (
        <div className="view-information">
            {video.snippet.tags !== undefined && (
                <div className="view-information-tag">
                    {video.snippet.tags.map((tag) => `#${tag} `)}
                </div>
            )}
            <div className="view-information-title">{video.snippet.title}</div>
            <div className="view-information-statistic">
                <div className="statistic-view-count">
                    {numberFormatter(video.statistics.viewCount)}·
                </div>
                <div className="statistic-published">
                    {publishedAtFormatter(video.snippet.publishedAt)}
                </div>
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
    );
};

export default ViewInforamtion;
