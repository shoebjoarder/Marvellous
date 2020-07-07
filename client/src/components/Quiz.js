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

	handleCourse = (e) => {
		e.preventDefault();
		this.props.history.push('/course')
	}

	render() {
		return (
			<Container>
				<Row style={{ marginTop: "2.75em", marginBottom: '11.4em' }}>
					<Col className="align-self-center" style={{ border: "1px solid #000", padding: "50px 60px", backgroundColor: '#fff', borderRadius: '0.8em', marginTop: "3em", boxShadow: '2px 2px 4px #000000' }}>

						<p style={{ fontSize: '3em' }}>{this.state.title}</p>
						<Button onClick={this.handleBrowse} variant="outline-light" style={{ fontSize: '1.3em', backgroundColor: '#FFFFFF', color: "#8A8A8A" }} >&lt; Back to courses</Button>
						<p style={{ paddingBottom: '1em' }}>Quiz</p>
					</Col>
				</Row>
			</Container>
		)
	}
}