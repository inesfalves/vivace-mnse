function Video(props) {
  return props.url.length === 0 ? (
    <div />
  ) : (
    <div>
      <iframe
        className="player"
        width="550"
        height="325"
        src={props.url}
        frameBorder="0"
        allowFullScreen
        title="Embedded video"
      />
    </div>
  );
}

export default Video;
