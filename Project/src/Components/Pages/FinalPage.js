import SpotifyPlayer from "react-spotify-player";

const size = {
  width: 700,
  height: 400,
};

function FinalPage(props) {

  const uri = "spotify:playlist:" + props.spotify;

  const result = (props.spotify.length === 0) ? (<div/>) : (
    <div>
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

  return(result);
}

export default FinalPage;
