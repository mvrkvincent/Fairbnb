import React from 'react';
import { connect } from 'react-redux';
import loginContainer from '../session/login_container';
import signupContainer from '../session/signup_container';

const Modal = ({modal, closeModal}) => {

  if (!modal) {
    return null;
  }

  let form;
  switch (modal) {
    case 'SIGNUP': {
      form = signupContainer;
      break;
    }
    case 'LOGIN': {
      form = loginContainer;
      break;
    }
    default: return null;
  } 

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {form}
      </div>
    </div>
  )

}


const msp = state => ({
  modal: state.ui.modal
})

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(Modal)