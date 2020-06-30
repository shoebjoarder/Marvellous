import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Form, Button } from "react-bootstrap"
import NavigationBar from './NavigationBar';
import FooterBar from './FooterBar';

export default function RegistrationPage() {
	return (
		<div>
			<NavigationBar />

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
								<Form.Control type="text" placeholder="e.g. Jon"></Form.Control>
							</Form.Group>

							<Form.Group controlId="formLastName">
								<Form.Label>Lastname</Form.Label>
								<Form.Control type="text" placeholder="e.g. Doe"></Form.Control>
							</Form.Group>

							<Form.Group controlId="exampleForm.ControlSelect1">
								<Form.Label>Gender</Form.Label>
								<Form.Control as="select">
									<option>Male</option>
									<option>Female</option>
								</Form.Control>
							</Form.Group>

							<Form.Group controlId="formEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control type="email" placeholder="e.g. jon.doe@example.com" />
							</Form.Group>

							<Form.Group controlId="formInputPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Enter password" name="password" required id="pass"></Form.Control>
							</Form.Group>

							<Form.Group controlId="formComfirmPassword">
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control type="password" placeholder="Confirm password" name="cpassword" required id="cpass"></Form.Control>
							</Form.Group>
							<br></br>
							<Button className="float-right" href="/" style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '1.5em' }}>Confirm Sign Up</Button>
							<br></br>
							<br></br>
						</Form>
					</Col>
				</Row>
			</Container>

			{/* TODO: give a prop to the FooterBar to make it fix */}
			<FooterBar />
		</div>
	)
}
