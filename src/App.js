import React from "react";

import Header from "./components/Header";

import VideoListContainer from "./containers/VideoListContainer";
import ViewContainer from "./containers/ViewContainer";

import "./stylesheets/reset.css";

const App = () => {
    return (
        <>
            <Header />
            <VideoListContainer />
            <ViewContainer />
        </>
    );
};

export default App;
