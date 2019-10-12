import React from 'react';
import { data } from "../questions.js";

class Question extends React.Component {

    render() {
        const question = data.Questions[this.props.id - 1]
        return (
<<<<<<< HEAD
            <div className = "QuestionContianer">
                <p>ID {this.props.id}</p>
=======
            <div>
                <p>Question number: {this.props.id}</p>
>>>>>>> origin/question-answers
                <br/>
                <p className= "Question" >{question.text}</p>
            </div>
        )
    }
}

export default Question;