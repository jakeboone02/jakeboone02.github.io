import React from 'react';
import About from './About';
import './App.scss';
import Intro from './Intro';
import NavBar from './NavBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <div style={{ height: 500 }} />
    </div>
  );
};

export default App;
