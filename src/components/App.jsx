import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const { total, next, operation } = this.state;
    const data = { total, next, operation };
    this.setState(calculate(data, buttonName));
  };

  render() {
    const { total, next } = this.state;
    return (
      <>
        <Display result={total || next} />
        <ButtonPanel onClick={this.handleClick} />
      </>
    );
  }
}
