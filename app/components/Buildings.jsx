import React from 'react';
import Building from './Building'

var Buildings = React.createClass({
  getDefaultProps: function() {
    return {
      buildings: []
    };
  },

  renderBuildings: function() {
    var buildings = [];
    var key;
    var building;

    for(var i = 0; i < this.props.buildings.length; i++) {
      building = this.props.buildings[i];
      key = 'building-' + i;
      buildings.push(
        <Building
          key={key}
          floors={building.floors}
          apartments={building.apartments}
          owned={building.owned}
          onClick={this.props.onClick.bind(null, i)}
        />
      );
    }
    return buildings;
  },

  render: function() {
    return (
      <div className="buildings">{this.renderBuildings()}</div>
    );
  }
});

export default Buildings;
