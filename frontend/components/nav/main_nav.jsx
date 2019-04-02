import React from 'react';
import MemberNav from './member_nav';
import VisitorNav from './visitor_nav';
import Link from 'react-router-dom';

class MainNav extends React.Component {

  render() {
  
    const {signup, login, logout, demo, about, currentUser} = this.props;
    const NavButtons = (this.props.currentUser) ? <MemberNav about={about} logout={logout} currentUser={currentUser} /> : <VisitorNav demo={demo} about={about} signup={signup} login={login}/>;
    
    return(
      <div className="main-nav">
      <div className="nav-bar">
        <div id="logo-search">
          <div><h1><a href="/">Fairbnb</a></h1></div>
          <div className="search">
            <i className="fas fa-search"></i>
            <input className="search-input" type="text" placeholder="Search" /></div>
          </div>
        {NavButtons}
        </div>
      </div >
    )
  }

}

export default MainNav;