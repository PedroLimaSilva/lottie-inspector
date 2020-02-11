import React from "react";
import "./styles.scss";
import grad0 from "./0.png";
import grad1 from "./1.png";
import grad2 from "./2.png";
import grad3 from "./3.png";
import grad4 from "./4.png";
import grad5 from "./5.png";

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
            <div className="corner c0" />
            <div className="corner c1" />
            <div className="corner c2" />
            <div className="corner c3" />
          </div>
        }
      </div>
    );
  }
}
