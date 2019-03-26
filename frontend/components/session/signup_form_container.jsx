import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = (state, ownProps) => ({
  errors: Object.keys(state.errors).map(id => state.errors[id]),
  formType: 'signup'
})

const mdp = dispatch => ({
  formAction: user => dispatch(signup(user))
})

export default connect(msp, mdp)(SessionForm)