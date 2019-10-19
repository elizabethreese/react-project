export const data = {
  Questions: [
    {
      id: 1,
      text: "True or false: JSX is typesafe?",
      answers: [
        {
          id: "a",
          text: "True"
        },
        {
          id: "b",
          text: "False"
        },
      ],
      correctAnswer: "a"
    },
    {
      id: 2,
      text: "React merges the object you provide into the current state using _____.",
      answers: [
        {
          id: "a",
          text: "State"
        },
        {
          id: "b",
          text: "setState()"
        },
      ],
      correctAnswer: "b"
    },
    {
      id: 3,
      text: "Arbitrary inputs of components are called______?",
      answers: [
        {
          id: "a",
          text: "Keys"
        },
        {
          id: "b",
          text: "Elements"
        },
        {
          id: "c",
          text: "Props"
        },
        {
          id: "d",
          text: "Ref"
        }
      ],
      correctAnswer: "c"
    },
    {
      id: 4,
      text: "Which of these needs to be updated to achieve dynamic UI updates?",
      answers: [
        {
          id: "a",
          text: "Props"
        },
        {
          id: "b",
          text: "State"
        },
      ],
      correctAnswer: "b"
    },
    {
      id: 5,
      text: "True or False: State can be initialized when code is loaded or state can be set on event changes.",
      answers: [
        {
          id: "a",
          text: "True"
        },
        {
          id: "b",
          text: "False"
        },
      ],
      correctAnswer: "a"
    },
    {
      id: 6,
      text: "True or False: Componenents cannot refer to other components in their outputs.",
      answers: [
        {
          id: "a",
          text: "True"
        },
        {
          id: "b",
          text: "False"
        },
      ],
      correctAnswer: "b"
    },
    {
      id: 7,
      text: "JSX is faster because it performs ______ while compiling code to JavaScript",
      answers: [
        {
          id: "a",
          text: "Modification"
        },
        {
          id: "b",
          text: "Compression"
        },
        {
          id: "c",
          text: "Encryption"
        },
        {
          id: "d",
          text: "Optimization"
        },
      ],
      correctAnswer: "d"
    }, 
    {
      id: 8,
      text: "A function that does not change its results for the same set of inputs are called _____.",
      answers: [
        {
          id: "a",
          text: "Pure Functions"
        },
        {
          id: "b",
          text: "Impure Functions"
        },
      ],
      correctAnswer: "a"
    },
    {
      id: 9,
      text: "What is the smallest building block of ReactJS?",
      answers: [
        {
          id: "a",
          text: "Elements"
        },
        {
          id: "b",
          text: "Components"
        },
        {
          id: "c",
          text: "Props"
        },
        {
          id: "d",
          text: "None of the above"
        },
      ],
      correctAnswer: "a"
    }, 
    {
      id: 10,
      text: "In React, how can you prevent default behavior?",
      answers: [
        {
          id: "a",
          text: "using revokeDefault()"
        },
        {
          id: "b",
          text: "using preventDefault()"
        },
        {
          id: "c",
          text: "using avoidDefault()"
        },
        {
          id: "d",
          text: "None of the above"
        },
      ],
      correctAnswer: "b"
    }, 
    {
      id: 11,
      text: "React is a _________ library.",
      answers: [
        {
          id: "a",
          text: "back-end JavaScript"
        },
        {
          id: "b",
          text: "front-end JavaScript"
        },
        {
          id: "c",
          text: "front-end CSS"
        },
        {
          id: "d",
          text: "server side"
        },
      ],
      correctAnswer: "b"
    }, 
    {
      id: 12,
      text: "True or False: React uses the real DOM not the virtual DOM.",
      answers: [
        {
          id: "a",
          text: "True"
        },
        {
          id: "b",
          text: "False"
        },
      ],
      correctAnswer: "b"
    }, 
    {
      id: 13,
      text: "Which of the following is the correct ES6 way to include React in your files?",
      answers: [
        {
          id: "a",
          text: "var React = require('react')"
        },
        {
          id: "b",
          text: "include React from 'react'"
        },
        {
          id: "c",
          text: "include React from ('react')"
        },
        {
          id: "d",
          text: "import React from 'react'"
        },
      ],
      correctAnswer: "d"
    }, 
    {
      id: 14,
      text: "Can the parent component change the value of the state?",
      answers: [
        {
          id: "a",
          text: "Yes"
        },
        {
          id: "b",
          text: "No, that is only applicable to props"
        },
        {
          id: "c",
          text: "Yes, but only in certain cases"
        },
        {
          id: "d",
          text: "No, and it is also impossible to do so with props"
        },
      
      ],
      correctAnswer: "b"
    }, 
    {
      id: 15,
      text: "Which of the following is not a case when you should use Refs",
      answers: [
        {
          id: "a",
          text: "To set the state"
        },
        {
          id: "b",
          text: "To manage focus, select text or media playback"
        },
        {
          id: "c",
          text: "To integrate with third party DOM libraries"
        },
        {
          id: "d",
          text: "To trigger imperative animations"
        },
      
      ],
      correctAnswer: "a"
    },
    {
      id: 16,
      text: "Which of the following is something you cannot do with high-order components?",
      answers: [
        {
          id: "a",
          text: "Code reuse, logic and bootstrap extraction"
        },
        {
          id: "b",
          text: "State abstraction and manipulation"
        },
        {
          id: "c",
          text: "Props manipulation"
        },
        {
          id: "d",
          text: "Switch a code snippet from JS to ReactJS"
        },
      
      ],
      correctAnswer: "d"
    }, 
    {
      id: 17,
      text: "Which of the following is not one of the three principles that Redux follows?",
      answers: [
        {
          id: "a",
          text: "Single Source of Truth "
        },
        {
          id: "b",
          text: "Multiple Sources of Truth "
        },
        {
          id: "c",
          text: "State is read-only"
        },
        {
          id: "d",
          text: "Changes are made with pure functions"
        },
      
      ],
      correctAnswer: "b"
    }, 
    {
      id: 18,
      text: "Which of the following is not a component that Redux is composed of?",
      answers: [
        {
          id: "a",
          text: "Action"
        },
        {
          id: "b",
          text: "Reducer"
        },
        {
          id: "c",
          text: "CSS"
        },
        {
          id: "d",
          text: "View"
        },
      
      ],
      correctAnswer: "c"
    }, 
    {
      id: 19,
      text: "True or False: A child component can never send a prop back to the parent.",
      answers: [
        {
          id: "a",
          text: "True"
        },
        {
          id: "b",
          text: "False"
        },
      
      ],
      correctAnswer: "a"
    },
    {
      id: 20,
      text: "Which of the following is not a type of component in react?",
      answers: [
        {
          id: "a",
          text: "Stateful Component"
        },
        {
          id: "b",
          text: "Stateless Component"
        },
        {
          id: "c",
          text: "Statement Component"
        },
      
      ],
      correctAnswer: "c"
    }
  ]
};
