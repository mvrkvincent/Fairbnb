import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

export default (state = { id: null }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      return merge({}, state, { id: action.user.id });
    }
    case LOGOUT_CURRENT_USER: {
      const state = { id: null };
      return state;
    }
    default: return state;
  }

}