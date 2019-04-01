import { connect } from 'react-redux';
import { createBooking } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
import BookingForm from './booking_form';

const msp = ({entities, session}) => ({
  currentUser: entities.users[session.id],
  defaultState: {  startDate: null,
                    endDate: null,
                    focusedInput: null,
                    num_guests: 1,
                    host_id: 38,
                    total_rate: null,
                    status: 'pending',
                    formType: 'Book'
                  }
  });

const mdp = dispatch => ({
  formAction: booking => dispatch(createBooking(booking)),
  requestLogin: () => dispatch(openModal('LOGIN')),
  confirmBooking: () => dispatch(openModal('BOOK'))
});

export default connect(msp, mdp)(BookingForm);