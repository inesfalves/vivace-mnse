import SpotifyPlayer from "react-spotify-player";

const size = {
  width: 700,
  height: 400,
};

function FinalPage(props) {
  const uri = "spotify:playlist:" + props.spotify;

  return (props.quiz || props.spotify.length === 0) ? (<div/>) : (
      <div className="finalPage">
          <h1 className="Home-header">{props.title}</h1>
          <hr/>
          <p className="Home-desc">{props.description}</p>
          <div className="player">
              <SpotifyPlayer
                  uri={uri}
                  size={size}
                  view="list"
                  theme="black"
              />
          </div>
      </div>
  );
}

export default FinalPage;
