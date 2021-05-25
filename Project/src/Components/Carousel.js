import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ImageCarousel(props) {
  return (
    <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
      <div>
        <img
          src={props.image}
          width="300"
          height="500"
          className="artistImage"
        />
        <div class="centered">{props.decade}</div>
      </div>
      <div>
        <img
          src={props.image2}
          width="300"
          height="500"
          style={{ filter: "grayscale(100%)" }}
        />
      </div>
      <div>
        <img
          src={props.image3}
          width="300"
          height="500"
          style={{ filter: "grayscale(100%)" }}
        />
      </div>
      <div>
        <img
          src={props.image4}
          width="300"
          height="500"
          style={{ filter: "grayscale(100%)" }}
        />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
