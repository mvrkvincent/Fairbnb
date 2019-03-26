import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
  userInfo: { email: '', password: '' },
  formType: 'Sign Up',
  altLink: <div><Link to='/signup'>Sign Up</Link></div>,
  errors: Object.keys(state.errors).map(id => state.errors[id])
});

const mdp = dispatch => ({
  formAction: user => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);
