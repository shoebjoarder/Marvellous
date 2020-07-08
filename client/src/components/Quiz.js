import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap"
import { quizData } from "./quizData";
import "../index.css"

class Quiz extends React.Component {
	state = {
		currentQuestion: 0,
		myAnswer: null,
		options: [],
		score: 0,
		disabled: true,
		isEnd: false
	};

	componentDidMount() {
		this.getQuizData();
	}

	getQuizData = () => {
		

		// console.log(quizData[0].question)
		this.setState(() => {
			return {
				questions: quizData[this.state.currentQuestion].question,
				answer: quizData[this.state.currentQuestion].answer,
				options: quizData[this.state.currentQuestion].options
			};
		});
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
					questions: quizData[this.state.currentQuestion].question,
					options: quizData[this.state.currentQuestion].options,
					answer: quizData[this.state.currentQuestion].answer
				};
			});
		}
	}
	//check answer
	checkAnswer = answer => {
		this.setState({ myAnswer: answer, disabled: false });
	};
	finishHandler = () => {
		if (this.state.currentQuestion === quizData.length - 1) {
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
				<Container>
					<Row style={{ marginTop: "2.75em", marginBottom: '11.4em' }}>
						<Col className="align-self-center" style={{ padding: "50px 60px", backgroundColor: '#fff', borderRadius: '0.8em', marginTop: "3em", WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 20px -1px rgba(0,0,0,0.75)' }}>

							<div className="result">
								<h3>Game Over your Final score is {this.state.score} points </h3>
								<div>
									The correct answer's for the questions was
            			<ul>
										{quizData.map((item, index) => (
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
								<p style={{ fontSize: '3em' }}>React part 2</p>
								<p style={{ fontSize: '2em' }}>Quiz 1</p>

								<p style={{ marginBottom: '1em' }}>{`${currentQuestion}/${quizData.length - 1} remaining `}</p>

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
								{currentQuestion < quizData.length - 1 && (
									<div className={"row justify-content-end"} style={{ marginTop: '1.5em', marginRight: '0.6em' }}>
										<Button onClick={this.nextQuestionHandler} disabled={this.state.disabled} size="lg" block style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 5px -1px rgba(0,0,0,0.75)', fontSize: '1.3em', width: '9.5em' }}>Next</Button>
									</div>
								)}
								{/* //adding a finish button */}
								{currentQuestion === quizData.length - 1 && (
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
