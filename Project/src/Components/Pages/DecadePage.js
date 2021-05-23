import "../../App.css";
import { useState } from "react";
import Timeline from "../Timeline";
import { data } from "../../data";
import HistoryInfo from "../HistoryInfo";
import FinalPage from "./FinalPage";
import Button from "../Button.js";
import leftArrow from "../../left_arrow.jpg";
import rightArrow from "../../right_arrow.jpg";
import QuizPage from "./QuizPage";

function DecadePage() {
  const [pageIndex, setPageIndex] = useState(0);

  const isQuizPage = () => pageIndex % 2 === 1;

  const getPageData = (propName) => {
    return typeof data[pageIndex][0][propName] !== "undefined"
      ? data[pageIndex][0][propName]
      : "";
  };

  const incrementPage = () => {
    if (pageIndex < data.length - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const decrementPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  return (
    <div className="historyInfo">
      {pageIndex === 0 ? (
        <div />
      ) : (
        <Button
          buttonClass={"leftButton"}
          name={leftArrow}
          event={decrementPage}
        >
          &lt;
        </Button>
      )}

      <div>
        <HistoryInfo
          index={pageIndex}
          quiz={isQuizPage()}
          title={getPageData("title")}
          description={getPageData("description")}
          image={getPageData("image")}
          decade={getPageData("title").slice(19, 22)}
        />
        <FinalPage
          index={pageIndex}
          quiz={isQuizPage()}
          title={getPageData("title")}
          description={getPageData("description")}
          spotify={getPageData("spotify")}
        />
        <QuizPage index={pageIndex} quiz={isQuizPage()} />
        <Timeline
          updatePageIndex={(index) => setPageIndex(index)}
          className="timeline"
          progress={pageIndex * (100 / 14)}
        />
      </div>
      {pageIndex === data.length - 1 ? (
        <div style={{ display: "none" }}></div>
      ) : (
        <Button
          buttonClass={"rightButton"}
          name={rightArrow}
          event={incrementPage}
        >
          &lt;
        </Button>
      )}
    </div>
  );
}

export default DecadePage;
