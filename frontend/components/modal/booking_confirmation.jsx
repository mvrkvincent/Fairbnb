import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { fetchBooking } from '../../actions/booking_actions';


class BookingConfirmation extends React.Component {


  render() {
    const {currentUser, closeModal} = this.props;
    const nameText = {fontWeight: '900'};

    return (
      <div className="modal">
        <div onClick={closeModal} className="close">X</div>

        <div id="form-type">You're all set, <span style={nameText}>{currentUser.fname}</span>!</div>
        <div className="modal-form">
            <div className="detail">
              Booking information goes here
            </div>
          <Link to='/'><button onClick={this.props.closeModal}>Back to Spots</button></Link>
        </div>
        <div>
        </div>
        
      </div>
    )
  };

};

const msp = ({ session, entities }) => ({
  currentUser: entities.users[session.id]
});

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  fetchBooking: id => dispatch(fetchBooking(id))
});

export default connect(msp, mdp)(BookingConfirmation);