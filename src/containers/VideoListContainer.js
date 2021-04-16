import { useVideoList } from "../hooks/useVideoList";

import Card from "../components/Card";

import "../stylesheets/VideoListContainer.scss";

const VideoList = () => {
    const [videoList] = useVideoList();

    return (
        <>
            <section className="video-list-container">
                {videoList.length !== 0 &&
                    videoList.map((video) => (
                        <Card video={video} key={video.id} />
                    ))}
            </section>
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
