import React from 'react';
import About from './About';
import './App.scss';
import BackToTop from './BackToTop';
import Footer from './Footer';
import Intro from './Intro';
import NavBar from './NavBar';

const App: React.FC = () => (
  <div className="App">
    <NavBar />
    <Intro />
    <About />
    <Footer />
    <BackToTop />
  </div>
);

export default App;
