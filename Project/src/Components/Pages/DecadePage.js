import "../../App.css";
import { useState } from "react";
import VideoPage from "./VideoPage";
import Timeline from "../Timeline";
import {decadesData} from "../../data";
import HistoryInfo from "../HistoryInfo";
import FinalPage from "./FinalPage";

function DecadePage() {
  const [decadeIndex, setDecadeIndex] = useState(0);
  const [isVideoPage, setIsVideoPage] = useState(!(decadesData[0].video.length === 0));

  const decrementDecade = () => {
      if(decadeIndex > 0) {
          setDecadeIndex((prev) => prev - 1);
          console.log(decadeIndex);
      }
  };

  const incrementDecade = () => {
      if(decadeIndex < decadesData.length - 1) {
          setDecadeIndex((prev) => prev + 1);
          console.log(decadeIndex);
      }
  };

  let decadeData = decadesData[decadeIndex];

  const checkIsVideo = () => {
      setIsVideoPage(!(decadeData.video.length === 0));
      console.log(isVideoPage);
  };

  const decrementButton = () => {
      decrementDecade();
      checkIsVideo();
  }

  const incrementButton = () => {
      incrementDecade();
      checkIsVideo();
  }

  return (
    <div className="DecadePage">
      <VideoPage title={decadeData.title} url={decadeData.video} className={isVideoPage ? "" : "invisible"}/>
      <HistoryInfo title={decadeData.title} description={decadeData.description} image={decadeData.image} className={isVideoPage ? "invisible" : ""}/>
      <FinalPage title={decadeData.title} description={decadeData.description} spotify={decadeData.spotify}/>
      <Timeline className="timeline" progress={decadeIndex * 5} />
      <button onClick={decrementButton}>&lt;</button>
      <button onClick={incrementButton}>&gt;</button>
    </div>
  );
}

export default DecadePage;
