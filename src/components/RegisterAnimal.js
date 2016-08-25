import React, { Component } from 'react';
import AnimalStore from '../store/AnimalStore';
import AnimalActions from '../actions/AnimalActions';

export default class RegisterAnimal extends Component {
  constructor() {
    super();

    this.state = {
        name: '',
        species: '',
        age: ''
      }
      this.submit = this.submit.bind(this);
  }

  // componentDidMount() {
  //   // AnimalStore.startListening(this._onChange);
  //   AnimalStore.on('NEW_PET', this.getPet);
  // }

  // _onChange() {
  //     this.setState({
  //       todos: AnimalStore.getAll()
  //     });
  //   }

  submit(e) {
  e.preventDefault();
  console.log('final:' + this.state.name + ' ' + this.state.species + ' '+ this.state.age);
  console.log("this.state", this.state);
  AnimalActions.addOnePet(this.state);
  this.setState({name: '', species: '', age: ''});
  }

  render() {
    // console.log(this.state);

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
              <b>  Name: <br/>
                   Species: <br/>
                   Age: <br/>
              </b>
          </h4>
        </div>
      </div>

    )
  }
}
