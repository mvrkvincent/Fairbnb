import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const msp = (state, ownProps) => ({
  errors: Object.keys(state.errors).map(id => state.errors[id]),
  formType: 'Sign Up'
})

const mdp = dispatch => ({
  formAction: user => dispatch(login(user))
})

export default connect(msp, mdp)(SessionForm)
