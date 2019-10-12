let initialState = {
  loggedIn: false,
  questionId: 0,
  score: 0, 
  finishGame: false,
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
  } else if (action.type === "NEXT_QUESTION") {
    return {
      ...state,
      questionId: state.questionId + 1
    };
  } else if (action.type === "RESTART") {
    return {
      ...state,
      questionId: 1
    };
  } else if (action.type === "FINISH_GAME") {
    return {
      ...state,
      score: 0, 
      finishGame: true,
      // currently unfinished. will put in state when connected to api
    };
  }
  return state;
};

export default mainReducer;
