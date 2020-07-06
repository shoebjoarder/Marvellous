import React from 'react'
import { Container, Col, Row, Card, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from "react-player"
import axios from 'axios'
import jwt_decode from 'jwt-decode'


export default class VideoPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			video: false
		}
	}
	render() {
		return (
			<Container>
				<Row className="align-items-center">
					<ReactPlayer url="https://youtu.be/wdpo7fTJc3k" />
				</Row>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>

			</Container>
		)
	}
}