import View from "../components/View";

import "../stylesheets/ViewContainer.scss";

const ViewContainer = () => {
    return (
        <section className="view-container">
            <div className="view-wrapper">
                <View />
            </div>
        </section>
    );
};

export default ViewContainer;
