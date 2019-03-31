import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spot_actions';
import SpotShow from './spot_show';

const msp = ({ entities }, ownProps) => ({
  spot: entities.spots[ownProps.match.params.spotId]
});

const mdp = dispatch => ({
  fetchSpot: id => dispatch(fetchSpot(id))
});

export default connect(msp, mdp)(SpotShow);