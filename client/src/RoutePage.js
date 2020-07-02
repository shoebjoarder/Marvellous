import React from 'react';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import MainLoginPage from './components/MainLoginPage';
import BrowseCourses from './components/BrowseCourses';
import Course from './components/Course';
import Profile from './components/Profile';
import { Route } from 'react-router-dom'
import RegistrationPage from './components/RegistrationPage';

export default function RoutePage() {
    return (
        <div>
            <Route exact path="/" component={LandingPage} />
            <div className="container">
                <Route exact path="/login" component={MainLoginPage} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/browse" component={BrowseCourses} />
                <Route exact path="/course" component={Course} />
                <Route exact path="/about" component={AboutUs} />
                <Route exact path="/registration" component={RegistrationPage} />
            </div>
        </div>
    );
} 
