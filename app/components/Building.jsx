import React from 'react';
import Floor from './Floor';
import classNames from 'classnames';

var Building = React.createClass({
  getDefaultProps: function() {
    return {
      floors: 7,
      apartments: 5,
      owned: false
    };
  },

  renderFloors: function() {
    var floors = [];
    var key;
    for(var i = 0; i < this.props.floors; i++) {
      key = 'floor-' + i;
      floors.push(
        <Floor key={key} apartments={this.props.apartments} />
      );
    }
    return floors;
  },

  render: function() {
    var classes = {
       'building': true,
       'owned': this.props.owned
     };
    return (
      <div
        onClick={this.props.onClick}
        className={classNames(classes)}>
        {this.renderFloors()}
      </div>
    );
  }
});

export default Building;
