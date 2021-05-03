import VideoList from "../components/VideoList";
import VideoListSidebar from "../components/VideoListSidebar";

import { useVideoList } from "../hooks/useVideoList";
import { useLastCard } from "../hooks/useLastCard";
import { useWindowSize } from "../hooks/useWindowSize";

import "../stylesheets/VideoListContainer.scss";

const VideoListContainer = () => {
    const [videoList, setVideoList, nextPageToken] = useVideoList();

    const [lastCard] = useLastCard(videoList, setVideoList, nextPageToken);

    const widowSize = useWindowSize();

    return (
        <>
            {widowSize.width >= 1024 ? (
                <VideoList videoList={videoList} lastCard={lastCard} />
            ) : (
                <VideoListSidebar videoList={videoList} lastCard={lastCard} />
            )}
        </>
    );
};

export default VideoListContainer;
