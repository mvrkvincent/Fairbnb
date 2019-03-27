import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = state => ({
  userInfo: { email: '', fname: '', lname: '', password: '' },
  formType: 'Sign Up',
  errors: Object.values(state.errors.session)
});

const mdp = dispatch => ({
  formAction: user => dispatch(signup(user)),
  altLink: () => dispatch(openModal('LOGIN')),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(SessionForm);