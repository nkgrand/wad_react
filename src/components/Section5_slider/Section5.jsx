import React from "react";
import "./Section5.scss";
import item1 from "../../images/slider/01.jpg";
import item18 from "../../images/slider/18.jpg";

export class Section5 extends React.Component {
  constructor(props) {
    super(props);
    this.alt = "HANNA BAKES oficcial";
  }
  someFunc() {
    console.log(this.images);
  }

  render() {
    return (
      <section className="section-5">
        <div className="wrapper page-content">
          <div className="slider" id="slider">
            <div className="slider__viewport">
              <div className="slider__slides">
                <div className="slider__item">
                  <div className="item__inner">
                    <p className="item__inner-element">
                      #cake #some_text #some_col_text #awesome_cockies
                    </p>
                  </div>
                  <img
                    src={item1}
                    className="slider__slide"
                    alt={this.alt}
                    id="pic1"
                  />
                </div>

                <div className="slider__item">
                  <div className="item__inner">
                    <p className="item__inner-element">
                      #cake #some_text #some_col_text #awesome_cockies
                    </p>
                  </div>
                  <img
                    src={item18}
                    className="slider__slide"
                    alt={this.alt}
                    id="pic18"
                  />
                </div>
              </div>
              <a
                className="slider__control slider__control_left"
                href="#!"
                role="button"
              >
                {" "}
              </a>
              <a
                className="slider__control slider__control_right"
                href="#!"
                role="button"
              >
                {" "}
              </a>
              <button className="show__more">Show more</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
