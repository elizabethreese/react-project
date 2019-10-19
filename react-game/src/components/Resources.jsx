import React from 'react';

const Resources = (props) => {
    
    return (
        <div className="Resources">
            <h2>Extra Learning Resources</h2>
            <h3>Still Need Practice? Check out these additional resources:</h3>
            <ul>
                <li><a href="https://reactjs.org/docs/getting-started.html">Official React Documentation</a></li>
                <li><a href="https://github.com/enaqx/awesome-react">Collection of Cool React Features</a></li>
                <li><a href="https://github.com/markerikson/react-redux-links">React & Redux Tutorials from Mark Erikson</a></li>
                <li><a href="https://www.freecodecamp.org/news/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6/">Free Code Camp React Learning Track</a></li>
                <li><a href="https://www.skptricks.com/2018/07/react-js-quiz-react-js-interview.html">Interview Questions Source</a></li>
            </ul>
        </div>
    )
}

export default Resources;