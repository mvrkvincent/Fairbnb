import { connect } from 'react-redux';
import React from 'react';
import moment from 'moment';
import { DayPickerRangeController, isInclusivelyAfterDay } from 'react-dates';

class BookingCalendar extends React.Component {

  constructor(props) {
    super(props);


  }

  isDayBooked() {
    return null;
  }

  render() {
    return (
      <div style={{marginBottom: '20px'}}>
        <DayPickerRangeController
          numberOfMonths={2}
          isDayBlocked={this.isDayBooked}
          minimumNights={2}
          isOutsideRange={day => isInclusivelyAfterDay(moment(), day)}
        />
      </div>
    )
  };
};


const msp = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
  // availability: entities.booking.id
});

const mdp = dispatch => ({
  formAction: booking => dispatch(createBooking(booking)),
});

export default connect(msp, mdp)(BookingCalendar);