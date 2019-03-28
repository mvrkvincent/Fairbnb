import React from 'react';
import MemberNav from './member_nav';
import VisitorNav from './visitor_nav';
import Link from 'react-router-dom'

class MainNav extends React.Component {

  render() {
    const signup = this.props.signup;
    const login = this.props.login;
    const logout = this.props.logout;
    const demo = this.props.demo;
    const about = this.props.about;
    const currentUser = this.props.currentUser;
    
    const nav = (this.props.currentUser) ? <MemberNav currentUser={currentUser} logout={logout}/> : <VisitorNav about={about} demo={demo}signup={signup} login={login}/>;

    return(
      <div className="nav-bar">
        <div id="logo-search">
          <div><h1><a href="/">Fairbnb</a></h1></div>
          <div className="search">
            <i class="fas fa-search"></i>
            <input className="search-input" type="text" placeholder="Search" /></div>
        </div>
        {nav}
      </div>
    )
  }

}

export default MainNav;