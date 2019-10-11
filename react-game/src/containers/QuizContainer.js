import Quiz from "../components/Quiz";
import { connect } from "react-redux";

let matchStateToProps = state => {
  return { ...state };
};

let matchDispatchToProps = dispatch => {
  return {
    onNext: () => dispatch({ type: "NEXT_QUESTION" }),
    onRestart: () => dispatch({ type: "RESTART" })
  };
};

export default connect(
  matchStateToProps,
  matchDispatchToProps
)(Quiz);
