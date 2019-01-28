import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
