import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bodyLength:125;
    };
  }
  render() {
    return (
      <div>
        <h1>Ergonomische werkplek</h1>
        <h3>Bereken nu een ergonomische hoogte voor je bureau en stoel</h3>
        <input type="range" name="points" min="0" onChange={this.handleChange}value={this.state.bodyLength}  max="250"/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
