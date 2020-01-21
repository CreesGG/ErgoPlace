import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bodyLength:175,
      deskHeigth:0
    };
  }
  onChange (event) {
    this.setState({ bodyLength: event.target.value, deskHeigth: Math.floor(this.state.bodyLength / 2.4334)})
  }
  render() {
    return (
      <div>
        <h1>Ergonomische werkplek</h1>
        <h3>Bereken nu een ergonomische hoogte voor je bureau en stoel</h3>
        <p>{this.state.bodyLength} CM</p> <p>{this.state.deskHeigth} CM</p>
        <input className="slider" type="range" name="points" min="150" onChange={event => this.onChange(event)} value={this.state.bodyLength} max="200"/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
