import React from "react";
import "./Footer.scss";

export class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.text = this.props.text;
  }
  render() {
    return (
      <footer class="footer">
        <p class="footer__text">&copy; {this.text}</p>
      </footer>
    );
  }
}
