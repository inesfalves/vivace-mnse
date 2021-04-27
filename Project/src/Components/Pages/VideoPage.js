import Timeline from "../Timeline.js";

function VideoPage(props) {
    const videoUrl = "https://www.youtube.com/embed/" + props.url;
  return (
    <div>
      <h1 className="Home-header">{props.title}</h1>
      <hr/>
      <iframe
        className="player"
        width="853"
        height="480"
        src={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export default VideoPage;
