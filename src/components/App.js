import React, { Component } from 'react';
import RegisterAnimal from './RegisterAnimal';
import BecomeOwner from './BecomeOwner';
import ShowAllOwners from './ShowAllOwners';
import ShowAllPets from './ShowAllPets';
import NavBar from './NavBar'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className="text-center">Welcome to Animal Adoption Center</h1>
        <hr/>
        <h4><b>
        <NavBar to="/">| Home |</NavBar>
        <NavBar to="/RegisterAnimal">| Add Pets |</NavBar>
        <NavBar to="/BecomeOwner">| Become an Owner |</NavBar>
        <NavBar to="/ShowAllPets">| Show All Pets |</NavBar>
        <NavBar to="/ShowAllOwners">| Show All Owners |</NavBar>
        </b></h4>
        <hr/>
        {this.props.children}
      </div>
    )
  }
}
