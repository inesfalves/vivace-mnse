import "../../App.css";
import { useEffect, useState } from "react";
import Video from "../Video";
import { data } from "../../data";
import Audio from "../Audio";

function QuizPage(props) {
  let questions = data[props.index];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [tmpIndex, setTmpIndex] = useState(props.index);
  const [isVideoPage, setIsVideoPage] = useState(
    !(questions[0].video.length === 0)
  );
  const [isAudioPage, setIsAudioPage] = useState(
    !(questions[0].audio.length === 0)
  );

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const handleAnswerOptionClick = async (e, isCorrect) => {
    let buttons = document.getElementsByClassName("quizButton");
    if (isCorrect) {
      setScore(score + 1);
      e.target.style.backgroundColor = "#daffc3";
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.pointerEvents = "none";
      }
    } else {
      e.target.style.backgroundColor = "#ffbfbe";
      for (let i = 0; i < buttons.length; i++) {
        if(questions[currentQuestion].answerOptions[i].isCorrect){
          buttons[i].style.backgroundColor = "#daffc3";
        }
        buttons[i].style.pointerEvents = "none";
      }
    }
    await sleep(1300);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.pointerEvents = "auto";
      buttons[i].style.backgroundColor = "#ffffff";
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      checkIsVideo(nextQuestion);
      checkIsAudio(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    if (tmpIndex !== props.index) {
      setCurrentQuestion(0);
      checkIsVideo(0);
      checkIsAudio(0);
      setScore(0);
      setShowScore(false);
      setTmpIndex(props.index);
    }
  });

  const checkIsVideo = (question) => {
    setIsVideoPage(!(questions[question].video.length === 0));
  };

  const checkIsAudio = (question) => {
    setIsAudioPage(!(questions[question].audio.length === 0));
  };

  return props.quiz ? (
    <div>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}!
        </div>
      ) : (
        <div className="quizArea">
          <h3>
            Question {currentQuestion + 1}/{questions.length}
          </h3>
          <h1 className="Home-header">{questions[currentQuestion].question}</h1>
          <div className="quizMedia">
            {isVideoPage ? (
              <Video url={questions[currentQuestion].video} />
            ) : isAudioPage ? (
              <Audio audio={questions[currentQuestion].audio} />
            ) : questions[currentQuestion].image.length === 0 ? (
              <div />
            ) : (
              <img
                src={questions[currentQuestion].image}
                width="550"
                height="325"
              />
            )}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, i) => (
              <button
                className="quizButton"
                key={i}
                onClick={(e) =>
                  handleAnswerOptionClick(e, answerOption.isCorrect, i)
                }
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  ) : (
    <div style={{ display: "none" }} />
  );
}

export default QuizPage;
