import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { render } from 'react-dom';
import App from './components/App';
import RegisterAnimal from './components/RegisterAnimal';
import BecomeOwner from './components/BecomeOwner';
import ShowAllPets from './components/ShowAllPets';
import ShowAllOwners from './components/ShowAllOwners';
import AdoptAPet from './components/AdoptAPet';


class Main extends React.Component {

  constructor() {
    super();
  }
  render() {
    return(
      <div>
      from the home page
      </div>
    )
  }
}

render(
  <Router history = {browserHistory}>
    <Route path='/' component ={App}>
      <IndexRoute component={Main}/>
      <Route path="/RegisterAnimal" component ={RegisterAnimal}/>
      <Route path="/BecomeOwner" component ={BecomeOwner}/>
      <Route path="/AdoptAPet" component ={AdoptAPet}/>
      <Route path="/ShowAllPets" component ={ShowAllPets}/>
      <Route path="/ShowAllOwners" component ={ShowAllOwners}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
