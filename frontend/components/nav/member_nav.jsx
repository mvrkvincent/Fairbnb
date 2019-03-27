import React from 'react';
import { Link } from 'react-router-dom';

class MemberNav extends React.Component {

  render() {

    return (
      <div>
        <h3>Hey {this.props.currentUser.fname}</h3>
        <Link to='/' onClick={this.props.logout}>Log Out</Link>
      </div>
    )

  }

}

export default MemberNav;