import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.userInfo;
    this.demo = this.demo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state).then(this.props.closeModal);
  }

  demo(e) {
    e.preventDefault();
    this.props.loginDemo({ email: 'smitty@no1.com', password: 'Warbenjagermanjensen' }).then(this.props.closeModal);
  }

  renderErrors() {
    return( <ul>{this.props.errors.map((error, idx) => (<li key={idx}>{error}</li>))}</ul> )
  }


  render() {
    let ident, buttonText, placeText, altLink;

    if (this.props.formType === 'Sign up') {
      ident = 
        <div>
          <div className="form-field"> 
          <label for="Last Name">       
          <input
            type="text"
            className="form-input"
            placeholder="First name"
            value={this.state.fname}
            onChange={this.handleInput('fname')} />
          </label>  
          <i className="far fa-user"></i>
          </div>  
          <br></br>
          <div className="form-field">
          <label for="Last Name">
          <input
            type="text"
            className="form-input"
            placeholder="Last name"
            value={this.state.lname}
            onChange={this.handleInput('lname')} />
          </label>
          <i className="fas fa-user"></i>
          </div>
          <br></br>
        </div>; 
      buttonText = 'Sign up'
      placeText = 'Create a Password'
      altLink = <div className="alt-link">Already a Fairbnb member? <button onClick={this.props.altLink}>Log In</button></div>;

    } else {
      buttonText = 'Log in'
      placeText = 'Password'
      altLink = <div className="alt-link">Not a member? <button onClick={this.props.altLink}>Sign Up</button></div>;
    };

    return (
      <div >
      <div onClick={this.props.closeModal} className="close">X</div>
        <br></br><br></br>
        <div id="form-type">{this.props.formType} with Email or <button onClick={this.demo}>Demo</button></div>
        <form className="modal-form" onSubmit={this.handleSubmit}>
          <div className="form-field">
          <input
            type="text"
            className="form-input"
            placeholder="Email address"
            value={this.state.email}
            onChange={this.handleInput('email')} />
            <i className="far fa-envelope"></i>
          </div>
          <br></br>

          {ident}
          <div className="form-field">
          <input
            type="password"
            className="form-input"
            placeholder={placeText}
            value={this.state.password}
            onChange={this.handleInput('password')} />
            <i className="fas fa-lock"></i>
          </div>
          <br></br>
          <button>{buttonText}</button>
        </form>
        <div className="modal-errors">{this.renderErrors()}</div>
        {altLink}
      </div>
    )
  };

};

export default SessionForm;
