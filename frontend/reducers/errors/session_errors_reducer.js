import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { CLOSE_MODAL } from '../../actions/modal_actions';
// import { RECEIVE_SPOT } from '../../actions/spot_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS: {
      return action.errors;
    }
    case RECEIVE_CURRENT_USER:
    // case RECEIVE_SPOT:
    case CLOSE_MODAL:
      return [];
    
    default: return state;
  }
  
};