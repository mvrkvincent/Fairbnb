import React from 'react';
import { Route } from 'react-router-dom';
import MainNavContainer from './nav/main_nav_container';
import Modal from './modal/modal';

export const App = () => (

  <div>
    <Modal />
    <header>
      
      <MainNavContainer />
    </header>
  </div>

);