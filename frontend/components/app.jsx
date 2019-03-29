import React from 'react';
import { Route } from 'react-router-dom';
import MainNavContainer from './nav/main_nav_container';
import Modal from './modal/modal';
import SpotIndexContainer from './spots/spot_index_container';

export const App = () => (
  
  <div>
    <Modal />
    <header>
      <MainNavContainer />
    </header>
      <SpotIndexContainer/>
  </div>

);