import Quiz from "../components/Quiz";
import { connect } from "react-redux";



let matchStateToProps = state => {
  return { ...state };
};

let matchDispatchToProps = dispatch => {
  return {
    onNext: () => dispatch({ type: "NEXT_QUESTION" }),
    onRestart: () => dispatch({ type: "RESTART" }),
    onFinish: () => dispatch({ type: "FINISH_GAME" })
  };
};

export default connect(
  matchStateToProps,
  matchDispatchToProps
)(Quiz);
