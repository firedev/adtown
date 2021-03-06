import React from 'react';
import HomeScreen from './HomeScreen';

var App = React.createClass({
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

  handleBuildingClick(i) {
    this.state.buildings[i].owned = true;
    this.forceUpdate();
  },

  render() {
    if(window.navigator.standalone === false) {
      return (
        <div>
          <div className="center mt2">
            <div className="bg-darken-1 rounded p2 inline-block mt4 relative z1">
              <b>Add App to HomeScreen</b>
            </div>
          </div>
          <div className="center absolute bottom-0 left-0 right-0">
            <img src="assets/arrow.png" className="mx-auto" />
          </div>
        </div>
      );
    } else {
      return <HomeScreen
        buildings={this.state.buildings}
        onBuildingClick={this.handleBuildingClick}/>;
    }
  }
});

export default App;
