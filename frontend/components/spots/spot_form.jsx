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
      lat: null,
      lng: null,
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
    this.codeAddress();
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

  codeAddress() {
    const geocoder = new google.maps.Geocoder();
    let address = this.state.address;
    this.setState = this.setState.bind(this)

    geocoder.geocode({ 'address': address }, (results, status) => {
      let lat, lng, geoAdd;
        if (status == 'OK') {
          lat = results[0].geometry.bounds.ma.j;
          lng = results[0].geometry.bounds.ga.j;
          geoAdd = results[0].formatted_address;
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      this.setState({ lat: lat , lng: lng, address: geoAdd })
    });

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
                placeholder='Describe your spot'
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
                value={this.state.address}
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
