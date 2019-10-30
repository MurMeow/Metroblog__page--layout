import React, {Component } from 'react';
import './style.scss'

class Banner extends Component {

  constructor(props) {
    super(props);
  };


  render() {
    return (
      <div className="banner global-container flex">
        <div className="article">
          <h2>Apple iPad </h2>
          <h3>Reviews</h3>
          <a href="#">
            <div className="banner_icon flex">
              <i className="i_camera"></i>
              <p>Video review</p>
            </div>
          </a>
        </div>
        <img src='./images/banner_ipad.svg' alt="ipad" className="banner_ipad"/>
      </div>
    );
  };

}


export default Banner;