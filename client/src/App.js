import React from 'react';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import BrowseCourses from './components/BrowseCourses';
import Course from './components/Course';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutUs />
      <LoginPage />
      <RegistrationPage />
      <BrowseCourses />
      <Course />
      <Profile />
    </div>
  );
}

export default App;
