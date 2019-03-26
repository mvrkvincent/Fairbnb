import React from 'react';
import LogInContainer from './session/login_container';
import SignUpContainer from './session/signup_container';

export const App = () => (
  <div>
    <header>
      <h1>Fairbnb (beta)</h1>
      <SignUpContainer />
    </header>
  </div>

);