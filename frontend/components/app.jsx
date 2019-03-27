import React from 'react';
import { Route } from 'react-router-dom';
import LogInContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import MainNavContainer from './nav/main_nav_container';

export const App = () => (
  <div>
    <header>
      <h1>Fairbnb (beta)</h1>
      <MainNavContainer />
    </header>
      <Route path='/signup' component={SignUpContainer} />
      <Route path='/login' component={LogInContainer} />
  </div>

);