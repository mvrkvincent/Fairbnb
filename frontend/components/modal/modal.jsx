import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import About from '../modal/about';
import BookingConfirmation from '../bookings/booking_confirmation';

const Modal = ({modal, closeModal}) => {

  if (!modal) {
    return null;
  }

  let form;
  let modalBehavior;
  const defaultBehavior = closeModal;

  switch (modal) {
    case 'SIGNUP': {
      form = <SignupContainer />;
      modalBehavior = defaultBehavior;
      break;
    }
    case 'LOGIN': {
      form = <LoginContainer />;
      modalBehavior = defaultBehavior;
      break;
    }
    case 'ABOUT': {
      form = <About />
      modalBehavior = defaultBehavior;
      break;
    }
    case 'BOOK': {
      form = <BookingConfirmation />
      modalBehavior = null;
      break;
    }
    default: return null;
  } 


  return (
    <div className="modal-background" onClick={modalBehavior}>
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