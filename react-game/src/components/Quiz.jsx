import React from "react";
import "../App.css";
import Question from "../components/Question";
import AnswerOptions from "../components/AnswerOptions";
import Button from "../components/Button";
import Resources from "../components/Resources.jsx";
import Finish from "../components/Finish.jsx"


const Quiz = (props) => {

  return (
    <div className="App">
      <header className="App-header"></header>
      { props.finishGame ? (
        <Finish />
      ) : (
        <div>
          <Question id={props.questionId} text={props.questionText}></Question>
          <AnswerOptions></AnswerOptions>
        </div>
      )}
      <div className="Button-area">
        <Button onClick={props.onRestart} class="Restart-Button" text="Restart" />
        <Button onClick={props.onNext} class="Next-Button" text="Next Question" />
        <Button onClick={props.onFinish} class="Finish-Button" text="Finish Game!" />
      </div>
      <div className="Resources-area">
        <Resources /> 
      </div>
    </div>
  );
}

export default Quiz;