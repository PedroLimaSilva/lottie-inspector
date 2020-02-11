import React from "react";
import "./styles.scss";
import grad0 from "./0.png";
import grad1 from "./1.png";
import grad2 from "./2.png";
import grad3 from "./3.png";
import grad4 from "./4.png";
import grad5 from "./5.png";

const arch = (
  <svg viewBox="0 0 320 320">
    <path
      className="arch"
      transform="rotate(-1 144.5 14.64) translate(0 1)"
      d="M105.263,37.614a14,14,0,0,1-4.791-27.159A173.45,173.45,0,0,1,160,0a14,14,0,1,1,0,28,145.521,145.521,0,0,0-49.949,8.765A14,14,0,0,1,105.263,37.614Z"
    />
  </svg>
);

export class Playground extends React.Component {
  render() {
    return (
      <div className="playground">
        <div className="images">
          <img src={grad0} alt="" />
          <img src={grad1} alt="" className="flip" />
          <img src={grad2} alt="" />
          <img src={grad3} alt="" />
          <img src={grad4} alt="" />
          <img src={grad5} alt="" />
        </div>
        {
          <div className="secondary-spinner-component">
            <div className="secondary-spinner-container">
              <div className="c c0">{arch}</div>
              <div className="c c1">{arch}</div>
              <div className="c c2">{arch}</div>
              <div className="c c3">{arch}</div>
              <div className="c c4">{arch}</div>
              <div className="c c5">{arch}</div>
              <div className="c c6">{arch}</div>
              <div className="c c7">{arch}</div>
              <div className="c c8">{arch}</div>
              <div className="c c9">{arch}</div>
              <div className="c c10">{arch}</div>
              <div className="c c11">{arch}</div>
              <div className="c c12">{arch}</div>
              <div className="c c13">{arch}</div>
              <div className="c c14">{arch}</div>
              <div className="c c15">{arch}</div>
              <div className="c c16">{arch}</div>
            </div>
          </div>
        }
      </div>
    );
  }
}
