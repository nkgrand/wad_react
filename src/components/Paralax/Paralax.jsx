import React from "react";
import "./Paralax.scss";

export class Paralax extends React.Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.className = this.props.class;
  }

  render() {
    return (
      <section class="section-2">
        <div class="wrapper page-content">
          <div class="paralax">
            <div class="paralax__off">
              <h2 class="paralax__title">{this.title}</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
