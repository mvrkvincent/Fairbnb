import React from 'react';

class MemberNav extends React.Component {

  render() {
    const userImg = { backgroundImage: `url(${this.props.currentUser.img_url})` };
    return (
      <div className="nav-buttons">
        <button onClick={this.props.about}>About</button>
        <button onClick={this.props.logout} value="Log out">Log out</button>
        <div className="user-img"><button onClick={this.props.logout}  style={userImg}></button></div>
      </div>
    )

  }
  
}

export default MemberNav;