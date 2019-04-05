import React from 'react';



class FilterNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = { map: 'unavailable' };
    this.toggleMap = this.toggleMap.bind(this);
  }
  
  toggleMap() {

  }

  render() {
    return (
      <div className="filter-bar">
        <div>
          <button>Dates</button>
          <button>Guests</button>
          <button onClick={this.toggleMap()}>Show Map</button>
        </div>
      </div>
    )
  };

};

export default FilterNav;
