import { useSelector } from "react-redux";

import ViewSkeleon from "../components/ViewSkeleton";

import { isEmpty } from "../lib/empty";

const View = () => {
    const video = useSelector((state) => state.video);

    return (
        <>
            {isEmpty(video) ? (
                <ViewSkeleon />
            ) : (
                <div className="view-wrapper">
                    <div>
                        <iframe
                            src={`//www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default View;
