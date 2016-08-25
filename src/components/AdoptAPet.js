import React, { Component } from 'react';
import OwnerStore from '../store/OwnerStore';
import AnimalActions from '../actions/AnimalActions';
import AnimalStore from '../store/AnimalStore';
import ShowAllPets from './ShowAllPets';
import ServerActions from '../actions/ServerActions';


export default class ShowAllOwners extends Component {
  constructor() {
    super();

    this.state = {
      people: null
    }
      this.getNewPeople = this.getNewPeople.bind(this);
      // this.personObj = this.personObj.bind(this);
  }

  componentDidMount() {
    AnimalActions.getAllPeople();
    OwnerStore.on('GOT_NEW_PERSON', this.getNewPeople);
    OwnerStore.on('GOT_NEW_PERSON_INFO', this.personObj);
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

personObj(person) {
  console.log(person)
  ServerActions.setUser(person)
}



  render() {
    let ListItems;

      if(this.state.people) {

         ListItems = this.state.people.map((person, index) => {
          return (
            <tr key = {index}>
              <td>
                {person.name}<button  onClick = {() => this.personObj(person)}className="btn-primary btn-xs pull-right">choose user</button>
              </td>
            </tr>
          )
        })
      }
    return (
      <div>
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
        <hr/>
        <ShowAllPets />
      </div>
    )
  }
}
