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
  const [isVideoPage, setIsVideoPage] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      checkIsVideo(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    if (tmpIndex !== props.index) {
      setCurrentQuestion(0);
      setIsVideoPage(!(questions[0].video.length === 0));
      setShowScore(false);
      setScore(0);
      setTmpIndex(props.index);
    }
    console.log("props: " + props.index);
    console.log("temp: " + tmpIndex);
  });

  const checkIsVideo = (question) => {
    setIsVideoPage(!(questions[question].video.length === 0));
    console.log(isVideoPage);
  };

  return props.quiz ? (
    <div>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div>
          <h3>
            Question {currentQuestion + 1}/{questions.length}
          </h3>
          <h1 className="Home-header">{questions[currentQuestion].question}</h1>
          <hr />
          {isVideoPage ? (
            <Video url={questions[currentQuestion].video}></Video>
          ) : (
            <Audio audio={questions[currentQuestion].audio}></Audio>
          )}
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, i) => (
              <button
                key={i}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  ) : (
    <div />
  );
}

export default QuizPage;
