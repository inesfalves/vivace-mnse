import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Audio(props) {
  return props.audio.length === 0 ? (
    <div />
  ) : (
    <div>
      <AudioPlayer
        layout="horizontal-reverse"
        controls
        customAdditionalControls={[]}
        customVolumeControls={[]}
        showJumpControls="false"
        src={props.audio}
      ></AudioPlayer>
    </div>
  );
}

export default Audio;
