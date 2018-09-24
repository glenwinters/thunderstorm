import React, { Component } from 'react';
import './App.css';
import ThunderstormWarning from './ThunderstormWarning';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <ThunderstormWarning />
      </div>
    );
  }
}

export default App;
