import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchCity } from '../../actions/search_actions';
import { Object } from 'es6-shim';


class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  city: '',
                    options: [],
                    search: 'Search'
                  };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInput(field) {
    return e => this.setState({ [field]: e.target.value }, () => this.fetchOptions());
  }

  handleSubmit(e) {
    const cityName = this.state.city;
    const pathName = (cityName[0]) ? cityName.split(' ').map(part => (part[0].toUpperCase() + part.slice(1))).join('_') : '';
    const searchText = pathName.split('_').join(' ');
    e.preventDefault();

    if (cityName[0] && this.state.options.includes(cityName.toLowerCase())) {
        this.props.searchCity({city: this.state.city.toLowerCase()});
        this.props.history.push(`/${pathName}`);
        this.setState({ search: `Searching in ${searchText}`, city: [] });
    } else if (pathName === '') {
        this.props.searchCity('');
        this.props.history.push('/');
        this.setState({search: 'Search', city: []});
    } else {
        this.props.searchCity('');
        this.props.history.push('/');
        this.setState({ search: `No Spots in ${searchText}`, city: [] });
    }
  }


  fetchOptions() {
    const cityList = this.props.spots.map(spot => spot.city.toLowerCase());
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
          placeholder={this.state.search}
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


export default withRouter(connect(msp, mdp)(SearchBar));