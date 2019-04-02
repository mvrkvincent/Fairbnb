import { connect } from 'react-redux';
import React from 'react';
import moment from 'moment';
import { DayPickerRangeController, isInclusivelyAfterDay } from 'react-dates';

class BookingCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment().add(3, 'd'),
      focusedInput: null
      };
  }

  isDayBooked() {
    return null;
  }

  render() {
    return (
      <div style={{marginBottom: '20px'}}>
        <DayPickerRangeController
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          numberOfMonths={2}
          isDayBlocked={this.isDayBooked}
          minimumNights={2}
          isOutsideRange={day => isInclusivelyAfterDay(moment(), day)}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
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