let initialState = {
  loggedIn: false,
  questionId: 1,
  score: 0,
  finishQuiz: false
};

let mainReducer = (state = initialState, action) => {
  if (action.type === "LOGIN") {
    return {
      loggedIn: true,
      ...state
    };
  } else if (action.type === "LOGOUT") {
    return {
      loggedIn: false,
      ...state
    };
  } else if (action.type === "INCREMENT_SCORE") {
    return {
      ...state,
      score: state.score + 1
    };
  } else if (action.type === "NEXT_QUESTION") {
    return {
      ...state,
      questionId: state.questionId + 1
    };
  } else if (action.type === "RESTART") {
    return {
      ...state,
      finishQuiz: false,
      score: 0,
      questionId: 1
    };
  } else if (action.type === "FINISH_QUIZ") {
    return {
      ...state,
      finishQuiz: true
      // currently unfinished. will put in state when connected to api
    };
  }
  return state;
};

export default mainReducer;
