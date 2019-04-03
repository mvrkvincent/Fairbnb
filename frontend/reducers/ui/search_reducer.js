import { merge } from 'lodash';
import { SEARCH_CITY } from "../../actions/search_actions";

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case SEARCH_CITY: {
      return merge(action.city);
    }
    default: return state;
  }

};