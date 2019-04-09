import React from 'react';

class SpotForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      description: '',
      city: '',
      address: '',
      rate: 1,
      num_guests: 1,
      num_beds: 0,
      num_baths: 0,
      ave_rating: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state);
  }

  generateGuestOptions() {
    const guestOptions = [];
    for (let i = 1; i <= 10; i++) {
      guestOptions.push((<option key={i} value={i}>{i}</option>))
    }
    return guestOptions;
  }

  generateSpotOptions() {
    const spotOptions = [];
    for (let i = 1; i <= 10; i++) {
      spotOptions.push((<option key={i} value={i}>{i}</option>))
    }
    return spotOptions;
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
    let buttonText;

    if (this.props.formType === 'Host') {
      buttonText = 'List Spot';

    } else {
      buttonText = 'Update Spot';
    };

    return (
      <div className="spot-form">
        <div id="form-type">{this.props.formType} your Spot</div>
        <form className="modal-form" onSubmit={this.handleSubmit}>

        <div className="module"></div>
        <div className="spot-form-options">
        <div>
          <div className="field-wrapper">
            <div className="form-field">
              <input
                type="text"
                className="form-input"
                placeholder="Spot name"
                value={this.state.name}
                onChange={this.handleInput('name')} />
            </div>
          </div>

          <div className="field-wrapper">
            <div className="form-field">
              <textarea
                className="form-input"
                placeholder='Max 1200 characters'
                value={this.state.description}
                onChange={this.handleInput('description')} />
            </div>
          </div>

          <div className="field-wrapper">
            <div className="form-field">
              <input
                type="text"
                className="form-input"
                placeholder="City"
                value={this.state.city}
                onChange={this.handleInput('city')} />
            </div>
          </div>

          <div className="field-wrapper">
            <div className="form-field">
              <input
                type="text"
                className="form-input"
                placeholder="Address"
                value={this.state.city}
                onChange={this.handleInput('address')} />
            </div>
          </div>
          </div>



          <div className="host-details">
          <div className="field-wrapper">
            <span>Nightly rate</span>
            <div className="form-field">
              <input
                type="text"
                className="form-input"
                placeholder="Nightly Rate"
                value={this.state.rate}
                onChange={this.handleInput('rate')} />
            </div>
          </div>

          <div className="field-wrapper">
            <span>Guests</span>
            <div className="form-field">
              <select
                className="form-input"
                placeholder="guests"
                onChange={this.handleInput('num_guests')}>
                {this.generateGuestOptions()}
              </select>
            </div>
          </div>

          <div className="field-wrapper">
            <span>Beds</span>
            <div className="form-field">
              <select
                className="form-input"
                placeholder="beds"
                onChange={this.handleInput('num_beds')}>
                {this.generateSpotOptions()}
              </select>
            </div>
          </div>

          <div className="field-wrapper">
            <span>Baths</span>
            <div className="form-field">
              <select
                className="form-input"
                placeholder="baths"
                onChange={this.handleInput('num_baths')}>
                {this.generateSpotOptions()}
              </select>
            </div>
          </div>
          </div>
          </div>
          <button>{buttonText}</button>
        </form>
      </div>
    )
  };

};

export default SpotForm;
