import React from "react";
import "./Section3.scss";

import hanna from "../../images/hanna.jpg";
import pic11 from "../../images/11.jpg";
import { Button } from "../Button/Button";

export class Section3 extends React.Component {
  constructor(props) {
    super(props);
    this.leftBtnName = this.props.leftBtnName;
    this.rightBtnName = this.props.rightBtnName;
  }
  render() {
    return (
      <section className="section-3">
        <div className="wrapper page-content">
          <div className="container">
            <div className="s3item">
              <img
                src={hanna}
                alt="HANNA BAKES oficcial"
                className="s3item__photo"
              />
              <Button class="s3item__btn" text={this.leftBtnName} />
            </div>
            <div className="s3item">
              <img
                src={pic11}
                alt="HANNA BAKES oficcial"
                className="s3item__photo"
              />
              <Button class="s3item__btn" text={this.rightBtnName} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
