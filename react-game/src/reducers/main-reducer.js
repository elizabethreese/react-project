let initialState = {
  questionId: 1,
  score: 0,
  finishQuiz: false, 
  welcomeScreen: true
};

let mainReducer = (state = initialState, action) => {
  if (action.type === "START_GAME") {
    return {
      ...state,
      welcomeScreen: false
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
    };
  }
  return state;
};

export default mainReducer;
