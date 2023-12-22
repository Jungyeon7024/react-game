import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: "React는 어떤 라이브러리인가요?",
      options: ["UI 라이브러리", "모두"],
      correctAnswer: "UI 라이브러리",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const AnswerButtonClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  //다시 시작하는 버튼을 누르면 점수와 퀴즈 상태 모두 처음으로 돌아가기
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="container mt-5">
      {showScore ? (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">
              점수 : {score} / {questions.length}
            </h2>
            <button className="btn btn-primary" onClick={restartQuiz}>
              다시 시작
            </button>
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <div className="card">
            <h2>질문 : {currentQuestion + 1}</h2>
            <p>{questions[currentQuestion].question}</p>
          </div>
          {questions[currentQuestion].options.map((option) => (
            <button key={option} onClick={() => AnswerButtonClick(option)}>
              {option}
            </button>
          ))}
          <div></div>
        </div>
      )}
    </div>
  );
};
export default Quiz;
