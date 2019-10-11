import React from 'react';

import { data } from "../questions.js";

class Question extends React.Component {
    constructor(props) {
        super(props);
      }

    render() {
        const question = data.Questions[this.props.id]
        return (
            <div>
                <p>ID: {this.props.id}</p>
                <br/>
                <p>Question: {question.text}</p>
            </div>
        )
    }
}

export default Question;