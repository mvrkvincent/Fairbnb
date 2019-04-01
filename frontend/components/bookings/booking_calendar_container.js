import { connect } from 'react-redux';
import { createBooking } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
import BookingCalendar from './booking_calendar';

const msp = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
  formType: 'Book'
});

const mdp = dispatch => ({
  formAction: booking => dispatch(createBooking(booking)),
  requestLogin: () => dispatch(openModal('LOGIN'))
});

export default connect(msp, mdp)(BookingCalendar);