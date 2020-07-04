import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Card, Button } from "react-bootstrap"


export default class Course extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "",
			desc_1: "",
			desc_2: "",
			quiz: "",
			video: "",
			difficult: ""
		}
	}

	handleBrowse = (e) => {
		e.preventDefault();
		this.props.history.push('/browse')
	}
	render() {
		const token = JSON.parse(localStorage.getItem("selectedCard"))
		console.log(token)
		let image = ""
		image += '/' + token['image']
		return (
			<div>
				<Container style={{ marginTop: "5em", marginBottom: '10.2em' }}>
					<Button onClick={this.handleBrowse} variant="outline-light" style={{ fontSize: '1.3em', backgroundColor: '#F3F6FE', color: "#8A8A8A" }} >&lt; Back to courses</Button>
					{/* Course Description */}
					<Row style={{ marginTop: "1em" }}>
						<Col className="align-self-center col-md-8" >
							<p style={{ fontSize: '4em', marginBottom: '1em' }}>{token["title"]}</p>
							<p style={{ fontSize: '1.7em', marginBottom: '1em' }}>{token["desc_1"]}</p>
							<p style={{ fontSize: '1.2em', color: '#8A8A8A' }}>{token["desc_2"]}</p>
							<br />
						</Col>

						{/* Card */}
						<Col className="d-none d-md-block col-md-4" style={{ padding: '4em 2em' }}>
							<Card style={{ width: '300px', borderRadius: '0.8em', boxShadow: '2px 2px 4px #000000' }}>

								{/* TODO: Image will change dynamically */}
								<Card.Img variant="top" className="mx-auto d-block" style={{ height: '230px', width: '230px' }} src={image} />

								<Card.Body style={{ padding: '1.5em' }}>
									<Card.Text style={{ fontSize: '1.4em', paddingBottom: '1.2em' }}>
										<Row style={{ color: '#8A8A8A', textAlign: "center" }}>
											<Col>

												{/* TODO: Values will change dynamically */}
												<strong style={{ color: 'black' }}>{token["quiz"]}</strong><br />
											Quizzes
										</Col>
											<Col className="float-right">

												{/* TODO: Values will change dynamically */}
												<strong style={{ color: 'black' }}>{token["video"]}</strong><br />
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

}
