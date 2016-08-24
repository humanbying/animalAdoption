import React, { Component } from 'react'

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

  submit(e) {
  e.preventDefault();
  // StockActions.searchAPI(this.state.task)
  this.setState({name: '', species: '', age: ''});
  }

  render() {
    console.log(this.state);
    return (
      <div>
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
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}
