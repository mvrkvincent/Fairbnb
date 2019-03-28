import React from 'react';
import MemberNav from './member_nav';
import VisitorNav from './visitor_nav';
import Link from 'react-router-dom';

class MainNav extends React.Component {

  render() {
  
    const {signup, login, logout, demo, about, currentUser} = this.props;

    const NavBar = (this.props.currentUser) ? <MemberNav currentUser={currentUser} logout={logout}/> : <VisitorNav about={about} demo={demo}signup={signup} login={login}/>;

    return(
      <div>
      <div className="nav-bar">
        <div id="logo-search">
          <div><h1><a href="/">Fairbnb</a></h1></div>
          <div className="search">
            <i class="fas fa-search"></i>
            <input className="search-input" type="text" placeholder="Search" /></div>
        </div>
        {NavBar}
        </div>
        <div className="filter-bar">
          <div>
          <button>Dates</button>
          <button>Guests</button>
          </div>
        </div>
      </div >
    )
  }

}

export default MainNav;