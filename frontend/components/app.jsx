import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainNavContainer from './nav/main_nav_container';
import FilterNav from './nav/filter_nav';
import Modal from './modal/modal';
import SpotIndex from './spots/spot_index_container';
import SpotShow from './spots/spot_show_container';
import SpotForm from './spots/spot_form_container';

export const App = () => (

  <div className="main">
    <Modal />
    <div className="navBar">
      <MainNavContainer />
      <Route exact path='/' component={FilterNav} />
      <Route exact path='/:city' component={FilterNav} />
    </div>

      <Switch>
        <Route exact path='/:userId/host' component={SpotForm} />
        <Route exact path="/spots/:spotId" component={SpotShow} />
        <Route exact path='/:city' component={SpotIndex} />
        <Route exact path='/' component={SpotIndex} />
      </Switch>

  </div>

);