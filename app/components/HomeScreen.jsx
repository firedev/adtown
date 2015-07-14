import React from 'react';
import Street from './Street';

var HomeScreen = React.createClass({
  render: function() {
    return <div className="holder">
      <div className="sky">
        <Street />
      </div>
      <div className="ground">
        <div className="p1">
          <div className="center">
            <h1>AdTown</h1>
            <p>
              <b>Tap buildings</b> to own then
            </p>
          </div>
        </div>
      </div>
    </div>;
  }
});

export default HomeScreen;
