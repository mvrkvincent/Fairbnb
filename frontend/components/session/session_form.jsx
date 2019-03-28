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
    this.props.loginDemo({ email: 'test', password: '123456' }).then(this.props.closeModal);
  }

  renderErrors() {
    return( <ul>{this.props.errors.map((error, idx) => (<li key={idx}>{error}</li>))}</ul> )
  }


  render() {
    let ident, subText, placeText, altLink;

    if (this.props.formType === 'Sign up') {
      ident = 
        <div>
          <input
            type="text"
            className="input"
            placeholder="First name"
            value={this.state.fname}
            onChange={this.handleInput('fname')} />
          <br></br>
          <input
            type="text"
            className="input"
            placeholder="Last name"
            value={this.state.lname}
            onChange={this.handleInput('lname')} />
          <br></br>
        </div>; 
      subText = 'Sign up'
      placeText = 'Create a Password'
      altLink = <div className="alt-link">Already a Fairbnb member? <button onClick={this.props.altLink}>Log In</button></div>;

    } else {
      subText = 'Log in'
      placeText = 'Password'
      altLink = <div className="alt-link">Not a member? <button onClick={this.props.altLink}>Sign Up</button></div>;
    };

    return (
      <div >
      <div onClick={this.props.closeModal} className="close">X</div>
        <br></br><br></br>
        <div id="form-type">{this.props.formType} with Email or <button onClick={this.demo}>Demo</button></div>
        <form className="modal-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Email address"
            value={this.state.email}
            onChange={this.handleInput('email')} />
          <br></br>

          {ident}

          <input
            type="password"
            className="input"
            placeholder={placeText}
            value={this.state.password}
            onChange={this.handleInput('password')} />
          <br></br>
          <button>{subText}</button>
        </form>
        <div className="modal-errors">{this.renderErrors()}</div>
        {altLink}
      </div>
    )
  };

};

export default SessionForm;
