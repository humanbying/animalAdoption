import React ,{ Component } from 'react'
import { Link } from 'react-router'

export default class NavBar extends Component{
  render(){
    return (
      <Link {...this.props} activeClassName="active"/>
    )
  }
}
