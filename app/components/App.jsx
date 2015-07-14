import React from 'react';
import HomeScreen from './HomeScreen';

var App = React.createClass({
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
            <img src="arrow.png" className="mx-auto" />
          </div>
        </div>
      );
    } else {
      return <HomeScreen />;
    }
  }
});

export default App;
