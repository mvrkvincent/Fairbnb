import React from 'react';
import { Link } from 'react-router-dom';


class VisitorNav extends React.Component {

  render() {

    return (
      <div>
        <Link to='/' onClick={this.props.signup}>Sign Up</Link>
        <Link to='/' onClick={this.props.login}>Log In</Link>
      </div>
    )

  }

}

export default VisitorNav;