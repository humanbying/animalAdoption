import React, { Component } from 'react';
import OwnerStore from '../store/OwnerStore';
import AnimalActions from '../actions/AnimalActions';
import AnimalStore from '../store/AnimalStore';


export default class ShowAllOwners extends Component {
  constructor() {
    super();

    this.state = {
      people: null
    }
      this.getNewPeople = this.getNewPeople.bind(this);
  }

  componentDidMount() {
    AnimalActions.getAllPeople();
    OwnerStore.on('GOT_NEW_PERSON', this.getNewPeople);
  }
  componentWillUnmount() {
    OwnerStore.removeListener('GOT_NEW_PERSON', this.getNewPeople);
  }

getNewPeople() {
  this.setState({
    people: OwnerStore.getAllPeople()
  })
  console.log(this.state);
}


  // getPets(){
  //   this.setState({
  //     pets: OwnerStore.getPets()
  //   })
  // }

  render() {
    let ListItems;

      if(this.state.people) {

         ListItems = this.state.people.map((person, index) => {
          return (
            <tr key = {index}>
              <td>
                {person.name}
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
          </tr>
        </thead>
        <tbody>
          {ListItems}
        </tbody>
      </table>
    )
  }
}
