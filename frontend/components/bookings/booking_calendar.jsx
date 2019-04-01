import React from 'react';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import PropTypes from 'prop-types';


class BookingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };


  }

  render() {

    return (
      <div>
        <DayPickerRangeController
          startDate={this.state.startDate} 
          endDate={this.state.endDate} 
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />
      </div>
    )
  };
};

export default BookingForm;
