import "../../App.css";
//import "./QuizPage.css";
import {useEffect, useState} from "react";
import Video from "../Video";
import {data} from "../../data";

function QuizPage(props) {
    let questions = data[props.index];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [tmpIndex, setTmpIndex] = useState(props.index);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    useEffect(() => {
        if (tmpIndex !== props.index){
            setCurrentQuestion(0);
            setShowScore(false);
            setTmpIndex(props.index);
        }
    });

    return (props.quiz ? (
        /*<div>
            <h1 className="Home-header">{questions.question}</h1>
            <hr/>
            <Video
                url={questionData.video}
                className={hasVideo ? "" : "invisible"}
            />
        </div>*/

        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].question}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    ):
        (
            <div/>
        )

    );
}

export default QuizPage;
