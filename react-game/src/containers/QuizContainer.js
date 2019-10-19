import Quiz from "../components/Quiz";
import { connect } from "react-redux";

let matchStateToProps = state => {
  return { ...state };
};

let matchDispatchToProps = dispatch => {
  return {
    onIncrementScore: () => dispatch({ type: "INCREMENT_SCORE" }),
    onNext: () => dispatch({ type: "NEXT_QUESTION" }),
    onRestart: () => dispatch({ type: "RESTART" }),
    onFinish: () => dispatch({ type: "FINISH_QUIZ" }),
    onStartGame: () => dispatch({ type: "START_GAME"})
  };
};

export default connect(
  matchStateToProps,
  matchDispatchToProps
)(Quiz);
