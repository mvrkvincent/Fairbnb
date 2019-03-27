import React from 'react';
import { Route } from 'react-router-dom';
import MainNavContainer from './nav/main_nav_container';
import Modal from './modal/modal';

export const App = () => (

  <div>
    <Modal />
    <header className="nav-bar">
      <div id="logo"><h1>Fairbnb</h1></div>
      <MainNavContainer />
    </header>
  </div>

);