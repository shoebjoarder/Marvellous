import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Container,
	Col,
	Row,
	Form,
	Button,
	Alert
} from "react-bootstrap"
import axios from 'axios'

export default class RegistrationPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			firstname: "",
			lastname: "",
			gender: "",
			email: "",
			password: "",
			cpassword: "",
			result: ""
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		axios({
			url: 'http://localhost:3000/registration',
			method: 'POST',
			data: {
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				gender: this.state.gender,
				email: this.state.email,
				password: this.state.password,
				cpassword: this.state.cpassword
			}
		}).then((response) => {
			const data = response.data
			this.setState({
				result: data,
			});
			// This needs to be removed later
			console.log(this.state.result)
			if (this.state.result.success) {
				this.setState({
					firstname: "",
					lastname: "",
					gender: "",
					email: "",
					password: "",
					cpassword: "",
					result: []
				})
				this.props.history.push('/signin')
			}
		}).catch((error) => {
			console.log(error.response.request);
		})
	};

	handleLogin = (e) => {
		e.preventDefault();
		this.props.history.push('/login')
	}

	handleInputs = (e) => {
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

		const NameError = (
			<Alert variant="danger">
				{this.state.result.name}
			</Alert>
		)

		return (
			<div>
				<Container>
					<Row style={{ marginTop: "2em", marginBottom: '11.1em' }}>
						<Col className="align-self-center md-6" style={{ paddingBottom: '5em' }}>
							<p style={{ fontSize: '3.32em' }}>Join now and become <u style={{ color: '#1E38BF' }}><strong>Marvellous!</strong></u></p>
						</Col>
						<Col className="align-self-center md-6" style={{ paddingLeft: '4em', paddingTop: '5em' }}>
							<Form style={{ border: "1px solid #fff", padding: "50px 60px", backgroundColor: '#fff', borderRadius: '0.8em', WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 20px -1px rgba(0,0,0,0.75)' }}>

								<Form.Group controlId="formFirstName">
									<Form.Label>Firstname</Form.Label>
									<Form.Control type="text" name="firstname" id="firstname" placeholder="e.g. Jon" value={this.state.firstname} onChange={this.handleInputs} required />
								</Form.Group>

								{/* display if error exists */}
								{this.state.result.name ? NameError : null}

								<Form.Group controlId="formLastName">
									<Form.Label>Lastname</Form.Label>
									<Form.Control type="text" name="lastname" id="lastname" placeholder="e.g. Doe" value={this.state.lastname} onChange={this.handleInputs} required />
								</Form.Group>

								{/* display if error exists */}
								{this.state.result.name ? NameError : null}

								<Form.Group controlId="exampleForm.ControlSelect1">
									<Form.Label>Gender</Form.Label>
									<Form.Control as="select" name="gender" id="gender" defaultValue="Choose..." value={this.state.gender} onChange={this.handleInputs} required>
										<option>Not specified</option>
										<option>Male</option>
										<option>Female</option>
									</Form.Control>
								</Form.Group>

								<Form.Group controlId="formEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" name="email" id="email" placeholder="jon.doe@example.com" value={this.state.email} onChange={this.handleInputs} required />
								</Form.Group>

								{/* display if error exists */}
								{this.state.result.email ? EmailError : null}

								<Form.Group controlId="formInputPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" name="password" id="password" value={this.state.password} onChange={this.handleInputs} required ></Form.Control>
								</Form.Group>

								<Form.Group controlId="formComfirmPassword">
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control type="password" name="cpassword" id="cpassword" value={this.state.cpassword} onChange={this.handleInputs} required ></Form.Control>
								</Form.Group>

								{/* display if error exists */}
								{this.state.result.password ? PasswordError : null}

								<Button className="float-right" onClick={this.handleSubmit} style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 5px -1px rgba(0,0,0,0.75)', fontSize: '1.5em' }}>Confirm Sign Up</Button>
								<br></br>
								<br></br>
							</Form>
							<Row>
								<Col style={{ marginTop: '3em', textAlign: "center", verticalAlign: "middle" }}>
									<Button onClick={this.handleLogin} variant="outline-light" style={{ backgroundColor: '#F3F6FE', color: "black" }} >Already a user? <strong>Login Now!</strong></Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}

}