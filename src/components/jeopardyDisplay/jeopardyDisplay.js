import React from "react";
import AnswerField from "../answerField/AnswerField.js";
import "./jeopardyDisplay.css";

function jeopardyDisplay(props) {
  let score = props.score;

  if (props.category && props.category.title) {
    props.category = props.category.title;
  }

  if (props.chosenQuestion === "question1") {
    return (
      <div>
        <h3>Category: {props.category}</h3>
        <h3>Question: {props.question}</h3>
        <h3>Value: {props.value}</h3>
        <AnswerField
          actualAnswer={props.actualAnswer}
          getNewQuestion={props.getNewQuestion}
          getNewQuestions={props.getNewQuestions}
          answerIsCorrect={props.answerIsCorrect}
          answerIsIncorrect={props.answerIsIncorrect}
        />
        <h3>Player's Score: {score}</h3>
      </div>
    );
  }

  if (props.chosenQuestion === "question2") {
    return (
      <div>
        <h3>Category: {props.category2}</h3>
        <h3>Question: {props.question2}</h3>
        <h3>Value: {props.value2}</h3>
        <AnswerField
          actualAnswer={props.actualAnswer2}
          getNewQuestion={props.getNewQuestion}
          getNewQuestions={props.getNewQuestions}
          answerIsCorrect={props.answerIsCorrect}
          answerIsIncorrect={props.answerIsIncorrect}
        />
        <h3>Player's Score: {score}</h3>
      </div>
    );
  }

  if (props.chosenQuestion === "question3") {
    return (
      <div>
        <h3>Category: {props.category3}</h3>
        <h3>Question: {props.question3}</h3>
        <h3>Value: {props.value3}</h3>
        <AnswerField
          actualAnswer={props.actualAnswer3}
          getNewQuestion={props.getNewQuestion}
          getNewQuestions={props.getNewQuestions}
          answerIsCorrect={props.answerIsCorrect}
          answerIsIncorrect={props.answerIsIncorrect}
        />
        <h3>Player's Score: {score}</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>Choose A Category!</h3>
      <div className="questionSelectionList">
        <ul>
          <div className="question1" onClick={props.setToQuestion1}>
            <li>{props.category}</li>
          </div>
          <div className="question2" onClick={props.setToQuestion2}>
            <li>{props.category2}</li>
          </div>
          <div className="question3" onClick={props.setToQuestion3}>
            <li>{props.category3}</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default jeopardyDisplay;
