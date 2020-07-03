import React from 'react'
import { Container, Col, Row, Image } from "react-bootstrap"
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
			gender: ""
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



	render() {
	
		return (
			<div>
				<Container>
					<Row style={{ marginTop: "5em", marginBottom: '21.2em' }}>
						<Col className="col-md-4 text-center">

							{/* TODO: Image, name, date of birth and email should be fetched from database */}
							
							<Image src="/images/userM.png" className="img-fluid visible-lg-block" style={{ marginBottom: '1em' }} />

							<p style={{ fontSize: '2.5em' }}>{this.state.firstname} {this.state.lastname}</p>

							{/* TODO: Birth year needed */}
							{/* <p>1. January 1992</p> */}

							<p>E-mail: {this.state.email} </p>

							<a href="/"><Image src="images/edit.png" className="img-fluid visible-lg-block" style={{ marginBottom: '0.3em', height: '1.5em' }} /><strong style={{ color: "black", paddingLeft: "0.2em" }}>Edit Profile</strong></a>
						</Col>

						<Col className="align-self-center" style={{ paddingLeft: '4em' }}>
							<p style={{ fontSize: '3em', marginBottom: '1em' }}>Your Progress</p>

							{/* TODO: These will be the plots from Dash */}
							<LineChart />
						</Col>
					</Row>
				</Container>
			</div>
		)
	}

}
