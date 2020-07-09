import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Container,
	Col,
	Row,
	// Image,
	Button
} from "react-bootstrap";


export default class LoginChoice extends React.Component {

	handleJoin = (e) => {
		e.preventDefault();
		this.props.history.push('/registration')
	}

	handleLogin = (e) => {
		e.preventDefault();
		this.props.history.push('/signin')
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
							{/* <Row>
								<Button onClick={this.loginWithGithub} size='lg' block variant="outline-dark" style={{ borderRadius: '0.7em', boxShadow: '2px 2px 4px #000000', fontSize: '2em' }}><Image src="images/github.png" style={{ height: '1em', width: 'auto', paddingRight: '0.2em', marginBottom: '0.25em' }} />Log in with Github</Button>
							</Row>
							<br></br> */}
							<Row>
								<Button onClick={this.handleLogin} size='lg' block style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 5px -1px rgba(0,0,0,0.75)', fontSize: '2em' }}>Log in with E-Mail</Button>
							</Row>
							<Row>
								<Col style={{ marginTop: '10em', textAlign: "center", verticalAlign: "middle" }}>
									<Button onClick={this.handleJoin} variant="outline-light" style={{ backgroundColor: '#F3F6FE', color: "black" }} >New user? <strong>Join Now!</strong></Button>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}

}

