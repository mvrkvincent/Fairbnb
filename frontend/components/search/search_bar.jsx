import React from 'react';
import { connect } from 'react-redux';
import { searchCity } from '../../actions/search_actions';


class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.city;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchCity(this.state);
  }

  render() {

    return(

    <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={this.state.city}
          onChange={this.handleInput('city')} />
          <input type="submit" style={{display: "none"}}value="submit"/>
        </form>
    </div>

    )
  }
}


const msp = state => ({
  city: { city: '' }
})

const mdp = dispatch => ({
  searchCity: city => dispatch(searchCity(city))
});


export default connect(msp, mdp)(SearchBar);