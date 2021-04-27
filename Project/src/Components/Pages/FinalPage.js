import SpotifyPlayer from "react-spotify-player";
import Timeline from "../Timeline.js";

const size = {
  width: 700,
  height: 400,
};

function FinalPage() {
  return (
    <div>
      <h1 className="Home-header">TODAY'S TOP HITS</h1>
      <hr></hr>
      <p className="Home-desc">What does music sound like today?</p>
      <div className="player">
        <SpotifyPlayer
          uri="spotify:playlist:37i9dQZF1DXcBWIGoYBM5M"
          size={size}
          view="list"
          theme="black"
        />
      </div>
      <Timeline progress={0}></Timeline>;
    </div>
  );
}

export default FinalPage;
