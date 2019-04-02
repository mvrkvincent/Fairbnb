import React from 'react';
import { DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';


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
          noBorder
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          numberOfMonths={2}
          onPrevMonthClick={DayPickerRangeController.onPrevMonthClick}
          onNextMonthClick={DayPickerRangeController.onNextMonthClick}
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={null}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />
      </div>
    )
  };
};

export default BookingForm;
