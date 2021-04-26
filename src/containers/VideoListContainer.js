import { useCallback, useRef, useState } from "react";

import { useVideoList } from "../hooks/useVideoList";

import Card from "../components/Card";

import "../stylesheets/VideoListContainer.scss";

const VideoList = () => {
    const [videoList] = useVideoList();
    const [checked, setChecked] = useState(false);

    const observer = useRef();
    const lastCard = useCallback((node) => {
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                console.log("asd");
            }
        });

        if (node) observer.current.observe(node);
    });

    return (
        <>
            <section className="video-list-container">
                <div className="video-list-wrapper">
                    {videoList.length !== 0 &&
                        videoList.map((video, index) => {
                            if (videoList.length === index + 1)
                                return (
                                    <Card
                                        video={video}
                                        lastCard={lastCard}
                                        key={video.id}
                                    />
                                );
                            else {
                                return <Card video={video} key={video.id} />;
                            }
                        })}
                </div>
            </section>
            <section className="video-list-sidebar-container">
                <input
                    type="checkbox"
                    id="video-list"
                    onClick={() => setChecked(!checked)}
                />
                <label htmlFor="video-list">
                    {checked ? "Close" : "Newly"}
                </label>
                <div className="video-list-sidebar">
                    {videoList.length !== 0 &&
                        videoList.map((video) => (
                            <Card video={video} key={video.id} />
                        ))}
                </div>
                <label htmlFor="video-list" className="dim"></label>
            </section>
        </>
    );
};

export default VideoList;
