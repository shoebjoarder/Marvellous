import React from 'react'
import { Container, Col, Row, Card, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import jwt_decode from 'jwt-decode'


export default class Course extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: "",
			title: "",
			desc_1: "",
			desc_2: "",
			quiz: "",
			video: "",
			difficulty: "",
			image: "",
			email: "",
			result: "",
			enrolled: false
		}
	}

	componentDidMount() {
		const decoded = jwt_decode(localStorage.usertoken);
		const token = JSON.parse(localStorage.getItem("selectedCard"));
		let image = ''
		let ident = token['_id']['$oid']
		let mail =  decoded.identity.email
		this.setState({
			id: ident,
			title: token['title'],
			desc_1: token['desc_1'],
			desc_2: token['desc_2'],
			quiz: token['quiz'],
			video: token['video'],
			difficulty: token['difficulty'],
			image: image += '/' + token['image'],
			email: mail
		});
		console.log(ident)
		this.getAlreadyEnrolled(ident, mail)

	}

	handleEnrollNow = (e) => {
		e.preventDefault();
		axios({
			url: 'http://localhost:3000/getEnrolled',
			method: 'POST',
			data: {
				email: this.state.email,
				id: this.state.id
			}
		}).then((response) => {
			this.setState({
				result: response.data,
			});
			console.log(response.data)
			if (response.data.success) {
				this.setState({
					enrolled: true
				});
			}
		}).catch((error) => {
			console.log(error.response.request);
		})
	}

	handleUnenrollNow = (e) => {
		e.preventDefault();
		axios({
			url: 'http://localhost:3000/getUnenrolled',
			method: 'POST',
			data: {
				email: this.state.email,
				id: this.state.id
			}
		}).then((response) => {
			this.setState({
				result: response.data,
			});
			console.log(response.data)
			if (response.data.success) {
				this.setState({
					enrolled: false
				});
			}
		}).catch((error) => {
			console.log(error.response.request);
		})
	}

	getAlreadyEnrolled = (ident, mail) => {
		axios({
			url: 'http://localhost:3000/alreadyEnrolled',
			method: 'POST',
			data: {
				email: mail,
				id: ident
			}
		}).then((response) => {
			console.log(response.data)
			if (response.data.success) {
				this.setState({
					enrolled: true
				});
			} else {
				this.setState({
					enrolled: false
				});
			}
			// This needs to be removed later
			console.log(this.state.enrolled);
		}).catch((error) => {
			console.log(error.response.request);
		})
	}

	handleBrowse = (e) => {
		e.preventDefault();
		this.props.history.push('/browse')
	}

	handleToCourse = (e) => {
		e.preventDefault();
		this.props.history.push('/video')
	}

	render() {
		const NotEnrolled = (
			<Button onClick={this.handleEnrollNow} size="lg" block style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '1.5em' }}>Enroll now!</Button>
		)

		const Enrolled = (
			<Button onClick={this.handleUnenrollNow} size="lg" block style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '1.5em' }}>Unenroll now!</Button>
		)

		const ToCourse = (
			<Button onClick={this.handleToCourse} size="lg" block style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '1.5em', width: '8em' }}>Go to course!</Button>
		)
		
		return (
			<div>
				<Container style={{ marginTop: "5em", marginBottom: '10.2em' }}>
					<Button onClick={this.handleBrowse} variant="outline-light" style={{ fontSize: '1.3em', backgroundColor: '#F3F6FE', color: "#8A8A8A" }} >&lt; Back to courses</Button>
					{/* Course Description */}
					<Row style={{ marginTop: "1em" }}>
						<Col className="align-self-center col-md-8" >
							<p style={{ fontSize: '4em' }}>{this.state.title}</p>
							<p style={{ fontSize: '1.7em', marginBottom: '1em', color: "#8A8A8A" }}>Level: {this.state.difficulty}</p>
							<p style={{ fontSize: '1.7em', marginBottom: '1em' }}>{this.state.desc_1}</p>
							<p style={{ fontSize: '1.2em', color: '#8A8A8A' }}>{this.state.desc_2}</p>
							<br />
							{this.state.enrolled ? ToCourse : null}
						</Col>

						{/* Card */}
						<Col className="d-none d-md-block col-md-4" style={{ padding: '4em 2em' }}>
							<Card style={{ width: '300px', borderRadius: '0.8em', boxShadow: '2px 2px 4px #000000' }}>

								{/* TODO: Image will change dynamically */}
								<Card.Img variant="top" className="mx-auto d-block" style={{ height: '230px', width: '230px' }} src={this.state.image} />

								<Card.Body style={{ padding: '1.5em' }}>
									<Card.Text style={{ fontSize: '1.4em', paddingBottom: '1.2em' }}>
										<Row style={{ color: '#8A8A8A', textAlign: "center" }}>
											<Col>

												{/* TODO: Values will change dynamically */}
												<strong style={{ color: 'black' }}>{this.state.quiz}</strong><br />
											Quizzes
										</Col>
											<Col className="float-right">

												{/* TODO: Values will change dynamically */}
												<strong style={{ color: 'black' }}>{this.state.video}</strong><br />
											Videos
										</Col>
										</Row>
									</Card.Text>

									{/* TODO: This button should change when the student is enrolled */}
									{this.state.enrolled ? Enrolled : NotEnrolled}
									<br></br>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}

}
