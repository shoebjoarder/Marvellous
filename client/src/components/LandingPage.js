import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image, Button } from "react-bootstrap"


export default function LandingPage() {
	return (
		<div>
			{/* Landing page body */}
			<Container style={{ paddingTop: '2em' }}>
				<Row style={{ marginTop: "5em" }}>
					<Col className="align-self-center">
						<p style={{ fontSize: '4em' }}>Develope your <u style={{ color: '#1E38BF' }}>skills</u></p>
						<p style={{ fontSize: '1.5em' }}>Build qualitative skills in programming with fun and interactive exploration!</p>
						<br />
						<Button href="/" style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '2em', paddingLeft: "0.8em", paddingRight: '0.8em' }}>Join Now!</Button>
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
				<Row style={{ marginTop: "5em", marginBottom: '13em'}}>
					<Col className="d-none d-md-block col-md-6">
						<Image src="images/feature.png" className="img-fluid visible-lg-block" />
					</Col>
					<Col className="align-self-center" style={{ paddingLeft: '4em' }}>
						<p style={{ fontSize: '3.5em' }}>See programming in a <u style={{ color: '#1E38BF' }}>new way</u></p>
						<p style={{ fontSize: '1.5em' }}>Marvellous helps you see concepts visually and interact with them, and poses questions that get you to think. Our sources show you that programming  is - at its core - a way of thinking</p>
						<br />
						<Button href="/" style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '2em', paddingLeft: "0.8em", paddingRight: '0.8em' }}>Join Now!</Button>
					</Col>
				</Row>
			</Container>
			{/* Landing page end */}
		</div>
	)
}
