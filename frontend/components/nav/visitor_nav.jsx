import React from 'react';

class VisitorNav extends React.Component {

  render() {

    return (
      <div>
        <button onClick={this.props.demo}>Demo member</button>
        <button>About</button>
        <button onClick={this.props.signup}>Sign up</button>
        <button onClick={this.props.login}>Log in</button>
      </div>
    )

  }

}

export default VisitorNav;