import React from 'react'
import { Container, Col, Row, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Quiz extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "",
			quiz: []
		}
	}
	componentDidMount() {
		const token = JSON.parse(localStorage.getItem("selectedCard"));
		this.setState({
			title: token['title'],
			quiz: token['quiz']
		});
	}

	// TODO: A function to call the quizes


	handleCourse = (e) => {
		e.preventDefault();
		this.props.history.push('/course')
	}

	render() {
		return (
			<Container>
				<Row style={{ marginTop: "2.75em", marginBottom: '11.4em' }}>
					<Col className="align-self-center" style={{ padding: "50px 60px", backgroundColor: '#fff', borderRadius: '0.8em', marginTop: "3em", WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)",  boxShadow: '0px 0px 20px -1px rgba(0,0,0,0.75)' }}>

						<p style={{ fontSize: '3em' }}>{this.state.title}: Quiz</p>

						<Button onClick={this.handleCourse} variant="outline-light" style={{ fontSize: '1.3em', backgroundColor: '#FFFFFF', color: "#8A8A8A" }} >&lt; Back to video</Button>

						<p style={{ paddingBottom: '1em' }}>Quiz</p>
					</Col>
				</Row>
			</Container>
		)
	}
}