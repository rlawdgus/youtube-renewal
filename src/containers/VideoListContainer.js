import VideoList from "../components/VideoList";
// import VideoListSidebar from "../components/VideoListSidebar";

import { useVideoList } from "../hooks/useVideoList";
import { useLastCard } from "../hooks/useLastCard";

import "../stylesheets/VideoListContainer.scss";

const VideoListContainer = () => {
    const [videoList, setVideoList, nextPageToken] = useVideoList();

    const [lastCard] = useLastCard(videoList, setVideoList, nextPageToken);

    return (
        <>
            <VideoList videoList={videoList} lastCard={lastCard} />
            {/* <VideoListSidebar videoList={videoList} lastCard={lastCard} /> */}
        </>
    );
};

export default VideoListContainer;
