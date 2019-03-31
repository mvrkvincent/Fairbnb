import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});
const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});
const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
});

export const fetchBookings = () => dispatch => {
  return BookingApiUtil.fetchBookings().then(bookings => dispatch(receiveBookings(bookings)));
};

export const fetchBooking = id => dispatch => (
  BookingApiUtil.fetchBooking(id).then(booking => dispatch(receiveBooking(booking)))
);

export const createBooking = booking => dispatch => (
  BookingApiUtil.createBooking(booking).then(booking => dispatch(receiveBooking(booking)))
);

export const updateBooking = booking => dispatch => (
  BookingApiUtil.updateBooking(booking).then(booking => dispatch(receiveBooking(booking)))
);

export const deleteBooking = bookingId => dispatch => (
  BookingApiUtil.deleteBooking(bookingId).then(() => dispatch(removeBooking(bookingId)))
);