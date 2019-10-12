import React from 'react';
import { data } from "../questions.js";

class Question extends React.Component {

    render() {
        const question = data.Questions[this.props.id - 1]
        return (
            <div className= "QuestionContainer">
                <p>Question number: {this.props.id}</p>
                <br/>
                <p className= "Question" >{question.text}</p>
            </div>
        )
    }
}

export default Question;