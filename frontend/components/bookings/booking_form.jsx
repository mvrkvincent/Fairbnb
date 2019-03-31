import React from 'react';

class BookingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.bookingInfo;
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state).then();
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

    const bookAction = (this.props.current_user) ? this.handleSubmit : this.props.requestLogin;
      
    return (
        <div className="booking-form">
        <form className="modal-form" onSubmit={bookAction}>
          <div className="field-wrapper">
            <span>Dates</span>
            <div className="form-field">
              <input
                type="email"
                className="form-input"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.handleInput('email')} />
              <div className="arrow"><i className="fas fa-arrow-right"></i></div>
              <input
                type="email"
                className="form-input"
                placeholder="Email address"
                value={this.state.email}
                onChange={this.handleInput('email')} />
            </div>
            {/* <div className="modal-errors">{this.renderErrors('E')}</div> */}
          </div>
          <div className="field-wrapper">
            <span>Guests</span>
            <div className="form-field">
              <input
                type="password"
                className="form-input"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleInput('password')} />
              <i className="fas fa-lock"></i>
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
