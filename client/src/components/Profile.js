import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image } from "react-bootstrap"
import NavigationBar from './NavigationBar';
import FooterBar from './FooterBar';
import LineChart from './LineChart'

export default function Profile() {
	return (
		<div>
			<NavigationBar />

			<Container>
				<Row style={{ marginTop: "5em", marginBottom: '21.2em' }}>
					<Col className="col-md-4 text-center">

						{/* TODO: Image, name, date of birth and email should be fetched from database */}
						<Image src="images/userM.png" className="img-fluid visible-lg-block" style={{ marginBottom: '1em' }} />
						<p style={{ fontSize: '2.5em' }}>Shoeb Joarder</p>
						<p>1. January 1992</p>
						<p>E-mail: shoebjoarder@outlook.com</p>
						<a href="/"><Image src="images/edit.png" className="img-fluid visible-lg-block" style={{ marginBottom: '0.3em', height: '1.5em' }} /><strong style={{ color: "black", paddingLeft: "0.2em" }}>Edit Profile</strong></a>
					</Col>
					<Col className="align-self-center" style={{ paddingLeft: '4em' }}>
						<p style={{ fontSize: '3em', marginBottom: '1em' }}>Your Progress</p>
						
						{/* TODO: These will be the plots from Dash */}
						<LineChart />
					</Col>
				</Row>
			</Container>

			<FooterBar />
		</div>
	)
}
