import "../../App.css";
import { Link } from "react-router-dom";
import Button from "../Button.js";
import Image from "../Image.js";
import gaga from "../../Images/Lady-Gaga.png";
import elvis from "../../Images/Elvis_Presley.png";
import play from "../../Images/play_button.png";

function HomePage() {
  return (
    <div className="PageLayout">
      <Image title={elvis}></Image>
      <div className="HomePage">
        <header className="Home-header">
          <h1>VIVACE</h1>
          <p className="Home-desc">
            An interactive timeline for pop music lovers
          </p>
        </header>
        <Link to="/tl">
          <Button buttonClass={"playButton"} name={play} />
        </Link>
        <p className="Home-desc">Press Play to continue</p>
      </div>
      <Image title={gaga}></Image>
    </div>
  );
}

export default HomePage;
