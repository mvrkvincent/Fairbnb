import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

export default (state = { errors: [] }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS: {
      return merge({}, state, { errors: action.errors })
    }
    case RECEIVE_CURRENT_USER: {
      return state;
    }
    default: return state;
  }
  
}