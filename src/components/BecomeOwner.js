import React, { Component } from 'react'
import OwnerStore from '../store/OwnerStore';
import AnimalActions from '../actions/AnimalActions';

export default class BecomeOwner extends Component {
  constructor() {
    super();

    this.state = {
        name: '',
        email: ''
      }
      this.submit = this.submit.bind(this);
      this._onChange = this._onChange.bind(this)
  }

  // componentDidMount() {
  //   OwnerStore.startListening(this._onChange);
  // }
  // componentWillUnmount() {
  //   OwnerStore.stopListening(this._onChange);
  // }

  _onChange() {
      this.setState({
        person: OwnerStore.showPerson()
      });
    }

  submit(e) {
  e.preventDefault();
  AnimalActions.addOnePerson(this.state);
  this.setState({name: '', email: ''});
  }

  render() {
    return (
      <div className="container">
        <form className="col-xs-3" onSubmit={this.submit}>
          <div className="form-group">
            <label>Enter name</label>
            <input type="text"
                   className="form-control"
                   placeholder="name"
                   value={ this.state.name }
                   onChange={(e) => this.setState({name: e.target.value})}/>

            <label>Enter email:</label>
            <input type="text"
                   className="form-control"
                   placeholder="email"
                   value={ this.state.email }
                   onChange={(e) => this.setState({email: e.target.value})}/>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    )
  }
}
