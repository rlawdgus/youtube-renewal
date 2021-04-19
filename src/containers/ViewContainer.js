import View from "../components/View";

import { useSelector } from "react-redux";

import "../stylesheets/ViewContainer.scss";

const ViewContainer = () => {
    const videoId = useSelector((state) => state.video.id);

    return (
        <section className="view-container">
            <div className="view-wrapper">
                <View videoId={videoId} />
            </div>
        </section>
    );
};

export default ViewContainer;
