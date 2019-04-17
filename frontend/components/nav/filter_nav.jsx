import React from 'react';



class FilterNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = { map: 'unavailable' };
    this.toggleMap = this.toggleMap.bind(this);
  }

  componentDidMount() {
    this.setState({map: 'available'});
  }

  toggleMap() {
      const indexMap = document.getElementById('index-map');
      const button = document.getElementById('map-button');
      indexMap.classList.toggle("index-map-visible");
      button.classList.toggle("active-button");
  }

  render() {

    return (
      <div className="filter-bar">
        <div>
          <button className="filter-button">Dates</button>
          <button className="filter-button">Guests</button>
          <button id="map-button" className="filter-button" onClick={this.toggleMap}>Show Map</button>
        </div>
      </div>
    )
  };

};

export default FilterNav;
