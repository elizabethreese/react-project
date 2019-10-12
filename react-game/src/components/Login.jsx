import React from 'react';

class Login extends React.Component {
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;
       
        return (
            <div className="App">
                <header className="App-header">
                    {
                        user
                            ? <p>Hello, {user.displayName}</p>
                            : <p>Please sign in.</p>
                    }
                    {
                        user
                            ? <button onClick={signOut}>Sign out</button>
                            : <button onClick={signInWithGoogle}>Sign in with Google</button>
                    }
                </header>
            </div>
        );
    }
};

export default Login