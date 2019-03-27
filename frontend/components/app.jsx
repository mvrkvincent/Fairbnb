import React from 'react';
import { Route } from 'react-router-dom';
import LogInContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import MainNavContainer from './nav/main_nav_container';
import Modal from './modal/modal';

export const App = () => (

  <div>
    <Modal />
    <header>
      <h1>Fairbnb (beta)</h1>
      <MainNavContainer />
    </header>
      <Route exact path='/signup' component={SignUpContainer} />
      <Route exact path='/login' component={LogInContainer} />
  </div>

);