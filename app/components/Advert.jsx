import React from 'react';
import ads from '../utils/ads';

export default class Advert extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ad: ads[Math.floor(Math.random() * ads.length)]
    };
  }

  renderImagePath() {
    console.log(this.state);
    return "assets/logos/" + this.state.ad.image + ".png";
  }

  render() {
    return (
      <div className="advert">
        <img src={this.renderImagePath()} />
      </div>
    );
  }
}
