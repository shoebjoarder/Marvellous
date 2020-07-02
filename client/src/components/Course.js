import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Card, Button } from "react-bootstrap"


export default function Course() {
	return (
		<div>
			<Container style={{ marginTop: "5em", marginBottom: '10.2em' }}>
				<a href="/browse" style={{ color: '#8A8A8A', fontSize: '1.3em', paddingBottom: '1.5em' }}>&lt; Back to courses</a>

				{/* Course Description */}
				<Row style={{ marginTop: "1em" }}>
					<Col className="align-self-center col-md-8" >
						<p style={{ fontSize: '4em', marginBottom: '1em' }}>Bootstrap Part 2</p>
						<p style={{ fontSize: '1.7em', marginBottom: '1em' }}>Wrap your mind around web development thinking, from simple fundamentals to complex features</p>
						<p style={{ fontSize: '1.2em', color: '#8A8A8A' }}>
							Learn the key ideas of Bootstrap with this interactive course – no coding required!<br /><br />

							This course is ideal for a student who wants to learn the fundamentals, or an early professional who wants to strengthen their knowledge of core Web development concepts.</p>

						<br />
					</Col>

					{/* Card */}
					<Col className="d-none d-md-block col-md-4" style={{ padding: '4em 2em' }}>
						<Card style={{ width: '300px', borderRadius: '0.8em', boxShadow: '2px 2px 4px #000000' }}>

							{/* TODO: Image will change dynamically */}
							<Card.Img variant="top" className="mx-auto d-block" style={{ height: '230px', width: '230px' }} src="./images/bootstrap.png" />

							<Card.Body style={{ padding: '1.5em' }}>
								<Card.Text style={{ fontSize: '1.4em', paddingBottom: '1.2em' }}>
									<Row style={{ color: '#8A8A8A', textAlign:"center" }}>
										<Col>

											{/* TODO: Values will change dynamically */}
											<strong style={{ color: 'black' }}>14</strong><br />
											Quizzes
										</Col>
										<Col className="float-right">

											{/* TODO: Values will change dynamically */}
											<strong style={{ color: 'black' }}>6</strong><br />
											Videos
										</Col>
									</Row>
								</Card.Text>

								{/* TODO: This button should change when the student is enrolled */}
								<Button href="/" size="lg" block style={{ borderRadius: '0.7em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '1.5em' }}>Enroll now!</Button>
								<br></br>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
