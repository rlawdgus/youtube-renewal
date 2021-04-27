import { useState } from "react";

import Card from "../components/Card";

const VideoListSidebar = ({ videoList, lastCard }) => {
    const [checked, setChecked] = useState(false);

    return (
        <section className="video-list-sidebar-container">
            <input
                type="checkbox"
                id="video-list"
                onClick={() => setChecked(!checked)}
            />
            <label htmlFor="video-list">{checked ? "Close" : "Newly"}</label>
            <div className="video-list-sidebar">
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
            <label htmlFor="video-list" className="dim"></label>
        </section>
    );
};

export default VideoListSidebar;
