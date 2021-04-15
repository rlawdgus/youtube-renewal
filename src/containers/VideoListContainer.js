import React, { useCallback, useEffect, useState } from "react";

import { requestGetVideoList } from "../api/youtube";

import "../stylesheets/VideoListContainer.scss";

const VideoList = () => {
    const [videoList, setVideoList] = useState([]);
    const getVideoList = useCallback(async () => {
        setVideoList(await requestGetVideoList());
    }, []);
    useEffect(() => {
        getVideoList();
    }, []);

    return (
        <>
            {console.log(videoList)}
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
