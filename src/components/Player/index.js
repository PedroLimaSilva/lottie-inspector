import React from "react";
import bodymovin from "lottie-web";

import "./styles.css";

function getKeyframePercentage(current, duration) {
  return (current / duration) * 100;
}

export class Player extends React.Component {
  state = {
    playing: true,
    currentFrame: 0,
    maxFrames: 1,
    duration: 0
  };

  componentDidMount() {
    this.animation = bodymovin.loadAnimation({
      container: document.getElementById("bm"),
      renderer: "svg",
      loop: true,
      autoplay: this.state.playing,
      path: "./data.json"
    });
    this.animation.setSubframe(false);
    this.animation.setSpeed(1);
    this.animation.addEventListener("enterFrame", e => {
      this.setState({
        currentFrame: e.currentTime,
        maxFrames: e.totalTime - 1
      });
    });
  }

  playPause = () => {
    if (this.state.playing) {
      this.animation.play();
    } else {
      this.animation.pause();
    }
    this.setState({
      playing: !this.state.playing,
      duration: this.animation.getDuration()
    });
  };

  setFrame = ({ target: { value } }) => {
    if (this.state.playing) {
      this.setState({ playing: false });
    }
    this.animation.goToAndStop(value, true);
  };

  render() {
    const { currentFrame, maxFrames, duration } = this.state;
    return (
      <div>
        <div id="bm" />
        <div className="controls">
          <button onClick={this.playPause}>Play/Pause</button>
          <span>{duration}s</span>
          <input
            type="range"
            min="0"
            max={maxFrames}
            value={currentFrame}
            onChange={this.setFrame}
          />
          <input type="number" value={currentFrame} onChange={this.setFrame} />
          <span>{getKeyframePercentage(currentFrame, maxFrames)}</span>
        </div>
      </div>
    );
  }
}
