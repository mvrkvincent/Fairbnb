import React from 'react';
import MemberNav from './member_nav';
import VisitorNav from './visitor_nav';

class MainNav extends React.Component {

  render() {
    const signup = this.props.signup;
    const login = this.props.login;
    const logout = this.props.logout;
    const demo = this.props.demo;
    const currentUser = this.props.currentUser;
    
    const nav = (this.props.currentUser) ? <MemberNav currentUser={currentUser} logout={logout}/> : <VisitorNav demo={demo}signup={signup} login={login}/>;

    return(
      <div className="nav-bar">
        <div id="logo"><h1>Fairbnb</h1></div>
        {nav}
      </div>
    )
  }

}

export default MainNav;