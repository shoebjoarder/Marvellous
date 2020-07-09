import React from 'react'
import { Container, Col, Row, Image, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player"
import Quiz from './Quiz'


export default class VideoPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "",
			video: false,
			videoNumber: 0,
			quizTime: false
		}
	}
	componentDidMount() {
		const token = JSON.parse(localStorage.getItem("selectedCard"));
		this.setState({
			title: token['title'],
			video: token['video']
		});
	}

	handleCourse = (e) => {
		e.preventDefault();
		this.props.history.push('/course')
	}

	handleQuiz = (e) => {
		e.preventDefault();
		this.props.history.push('/quiz')
	}

	render() {

		const noVideo = (
			<Image src="./images/no-video.jpg" className="img-fluid visible-lg-block " style={{ marginBottom: '1em', width: "100%" }} />
		)

		const Video = (
			<div style={{ position: "relative", paddingTop: "56.25%" }}>
				<ReactPlayer style={{
					position: "absolute", top: "0",
					left: "0"
				}} url={this.state.video} width="100%" height="100%" />
			</div>
		)

		const ButtonQuiz = (
			<div className={"row justify-content-end"} style={{ marginTop: '2.7em', marginRight: '0.6em' }}>
				<Button onClick={this.handleQuiz} size="lg" block style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '1.5em', width: '8em' }}>Take quiz!</Button>
			</div>
		)

		const VideoPlayer = (
			<div>
				<Button onClick={this.handleCourse} variant="outline-light" style={{ fontSize: '1.3em', backgroundColor: '#FFFFFF', color: "#8A8A8A" }} >
					&lt; Back to courses
						</Button>
				<p style={{ paddingBottom: '1em' }}></p>
				{this.state.video ? Video : noVideo}
				{this.state.video ? ButtonQuiz : null}
			</div>
		)

		const itsQuizTime = (
			<div>
				<Quiz />
			</div>
		)
		return (
			<Container>
				<Row style={{ marginTop: "1.75em", marginBottom: '11.4em' }}>
					<Col className="align-self-center" style={{ border: "1px solid #fff", padding: "50px 60px", backgroundColor: '#fff', borderRadius: '0.8em', marginTop: "3em", WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 20px -1px rgba(0,0,0,0.75)' }}>

						<p style={{ fontSize: '3em' }}>{this.state.title}</p>


						{this.state.quizTime ? itsQuizTime : VideoPlayer}

					</Col >
				</Row >
			</Container >
		)
	}
}