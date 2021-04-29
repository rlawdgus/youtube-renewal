const View = ({ videoId }) => {
    return (
        <div className="view-wrapper">
            <div>
                <iframe
                    src={`//www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default View;
