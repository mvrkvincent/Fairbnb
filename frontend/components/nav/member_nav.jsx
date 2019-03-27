import React from 'react';
import { Link } from 'react-router-dom';

class MemberNav extends React.Component {

  render() {

    return (
      <div>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    )

  }

}

export default MemberNav;