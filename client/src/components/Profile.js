import React from 'react'
import {
	Container,
	Col,
	Row,
	Image,
	Button,
	Form
} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Barchart from './Barchart'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

export default class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			id: "",
			firstname: "",
			lastname: "",
			email: "",
			gender: "",
			street: "",
			city: "",
			province: "",
			zipcode: "",
			showProgress: true,
			password: "",
			cpassword: "",
			result: "",
			score: []
		}
	}

	componentDidMount() {
		const token = localStorage.usertoken
		const decoded = jwt_decode(token)
		let mail = decoded.identity.email

		this.setState({
			firstname: decoded.identity.firstname,
			lastname: decoded.identity.lastname,
			email: decoded.identity.email,
			gender: decoded.identity.gender,
		})
		this.getCourseResults(mail);
		this.getUserAddress(mail);
	}

	getCourseResults = (mail) => {
		axios({
			url: 'http://localhost:3000/getCourseResults',
			method: 'POST',
			data: {
				email: mail
			}
		}).then((response) => {
			if (response.data.results) {
				this.setState({
					score: response.data.results
				})
			} else {
				console.log(response.data.error)
			}
		}).catch((error) => {
			console.log(error.response.request);
		})
	}


	getUserAddress = (mail) => {
		axios({
			url: 'http://localhost:3000/getUserAddress',
			method: 'POST',
			data: {
				email: mail
			}
		}).then((response) => {
			if (response.data.address) {
				this.setState({
					street: response.data.address.street,
					city: response.data.address.city,
					province: response.data.address.province,
					zipcode: response.data.address.zipcode
				});
			}
			else if (response.data.error) {
				this.setState({
					result: response.data.error
				});
			}
		}).catch((error) => {
			console.log(error.response.request);
		})
	}

	setUserDetails = (e) => {
		e.preventDefault()
		axios({
			url: 'http://localhost:3000/setUserDetails',
			method: 'POST',
			data: {
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				email: this.state.email,
				street: this.state.street,
				city: this.state.city,
				province: this.state.province,
				zipcode: this.state.zipcode,
				password: this.state.password,
				cpassword: this.state.cpassword
			}
		}).then((response) => {
			this.setState({
				result: response.data
			})
			if (this.state.result.success) {
				this.setState({
					firstname: this.state.firstname,
					lastname: this.state.lastname,
					email: this.state.email,
					street: this.state.street,
					city: this.state.city,
					province: this.state.province,
					zipcode: this.state.zipcode,
					password: "",
					cpassword: "",
					showProgress: true
				});
			}
		}).catch((error) => {
			console.log(error.response.request);
		})
	}


	choosePicture = (gender) => {
		if (gender === "Male") {
			return "./images/userM.png"
		} else if (gender === "Female") {
			return "./images/userF.png"
		} else {
			return "./images/user.png"
		}
	}


	handleToggle = () => {
		this.setState({
			showProgress: !this.state.showProgress
		})
	}

	handleInputs = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};


	render() {
		const EditProfile = (
			<Col className="align-self-center" style={{ paddingLeft: '4em' }}>
				<p style={{ fontSize: '3em' }}>Change your details</p>
				<br></br>
				<Form>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Firstname</Form.Label>
							<Form.Control type="text" name="firstname" id="firstname" placeholder="e.g. Jon" value={this.state.firstname} onChange={this.handleInputs} required />
							<Form.Control.Feedback type="invalid">
								Please choose your Firstname.
            </Form.Control.Feedback>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Lastname</Form.Label>
							<Form.Control type="text" name="lastname" id="lastname" placeholder="e.g. Doe" value={this.state.lastname} onChange={this.handleInputs} required />
						</Form.Group>
					</Form.Row>

					<Form.Group controlId="formGridAddress1">
						<Form.Label>Address </Form.Label>
						<Form.Control type="text" name="street" id="street" value={this.state.street} onChange={this.handleInputs} placeholder="e.g. Kammerstrasse 206" />
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridCity">
							<Form.Label>City</Form.Label>
							<Form.Control type="text" name="city" id="city" value={this.state.city} onChange={this.handleInputs} placeholder="e.g. Duisburg" />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridState">
							<Form.Label>Province</Form.Label>
							<Form.Control as="select" name="province" id="province" value={this.state.province} onChange={this.handleInputs}>
								<option></option>
								<option>Bavaria</option>
								<option>Lower Saxony</option>
								<option>Baden-Wüttenberg</option>
								<option>North Rhein-Westphalia</option>
								<option>Branderburg</option>
								<option>Mecklenburg-Vorpommern</option>
								<option>Hesse</option>
								<option>Saxony-Anhalt</option>
								<option>Rheineland-Palatinate</option>
								<option>Saxony</option>
								<option>Thuringia</option>
								<option>Schleswig-Holstein</option>
								<option>Saarland</option>
								<option>Berlin</option>
								<option>Hamburg</option>
								<option>Bremen</option>
							</Form.Control>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridZip">
							<Form.Label>Zip</Form.Label>
							<Form.Control type="text" name="zipcode" id="zipcode" value={this.state.zipcode} onChange={this.handleInputs} placeholder="e.g. 47057" />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" name="password" id="password" value={this.state.password} onChange={this.handleInputs} />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Confirm password</Form.Label>
							<Form.Control type="password" name="cpassword" id="cpassword" value={this.state.cpassword} onChange={this.handleInputs} />
						</Form.Group>
					</Form.Row>

					{/* Displays if error exists */}
					{this.state.result.error}

					<div className={"row justify-content-end"} style={{ marginTop: '1.5em', marginRight: '0.6em' }}>
						<Button onClick={this.setUserDetails} size="lg" block style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 5px -1px rgba(0,0,0,0.75)', fontSize: '1.3em', width: '9.5em' }}>Confirm changes</Button>
					</div>
				</Form>
				<br></br>
			</Col >
		)

		const Progress = (
			<Col className="align-self-center" style={{ paddingLeft: '4em' }}>
				<p style={{ fontSize: '3em', marginBottom: '1em' }}>Your Progress</p>
				<Barchart score={this.state.score} />
			</Col >
		)

		const EditProfileButton = (
			<Button onClick={this.handleToggle} variant="outline-light" style={{ fontSize: '1em', backgroundColor: '#F3F6FE', color: "black" }} >
				<Image src="images/edit.png" className="img-fluid visible-lg-block" style={{ marginBottom: '0.3em', height: '1.5em' }} />
				<strong style={{ color: "black", paddingLeft: "0.2em" }}>
					Edit Profile
								</strong>
			</Button>
		)

		const BackToProgressButton = (
			<Button onClick={this.handleToggle} variant="outline-light" style={{ fontSize: '1em', backgroundColor: '#F3F6FE', color: "black" }} >
				<Image src="images/barchart.png" className="img-fluid visible-lg-block" style={{ marginBottom: '0.5em', height: '1.5em' }} />
				<strong style={{ color: "black", paddingLeft: "0.2em" }}>
					Back to Progress
							</strong>
			</Button>

			// <Button onClick={this.handleToProgress} variant="outline-light" style={{ fontSize: '1.3em', backgroundColor: '#F3F6FE', color: "#8A8A8A" }} >&lt; Back to Progress</Button>

		)


		return (
			<div>
				<Container>
					<Row style={{ marginTop: "5em", marginBottom: '21.2em' }}>
						<Col className="col-md-4 text-center">

							<Image src={this.choosePicture(this.state.gender)} className="img-fluid visible-lg-block" style={{ marginBottom: '1em' }} />

							<p style={{ fontSize: '2.5em' }}>{this.state.firstname} {this.state.lastname}</p>

							<p>E-mail: {this.state.email} </p>


							{this.state.showProgress ? EditProfileButton : BackToProgressButton}

						</Col>

						{this.state.showProgress ? Progress : EditProfile}

					</Row>
				</Container>
			</div>
		)
	}

}
