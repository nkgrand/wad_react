import React from "react";
import "./Header.scss";

import fb from "../../images/fb.png";
import twitter from "../../images/twitter.png";
import pinterest from "../../images/pinterest.png";
import instagramm from "../../images/instagramm.png";

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="nav" id="nav">
          <div className="menu__container" id="toggle">
            <div className="menu__container-bar1"></div>
            <div className="menu__container-bar2"></div>
            <div className="menu__container-bar3"></div>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="./index.html" className="nav__link is__active">
                <span>Home</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="./about.html" className="nav__link">
                <span>About</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="./order.html" className="nav__link">
                <span>Order</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="./contact.html" className="nav__link">
                <span>Contact</span>
              </a>
            </li>
          </ul>
          <div className="social">
            <ul className="social__list">
              <li className="social__item">
                <a href="#!" className="social__link">
                  <img src={fb} alt={fb} className="social__icon" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!" className="social__link">
                  <img src={twitter} alt={twitter} className="social__icon" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!" className="social__link">
                  <img
                    src={pinterest}
                    alt={pinterest}
                    className="social__icon"
                  />
                </a>
              </li>
              <li className="social__item">
                <a href="#!" className="social__link">
                  <img
                    src={instagramm}
                    alt={instagramm}
                    className="social__icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
