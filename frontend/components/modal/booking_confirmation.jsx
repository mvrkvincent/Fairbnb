import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deleteBooking, fetchBookings, updateBooking } from '../../actions/booking_actions';

class BookingConfirmation extends React.Component {


  constructor(props) {
    super(props);
    const bookings = this.props.bookings;
    const currentBooking = bookings[bookings.length - 1];
    this.state = currentBooking;
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleCancel(e) {
    e.preventDefault();
    const bookings = this.props.bookings;
    const currentBooking = bookings[bookings.length - 1];

    this.props.cancelBooking(currentBooking.id).then(this.props.closeModal());
  }

  handleConfirm(e) {
    e.preventDefault();
    this.setState({status: 'confirmed'}, () => this.props.confirmBooking(this.state));
  }


  render() {

    const { currentUser, bookings } = this.props;
    const currentBooking = bookings[bookings.length - 1];
    const nameText = {fontWeight: '900'};
    return (
      <div className="modal">
        <div onClick={closeModal} className="close">X</div>

        <div id="form-type">You're all set, <span style={nameText}>{currentUser.fname}</span>!</div>
        <div className="modal-form">
            <div className="detail" id="confirmation">
              <div>Confirmation: #{currentBooking.id}</div>
              <div>Check In: {currentBooking.check_in}</div>
              <div>Check Out: {currentBooking.check_out}</div>
            </div>
            <div className="conf-buttons">
                <button className="confirm" onClick={this.handleConfirm}>Confirm</button>
                <button className="cancel" onClick={this.handleCancel}>Cancel</button>
          </div>
        </div>
        <div>
        </div>
        
      </div>
    )
  };

};

const msp = ({ session, entities }) => ({
  currentUser: entities.users[session.id],
  bookings: Object.values(entities.bookings)
});

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  cancelBooking: id => dispatch(deleteBooking(id)),
  fetchBookings: () => dispatch(fetchBookings()), 
  confirmBooking: booking => dispatch(updateBooking(booking))
});

export default connect(msp, mdp)(BookingConfirmation);