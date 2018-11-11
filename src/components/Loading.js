import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div className="loading__container">
        <div className="loading__spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}

export default Loading;