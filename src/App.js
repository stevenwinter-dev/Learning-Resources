import React, { Component } from 'react';
import logo from './logo.svg';
import Course from './components/Course';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Learning Resources</h1>
        <p>These are some of the courses, tutorials, and guides I have used in my studies to become a web developer.</p>
        <Course />
      </div>
    );
  }
}

export default App;
