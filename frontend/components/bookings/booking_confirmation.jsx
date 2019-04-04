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
    this.props.cancelBooking(this.state.id).then(this.props.closeModal());
  }

  handleConfirm(e) {
    e.preventDefault();
    this.setState({status: 'CONFIRMED'}, () => this.props.confirmBooking(this.state));
  }

  render() {
    const { currentUser, bookings, spots } = this.props;
    const currentSpot = spots[this.state.spot_id];
    const currentBooking = bookings[bookings.length - 1];
    const spotImg = { backgroundImage: `url(${currentSpot.img_url})` };
    const nameText = {fontWeight: '900'};
    const pendText = (<div>Please confirm your booking details</div>);
    const confText = (<div>You're all set, <div style={nameText}>{currentUser.fname}</div></div>);
    const pendButtons = (
        <div className="conf-buttons"><button className="confirm" onClick={this.handleConfirm}>Confirm</button>
        <button className="cancel" onClick={this.handleCancel}>Cancel</button></div> );
    
    const confButton = (<button className="confirm" onClick={this.props.closeModal}>Back to Spots</button>);

    const formHead = (this.state.status === 'CONFIRMED') ? confText : pendText;
    const formButtons = (this.state.status === 'CONFIRMED') ? confButton : pendButtons;
    return (
      <div className="modal">
        <div id="form-type">{formHead}</div>
        <div className="spot-img" style={spotImg}></div>
        <div className="modal-form">
            <div className="conf-detail" id="confirmation">
              <div>Booking Number:</div>
                <div style={nameText}>{currentBooking.id}</div>
              <div>Check In: {currentBooking.check_in}</div>
              <div>Check Out: {currentBooking.check_out}</div>
            </div>
                {formButtons}
            </div>
      </div>
    )
  };

};

const msp = ({ session, entities }) => ({
  spots: entities.spots,
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