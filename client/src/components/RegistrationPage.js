import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Form, Button } from "react-bootstrap"
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
	submit = () => {
		axios({
			url: 'http://localhost:3000/registration',
			method: 'POST',
			data: {
				"firstname": this.state.firstname,
				"lastname": this.state.lastname,
				"gender": this.state.gender,
				"email": this.state.email,
				"password": this.state.password,
				"cpassword": this.state.cpassword
			}
		}).then((response) => {
			this.setState({
				"result": response.data,
			});
			console.log(response.data.register);
		}).catch((error) => {
			console.log(error.response.request);
		})

	};

	handleInputs = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};


	render() {
		return (
			<div>
				<Container>
					<Row style={{ marginTop: "2em", marginBottom: '11.1em' }}>
						<Col className="align-self-center md-6" style={{ paddingBottom: '5em' }}>
							<p style={{ fontSize: '3.32em' }}>Join now and become <u style={{ color: '#1E38BF' }}><strong>Marvellous!</strong></u></p>
						</Col>

						{/* Registration form */}
						{/* TODO: make a route with login */}

						<Col className="align-self-center md-6" style={{ paddingLeft: '4em', paddingTop: '5em' }}>
							<Form style={{ border: "1px solid #000", padding: "50px 60px", backgroundColor: '#fff', borderRadius: '0.8em' }}>

								<Form.Group controlId="formFirstName">
									<Form.Label>Firstname</Form.Label>
									{/* <Form.Control type="text" placeholder="e.g. Jon"></Form.Control> */}
									<Form.Control type="text" name="firstname" id="firstname" placeholder="e.g. Jon" value={this.state.firstname} onChange={this.handleInputs} />
								</Form.Group>

								<Form.Group controlId="formLastName">
									<Form.Label>Lastname</Form.Label>
									{/* <Form.Control type="text" placeholder="e.g. Doe"></Form.Control> */}
									<Form.Control type="text" name="lastname" id="lastname" placeholder="e.g. Doe" value={this.state.lastname} onChange={this.handleInputs} />
								</Form.Group>

								<Form.Group controlId="exampleForm.ControlSelect1">
									<Form.Label>Gender</Form.Label>
									{/* 									<Form.Control as="select">
										<option>Male</option>
										<option>Female</option>
									</Form.Control> */}
									<Form.Control as="select" name="gender" id="gender" value={this.state.gender} onChange={this.handleInputs}>
										<option></option>
										<option>Male</option>
										<option>Female</option>
									</Form.Control>
								</Form.Group>

								<Form.Group controlId="formEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" name="email" id="email" placeholder="jon.doe@example.com" value={this.state.email} onChange={this.handleInputs} />
								</Form.Group>

								<Form.Group controlId="formInputPassword">
									<Form.Label>Password</Form.Label>
									{/* <Form.Control type="password" placeholder="Enter password" name="password" required id="pass"></Form.Control> */}
									<Form.Control type="password" name="password" id="password" value={this.state.password} onChange={this.handleInputs} required ></Form.Control>
								</Form.Group>

								<Form.Group controlId="formComfirmPassword">
									<Form.Label>Confirm Password</Form.Label>
									{/* <Form.Control type="password" placeholder="Confirm password" name="cpassword" required id="cpass"></Form.Control> */}
									<Form.Control type="password" name="cpassword" id="cpassword" value={this.state.cpassword} onChange={this.handleInputs} required ></Form.Control>
								</Form.Group>

								{/* display if error exists */}
								{this.state.result.register}
								<br /><br />
								<Button className="float-right" onClick={this.submit} style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '1.5em' }}>Confirm Sign Up</Button>
								<br></br>
								<br></br>
							</Form>
							<Row>
								<Col style={{ marginTop: '3em', textAlign: "center", verticalAlign: "middle" }}>
									<Button href="/login" variant="outline-light" style={{ backgroundColor: '#F3F6FE', color: "black" }} >Already a user? <strong>Login Now!</strong></Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}

}


