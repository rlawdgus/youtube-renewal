import Card from "../components/Card";

const VideoList = ({ videoList, lastCard }) => {
    return (
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
    );
};

export default VideoList;
