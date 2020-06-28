import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image, CardDeck } from "react-bootstrap"
import NavigationBar from './NavigationBar';
import FooterBar from './FooterBar';
import CourseCard from './CourseCard';

export default function BrowseCourses() {
	return (
		<div>
			<NavigationBar />

			<Container style={{ marginTop: "5em", marginBottom: '21.2em' }}>

				<h1 style={{ fontSize: '4.5em' }}>Your Courses</h1>
				<p style={{ color: '#8A8A8A', fontSize: '1.5em', paddingBottom: '1.5em' }}>Courses you recently worked on</p>
				<CardDeck style={{ paddingBottom: '5em'}}>
					<CourseCard />
					
				</CardDeck>

				<hr></hr>

				<h1 style={{ fontSize: '4.5em', paddingTop: '0.5em' }}>Popular Courses</h1>
				<p style={{ color: '#8A8A8A', fontSize: '1.5em', paddingBottom: '1.5em' }}>Popular with our users last month</p>
				<CardDeck>
					<CourseCard />
					<CourseCard />
					<CourseCard />
					<CourseCard />
				</CardDeck>

			</Container>

			<FooterBar />
		</div>
	)
}
