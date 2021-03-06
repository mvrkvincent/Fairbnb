import { connect } from 'react-redux';
import { createBooking, fetchBookings } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
import BookingForm from './booking_form';
import { fetchSpot } from '../../actions/spot_actions';

const msp = ({entities, session}) => ({
  currentUser: entities.users[session.id],
  bookings: Object.values(entities.bookings),
  defaultBooking:{startDate: null,
                  endDate: null,
                  focusedInput: null,
                  num_guests: 1,
                  host_id: null,
                  total_rate: null,
                  formType: 'Book',
                  request: 'in progress'
                }
  });

const mdp = dispatch => ({
  formAction: booking => dispatch(createBooking(booking)),
  requestLogin: () => dispatch(openModal('LOGIN')),
  confirmBooking: () => dispatch(openModal('BOOK')),
  fetchBookings: () => dispatch(fetchBookings()),
  fetchSpot: id => dispatch(fetchSpot(id))
});

export default connect(msp, mdp)(BookingForm);