const YoutubeId = ({ id, mobile }) => (
    <div className="youtube-responsive">
        <iframe
            className="youtube-responsive__iframe"
            width = {mobile ? "320" : "640"}
            height = {mobile ? "180" : "360"}
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Descomplicando ETF's"
        />
    </div>
);

export default YoutubeId;
