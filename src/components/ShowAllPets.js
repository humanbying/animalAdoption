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


  // getPets(){
  //   this.setState({
  //     pets: AnimalStore.getPets()
  //   })
  // }

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
            </tr>
          )
        })
      }
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Species</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {ListItems}
        </tbody>
      </table>
        /* <div className="container">
          <h4>
              <b>  Name: {this.state.pet.name}<br/>
                   Species: {this.state.pet.species}<br/>
                   Age: {this.state.pet.age}<br/>
              </b>
          </h4>
        </div> */

    )
  }
}
