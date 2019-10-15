import React from 'react';
import { data } from "../questions.js";
import Button from "./Button";

class AnswerOptions extends React.Component {

    constructor() {
        super();

        // Bind 'this' to the checkAnswer method
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    checkAnswer(event) {
        event.preventDefault();

        // Get the current question from the data
        const question = data.Questions[this.props.id - 1]
        var correctAnswer = question.correctAnswer;

        // Check if the answer is correct. If it is, send an increment score dispatch
        if (event.target.id === correctAnswer) 
        {
            this.props.incrementScore();
        }

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
        // Get the current question from the data
        const question = data.Questions[this.props.id - 1]
        // Map the answer options to html to return
        var answerOptions = question.answers.map(answer => {
            return (
                    <li className = "AnswerContainer" key={answer.id.toString()}>
                        <Button 
                            class="answer-option" 
                            onClick={this.checkAnswer}
                            text={answer.text}
                            id={answer.id}>
                        </Button>
                    </li>  
            )
        })

        return (
            <div className="answer-options">
                <ul className="answer-options-list">
                    {answerOptions}
                </ul>
            </div>
        )
    }
}

export default AnswerOptions;