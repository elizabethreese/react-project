import React from "react";
import "../App.css";
import Question from "../components/Question";
import AnswerOptions from "../components/AnswerOptions";
import Button from "../components/Button";
import Resources from "../components/Resources.jsx";
import Finish from "../components/Finish.jsx";
import Login from '../components/Login';
import Title from '../components/Title';
<<<<<<< HEAD
import Welcome from '../components/Welcome';
=======
import Controls from "../components/Controls";
>>>>>>> dev

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig.js';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Quiz extends React.Component {

  render() {

    let showWelcomeScreen = false;
    let showQuestions = false;
    let showFinish = false;

    if(this.props.welcomeScreen)
    {
        showWelcomeScreen = true;
    }
    
    if(!showWelcomeScreen && !this.props.finishQuiz)
    {
        showQuestions = true;
    }

    if(this.props.finishQuiz)
    {
        showFinish = true;
    }

    return(
    <div className="App">
      <header>
        
        <Title />
        <Login
            user={this.props.user}
            signInWithGoogle={this.props.signInWithGoogle}
            signOut={this.props.signOut} 
        />
      </header>
      
        {showWelcomeScreen ? (
             <Welcome></Welcome>
        ) : (<div></div>)}

        {showFinish ? (
            <Finish
            score={this.props.score}>
<<<<<<< HEAD
            </Finish>
        ) : (<div></div>)}

        {showQuestions ? (
            <div>
            <Question id={this.props.questionId} text={this.props.questionText}></Question>
            <AnswerOptions 
                id={this.props.questionId} 
                incrementScore={this.props.onIncrementScore}
                nextQuestion={this.props.onNext}
                finishQuiz={this.props.onFinish}>
            </AnswerOptions>
            </div>
        ) : (<div></div>)}
          <div className="Button-area">
        <Button class="Restart-Button" text="Restart" />
        <Button class="Next-Button" text="Next Question" />
      </div>
=======
        </Finish>
        ) : (
        <div>
          <Question id={this.props.questionId} text={this.props.questionText}></Question>
          <AnswerOptions 
            id={this.props.questionId} 
            incrementScore={this.props.onIncrementScore}
            nextQuestion={this.props.onNext}
            finishQuiz={this.props.onFinish}>
          </AnswerOptions>
        </div>
      )}
          <Controls
            id={this.props.questionId} 
            restartQuiz={this.props.onRestart}
            nextQuestion={this.props.onNext}
            finishQuiz={this.props.onFinish}>
          </Controls>
>>>>>>> dev
      <div className="Resources-area">
        <Resources /> 
      </div>
    </div>
    )
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Quiz);