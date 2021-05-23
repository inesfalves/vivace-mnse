function Video(props) {
  const videoUrl = "https://www.youtube.com/embed/" + props.url;

  return props.url.length === 0 ? (
    <div />
  ) : (
    <div>
      <iframe
        className="player"
        width="597"
        height="336"
        src={videoUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default Video;
