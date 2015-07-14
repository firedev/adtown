import React from 'react';
import Buildings from './Buildings';

var Street = React.createClass({
  getDefaultProps: function() {
    return {
      buildings: []
    };
  },

  componentWillMount() {
    var buildings = [];
    for(var i = 0; i < 100; i++) {
      buildings.push({
        floors: parseInt(Math.random() * 7 + 3),
        apartments: parseInt(Math.random() * 7 + 3),
        owned: (Math.random() > 0.7)
      });
    }
    this.setState({ buildings: buildings });
  },

  handleClick(i) {
    this.state.buildings[i].owned = true;
    this.forceUpdate();
  },

  render: function() {
    return (
      <Buildings
        buildings={this.state.buildings}
        onClick={this.handleClick} />
    );
  }
});

export default Street;
