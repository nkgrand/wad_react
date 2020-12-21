import React, { Component } from "react";
import "./Common.scss";

import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Paralax } from "../Paralax/Paralax";
import { Section3 } from "../Section3(meet_contact)/Section3";
import { Section4 } from "../Section4/Section4";
import { Section5 } from "../Section5_slider/Section5";
import { Section6 } from "../Section6/Section6";
import { Footer } from "../Footer/Footer";

export class Common extends React.Component {
  render() {
    return (
      <div className="wrapper page-content">
        <>
          <Main title="Designer Cakes Delivered to Your Doorstep" />
        </>
        <>
          <Paralax title="ALL CAKES ARE TAILORED TO YOUR TASTE AND STYLE" />
        </>
        <>
          <Section3 leftBtnName="Meet Hanna" rightBtnName="Contact Mee" />
        </>
        <>
          <Section4 title="Follow me on Instagram" />
        </>
        <>
          <Section5 />
        </>
        <>
          <Section6
            titleText="Subscribe to My Newsletter"
            inputType="email"
            inputName="name"
            btnName="Subscribe Now"
            btnPlaceholderText="Enter your email here!"
          />
        </>
      </div>
    );
  }
}
