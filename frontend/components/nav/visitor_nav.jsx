import React from 'react';

class VisitorNav extends React.Component {

  render() {

    return (
      <div>
        <button>Demo member</button>
        <button>Help</button>
        <button onClick={this.props.signup}>Sign up</button>
        <button onClick={this.props.login}>Log in</button>
      </div>
    )

  }

}

export default VisitorNav;