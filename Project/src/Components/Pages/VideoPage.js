import Timeline from "../Timeline.js";

function VideoPage(props) {
  return (
    <div>
      <h1 className="Home-header">VERY IMPORTANT EVENT</h1>
      <hr></hr>
      <iframe
        className="player"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/9ZkuqRGeLJM`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <Timeline className="timeline" progress={0}></Timeline>;
    </div>
  );
}

export default VideoPage;
