function Video(props) {
  return props.url.length === 0 ? (
    <div />
  ) : (
    <div>
      <iframe
        className="player"
        width="597"
        height="336"
        src={props.url}
        src="//www.youtube.com/embed/VNUgsbKisp8?modestbranding=1&autohide=1&showinfo=0&controls=0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default Video;
