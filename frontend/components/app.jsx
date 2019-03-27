import React from 'react';
import { Route } from 'react-router-dom';
import MainNavContainer from './nav/main_nav_container';
import Modal from './modal/modal';

export const App = () => (

  <div>
    <Modal />
    <header className="nav-bar">
      <h1>Fairbnb (beta)</h1>
      <MainNavContainer />
    </header>
  </div>

);