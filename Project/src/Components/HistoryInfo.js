function HistoryInfo(props) {
  const result =
    props.image.length === 0 ? (
      <div />
    ) : (
      <div className="historyInfo">
        <div className="textInfo">
          <h1 className="Home-header">{props.title}</h1>
          <hr />
          <p className="Home-desc">{props.description}</p>
        </div>
        <img
          src={props.image}
          width="400"
          height="480"
          className="artistImage"
        />
      </div>
    );

  return result;
}

export default HistoryInfo;
