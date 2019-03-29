import { RECEIVE_ERRORS, RECEIVE_SPOT } from '../../actions/spot_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS: {
      return action.errors;
    }
    case RECEIVE_SPOT:
      return [];

    default: return state;
  }

};