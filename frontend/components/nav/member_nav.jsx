import React from 'react';

class MemberNav extends React.Component {

  render() {

    return (
      <div>
        <button>Hey {this.props.currentUser.fname}</button>
        <button onClick={this.props.logout} value="Log out">Log out</button>
      </div>
    )

  }

}

export default MemberNav;