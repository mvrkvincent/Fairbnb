import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';


class About extends React.Component {


  render() {

    return (
      <div className="modal">
        <div onClick={this.props.closeModal} className="close">X</div>
 
        <div id="form-type">Contact the developer for inquiries</div>
        <div className="modal-form">
          <a href="https://markvincent.dev/">
            <button id="contact-portfolio"><i class="fas fa-globe"></i>{' '}Portfolio</button></a>
          <a href="mailto:hello@markvincent.dev">
            <button id="contact-mail"><i className="far fa-envelope"></i>{' '}Email</button></a>
          <a href="https://github.com/mvrkvincent">
              <button id="contact-git"><i className="fab fa-github"></i>{' '}GitHub</button></a>
          <a href="https://www.linkedin.com/in/mvrkvincent/">
            <button id="contact-li"><i className="fab fa-linkedin"></i>{' '}LinkedIn</button></a>
        </div>

        <div className="alt-link">&copy; Designed & Built by Mark Vincent in Brooklyn, NY | &copy; 2019</div>
      </div>
    )
  };

};



const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(null, mdp)(About);