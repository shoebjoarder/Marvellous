import React from 'react'
import { Container, Col, Row, Form } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'


export default class Quiz extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "",
			id: "",
			quiz: []
		}
	}


	componentDidMount() {
		const token = JSON.parse(localStorage.getItem("selectedCard"));
		let ident = token['_id']['$oid'];
		this.setState({
			id: ident,
			title: token['title'],
			// quiz: token['quiz']
		});
		// this.getQuiz(id);
	}

	getQuiz = (id) => {
		axios({
			url: 'http://localhost:3000/getQuiz',
			method: 'POST',
			data: {
				id: this.state.id
			}
		}).then((response) => {
			this.setState({
				result: response.data,
			});
			console.log(response.data)
			if (response.data.success) {
				this.setState({
					enrolled: true
				});
			}
		}).catch((error) => {
			console.log(error.response.request);
		})
	}


	handleCourse = (e) => {
		e.preventDefault();
		this.props.history.push('/course')
	}

	render() {
		return (
			<Container>
				<Row style={{ marginTop: "2.75em", marginBottom: '11.4em' }}>
					<Col className="align-self-center" style={{ padding: "50px 60px", backgroundColor: '#fff', borderRadius: '0.8em', marginTop: "3em", WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 20px -1px rgba(0,0,0,0.75)' }}>

						<p style={{ fontSize: '3em' }}>{this.state.title}</p>


						<p style={{ paddingBottom: '1em', fontSize: '1.5em' }}>Q1. Choose the right answer about JSX </p>

						<Form>
							<Form.Group as={Row}>
								<Form.Label as="legend">
									Radios
      					</Form.Label>
								<Col sm={10}>
									<Form.Check
										type="radio"
										label="JSX is faster because it performs optimization while compiling code to JavaScript"
										name="formHorizontalRadios"
										id="formHorizontalRadios1"
									/>
									<Form.Check
										type="radio"
										label="JSX is a syntax notation for JavaScript XML"
										name="formHorizontalRadios"
										id="formHorizontalRadios2"
									/>
									<Form.Check
										type="radio"
										label="JSX provides expressiveness of JavaScript along with HTML like template syntax"
										name="formHorizontalRadios"
										id="formHorizontalRadios3"
									/>
									<Form.Check
										type="radio"
										label="All of the above"
										name="formHorizontalRadios"
										id="formHorizontalRadios3"
									/>
								</Col>
							</Form.Group>

						</Form>


					</Col>
				</Row>
			</Container>
		)
	}
}