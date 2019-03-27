import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = state => ({
  userInfo: { email: '', password: '' },
  formType: 'Log In',
  errors: Object.keys(state.errors).map(id => state.errors[id])
});

const mdp = dispatch => ({
  formAction: user => dispatch(login(user)),
  altLink: () => dispatch(openModal('SIGNUP'))
});

export default connect(msp, mdp)(SessionForm);
