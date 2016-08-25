import React, { Component } from 'react';
import AnimalStore from '../store/AnimalStore';
import AnimalActions from '../actions/AnimalActions';
// import AnimalActions from '../actions/AnimalActions';


export default class RegisterAnimal extends Component {
  constructor() {
    super();

    this.state = {
        name: '',
        species: '',
        age: '',
        pet: {}
      }
      this.submit = this.submit.bind(this);
      this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    AnimalStore.startListening(this._onChange);
  }
  componentWillUnmount() {
    AnimalStore.stopListening(this._onChange);
  }

  _onChange() {
      this.setState({
        pet: AnimalStore.showPet()
      });
    }

  submit(e) {
  e.preventDefault();
  console.log('final:' + this.state.name + ' ' + this.state.species + ' '+ this.state.age);
  console.log("this.state", this.state);
  AnimalActions.addOnePet(this.state);
  this.setState({name: '', species: '', age: ''});
  }

  displayOnePet() {
    this.setState({
      name: AnimalStore.showPet()
    })
  }

  render() {
    // console.log(this.state);
    // console.log(this.state.pet);
    return (
      <div className="container">
        <form className="col-xs-3" onSubmit={this.submit}>
          <div className="form-group">
            <label>Enter pet for adoption:</label>
            <input type="text"
                   className="form-control"
                   placeholder="pet name"
                   value={ this.state.name }
                   onChange={(e) => this.setState({name: e.target.value})}/>

            <label>Enter species:</label>
            <input type="text"
                   className="form-control"
                   placeholder="species"
                   value={ this.state.species }
                   onChange={(e) => this.setState({species: e.target.value})}/>

            <label>Enter age:</label>
            <input type="number"
                   className="form-control"
                   placeholder="age"
                   value={ this.state.age }
                   onChange={(e) => this.setState({age: e.target.value})}/>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
        <div className="container">
          <h4>
              <b>  Name: {this.state.pet.name}<br/>
                   Species: {this.state.pet.species}<br/>
                   Age: {this.state.pet.age}<br/>
              </b>
          </h4>
        </div>
      </div>

    )
  }
}
