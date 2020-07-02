import React from 'react';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import MainLoginPage from './components/MainLoginPage';
import BrowseCourses from './components/BrowseCourses';
import Course from './components/Course';
import Profile from './components/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import FooterBar from './components/FooterBar';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <NavigationBar />
          <Route exact path="/" component={LandingPage} />
          <div className="container">
            <Route exact path="/login" component={MainLoginPage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/browse" component={BrowseCourses} />
            <Route exact path="/course" component={Course} />
            <Route exact path="/about" component={AboutUs} />
          </div>
          <FooterBar />
        </div>
      </Router>
    </div>
  );
}

export default App;
