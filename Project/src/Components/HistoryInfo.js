import ImageCarousel from "./Carousel.js";

function HistoryInfo(props) {
  return props.quiz || props.image.length === 0 ? (
    <div style={{ display: "none" }}></div>
  ) : (
    <div className="historyInfo">
      <div className="textInfo">
        <h1 className="Home-header">{props.title}</h1>
        <hr />
        <p className="Home-desc">{props.description}</p>
      </div>
      <div className="container">
        <ImageCarousel
            className="carousel"
            decade={props.decade}
            image={props.image}
            image2={props.image2}
            image3={props.image3}
            image4={props.image4}
        />
      </div>
    </div>
  );
}

export default HistoryInfo;
