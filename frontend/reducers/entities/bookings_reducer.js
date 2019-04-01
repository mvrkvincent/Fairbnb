import { merge } from 'lodash';
import { RECEIVE_BOOKINGS, RECEIVE_BOOKING, REMOVE_BOOKING } from '../../actions/booking_actions';


export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKINGS: {
      const result = merge({}, state, action.bookings);
      return result;
    }
    case RECEIVE_BOOKING: {
      debugger
      return merge({}, state, { [action.booking.id]: action.booking });
    }
    case REMOVE_BOOKING: {
      const alteredState = merge({}, state);
      delete alteredState[action.bookingId];
      return alteredState;
    }
    default: return state;
  }

};

