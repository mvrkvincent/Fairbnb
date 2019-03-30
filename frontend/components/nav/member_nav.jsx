import React from 'react';

class MemberNav extends React.Component {

  render() {
    const img_url = this.props.currentUser.img_url;
    const userTxt = (!img_url) ? this.props.currentUser.fname[0] : '';
    const userImg = (img_url) ? { backgroundImage: `url(${img_url})` } : { border: `1px solid #eae8e8` };
    return (
      <div className="nav-buttons">
        <button onClick={this.props.about}>About</button>
        <button onClick={this.props.logout} value="Log out">Log out</button>
        <div className="user-img"><button onClick={this.props.logout} style={userImg}>{userTxt}</button></div>
      </div>
    )

  }
  
}

export default MemberNav;