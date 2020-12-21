import React from "react";
import "./Section4.scss";

export class Section4 extends React.Component {
  constructor(props) {
    super(props);
    this.text = this.props.title;
  }
  render() {
    return (
      <section class="section-4">
        <div class="wrapper page-content">
          <h1 class="follow__text">{this.text}</h1>
        </div>
      </section>
    );
  }
}
