import React, {Component } from 'react';
import './style.scss'

class Footer extends Component {

  constructor(props) {
    super(props);
  };


  render() {
    return (
      <footer className="footer">
        <div className=" footer-container global-container flex">
          <div className="footer_text flex">
            <p>All Rights Reserved to cssauthor.com</p>
          </div>
          <div className="footer_icons flex">
            <a href="https://www.facebook.com/">
              <i className="i_facebook"></i>
            </a>
            <a href="https://twitter.com/">
              <i className="i_twitter"></i>
            </a>
            <a href="https://www.youtube.com/">
              <i className="i_you-tube"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };

}


export default Footer;