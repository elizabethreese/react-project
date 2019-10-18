import React from 'react';
import { data } from "../questions.js";
import Button from "./Button";

class Controls extends React.Component {

    constructor() {
        super();
    }

    render() {

        let lastQuestion = false;

        if(this.props.id === data.Questions.length)
        {
            lastQuestion = true;
        }
        

        return (
            <div className="controls">
                <Button onClick={this.props.restartQuiz} class="Restart-Button" text="Restart" />
                { !this.props.quizFinished && !lastQuestion ? (
                    <Button onClick={this.props.nextQuestion} class="Next-Button" text="Next Question" />
                    ) : (<div></div>)}
                { !this.props.quizFinished ? (
                    <Button onClick={this.props.finishQuiz} class="Finish-Button" text="Finish Game!" />
                    ) : (<div></div>)}
            </div>
        )
    }
}

export default Controls;