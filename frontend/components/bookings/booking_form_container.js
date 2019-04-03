import { connect } from 'react-redux';
import { createBooking, updateBooking } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
import BookingForm from './booking_form';
import { fetchBookings } from '../../actions/booking_actions';

const msp = ({entities, session}) => ({
  currentUser: entities.users[session.id],
  bookings: Object.values(entities.bookings),
  defaultState:{  startDate: null,
                  endDate: null,
                  focusedInput: null,
                  num_guests: 1,
                  host_id: null,
                  total_rate: null,
                  status: 'open',
                  formType: 'Book',
                  currentBooking: null
                }
  });

const mdp = dispatch => ({
  formAction: booking => dispatch(createBooking(booking)),
  requestLogin: () => dispatch(openModal('LOGIN')),
  confirmBooking: () => dispatch(openModal('BOOK')),
  fetchBookings: () => dispatch(fetchBookings()),
  updateBooking: (booking) => dispatch(updateBooking(booking))
});

export default connect(msp, mdp)(BookingForm);