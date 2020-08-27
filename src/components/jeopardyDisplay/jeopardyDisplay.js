import React from "react";
import AnswerField from "../answerField/AnswerField.js";
function jeopardyDisplay(props) {
  let category = props.category;
  let question = props.question;
  let value = props.value;
  let score = props.score;
  let actualAnswer = props.actualAnswer

  if (category && category.title) {
    props.category = props.category.title;
  }

  return (
    <div>
      <h3>Category: {category}</h3>
      <h3>Question: {question}</h3>
      <h3>Value: {value}</h3>
      <AnswerField
        actualAnswer={actualAnswer}
        getNewQuestion={props.getNewQuestion}
        answerIsCorrect={props.answerIsCorrect}
        answerIsIncorrect={props.answerIsIncorrect}
      />
      <h3>Player's Score: {score}</h3>
    </div>
  );
}

export default jeopardyDisplay;

