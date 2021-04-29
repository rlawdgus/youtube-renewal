import View from "../components/View";

import { useSelector } from "react-redux";

import "../stylesheets/ViewContainer.scss";

const ViewContainer = () => {
    const video = useSelector((state) => state.video);

    return (
        <section className="view-container">
            <div className="view-wrapper">
                <View videoId={video.id} />
            </div>
        </section>
    );
};

export default ViewContainer;
