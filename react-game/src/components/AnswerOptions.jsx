import React from 'react';
import { data } from "../questions.js";
import Button from "./Button";

class AnswerOptions extends React.Component {

    constructor() {
        super();

        // You have to bind 'this' to the function so that the function has scope to "this"
        // Or you can make 'handleClick' a variable ... handleClick = () => (...)
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    checkAnswer(event) {
        event.preventDefault();

        // Get the current question from the data
        const question = data.Questions[this.props.id - 1]
        var correctAnswer = question.correctAnswer;

        var isCorrect = false;
        console.log(event.target.id);
        if (event.target.id === correctAnswer) {
          isCorrect = true;
        }
        console.log(isCorrect);
        return isCorrect;
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