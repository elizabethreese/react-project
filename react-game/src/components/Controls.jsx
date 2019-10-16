import React from 'react';
import { data } from "../questions.js";
import Button from "./Button";

class Controls extends React.Component {

    constructor() {
        super();

                // Bind 'this' to the checkAnswer method
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    nextQuestion(){
        // If this is the last question, finish the quiz. Else, go to the next question
        if(this.props.id === data.Questions.length)
        {
            this.props.finishQuiz();
        }
        else
        {
            this.props.nextQuestion();
        }
    }

    render() {
        return (
            <div className="controls">
                <Button onClick={this.props.restartQuiz} class="Restart-Button" text="Restart" />
                <Button onClick={this.nextQuestion} class="Next-Button" text="Next Question" />
                <Button onClick={this.props.finishQuiz} class="Finish-Button" text="Finish Game!" />
            </div>
        )
    }
}

export default Controls;