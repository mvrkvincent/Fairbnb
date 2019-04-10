import React from 'react';
import { Link } from 'react-router-dom';

class MemberNav extends React.Component {


  render() {
    const img_url = this.props.currentUser.img_url;
    const userTxt = (!img_url) ? this.props.currentUser.fname[0] : '';
    const userImg = (img_url) ? { backgroundImage: `url(${img_url})` } : { border: `1px solid #eae8e8` };
    return (
      <div className="nav-buttons">
        <Link to={'/host'}><button>Become a host</button></Link>
        <button onClick={this.props.about}>About</button>
        <button onClick={this.props.logout} value="Log out">Log out</button>
        <div className="user-img">
          <button className="dropbtn" style={userImg}>{userTxt}</button>
        </div>
      </div>
    )

  }
  
}

export default MemberNav;