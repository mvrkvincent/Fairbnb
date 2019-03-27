import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import { Root } from './components/root';

document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();
  const root = document.getElementById('root');

  //Test Area
  window.getState = store.getState;
  //Test Area

  ReactDOM.render(<Root store={store}/>, root);

});