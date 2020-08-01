import React from 'react'
import {
	Container,
	Col,
	Row,
	Image,
	Button
} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from 'jwt-decode'



export default class LandingPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			firstname: "",
			lastname: ""
		}
	}

	handleJoin = (e) => {
		e.preventDefault();
		this.props.history.push('/registration')
	}

	componentDidMount() {
		if (localStorage.usertoken) {
			const token = localStorage.usertoken
			const decoded = jwt_decode(token)
			this.setState({
				firstname: decoded.identity.firstname,
				lastname: decoded.identity.lastname,
			})
		}
	}

	render() {
		const notLoggedIn = (
			<Button onClick={this.handleJoin} style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 5px -1px rgba(0,0,0,0.75)', fontSize: '2em', paddingLeft: "0.8em", paddingRight: '0.8em' }}>Join Now!</Button>
		)

		const LoggedIn = (
			<p style={{ fontSize: '2.0em' }}>Welcome {this.state.firstname} {this.state.lastname}</p>
		)
		return (
			<div>
				<Container style={{ paddingTop: '2em' }}>
					<Row style={{ marginTop: "5em" }}>
						<Col className="align-self-center">
							<p style={{ fontSize: '4em' }}>Develope your <u style={{ color: '#1E38BF' }}>skills</u></p>

							<p style={{ fontSize: '1.5em' }}>Build qualitative skills in programming with fun video based learning and quizzes!</p>

							<br />

							{localStorage.usertoken ? LoggedIn : notLoggedIn}
						</Col>
						<Col className="d-none d-md-block col-md-6">
							<Image src="images/brain.png" className="img-fluid visible-lg-block" />
						</Col>
					</Row>
					<Row style={{ marginTop: "8em", padding: "4em" }}>
						<Col>
							<hr style={{ color: '#1E38BF', borderTop: "0.05em solid" }}></hr>
						</Col>
					</Row>
				</Container>
				<Container id='features'>
					<Row style={{ marginTop: "5em", marginBottom: '13em' }}>
						<Col className="d-none d-md-block col-md-6">
							<Image src="images/feature.png" className="img-fluid visible-lg-block" />
						</Col>
						<Col className="align-self-center" style={{ paddingLeft: '4em' }}>
							<p style={{ fontSize: '3.5em' }}>See programming in a <u style={{ color: '#1E38BF' }}>new way</u></p>

							<p style={{ fontSize: '1.5em' }}>Marvellous helps you see concepts visually through watching the core features in videos and quizzes that get you to think and help you develope your skills! Our sources show you that programming  is - at its core - a way of thinking</p>

							<br />
						</Col>
					</Row>
				</Container>
			</div>
		)
	}

}
