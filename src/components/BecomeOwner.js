import React, { Component } from 'react'

export default class BecomeOwner extends Component {
  constructor() {
    super();

    this.state = {
        name: '',
        email: ''
      }
      this.submit = this.submit.bind(this);
  }

  submit(e) {
  e.preventDefault();
  console.log('final: ' + this.state.name + " " + this.state.email);
  // StockActions.searchAPI(this.state.task)
  this.setState({name: '', email: ''});
  }

  render() {
    console.log(this.state);
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
