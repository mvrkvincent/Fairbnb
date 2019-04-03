import React from 'react';
import { connect } from 'react-redux';
import { fetchSpots } from '../../actions/spot_actions';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { city: null };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.city);
  }

  render() {

    return(

    <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={this.state}
          onChange={this.handleInput('city')} />
        </form>
    </div>

    )
  }


}


const msp = ({ entities }) => ({
  spots: Object.values(entities.spots)
});

const mdp = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots())
});

export default connect(msp, mdp)(SearchBar);