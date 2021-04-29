import { isEmpty } from "../lib/empty";

const ViewInforamtion = ({ video }) => {
    return (
        <div className="view-information">
            {video.snippet.tags !== undefined && (
                <div className="view-information-tag">
                    {video.snippet.tags.map((tag) => `#${tag} `)}
                </div>
            )}
        </div>
    );
};

export default ViewInforamtion;
