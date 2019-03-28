import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';


class About extends React.Component {


  render() {

    return (
      <div >
        <div onClick={this.props.closeModal} className="close">X</div>
        <br></br><br></br>
        <div id="form-type">About Fairbnb</div>
        <div className="modal-form">
            This is some text about us
        </div>
      </div>
    )
  };

};



const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(null, mdp)(About);