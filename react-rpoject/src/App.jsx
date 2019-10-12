import React from 'react';

import Login from './components/Login';

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig.js';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  render(){
    return(
      <header>
        <Title />
        <Login
            user={this.props.user}
            signInWithGoogle={this.props.signInWithGoogle}
            signOut={this.props.signOut} 
        />
      </header>
    )
  }
};

const Title = () => {
    return (
        <h1>React Quiz!</h1>
    )
};

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(App);