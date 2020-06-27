import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image, Button } from "react-bootstrap"
import NavigationBar from './NavigationBar';
import FooterBar from './FooterBar';

export default function LoginPage() {
	return (
		<div>
			<NavigationBar />

			<Container id='features'>
				<Row style={{ marginTop: "9.75em", marginBottom: '11.1em' }}>
					<Col className="align-self-center" style={{ paddingBottom: '5em'}}>
						<p style={{ fontSize: '4em' }}>Learn to think like a <u style={{ color: '#1E38BF' }}>programmer</u></p>
						<p style={{ fontSize: '1.5em' }}>All the courses are crafted with the principles of learning in mind</p>
					</Col>
					<Col className="align-self-center" style={{ paddingLeft: '4em', paddingTop: '5em' }}>
						<Row>
							<Button href="/" size='lg' block variant="outline-dark" style={{ borderRadius: '0.7em', boxShadow: '2px 2px 4px #000000', fontSize: '2em' }}><Image src="images/github.png" style={{ height: '1em', width: 'auto', paddingRight: '0.2em', marginBottom: '0.25em' }} />Log in with Github</Button>
						</Row>
						<br></br>
						<Row>
							<Button href="/" size='lg' block style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '2em' }}>Log in with E-Mail</Button>
						</Row>
						<Row>
							<Col style={{ marginTop: '10em', textAlign: "center", verticalAlign: "middle" }}>
								<p>New user? <u><strong>Join Now!</strong></u></p>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>

			{/* TODO: give a prop to the FooterBar to make it fix */}
			<FooterBar />
		</div>
	)
}
