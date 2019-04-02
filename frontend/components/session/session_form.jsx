import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.userInfo;
    this.handleDemo = this.handleDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAltLink = this.handleAltLink.bind(this);
  }


  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state).then(this.props.closeModal);
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.loginDemo({ email: 'bobby@xkcd.com', password: 'starwars' }).then(this.props.closeModal);
  }

  
  handleAltLink(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.altLink();
  }
  
  renderErrors(field) {
    const errors = this.props.errors;
    const fieldError = [];

    errors.forEach((error) => (error[0] === field) ? fieldError.push(error) : null);

    return( 
      <ul>{fieldError.map((error, idx) => (<li key={idx}>{error}</li>))}</ul> 
    )
  }

  render() {
    let ident, buttonText, placeText, altLinkText;

    if (this.props.formType === 'Sign up') {
      ident = 
        <div>

        <div className="field-wrapper">
          <div className="form-field">     
          <input
            type="text"
            className="form-input"
            placeholder="First name"
            value={this.state.fname}
            onChange={this.handleInput('fname')} />
          <i className="far fa-user"></i>
          </div>
          <div className="modal-errors">{this.renderErrors('F')}</div>
          </div> 

          <div className="field-wrapper">
          <div className="form-field">
          <input
            type="text"
            className="form-input"
            placeholder="Last name"
            value={this.state.lname}
            onChange={this.handleInput('lname')} />
          <i className="far fa-user"></i>
          </div>
          <div className="modal-errors">{this.renderErrors('L')}</div>
          </div>

        </div>; 
      buttonText = 'Sign up'
      placeText = 'Create a Password'
      altLinkText = <div className="alt-link">Already a Fairbnb member? <button onClick={this.handleAltLink}>Log In</button></div>;

    } else {
      buttonText = 'Log in'
      placeText = 'Password'
      altLinkText = <div className="alt-link">Not a member? <button onClick={this.handleAltLink}>Sign Up</button></div>;
    };

    return (
      <div className="modal" >
        <div onClick={this.props.closeModal} className="close">X</div>

        <div id="form-type">{this.props.formType} with Email or <button onClick={this.handleDemo}>Demo</button></div>
        <form className="modal-form" onSubmit={this.handleSubmit}>
          <div className="field-wrapper">
          <div className="form-field">
          <input
            type="email"
            className="form-input"
            placeholder="Email address"
            value={this.state.email}
            onChange={this.handleInput('email')} />
            <i className="far fa-envelope"></i>
          </div>
          <div className="modal-errors">{this.renderErrors('E')}</div>
          </div>
    

          {ident}

          <div className="field-wrapper">
          <div className="form-field">
          <input
            type="password"
            className="form-input"
            placeholder={placeText}
            value={this.state.password}
            onChange={this.handleInput('password')} />
            <i className="fas fa-lock"></i>
          </div>
          <div className="modal-errors">{this.renderErrors('P')}</div>
          </div>
          <button>{buttonText}</button>
        </form>
        {altLinkText}
      </div>
    )
  };

};

export default SessionForm;
