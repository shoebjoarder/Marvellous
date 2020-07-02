import React from 'react';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import MainLoginPage from './components/MainLoginPage';
import RegistrationPage from './components/RegistrationPage';
import BrowseCourses from './components/BrowseCourses';
import Course from './components/Course';
import Profile from './components/Profile';
import NavigationBar from './components/NavigationBar'
import FooterBar from './components/FooterBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />

{/*       <LandingPage />
      <AboutUs /> */}
      <MainLoginPage />
{/*       <RegistrationPage />
      <BrowseCourses />
      <Course />
      <Profile /> */}
      <FooterBar />
    </div>
  );
}

export default App;
