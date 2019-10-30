import React, {Component, Fragment } from 'react';
import './style.scss'


class Header extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Fragment>
      <header className="header__container--line">
        <div className="header global-container flex">
          <a href="#">
            <div className="header__logo flex">
              <p className="header__logo--gray">Metr</p>
              <div className="header__logo--green-circle"></div>
              <p className="header__logo--dark-gray">Blog</p>
            </div>
          </a>
          <div className="menu__container">
            <img src="images/Hamburger_icon.png" alt="hamburger" className="menu__hamburger"/>
            <ul className="menu__list flex">
              <li className="active">
                <a href="#"> Home </a>
              </li>
              <li>
                <a href="#"> About </a>
              </li>
              <li>
                <a href="#"> Articles </a>
              </li>
              <li>
                <a href="#"> Pages </a>
              </li>
            </ul>
          </div>

        </div>
      </header>
      </Fragment>
    );
  };
};


export default Header;