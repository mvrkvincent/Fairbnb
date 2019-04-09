import { merge } from 'lodash';
import { RECEIVE_REVIEWS, REMOVE_REVIEW, RECEIVE_REVIEW } from '../../actions/review_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REVIEWS: {
      const result = merge({}, state, action.reviews);
      return result;
    }
    case RECEIVE_REVIEW: {
      return merge({}, state, { [action.review.id]: action.review });
    }
    case REMOVE_REVIEW: {
      const alteredState = merge({}, state);
      delete alteredState[action.reviewId];
      return alteredState;
    }
    default: return state;
  }

};
