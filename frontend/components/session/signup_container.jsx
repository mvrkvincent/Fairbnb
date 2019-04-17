import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = state => ({
  userInfo: { email: '', fname: '', lname: '', password: '', img_url: null },
  formType: 'Sign up',
  errors: Object.values(state.errors.session)
});

const mdp = dispatch => ({
  formAction: user => dispatch(signup(user)),
  altLink: () => dispatch(openModal('LOGIN')),
  closeModal: () => dispatch(closeModal()),
  loginDemo: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(SessionForm);