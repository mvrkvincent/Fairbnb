import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainNavContainer from './nav/main_nav_container';
import Modal from './modal/modal';
import SpotIndexContainer from './spots/spot_index_container';

export const App = () => (

  <div className="main">
    <Modal />
    <div className="navBar">
      <MainNavContainer />
    </div>
    <div className="content">
    <Switch>
      <Route exact path='/' component={SpotIndexContainer} />
    </Switch>
    </div>
  </div>

);