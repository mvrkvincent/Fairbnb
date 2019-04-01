import React from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import { runInThisContext } from 'vm';

class BookingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      num_guests: '',
      host_id: 1,
      total_rate: 10,
      status: 'pending'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.enforceLogin = this.enforceLogin.bind(this);

  }

  enforceLogin(e) {
    e.preventDefault();
    this.props.requestLogin();
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const bookingInfo = {
      check_in: this.state.startDate._d,
      check_out: this.state.endDate._d,
      num_guests: this.state.num_guests,
      host_id: this.state.host_id,
      spot_id: this.props.spot.id,
      total_rate: this.state.total_rate,
      status: this.state.status
    };
    
    this.props.formAction(bookingInfo);
 
  }

  // renderErrors(field) {
  //   const errors = this.props.errors;
  //   const fieldError = [];

  //   errors.forEach((error) => (error[0] === field) ? fieldError.push(error) : null);

  //   return (
  //     <ul>{fieldError.map((error, idx) => (<li key={idx}>{error}</li>))}</ul>
  //   )
  // }

  render() {

    const bookAction = (this.props.currentUser) ? this.handleSubmit : this.enforceLogin;

    return (
        <div className="booking-form">
        <form className="modal-form" onSubmit={bookAction}>
          <div className="field-wrapper">
            <span>Dates</span>
            <div className="form-field">
            <DateRangePicker
              startDate={this.state.startDate}
              startDateId="check_in"
              endDate={this.state.endDate}
              endDateId="check_out"
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
            />
            </div>
          {/* <div className="modal-errors">{this.renderErrors('E')}</div> */}
          </div>              
          <div className="field-wrapper">
            <span>Guests</span>
            <div className="form-field">
            <input
              type="text"
              className="form-input"
              value={this.state.num_guests}
              onChange={this.handleInput('num_guests')} />
            </div>
            {/* <div className="modal-errors">{this.renderErrors('P')}</div> */}
          </div>
          <button>Book</button>
          Your credits will be deducted at check-in
        </form>

      </div>
    )
  };





};

export default BookingForm;
