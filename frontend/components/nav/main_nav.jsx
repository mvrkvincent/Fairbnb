import React from 'react';
import { Link } from 'react-router-dom';
import MemberNav from './member_nav';
import VisitorNav from './visitor_nav';

class MainNav extends React.Component {

  render() {
    const nav = (this.props.currentUser) ? <MemberNav /> : <VisitorNav />;

    return(
      <div>
        {nav}
      </div>
    )

  }

}

export default MainNav;