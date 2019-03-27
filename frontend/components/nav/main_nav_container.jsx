import React from 'react';
import { connect } from 'react-redux';
import { signup, login, logout } from '../../actions/session_actions';
import MainNav from './main_nav';

const msp = ({ session, entities }) => ({
  currentUser: entities.users[session.id]
});

const mdp = dispatch => ({
  // signup: user => dispatch(signup(user)),
  // login: user => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(MainNav);
