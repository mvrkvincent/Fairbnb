import { connect } from 'react-redux';
import React from 'react';
import moment from 'moment';
import '../../../app/assets/stylesheets/_react_dates_override.css';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController, isInclusivelyAfterDay } from 'react-dates';

class BookingCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: null,
      focusedInput: true
      };
  }

  onFocusChange(focusedInput) {
    this.setState({
      focusedInput: !focusedInput ? moment() : focusedInput,
    });
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
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
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