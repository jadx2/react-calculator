import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'Hello World!',
    };
  }

  render() {
    const { word } = this.state;
    return <h1>{word}</h1>;
  }
}
