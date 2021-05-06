import View from "../components/View";
import ViewInforamtion from "../components/ViewInformation";

import "../stylesheets/ViewContainer.scss";

const ViewContainer = () => {
    return (
        <section className="view-container">
            <View />
            <ViewInforamtion />
        </section>
    );
};

export default ViewContainer;
