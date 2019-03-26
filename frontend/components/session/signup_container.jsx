import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => ({
  userInfo: { email: '', fname: '', lname: '', password: '' },
  formType: 'Sign Up',
  altLink: <div><Link to='/signin'>Log In</Link></div>,
  errors: Object.keys(state.errors).map(id => state.errors[id])
});

const mdp = dispatch => ({
  formAction: user => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);