import { connect } from 'react-redux';
import { createBooking } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
import BookingForm from './booking_form';

const msp = ({ entities }) => ({
  bookingInfo: {check_in: null, check_out: null, num_guests: null},
  formType: 'Book'
});

const mdp = dispatch => ({
  formAction: booking => dispatch(createBooking(booking)),
  requestLogin: () => dispatch(openModal('LOGIN'))
});

export default connect(msp, mdp)(BookingForm);