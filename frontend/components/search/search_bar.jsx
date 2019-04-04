import React from 'react';
import { connect } from 'react-redux';
import { searchCity } from '../../actions/search_actions';
import { Object } from 'es6-shim';


class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  city: '',
                    options: []
                  };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInput(field) {
    return e => this.setState({ [field]: e.target.value }, () => this.fetchOptions());
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    if (this.state.options.includes(this.state.city)) {
        this.props.searchCity(this.state.city);
    } else {
      this.props.searchCity('');
    }
  }

  fetchOptions() {
    const cityList = this.props.spots.map(spot => spot.city);
    const optionsList = [...new Set(cityList)];
    this.setState({options: optionsList});
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


const msp = ({ entities }) => ({
  spots: Object.values(entities.spots)
})

const mdp = dispatch => ({
  searchCity: city => dispatch(searchCity(city))
});


export default connect(msp, mdp)(SearchBar);