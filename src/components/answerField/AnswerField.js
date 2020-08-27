import React from "react";
import "../answerField/answerField.css";
import JeopardyService from "../../service/jeopardyService.js";

class AnswerField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualAnswer: this.props.actualAnswer,
      submitted: false,
      userAnswer: "",
    };
  }

  handleChange = (event) => {
    let userAnswer = this.state.userAnswer;
    userAnswer = event.target.value;
    this.setState({
      userAnswer,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitted: true,
    });

    if (this.state.userAnswer === this.props.actualAnswer) {
      this.props.answerIsCorrect();
    } else if (this.state.userAnswer !== this.props.actualAnswer) {
      this.props.answerIsIncorrect();
    }
  };

  resetState = (event) => {
    this.setState({
      actualAnswer: this.props.actualAnswer,
      submitted: false,
      userAnswer: "",
    })

    this.props.getNewQuestion()
  };

  render() {
    console.log(
      "%cACTUAL ANSWER: ",
      "color: red; font-size: 20px",
      this.props.actualAnswer
    );

    if (this.state.submitted) {
      return (
        <div className="AnswerField">
          <div className="AnswerFieldSubmitted">
            <h3>
              {this.state.userAnswer === this.props.actualAnswer
                ? "Your Answer was Correct!"
                : "Your Answer was Incorrect!"}
            </h3>
            <h3>Your Answer: {this.state.userAnswer}</h3>
            <h3>Correct Answer: {this.props.actualAnswer}</h3>
            <button onClick = {this.resetState}>Get Another Question!</button>
          </div>
        </div>
      );
    }

    return (
      <div className="AnswerField">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="answerField">
              <strong>Your Answer:</strong>
            </label>

            <input
              type="text"
              name="answerField"
              value={this.state.userAnswer}
              onChange={this.handleChange}
            />
          </div>

          <button>Submit Answer</button>
        </form>
      </div>
    );
  }
}

export default AnswerField;
