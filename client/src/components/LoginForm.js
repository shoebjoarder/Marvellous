import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import NavigationBar from './NavigationBar';
import FooterBar from './FooterBar';


export default class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			chooseEmail: true
		}
	}

	handleClick = () => {
		this.props.changeLogin(this.state.chooseEmail)
	}

	render() {
		return (
			<div>
				<Container>
					<Row style={{ marginTop: "9.75em", marginBottom: '11.4em' }}>
						<Col className="align-self-center" style={{ paddingBottom: '5em' }}>
							<p style={{ fontSize: '3.5em' }}>Learn to think like a <u style={{ color: '#1E38BF' }}><strong>Programmer</strong></u></p>
							<p style={{ fontSize: '1.5em' }}>All the courses are crafted with the principles of learning in mind</p>
						</Col>
						<Col className="align-self-center" style={{ paddingLeft: '4em' }}>
							<Button onClick={this.handleClick} variant="outline-light" style={{ backgroundColor: '#F3F6FE', color:"black" }} >&lt; Back to login</Button>
							<Form style={{ border: "1px solid #000", padding: "50px 60px", backgroundColor: '#fff', borderRadius: '0.8em', marginTop: "3em" }}>

								<Form.Group controlId="formEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" />
								</Form.Group>

								<Form.Group controlId="formInputPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" name="password" required id="pass"></Form.Control>
								</Form.Group>

								<br></br>
								<Button className="float-right" href="/" style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '1.5em' }}>Login</Button>
								<br></br>
								<br></br>
							</Form>
						</Col>
					</Row>
				</Container>
			</div >
		)
	}
}
