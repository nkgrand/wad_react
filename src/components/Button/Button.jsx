import React from "react";
import "./Button.scss";

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.value = this.props.text;
    this.className = this.props.class;
  }

  handleClick = () => {
    alert(`Жмакнулaсь кнопка  '${this.value}'`);
  };

  render() {
    return (
      <button className={this.className} onClick={this.handleClick}>
        {this.value}
      </button>
    );
  }
}
