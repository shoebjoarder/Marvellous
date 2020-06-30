import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Col, Row, Image, Button } from "react-bootstrap";

import LoginForm from './LoginForm';


export default class LoginChoice extends Component {
	constructor(props) {
		super(props)
		this.state = {
			chooseEmail: false
		}
	}

	handleClick = () => {
		this.props.changeLogin(this.state.emailLogin)
	}

	render() {
		return (
			<div>
				<Container>
					<Row style={{ marginTop: "9.45em", marginBottom: '11.1em' }}>
						<Col className="align-self-center" style={{ paddingBottom: '5em' }}>
							<p style={{ fontSize: '3.5em' }}>Learn to think like a <u style={{ color: '#1E38BF' }}><strong>Programmer</strong></u></p>
							<p style={{ fontSize: '1.5em' }}>All the courses are crafted with the principles of learning in mind</p>
						</Col>
						<Col className="align-self-center" style={{ paddingLeft: '4em', paddingTop: '5em' }}>
							<Row>
								<Button href="/" size='lg' block variant="outline-dark" style={{ borderRadius: '0.7em', boxShadow: '2px 2px 4px #000000', fontSize: '2em' }}><Image src="images/github.png" style={{ height: '1em', width: 'auto', paddingRight: '0.2em', marginBottom: '0.25em' }} />Log in with Github</Button>
							</Row>
							<br></br>
							<Row>
								<Button onClick={this.handleClick} size='lg' block style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '2em' }}>Log in with E-Mail</Button>
							</Row>
							<Row>
								<Col style={{ marginTop: '10em', textAlign: "center", verticalAlign: "middle" }}>
									<p>New user? <a href="/" style={{ color: 'black' }}><strong>Join Now!</strong></a></p>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>		
			</div>
		)
	}
}
