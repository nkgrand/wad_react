import React from "react";

import "./Main.scss";
import { Button } from "../Button/Button.jsx";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
  }
  render() {
    return (
      <div className="root__container">
        <h1 className="title">
          <a className="title__link" href="#!">
            HANNA BAKES
          </a>
        </h1>
        <div className="container">
          <div className="item"></div>
          <div className="item">
            <div className="item__inner">
              <h2 className="item__inner-title">{this.title}</h2>
              <Button class="btn" text="Order Here" />
            </div>
          </div>
          <div className="item"></div>
        </div>
      </div>
    );
  }
}
