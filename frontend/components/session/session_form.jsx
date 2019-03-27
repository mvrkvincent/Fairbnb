import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.userInfo;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state).then(this.props.closeModal);
  }

  renderErrors() {
   return( <ul>{this.props.errors.map((error, idx) => (<li key={idx}>{error}</li>))}</ul> )
  }


  render() {
    let ident;
    let subText;
    let altLink;


    if (this.props.formType === 'Sign Up') {
      ident = 
        <div>
          <input
            type="text"
            placeholder="First name"
            value={this.state.fname}
            onChange={this.handleInput('fname')} />
          <br></br>
          <input
            type="text"
            placeholder="Last name"
            value={this.state.lname}
            onChange={this.handleInput('lname')} />
          <br></br>
        </div>; 
      subText = 'Sign up'
      altLink = <div>Already a Fairbnb member? <Link to='/' onClick={this.props.altLink}>Log In</Link></div>;

    } else {
      subText = 'Log in'
      altLink = <div>Not a member? <Link to='/' onClick={this.props.altLink}>Sign Up</Link></div>;
    };

    return (
      <div>
        <h3>{this.props.formType}</h3>
        <p></p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Email address"
            value={this.state.email}
            onChange={this.handleInput('email')} />
          <br></br>

          {ident}

          <input
            type="password"
            placeholder="Create a Password"
            value={this.state.password}
            onChange={this.handleInput('password')} />
          <br></br>
          <input type="submit" value={subText} />
        </form>
            {this.renderErrors()}
        {altLink}
      </div>
    )
  };

};

export default SessionForm;
