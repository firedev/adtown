import React from 'react';

var Floor = React.createClass({
  getDefaultProps: function() {
    return { apartments: 5 };
  },

  renderApartments: function() {
    var apartments = [];
    var key;
    for(var i = 0; i < this.props.apartments; i++) {
      key = 'apartment-' + i;
      apartments.push(
        <div className="apartment" key={key} />
      );
    }
    return apartments;
  },

  render: function() {
    return (
      <div className="floor">{this.renderApartments()}</div>
    );
  }
});

export default Floor;
