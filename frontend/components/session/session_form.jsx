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
    this.props.formAction(this.state).then(() => this.props.history.push('/'));
  }


  render() {
    let ident;
    let passText;
    let altLink;

    if (this.props.formType === 'Sign Up') {
      ident = 
        <div>
          <label>First name
          <input
            type="text"
            value={this.state.fname}
            onChange={this.handleInput('fname')} />
          </label> 
          <br></br>
          <label>Last name
          <input
            type="text"
            value={this.state.lname}
            onChange={this.handleInput('lname')} />
          </label> 
          <br></br>
        </div>; 
      passText = 'Create a password'
      altLink = <div>Already a Fairbnb account? <Link to='/login'>Log In</Link></div>;

    } else {
      passText = 'Password'
      altLink = <div>Not a member? <Link to='/signup'>Sign Up</Link></div>;
    };

    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Email address
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleInput('email')} />
          </label>
          <br></br>

          {ident}

          <label>{passText}
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')} />
          </label>
          <input type="submit" />
        </form>
        {altLink}
      </div>
    )
  };

};

export default SessionForm;