import { connect } from 'react-redux';
import { createSpot } from '../../actions/spot_actions';
import SpotForm from './spot_form';

const msp = ({ session, entities }) => ({
  currentUser: entities.users[session.id],
  formType: 'Host'
});

const mdp = dispatch => ({
  formAction: spot => dispatch(createSpot(spot))
});

export default connect(msp, mdp)(SpotForm);