import { merge } from 'lodash';
import { RECEIVE_SPOTS, RECEIVE_SPOT, REMOVE_SPOT } from '../../actions/spot_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SPOTS: {
      const result = merge({}, state, action.spots);
      return result;
    }
    case RECEIVE_SPOT: {
      return merge({}, state, { [action.spot.id]: action.spot });
    }
    case REMOVE_SPOT: {
      const alteredState = merge({}, state);
      delete alteredState[action.spotId];
      return alteredState;
    }
    default: return state;
  }

};
