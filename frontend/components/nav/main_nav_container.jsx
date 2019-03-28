import React from 'react';
import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import MainNav from './main_nav';

const msp = ({ session, entities }) => ({
  currentUser: entities.users[session.id]
});

const mdp = dispatch => ({
  signup: () => dispatch(openModal('SIGNUP')),
  login: () => dispatch(openModal('LOGIN')),
  logout: () => dispatch(logout()),
  demo: () => dispatch(login({email: 'smitty@no1.com', password: 'Warbenjagermanjensen' })), 
  about: () => dispatch(openModal('ABOUT'))
});

export default connect(msp, mdp)(MainNav);