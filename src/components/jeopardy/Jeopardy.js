import React, { Component } from "react";
//import our service
import JeopardyService from "../../service/jeopardyService.js";
import JeopardyDisplay from "../jeopardyDisplay/jeopardyDisplay.js";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {
        id: null,
        answer: "",
        question: "",
        value: null,
        airdate: "",
        created_at: "",
        updated_at: "",
        category_id: null,
        game_id: null,
        invalid_count: null,
        category: {
          id: null,
          title: "",
          created_at: "",
          updated_at: "",
          clues_count: null,
        },
      },
      data2: {
        id: null,
        answer: "",
        question: "",
        value: null,
        airdate: "",
        created_at: "",
        updated_at: "",
        category_id: null,
        game_id: null,
        invalid_count: null,
        category: {
          id: null,
          title: "",
          created_at: "",
          updated_at: "",
          clues_count: null,
        },
      },
      data3: {
        id: null,
        answer: "",
        question: "",
        value: null,
        airdate: "",
        created_at: "",
        updated_at: "",
        category_id: null,
        game_id: null,
        invalid_count: null,
        category: {
          id: null,
          title: "",
          created_at: "",
          updated_at: "",
          clues_count: null,
        },
      },
      chosenQuestion: "",
      score: 0,
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion = () => {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  };

  getNewQuestions = () => {
    return this.client.getQuestion().then((result) =>
      this.setState({
        data: result.data[0],
        data2: result.data[1],
        data3: result.data[2],
        chosenQuestion: "",
      })
    );
  };

  answerIsCorrect = () => {
    this.setState((state, props) => ({
      score: state.score + Number(state.data.value),
    }));
  };

  answerIsIncorrect = () => {
    this.setState((state, props) => ({
      score: state.score - Number(state.data.value),
    }));
  };

  setToQuestion1 = () => {
    this.setState((state, props) => ({ chosenQuestion: "question1" }));
  };

  setToQuestion2 = () => {
    this.setState((state, props) => ({ chosenQuestion: "question2" }));
  };

  setToQuestion3 = () => {
    this.setState((state, props) => ({ chosenQuestion: "question3" }));
  };

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestions();
  }
  //display the results on the screen
  render() {
    return (
      <div>
        <JeopardyDisplay
          category={this.state.data.category.title}
          question={this.state.data.question}
          value={this.state.data.value}
          actualAnswer={this.state.data.answer}
          category2={this.state.data2.category.title}
          question2={this.state.data2.question}
          value2={this.state.data2.value}
          actualAnswer2={this.state.data2.answer}
          category3={this.state.data3.category.title}
          question3={this.state.data3.question}
          value3={this.state.data3.value}
          actualAnswer3={this.state.data3.answer}
          chosenQuestion={this.state.chosenQuestion}
          setToQuestion1={this.setToQuestion1}
          setToQuestion2={this.setToQuestion2}
          setToQuestion3={this.setToQuestion3}
          score={this.state.score}
          getNewQuestion={this.getNewQuestion}
          getNewQuestions={this.getNewQuestions}
          answerIsCorrect={this.answerIsCorrect}
          answerIsIncorrect={this.answerIsIncorrect}
        />
      </div>
    );
  }
}

export default Jeopardy;

////Old Return Backup////
// let category = "Loading..."
// let question = this.state.data.question
// let value = this.state.data.value
// let score = this.state.score

// if (this.state.data.category && this.state.data.category.title) {
//     category = this.state.data.category.title
// }

// return (
//     <div>
//         <h3>Category: {category}</h3>
//         <h3>Question: {question}</h3>
//         <h3>Value: {value}</h3>
//         <AnswerField
//             actualAnswer = {this.state.data.answer}
//             getNewQuestion = {this.getNewQuestion}
//             answerIsCorrect = {this.answerIsCorrect}
//             answerIsIncorrect = {this.answerIsIncorrect}
//         />
//         <h3>Player's Score: {score}</h3>
//     </div>
// );
