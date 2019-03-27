import React from 'react';
import { Link } from 'react-router-dom';

class MainNav extends React.Component {

  render() {
    
    return(
      <div>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
        <button onClick={this.props.logout}>Log Out</button>

      </div>
    )

  }

}

export default MainNav;