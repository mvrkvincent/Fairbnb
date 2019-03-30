import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainNavContainer from './nav/main_nav_container';
import Modal from './modal/modal';
import SpotIndexContainer from './spots/spot_index_container';
import SpotShowContainer from './spots/spot_show_container';

export const App = () => (

  <div className="main">
    <Modal />
    <div className="navBar">
      <MainNavContainer />
    </div>
    <div className="content">
    <Switch>
      <Route exact path='/' component={SpotIndexContainer} />
      <Route path="/spots/:spotId" component={SpotShowContainer} />
    </Switch>
    </div>
  </div>

);