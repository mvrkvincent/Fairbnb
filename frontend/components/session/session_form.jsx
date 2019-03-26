import React from 'react';
import { merge } from lodash;

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }


  render() {

    const link = (this.props.formType === 'signup') ? <Link to='/login'>Log In</Link> : <Link to='/signup'>Sign Up</Link>

    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Email Address:
          <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange('email')} />
          </label>
          <label>Password:
          <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange('password')} />
          </label>
          <input type="submit" />
          <p>{link}</p>
        </form>
      </div>
    )
  };

};