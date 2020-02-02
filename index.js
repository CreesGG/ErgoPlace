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
    this.setState({ bodyLength: event.target.value, deskHeight: Math.floor(this.state.bodyLength / 2.5), chairHeight: Math.floor(this.state.bodyLength / 3.7)})
  }
  render() {
    return (
      <div>
        <h1>Ergonomische werkplek</h1>
        <h3>Bereken nu een ergonomische hoogte voor je bureau en stoel</h3>
        <p>Lichaamslengte:{this.state.bodyLength} CM</p> <p>Bureauhoogte:{this.state.deskHeight} CM</p>
        <p>Stoelhoogte: {this.state.chairHeight} CM</p>
        <input className="slider" type="range" name="points" min="150" onChange={event => this.onChange(event)} value={this.state.bodyLength} max="200"/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
