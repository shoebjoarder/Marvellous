import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Container,
	Col,
	Row,
	Form,
	Button,
	Alert
} from "react-bootstrap";
import axios from 'axios'


export default class LoginForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			password: "",
			result: []
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		axios({
			url: 'https://nxgen-backend.herokuapp.com/signin',
			method: 'POST',
			data: {
				email: this.state.email,
				password: this.state.password
			}
		}).then((response) => {
			this.setState({
				result: response.data,
			});
			if (this.state.result.token) {
				localStorage.setItem('usertoken', response.data.token)
				this.setState({
					email: "",
					password: "",
					result: []
				})
				this.props.history.push('/')
			}
		}).catch((error) => {
			console.log(error.response.request);
		})
	};

	handleLogin = (e) => {
		e.preventDefault();
		this.props.history.push('/login')
	}

	handleJoin = (e) => {
		e.preventDefault();
		this.props.history.push('/registration')
	}

	handleInputs = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	render() {
		const EmailError = (
			<Alert variant="danger">
				{this.state.result.email}
			</Alert>
		)

		const PasswordError = (
			<Alert variant="danger">
				{this.state.result.password}
			</Alert>
		)
		return (
			<Container>
				<Row style={{ marginTop: "5.75em", marginBottom: '11.4em' }}>
					<Col className="align-self-center" style={{ paddingBottom: '5em' }}>
						<p style={{ fontSize: '3.5em' }}>Learn to think like a <u style={{ color: '#1E38BF' }}><strong>Programmer</strong></u></p>
						<p style={{ fontSize: '1.5em' }}>All the courses are crafted with the principles of learning in mind</p>
					</Col>
					<Col className="align-self-center" style={{ paddingLeft: '4em' }}>
						<Button onClick={this.handleLogin} variant="outline-light" style={{ backgroundColor: '#F3F6FE', color: "black" }} >&lt; Back to login</Button>

						<Form style={{ border: "1px solid #fff", padding: "50px 60px", backgroundColor: '#fff', borderRadius: '0.8em', marginTop: "3em", WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 20px -1px rgba(0,0,0,0.75)' }}>

							<Form.Group controlId="formEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" name="email" id="email" placeholder="jon.doe@example.com" value={this.state.email} onChange={this.handleInputs} />
							</Form.Group>

							{/* display if error exists */}
							{this.state.result.email ? EmailError : null}

							<Form.Group controlId="formInputPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" name="password" id="password" value={this.state.password} onChange={this.handleInputs} required ></Form.Control>
							</Form.Group>

							{/* display if error exists */}
							{this.state.result.password ? PasswordError : null}

							<br></br>
							<br></br>
							<Button className="float-right" onClick={this.handleSubmit} style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 5px -1px rgba(0,0,0,0.75)', fontSize: '1.5em' }}>Login</Button>
							<br></br>
							<br></br>
						</Form>
						<Row>
							<Col style={{ marginTop: '3em', textAlign: "center", verticalAlign: "middle" }}>
								<Button onClick={this.handleJoin} variant="outline-light" style={{ backgroundColor: '#F3F6FE', color: "black" }} >New user? <strong>Join Now!</strong></Button>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>

		)
	}
}
