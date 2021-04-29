import View from "../components/View";
import ViewInforamtion from "../components/ViewInformation";
import ViewSkeleon from "../components/ViewSkeleton";

import { useSelector } from "react-redux";

import { isEmpty } from "../lib/empty";

import "../stylesheets/ViewContainer.scss";

const ViewContainer = () => {
    const video = useSelector((state) => state.video);

    return (
        <section className="view-container">
            {isEmpty(video) ? (
                <ViewSkeleon />
            ) : (
                <>
                    <View videoId={video.id} />
                    <ViewInforamtion video={video} />
                </>
            )}
        </section>
    );
};

export default ViewContainer;
