import React, { Component } from "react";
import "./App.scss";

import { Header } from "../Header/Header";
import { Common } from "../Common/Common";
import { Footer } from "../Footer/Footer";

export class App extends React.Component {
  render() {
    return (
      <div>
        <>
          <Header />
        </>
        <>
          <Common />
        </>
        <>
          <Footer text="2020 by Andrey Grigoriev | All rights reserved" />
        </>
      </div>
    );
  }
}
