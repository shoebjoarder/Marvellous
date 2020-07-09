import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap"
// import { quizData } from "./quizData";
import axios from 'axios'
import "../index.css"

// TODO: Need to think about "Gathering points for each quiz" and store according to the 
class Quiz extends React.Component {
	state = {
		id: "",
		title: "",
		quizData: [],
		currentQuestion: 0,
		myAnswer: null,
		options: [],
		score: 0,
		disabled: true,
		isEnd: false
	};

	componentDidMount() {
		const token = JSON.parse(localStorage.getItem("selectedCard"));
		let courseID = token['_id']['$oid'];
		this.setState({
			id: courseID,
			title: token['title']
		});
		this.getQuizData(courseID);
	}

	getQuizData = (courseID) => {
		axios({
			url: 'http://localhost:3000/getQuiz',
			method: 'POST',
			data: {
				id: courseID
			}
		}).then((response) => {
			this.setState({
				// TODO: quiz_1 gives only first quiz. Needs upgrade to dynamically add more quizzes
				quizData: response.data.quiz1,
			});
			// console.log(response.data)
			// console.log(this.state.quizData[0].question)
			this.setState({
				questions: this.state.quizData[this.state.currentQuestion].question,
				answer: this.state.quizData[this.state.currentQuestion].answer,
				options: this.state.quizData[this.state.currentQuestion].options
			})
		}).catch((error) => {
			console.log(error.response.request);
		})
	};


	nextQuestionHandler = () => {
		// console.log('test')
		const { myAnswer, answer, score } = this.state;

		if (myAnswer === answer) {
			this.setState({
				score: score + 1
			});
		}

		this.setState({
			currentQuestion: this.state.currentQuestion + 1
		});
		console.log(this.state.currentQuestion);
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.state.currentQuestion !== prevState.currentQuestion) {
			this.setState(() => {
				return {
					disabled: true,
					questions: this.state.quizData[this.state.currentQuestion].question,
					options: this.state.quizData[this.state.currentQuestion].options,
					answer: this.state.quizData[this.state.currentQuestion].answer
				};
			});
		}
	}
	//check answer
	checkAnswer = answer => {
		this.setState({ myAnswer: answer, disabled: false });
	};
	finishHandler = () => {
		if (this.state.currentQuestion === this.state.quizData.length - 1) {
			this.setState({
				isEnd: true
			});
		}
		if (this.state.myAnswer === this.state.answer) {
			this.setState({
				score: this.state.score + 1
			});
		}
	};
	render() {
		const { options, myAnswer, currentQuestion, isEnd } = this.state;

		if (isEnd) {
			return (
				// TODO: Need to change it to "show correct answers" after each question
				<Container>
					<Row style={{ marginTop: "2.75em", marginBottom: '11.4em' }}>
						<Col className="align-self-center" style={{ padding: "50px 60px", backgroundColor: '#fff', borderRadius: '0.8em', marginTop: "3em", WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 20px -1px rgba(0,0,0,0.75)' }}>

							<div className="result">
								<h3>Game Over your Final score is {this.state.score} points </h3>
								<div>
									The correct answer's for the questions was
            			<ul>
										{this.state.quizData.map((item, index) => (
											<li className="ui floating message options" key={index}>
												{item.answer}
											</li>
										))}
									</ul>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			);
		} else {
			return (
				<Container>
					<Row style={{ marginTop: "2.75em", marginBottom: '11.4em' }}>
						<Col className="align-self-center" style={{ padding: "7em 8em", backgroundColor: '#fff', borderRadius: '0.8em', marginTop: "3em", WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 20px -1px rgba(0,0,0,0.75)' }}>
							<div className="App">
								<p style={{ fontSize: '3em' }}>{this.state.title}</p>
								<p style={{ fontSize: '2em' }}>Quiz 1</p>

								<p style={{ marginBottom: '1em' }}>{`${currentQuestion}/${this.state.quizData.length - 1} remaining `}</p>

								<h2 style={{ marginBottom: '1em' }}>{this.state.questions} </h2>

								{options.map(option => (
									<p
										key={option.id}
										className={`ui floating message options
         ${myAnswer === option ? "selected" : null}
         `}
										onClick={() => this.checkAnswer(option)}
									>
										{option}
									</p>
								))}
								{currentQuestion < this.state.quizData.length - 1 && (
									<div className={"row justify-content-end"} style={{ marginTop: '1.5em', marginRight: '0.6em' }}>
										<Button onClick={this.nextQuestionHandler} disabled={this.state.disabled} size="lg" block style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 5px -1px rgba(0,0,0,0.75)', fontSize: '1.3em', width: '9.5em' }}>Next</Button>
									</div>
								)}
								{/* //adding a finish button */}
								{currentQuestion === this.state.quizData.length - 1 && (
									<div className={"row justify-content-end"} style={{ marginTop: '1.5em', marginRight: '0.6em' }}>
										<Button onClick={this.finishHandler} disabled={this.state.disabled} size="lg" block style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 5px -1px rgba(0,0,0,0.75)', fontSize: '1.3em', width: '9.5em' }}>Finish</Button>
									</div>
								)}
							</div>
						</Col>
					</Row>
				</Container>
			);
		}


	}
}

export default Quiz;
