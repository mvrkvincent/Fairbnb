import React from 'react';
import { Link } from 'react-router-dom';

class MemberNav extends React.Component {

  render() {

    return (
      <div>
        <h3>Hey {this.props.currentUser.fname}</h3>
        <button onClick={this.props.logout} value="Log out">Log out</button>
      </div>
    )

  }

}

export default MemberNav;