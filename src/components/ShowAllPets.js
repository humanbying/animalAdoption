import React, { Component } from 'react';
import AnimalStore from '../store/AnimalStore';
import AnimalActions from '../actions/AnimalActions';


export default class ShowAllPets extends Component {
  constructor() {
    super();

    this.state = {
      pets: null
    }
      this.getNewPets = this.getNewPets.bind(this);
  }

  componentDidMount() {
    AnimalActions.getAllPets();
    AnimalStore.on('GOT_NEW_PET', this.getNewPets);
  }
  componentWillUnmount() {
    AnimalStore.removeListener('GOT_NEW_PET', this.getNewPets);
  }

getNewPets() {
  this.setState({
    pets: AnimalStore.getAllPets()
  })
  console.log(this.state);
}

  render() {
    let ListItems;

      if(this.state.pets) {

         ListItems = this.state.pets.map((pet, index) => {
          return (
            <tr key = {index}>
              <td>
                {pet.name}
              </td>
              <td>
                {pet.species}
              </td>
              <td>
                {pet.age}
              </td>
              <td>
              <button className="btn-warning btn pull-right btn-xs">adopt</button>
              </td>
            </tr>
          )
        })
      }
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Species</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {ListItems}
        </tbody>
      </table>
    )
  }
}
