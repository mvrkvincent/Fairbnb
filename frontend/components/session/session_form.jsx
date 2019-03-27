import React from 'react';

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
    let ident = <div></div>;
    
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
        </div>
    }

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

          <label>Password:
          <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>
          <input type="submit" />
        </form>
        {this.props.altLink}
      </div>
    )
  };

};

export default SessionForm;