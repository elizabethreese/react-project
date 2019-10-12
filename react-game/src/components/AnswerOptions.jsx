import React from 'react';
import { data } from "../questions.js";

class Question extends React.Component {
    render() {
        // Get the current question from the data
        const question = data.Questions[this.props.id - 1]
        // Map the answer options to html to return
        var answerOptions = question.answers.map(answer => {
            return (
                    <li className = "AnswerContainer" key={answer.id.toString()}>
                        <button className="answer-option">{answer.text}</button>
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

export default Question;