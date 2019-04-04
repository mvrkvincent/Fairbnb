import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainNavContainer from './nav/main_nav_container';
import FilterNav from './nav/filter_nav';
import Modal from './modal/modal';
import SpotIndexContainer from './spots/spot_index_container';
import SpotShowContainer from './spots/spot_show_container';

export const App = () => (

  <div className="main">
    <Modal />
    <div className="navBar">
      <MainNavContainer />
      <Route exact path='/' component={FilterNav} />
    </div>

      <Switch>
        <Route exact path="/spots/:spotId" component={SpotShowContainer} />
        <Route exact path='/:city' component={SpotIndexContainer} />
        <Route exact path='/' component={SpotIndexContainer} />
      </Switch>

  </div>

);