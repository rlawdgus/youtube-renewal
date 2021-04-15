import React from "react";

import "../stylesheets/VideoListContainer.scss";

const VideoList = () => {
    return (
        <>
            <section className="video-list-container"></section>
            <section className="video-list-sidebar-container">
                <input type="checkbox" id="video-list" />
                <label htmlFor="video-list">Newly</label>
                <div className="video-list-sidebar"></div>
                <label htmlFor="video-list" className="dim"></label>
            </section>
        </>
    );
};

export default VideoList;
