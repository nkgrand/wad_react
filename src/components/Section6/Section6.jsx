import React from "react";
import "./Section6.scss";
import { Button } from "../Button/Button";

export class Section6 extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.titleText;
    this.inputType = this.props.inputType;
    this.inputName = this.props.inputName;
    this.btnTtitle = this.props.btnName;
    this.placeholderText = this.props.btnPlaceholderText;
  }
  render() {
    return (
      <section className="section-6">
        <div className="wrapper page-content">
          <div className="col">
            <h4 className="form__text">{this.title}</h4>
            <form method="get" className="form">
              <input
                type={this.inputType}
                name={this.inputName}
                placeholder={this.placeholderText}
                className="form__input"
              />
              <Button type="button" class="form__btn" text={this.btnTtitle} />
            </form>
          </div>
        </div>
      </section>
    );
  }
}
