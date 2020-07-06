import React from 'react';
import RegistrationPage from './components/RegistrationPage';
import BrowseCourses from './components/BrowseCourses';
import LandingPage from './components/LandingPage';
import LoginChoice from './components/LoginChoice';
import LoginForm from './components/LoginForm';
import VideoPage from './components/VideoPage';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import Course from './components/Course';
import { Route } from 'react-router-dom'


export default function RoutePage() {
	return (
		<div>
			<Route exact path="/" component={LandingPage} />
			<div className="container">
				<Route exact path="/login" component={LoginChoice} />
				<Route exact path="/signin" component={LoginForm} />
				<Route exact path="/profile" component={Profile} />
				<Route exact path="/browse" component={BrowseCourses} />
				<Route exact path="/course" component={Course} />
				<Route exact path="/about" component={AboutUs} />
				<Route exact path="/video" component={VideoPage} />
				<Route exact path="/registration" component={RegistrationPage} />
			</div>
		</div>
	);
} 
