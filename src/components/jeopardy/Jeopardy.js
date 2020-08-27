import React, { Component } from 'react';
//import our service
import JeopardyService from "../../service/jeopardyService.js";
import AnswerField from "../answerField/AnswerField.js"

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
    constructor(props){
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {
                "id": null,
                "answer": "",
                "question": "",
                "value": null,
                "airdate": "",
                "created_at": "",
                "updated_at": "",
                "category_id": null,
                "game_id": null,
                "invalid_count": null,
                "category": {
                    "id": null,
                    "title": "",
                    "created_at": "",
                    "updated_at": "",
                    "clues_count": null,
                }
            },
            score: 0
        }
    }
  //get a new random question from the API and add it to the data object in state
    getNewQuestion = () => {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }

    answerIsCorrect = () => {
        this.setState(
            (state, props) => (
                {score: state.score + Number(state.data.value)}           
            )
        )
    }

    answerIsIncorrect = () => {
        this.setState(
            (state, props) => (
                {score: state.score - Number(state.data.value)}          
            )
        )
    }

  //when the component mounts, get a the first question
    componentDidMount() {
        this.getNewQuestion();
    }
  //display the results on the screen
    render() {
        let category = "Loading..."
        let question = this.state.data.question
        let value = this.state.data.value
        let score = this.state.score
        
        
        if (this.state.data.category && this.state.data.category.title) {
            category = this.state.data.category.title
        }

        return (
            <div>
                <h3>Category: {category}</h3>
                <h3>Question: {question}</h3>
                <h3>Value: {value}</h3>
                <AnswerField 
                    actualAnswer = {this.state.data.answer}
                    getNewQuestion = {this.getNewQuestion}
                    answerIsCorrect = {this.answerIsCorrect}
                    answerIsIncorrect = {this.answerIsIncorrect}
                />
                <h3>Player's Score: {score}</h3>
            </div>
        );
    }
}

export default Jeopardy;