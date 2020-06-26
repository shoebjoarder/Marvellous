import React from 'react';
import NavigationBar from './components/NavigationBar'
import LandingPage from './components/LandingPage';
import FooterBar from './components/FooterBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LandingPage />
      <FooterBar />
    </div>
  );
}

export default App;
