function HistoryInfo(props) {
  return props.quiz || props.image.length === 0 ? (
    <div />
  ) : (
    <div className="historyInfo">
      <div className="textInfo">
        <h1 className="Home-header">{props.title}</h1>
        <hr />
        <p className="Home-desc">{props.description}</p>
      </div>
      <div className="container">
        <img
          src={props.image}
          width="360"
          height="480"
          className="artistImage"
        />
        <div class="centered">{props.decade}</div>
      </div>
    </div>
  );
}

export default HistoryInfo;
