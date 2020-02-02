import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bodyLength:175,
      deskHeight:70,
      chairHeight:47
    };
  }
  onChange (event) {
    this.setState({ bodyLength: event.target.value, deskHeight: this.state.bodyLength / 2.5, chairHeight: this.state.chairHeight / 3.7})
  }
  render() {
    return (
      <div>
        <h1>Ergonomische werkplek</h1>
        <h3>Bereken nu een ergonomische hoogte voor je bureau en stoel</h3>
        <p>{this.state.bodyLength} CM</p> <p>{this.state.deskHeight} CM</p>
        <p>{this.state.chairHeight} CM</p>
        <input className="slider" type="range" name="points" min="150" onChange={event => this.onChange(event)} value={this.state.bodyLength} max="200"/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
