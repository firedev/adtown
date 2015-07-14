import React from 'react';
import Buildings from './Buildings';

var HomeScreen = React.createClass({
  countOwned: function() {
    var owned = 0;
    this.props.buildings.forEach(function(building) {
      if(building.owned) {
        owned++;
      }
    });
    return owned;
  },

  renderOwnedCount: function() {
    var owned = this.countOwned();
    if(owned > 0) {
      return (
        <div className="absolute top-0 left-0 mt2 ml2 bg-white rounded p1 z1">
          Owned: <b>{owned}</b>
        </div>
      );
    }
  },

  render: function() {
    return <div className="holder">
      <div className="sky">
        {this.renderOwnedCount()}
        <Buildings
          buildings={this.props.buildings}
          onClick={this.props.onBuildingClick}
        />
      </div>
      <div className="ground">
        <div className="center p1">
          <div className="h1 bold mt1">AdTown</div>
          <p>
            <b>Tap buildings</b> to own then
          </p>
        </div>
      </div>
    </div>;
  }
});

export default HomeScreen;
