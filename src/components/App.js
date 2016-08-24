import React, { Component } from 'react';
import RegisterAnimal from './RegisterAnimal';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className="text-center">Welcome to React!</h1>
        <RegisterAnimal />
        
      </div>
    )
  }
}
