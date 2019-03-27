import React from 'react';
import { Link } from 'react-router-dom';


class VisitorNav extends React.Component {

  render() {

    return (
      <div>
        <button onClick={this.props.signup} value="Sign Up">Sign up</button>
        <button onClick={this.props.login} value="Log In">Log in</button>
      </div>
    )

  }

}

export default VisitorNav;