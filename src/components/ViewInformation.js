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
        </div>
    );
};

export default ViewInforamtion;
