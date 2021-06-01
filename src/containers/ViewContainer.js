import View from "../components/View";
import ViewInforamtion from "../components/ViewInformation";
import Comments from "../components/Comments";

import "../stylesheets/ViewContainer.scss";

const ViewContainer = () => {
    return (
        <section className="view-container">
            <View />
            <ViewInforamtion />
            <Comments />
        </section>
    );
};

export default ViewContainer;
