import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';
import SpotIndex from './spot_index';

const msp = ({ entities }) => ({
  spots: Object.values(entities.spots)
});

const mdp = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots())
});

export default connect(msp, mdp)(SpotIndex);