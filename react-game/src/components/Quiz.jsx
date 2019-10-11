import React from "react";
import "../App.css";
import Question from "../components/Question";
import AnswerOptions from "../components/AnswerOptions";
import Button from "../components/Button";
import Resources from "../components/Resources.jsx";

const Quiz = (props) => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
          <Question id={props.questionId} text={props.questionText}></Question>
          <AnswerOptions></AnswerOptions>
      </div>
      <div className="Button-area">
        <Button class="Restart-Button" text="Restart" />
        <Button class="Next-Button" text="Next Question" />
      </div>
      <div className="Resources-area">
        <Resources />
      </div>
    </div>
  );
}

export default Quiz;