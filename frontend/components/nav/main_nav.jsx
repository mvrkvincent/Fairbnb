import React from 'react';
import MemberNav from './member_nav';
import VisitorNav from './visitor_nav';

class MainNav extends React.Component {

  render() {
    const signup = this.props.signup;
    const login = this.props.login;
    const logout = this.props.logout;
    const currentUser = this.props.currentUser;
    
    const nav = (this.props.currentUser) ? <MemberNav currentUser={currentUser} logout={logout}/> : <VisitorNav signup={signup} login={login}/>;

    return(
      <div>
        {nav}
      </div>
    )
  }

}

export default MainNav;