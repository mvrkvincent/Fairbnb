import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = state => ({
  userInfo: { email: '', password: '' },
  formType: 'Log In',
  errors: Object.values(state.errors.session)
});

const mdp = dispatch => ({
  formAction: user => dispatch(login(user)),
  altLink: () => dispatch(openModal('SIGNUP')),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(SessionForm);
