function Audio(props) {
  return props.audio.length === 0 ? (
    <div />
  ) : (
    <div>
      <audio controls src={props.audio}></audio>
    </div>
  );
}

export default Audio;
