import React from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';


class BookingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.defaultState;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.enforceLogin = this.enforceLogin.bind(this);

  }

  enforceLogin(e) {
    e.preventDefault();
    this.props.requestLogin();
  }

  clearValues() {
    this.setState(this.props.defaultState);
  }

  calculateTotal() {
    const rate = this.props.spot.rate;
    const days = this.state.endDate.diff(this.state.startDate, 'days', false);
    const guestFee = this.state.num_guests > 1 ? 1 : 0;
    const total = (guestFee + (rate * (days + 1)));
    return total;
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const bookingTotal = parseInt(document.getElementById('finalTotal').innerText);
    const bookingInfo = {
      check_in: this.state.startDate._d,
      check_out: this.state.endDate._d,
      num_guests: this.state.num_guests,
      host_id: this.state.host_id,
      spot_id: this.props.spot.id,
      total_rate: bookingTotal,
      status: this.state.status
    };

    this.props.formAction(bookingInfo)
      .then(this.props.confirmBooking())
      .then(this.clearValues())
    ;
 
  }

  allowGuests(guests) {
    const allowedGuests = [];

    for (let i = 1; i <= guests; i++) {
      allowedGuests.push((<option key={i} value={i}>{i}</option>))
    }
    return allowedGuests;
  };


  // renderErrors(field) {
  //   const errors = this.props.errors;
  //   const fieldError = [];

  //   errors.forEach((error) => (error[0] === field) ? fieldError.push(error) : null);

  //   return (
  //     <ul>{fieldError.map((error, idx) => (<li key={idx}>{error}</li>))}</ul>
  //   )
  // }

  render() {
    const guestFee = this.state.num_guests > 1 ? 1 : 0;
    const rate = this.props.spot ? this.props.spot.rate : null;
    const guests = this.props.spot ? this.props.spot.num_guests : null;
    const bookAction = (this.props.currentUser) ? this.handleSubmit : this.enforceLogin;
    const currentTotal = (this.state.endDate) ? this.calculateTotal() : null;
    const days = (this.state.endDate) ? (this.state.endDate.diff(this.state.startDate, 'days', false) + 1) : null;
    
    const calculator = (<div className="calculator">
                          <div className="ledger">
                              <div><i className="fas fa-wave-square"></i>{rate} x {days} days</div>
                              <div><i className="fas fa-wave-square"></i>{(currentTotal - guestFee)}</div>
                          </div>
                          <div className="ledger">
                            <div>Additional guest fee</div>
                            <div><i className="fas fa-wave-square"></i>{guestFee}</div>
                          </div>
                          <div className="total">
                            <div>Total</div>
                            <div className ="wave_money"><i className="fas fa-wave-square"></i>
                            <div id="finalTotal">{currentTotal}</div></div>
                          </div>
                        </div>)


    const bookingCost = (currentTotal) ? calculator : null;

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
              <select
              className="form-input"
              onChange={this.handleInput('num_guests')}>
                {this.allowGuests(guests)}
              </select>
            </div>
            {/* <div className="modal-errors">{this.renderErrors('P')}</div> */}
          </div>

          {bookingCost}

          <button>Book</button>
          <div id="book-text">Your credits will be deducted at check-in</div>
        </form>

      </div>
    )
  };





};

export default BookingForm;
