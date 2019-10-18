import React from 'react';
import { data } from "../questions.js";
import Button from "./Button";
import { updateDatabase, getCurrentUserData } from "../dataStorage";

class Controls extends React.Component {

    constructor() {
        super();

                // Bind 'this' to the checkAnswer method
        this.nextQuestion = this.nextQuestion.bind(this);
        this.finishQuiz = this.finishQuiz.bind(this);
    }

    nextQuestion(){
        // If this is the last question, finish the quiz. Else, go to the next question
        if(this.props.id === data.Questions.length)
        {
            this.props.finishQuiz();
            updateDatabase(this.props.score);
        }
        else
        {
            this.props.nextQuestion();
        }
    }

    finishQuiz(){
        this.props.finishQuiz()
        updateDatabase(this.props.score);
    
    }

    render() {
        return (
            <div className="controls">
                <Button onClick={this.props.restartQuiz} class="Restart-Button" text="Restart" />
                <Button onClick={this.nextQuestion} class="Next-Button" text="Next Question" />
                <Button onClick={this.finishQuiz} class="Finish-Button" text="Finish Game!" />
            </div>
        )
    }
}

export default Controls;