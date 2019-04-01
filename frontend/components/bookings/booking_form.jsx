import React from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';


class BookingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      num_guests: 1,
      host_id: 38,
      total_rate: null,
      status: 'pending'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.enforceLogin = this.enforceLogin.bind(this);

  }

  enforceLogin(e) {
    e.preventDefault();
    this.props.requestLogin();
  }

  calculateTotal() {
    const rate = this.props.spot.rate;
    const days = this.state.endDate.diff(this.state.startDate, 'days', false);
    const total = (rate * (days));
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

    this.props.formAction(bookingInfo).then(this.props.confirmBooking());
 
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

    const rate = this.props.spot ? this.props.spot.rate : null;
    const bookAction = (this.props.currentUser) ? this.handleSubmit : this.enforceLogin;
    const currentTotal = (this.state.endDate) ? this.calculateTotal() : null;
    const days = (this.state.endDate) ? this.state.endDate.diff(this.state.startDate, 'days', false) : null;
    const s = days > 1 ? 's' : '';
    
    const calculator = (<div className="calculator">
                          <div className="ledger">
                              <div><i className="fas fa-wave-square"></i>{rate} x {days} day{s}</div>
                              <div><i className="fas fa-wave-square"></i>{currentTotal}</div>
                          </div>
                          <div className="total">
                            <div>Total</div>
                            <div className ="wave_money"><i className="fas fa-wave-square"></i><div id="finalTotal">{currentTotal}</div></div>
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
            <input
              type="text"
              className="form-input"
              value={this.state.num_guests}
              onChange={this.handleInput('num_guests')} />
            </div>
            {/* <div className="modal-errors">{this.renderErrors('P')}</div> */}
          </div>
         


          {bookingCost}

         
          <button>Book</button>
          <span>Your credits will be deducted at check-in</span>
        </form>

      </div>
    )
  };





};

export default BookingForm;
