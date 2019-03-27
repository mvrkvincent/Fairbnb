import React from 'react';
import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import MainNav from './main_nav';

const msp = ({ session, entities }) => ({
  currentUser: entities.users[session.id]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
  //something about modal functionality? popup action?
});

export default connect(msp, mdp)(MainNav);
