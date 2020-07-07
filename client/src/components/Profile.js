import React from 'react'
import { Container, Col, Row, Image, Button, Form } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import LineChart from './LineChart'
import jwt_decode from 'jwt-decode'

export default class Profile extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			firstname: "",
			lastname: "",
			email: "",
			gender: "",
			showProgress: true
		}
	}

	componentDidMount() {
		const token = localStorage.usertoken
		const decoded = jwt_decode(token)
		this.setState({
			firstname: decoded.identity.firstname,
			lastname: decoded.identity.lastname,
			email: decoded.identity.email,
			gender: decoded.identity.gender,
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

	handleConfirm = () => {
		this.setState({
			showProgress: true
		})
	}

	handleEdit = () => {
		this.setState({
			showProgress: false
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
				<p style={{ fontSize: '3em', marginBottom: '1em' }}>Change your details</p>
				<br></br>
				<Form>
					<Form.Row>
						<Form.Group as={Col} controlId="formGridEmail">
							<Form.Label>Firstname</Form.Label>
							<Form.Control type="text" name="firstname" id="firstname" placeholder="e.g. Jon" value={this.state.firstname} onChange={this.handleInputs} />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridPassword">
							<Form.Label>Lastname</Form.Label>
							<Form.Control type="text" name="lastname" id="lastname" placeholder="e.g. Doe" value={this.state.lastname} onChange={this.handleInputs} />
						</Form.Group>
					</Form.Row>

					<Form.Group controlId="formGridAddress1">
						<Form.Label>Address</Form.Label>
						<Form.Control placeholder="1234 Main St" />
					</Form.Group>

					<Form.Group controlId="formGridAddress2">
						<Form.Label>Address 2</Form.Label>
						<Form.Control placeholder="Apartment, studio, or floor" />
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridCity">
							<Form.Label>City</Form.Label>
							<Form.Control />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridState">
							<Form.Label>State</Form.Label>
							<Form.Control as="select" defaultValue="Choose...">
								<option>Choose...</option>
								<option>...</option>
							</Form.Control>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridZip">
							<Form.Label>Zip</Form.Label>
							<Form.Control />
						</Form.Group>
					</Form.Row>

					<Button onClick={this.handleConfirm} size="lg" block style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '1.5em', width: '8em' }}>Confirm</Button>
				</Form>
				<br></br>

			</Col >
		)

		const Progress = (
			<Col className="align-self-center" style={{ paddingLeft: '4em' }}>
				<p style={{ fontSize: '3em', marginBottom: '1em' }}>Your Progress</p>
				{/* TODO: These will be the plots from Dash */}
				<LineChart />
			</Col >
		)


		return (
			<div>
				<Container>
					<Row style={{ marginTop: "5em", marginBottom: '21.2em' }}>
						<Col className="col-md-4 text-center">

							{/* TODO: date of birth should be fetched from database */}

							<Image src="./images/no-video.jpg" className="img-fluid visible-lg-block" style={{ marginBottom: '1em' }} />

							<p style={{ fontSize: '2.5em' }}>{this.state.firstname} {this.state.lastname}</p>

							{/* TODO: Birth year needed */}
							{/* <p>1. January 1992</p> */}

							<p>E-mail: {this.state.email} </p>

							<Button onClick={this.handleEdit} variant="outline-light" style={{ fontSize: '1em', backgroundColor: '#F3F6FE', color: "black" }} >
								<Image src="images/edit.png" className="img-fluid visible-lg-block" style={{ marginBottom: '0.3em', height: '1.5em' }} />
								<strong style={{ color: "black", paddingLeft: "0.2em" }}>
									Edit Profile
								</strong>
							</Button>

							{/* <a href="/"><Image src="images/edit.png" className="img-fluid visible-lg-block" style={{ marginBottom: '0.3em', height: '1.5em' }} /><strong style={{ color: "black", paddingLeft: "0.2em" }}>Edit Profile</strong></a> */}
						</Col>
						{this.state.showProgress ? Progress : EditProfile}

					</Row>
				</Container>
			</div>
		)
	}

}
