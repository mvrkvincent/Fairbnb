import React from 'react';



class FilterNav extends React.Component {


  render() {

    return (
      <div className="filter-bar">
        <div>
          <button>Dates</button>
          <button>Guests</button>
        </div>
      </div>
    )
  };

};

export default FilterNav;
