import "../../App.css";
import { useState, useEffect } from "react";
import Timeline from "../Timeline";
import { decadesData } from "../../decadesInfo";
import {data} from "../../data";
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
     return (typeof data[pageIndex][0][propName] !== 'undefined') ? data[pageIndex][0][propName] : "";
  }

  /*const setIsQuizPage = (value) => {
      isQuizPage = value;
  }*/

  const incrementPage = () => {
    if (pageIndex < data.length-1) {
        setPageIndex(pageIndex + 1);
    }
  };

    const decrementPage = () => {
        if (pageIndex > 0) {
            setPageIndex(pageIndex - 1);
        }
    };

  const incrementButton = () => {
      incrementPage();
      console.log("pageIndex = ", pageIndex);
      //setIsQuizPage((pageIndex) % 2 === 1);
      console.log("isQuiz = ", isQuizPage);
      //pageData = data[pageIndex];
  }

    const decrementButton = () => {
        decrementPage();
        console.log("pageIndex = ", pageIndex);
        //setIsQuizPage(pageIndex % 2 === 1);
        console.log("isQuiz = ", isQuizPage);
        //pageData = data[pageIndex];
    }

  /*useEffect(() => {
      checkIsQuizPage();
    pageData = data[pageIndex];
  })*/

    return (

        <div className="historyInfo">
            <Button
                buttonClass={"leftButton"}
                name={leftArrow}
                event={decrementButton}
            >
                &lt;
            </Button>
                <div>
                    <QuizPage
                        index={pageIndex}
                        quiz={isQuizPage()}
                    />
                    <Timeline className="timeline" progress={pageIndex * (100 / 14)} />
                </div>
                <div>
                    <HistoryInfo
                        index={pageIndex}
                        quiz={isQuizPage()}
                        title={getPageData("title")}
                        description={getPageData("description")}
                        image={getPageData("image")}
                    />
                    <FinalPage
                        index={pageIndex}
                        quiz={isQuizPage()}
                        title={getPageData("title")}
                        description={getPageData("description")}
                        spotify={getPageData("spotify")}
                    />
                    <Timeline className="timeline" progress={pageIndex * (100 / 14)} />
                </div>
            <Button
                buttonClass={"rightButton"}
                name={rightArrow}
                event={incrementButton}
            >
                &lt;
            </Button>
        </div>
    );


  /*return isQuizPage ? (
      <div className="historyInfo">
        <Button
            buttonClass={"leftButton"}
            name={leftArrow}
            event={decrementPage}
        >
          &lt;
        </Button>
        <div>
          <QuizPage
              index={pageIndex}
          />
          <Timeline className="timeline" progress={pageIndex * (100 / 14)} />
        </div>
        <Button
            buttonClass={"rightButton"}
            name={rightArrow}
            event={incrementPage}
        >
          &lt;
        </Button>
      </div>
  ) : (
      <div className="historyInfo">
      <Button
        buttonClass={"leftButton"}
        name={leftArrow}
        event={decrementPage}
      >
        &lt;
      </Button>
      <div>
        <HistoryInfo
          index={pageIndex}
          title={pageData[0].title}
          description={pageData[0].description}
          image={pageData[0].image}
        />
        <FinalPage
          title={pageData[0].title}
          description={pageData[0].description}
          spotify={pageData[0].spotify}
        />
        <Timeline className="timeline" progress={pageIndex * (100 / 14)} />
      </div>
      <Button
        buttonClass={"rightButton"}
        name={rightArrow}
        event={incrementPage}
      >
        &lt;
      </Button>
    </div>
  );*/
}

export default DecadePage;
